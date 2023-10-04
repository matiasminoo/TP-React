import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'; 


function Blog() {
const [texto,setTexto] = useState("")
function HandleChange(e){
setTexto(e.target.value);

}


    
    return( 
    <>
   <textarea placeholder='Escribi tu Blog' onChange={HandleChange} cols="30" rows="10"/> 
   <Markdown remarkPlugins={[remarkGfm]}>{texto}</Markdown>
    </>
 );
}

export default Blog;