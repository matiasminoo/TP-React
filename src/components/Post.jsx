import { useState, useEffect } from "react";
import { useParams }from 'react-router-dom'

function Post(){
    const {id} = useParams();
    const [arr, setArr] = useState([]);
    const [comentador,setComentador] = useState("");
    const [texto,setTexto] = useState("");
    const [todosComentarios,setTodosComentarios] = useState([]);


    useEffect(() => {
        let cosasGuardadas = JSON.parse(localStorage.getItem('post'));
        let PostEspecifico = cosasGuardadas.filter(publicaciones => publicaciones.id == id);
        setArr(PostEspecifico[0]);

        let ComentariosAnteriores = JSON.parse(localStorage.getItem(`comentarios${id}`));
        if(ComentariosAnteriores)setTodosComentarios(ComentariosAnteriores);

      }, []);


      function HandleSubmit(e){
      e.preventDefault();
      let comentarios = [ ...todosComentarios, {nombre : comentador, texto : texto}];
      setTodosComentarios(comentarios);
      localStorage.setItem(`comentarios${id}`, JSON.stringify(comentarios));
      setComentador("");
      setTexto("");



      }

      return (
        <>
        <div>
          <h1>{arr.title}</h1>
          <h2>{arr.name}</h2>
          <p>{arr.text}</p>
          </div>
          <form onSubmit={HandleSubmit}>
          <input type="text" placeholder="Nombre" value={comentador} onChange={e => setComentador(e.target.value)}/>
          <input type="text"placeholder="Comentario" value={texto} onChange={e => setTexto(e.target.value)} />
          <button>enviar</button>
          </form>
          {todosComentarios.map(algo =>(
            <>
          <h1>{algo.nombre}</h1>
          <p>{algo.texto}</p>
          </>

          ) )}

          </>

      )


}
export default Post;