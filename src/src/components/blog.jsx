import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; 


function Blog(props) {
const { arr, setArr } = props;
const [texto,setTexto] = useState("")
const [nombre,setNombre] = useState("")
const [titulo,setTitulo] = useState("")




function HandleSubmit(e){
e.preventDefault()
let cont = {text : texto, title : titulo , name : nombre}
setArr([...arr, cont])
console.log([...arr, cont]);
setNombre("")
setTitulo("")
setTexto("")
}
    
    return( 
    <>
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