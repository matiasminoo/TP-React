import { useState,useEffect} from "react";
import { Link } from "react-router-dom";

function Blog(props) {
const [texto,setTexto] = useState("")
const [nombre,setNombre] = useState("")
const [titulo,setTitulo] = useState("")
const [arr, setArr] = useState([]);

useEffect(() => {
  let cosasGuardadas = JSON.parse(localStorage.getItem('post'));
  if (cosasGuardadas) setArr(cosasGuardadas);
}, []);




function HandleSubmit(e){
e.preventDefault()
let cont = {text : texto, title : titulo , name : nombre, id : arr.length}
let cosasActualizadas = [...arr, cont];
setArr(cosasActualizadas);
localStorage.setItem('post', JSON.stringify(cosasActualizadas));
setNombre("")
setTitulo("")
setTexto("")
}
    
    return( 
    <>
    <Link to="/">Volver a la pagina principal</Link>
    <form onSubmit={HandleSubmit}>
    <input value={nombre} type="text" placeholder='Escribi tu nombre' onChange={e => setNombre(e.target.value)}/>
    <input  value={titulo} type="text" placeholder='escribi tu titulo' onChange={e => setTitulo(e.target.value)}/>
    <hr />
   
   <textarea value={texto} placeholder='Escribi tu Blog' onChange={e => setTexto(e.target.value)} cols="30" rows="10"/>
   <br></br>
   <button>Create form</button>
   </form>
    </>
 );
}

export default Blog;