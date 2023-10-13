import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import './Principal.css';

function Principal(props) {
  const { admin } = props;
  const [arr, setArr] = useState([]);

  useEffect(() => {
    let cosasGuardadas = JSON.parse(localStorage.getItem("post"));
    if (cosasGuardadas) setArr(cosasGuardadas);
  }, []);

  function HandleClick(cosa) {
    console.log(cosa.id);
    let elim = arr.filter((i) => i.id !== cosa.id);
    setArr(elim);
    localStorage.setItem("post", JSON.stringify(elim));
    localStorage.setItem(`comentarios${cosa.id}`, JSON.stringify([]));
  }

  return (
    <>
      <nav>
        <ul className="lista">
          <li>
            <Link className="ruta" to="/">Volver a la pagina principal</Link>
          </li>
          <li>
            <Link className="ruta" to="/blog">Ir a pagina de Markdown</Link>
          </li>
          <li>
            <Link className="ruta" to="/Admin">Ir a modo Admin</Link>
          </li>
        </ul>
      </nav>
      {arr.map((cosa) => (
        <>
          <Link to={`/post/${cosa.id}`}>
            <div>
              <h1>{cosa.title}</h1>
              <h2>{cosa.name}</h2>
              <span> {cosa.id}</span>
              <Markdown remarkPlugins={[remarkGfm]}>
                {cosa.text.substring(0, 80) + "..."}
              </Markdown>

              <hr />
            </div>
          </Link>
          {admin && <button onClick={() => HandleClick(cosa)}>BORRAR</button>}
        </>
      ))}
      {admin && <h1>sos admin</h1>}
    </>
  );
}

export default Principal;
//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
