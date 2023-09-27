import React, { useState, useEffect } from 'react';


function Blog() {
    const [valor,setValor] = useState('')
    const nagito = (e) => {
e.preventDefault();
setValor('');
}
function HandleChange(e){
setValor(e.target.value);

}
    
    return ( 
        <>
            <form onSubmit={nagito}>
                <input type="text" placeholder='Nota' onChange={HandleChange} value={valor} />
                <button>Submit</button>
            </form>
        </>
     );
}

export default Blog;
