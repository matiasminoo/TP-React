import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import './post.css';


function Post() {
  const { id } = useParams();
  const [arr, setArr] = useState([]);
  const [comentador, setComentador] = useState("");
  const [texto, setTexto] = useState("");
  const [todosComentarios, setTodosComentarios] = useState([]);

  useEffect(() => {
    let cosasGuardadas = JSON.parse(localStorage.getItem("post"));
    let PostEspecifico = cosasGuardadas.filter(
      (publicaciones) => publicaciones.id == id
    );
    setArr(PostEspecifico[0]);

    let ComentariosAnteriores = JSON.parse(
      localStorage.getItem(`comentarios${id}`)
    );
    if (ComentariosAnteriores) setTodosComentarios(ComentariosAnteriores);
  }, []);

  function HandleSubmit(e) {
    e.preventDefault();
    let comentarios = [
      ...todosComentarios,
      { nombre: comentador, texto: texto },
    ];
    setTodosComentarios(comentarios);
    localStorage.setItem(`comentarios${id}`, JSON.stringify(comentarios));
    setComentador("");
    setTexto("");
  }

  return (
    <>
      <nav>
        <ul>
        <li><Link to="/">Volver a la pagina principal</Link></li>
        <li><Link  to="/blog">Publicar tu post</Link></li>
        <li><Link to="/Admin">Ir a modo Admin</Link></li>
        </ul>
      </nav>
      <div>
        <h1>{arr.title}</h1>
        <h2>{arr.name}</h2>
        <Markdown remarkPlugins={[remarkGfm]}>
                {arr.text}
              </Markdown>
      </div>
      <form onSubmit={HandleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={comentador}
          onChange={(e) => setComentador(e.target.value)}
        />
        <input
          type="text"
          placeholder="Comentario"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button>enviar</button>
      </form>
      {todosComentarios.map((algo) => (
        <div>
          <h1>{algo.nombre}</h1>
          <p>{algo.text}</p>
        </div>
      ))}
    </>
  );
}
export default Post;
