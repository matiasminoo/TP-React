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
      <header>
        <img src="https://cdn4.iconfinder.com/data/icons/communication-v2/64/number_numero_count_thirty_five-2-512.png" alt="logo" />
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
      </header>
      {admin && <h1 className= "admin-notificacion">Modo Admin Activado👨🏻‍💻</h1>}
      {arr.map((cosa) => (
        <div className="contenedor">
          <Link to={`/post/${cosa.id}`} className= "post-link">
            <div className= "post-item">
              <h1>TITULO: {cosa.title}</h1>
              <h3>AUTOR: {cosa.name}</h3>
              <Markdown remarkPlugins={[remarkGfm]}>
                {cosa.text.substring(0, 30) + "..."}
              </Markdown>
            </div>
          </Link>
          {admin && <button className="delete-button" onClick={() => HandleClick(cosa)}>borrar</button>}
          </div>
      ))}
    </div>
  );
}

export default Principal;

