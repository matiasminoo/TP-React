import { useState,useEffect} from "react";
import { Link,useNavigate } from "react-router-dom";


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
    <>
      <nav>
        <ul>
        <li><Link to="/">Volver a la pagina principal</Link></li>
        <li><Link to="/blog">Ir a pagina de Markdown</Link></li>
        <li><Link to="/Admin">Ir a modo Admin</Link></li>
        </ul>
      </nav>
    <form onSubmit={HandleSubmit}>
    <input value={autor} type="text" placeholder='Escribi tu nombre' onChange={e => setAutor(e.target.value)}/>
    <input  value={titulo} type="text" placeholder='Escribi tu titulo' onChange={e => setTitulo(e.target.value)}/>
    <hr />
   
   <textarea value={texto} placeholder='Escribi tu Blog' onChange={e => setTexto(e.target.value)} cols="30" rows="10"/>
   <br></br>
   <button>Create form</button>
   </form>
    </>
 );
}

export default Blog;