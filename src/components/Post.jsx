import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import './Post.css';


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
    <div>
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
      <div className="page">
        <div className="contenido">

        <h1 id="titulomain">{arr.title}</h1>
        <h3>Por {arr.name}</h3>
        <Markdown remarkPlugins={[remarkGfm]}>
                {arr.text}
              </Markdown>

              <h1 className="titleCom">Comentarios</h1>
      <form onSubmit={HandleSubmit}>
        
        <input
          type="text"
          placeholder="Nombre"
          value={comentador}
          onChange={(e) => setComentador(e.target.value)}
        />
        <input
          type="text"
          placeholder="Añade un comentario..."
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
        />
        <button>Comentar</button>
      </form>
      {todosComentarios.map((algo) => (
        <div className="comentario">
          <h4>{algo.nombre} dice:</h4>
          <p>{algo.texto}</p>
        </div>
      ))}
    </div>
    </div>
    </div>   /*contenido*/
  );
}
export default Post;
