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
    <div className= "principal-container">
      <nav className= "nav-menu">
        <ul >
          <li>
            <Link  to="/">Volver a la pagina principal</Link>
          </li>
          <li>
            <Link  to="/blog">Publicar tu post</Link>
          </li>
          <li>
            <Link  to="/Admin">Ir a modo Admin</Link>
          </li>
        </ul>
      </nav>
      {arr.map((cosa) => (
        <>
          <Link to={`/post/${cosa.id}`} className= "post-link">
            <div className= "post-item">
              <h1>{cosa.title}</h1>
              <h2>{cosa.name}</h2>
              <span> {cosa.id}</span>
              <Markdown remarkPlugins={[remarkGfm]}>
                {cosa.text.substring(0, 80) + "..."}
              </Markdown>
            </div>
          </Link>
          {admin && <button onClick={() => HandleClick(cosa)}>BORRAR</button>}
          </>
      ))}
      {admin && <h1 className= "admin-notificacion">sos admin</h1>}
    </div>
  );
}

export default Principal;

