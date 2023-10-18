import { useState,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";
import './blog.css'


function Blog() {
const navigate = useNavigate()
const [texto,setTexto] = useState("")
const [autor,setAutor] = useState("")
const [titulo,setTitulo] = useState("")
const [arr, setArr] = useState([]);
const [contador, setContador] = useState(0);

useEffect(() => {
  let cosasGuardadas = JSON.parse(localStorage.getItem('post'));
  if (cosasGuardadas){setArr(cosasGuardadas);
  const maxid = Math.max(...cosasGuardadas.map(post => post.id), 0);
  setContador(maxid + 1);

} 
}, []);




function HandleSubmit(e){
e.preventDefault()

const id = contador;

let cont = {text : texto, title : titulo , name : autor, id : id}
let cosasActualizadas = [...arr, cont];
setArr(cosasActualizadas);
localStorage.setItem('post', JSON.stringify(cosasActualizadas));
setContador(contador + 1);
setAutor("")
setTitulo("")
setTexto("")
navigate(`/post/${cont.id}`)
}
    
    return( 
    <div className= "blog-container">
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
    <form className= "formulario" onSubmit={HandleSubmit}>
    <h4>Crea tu propio post</h4>
    <input className="datos" value={autor} type="text" placeholder='Escribi tu nombre' onChange={e => setAutor(e.target.value)}/>
    <input className="datos" value={titulo} type="text" placeholder='Escribi tu titulo' onChange={e => setTitulo(e.target.value)}/>

  <textarea className="datos" value={texto} placeholder='Escribi tu Blog' onChange={e => setTexto(e.target.value)} cols="30" rows="10"/>
  <button className="boton">Crear Post</button>
  </form>
    </div>
);
}

export default Blog;