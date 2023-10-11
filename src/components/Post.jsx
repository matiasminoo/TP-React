import { useState, useEffect } from "react";
import { useParams }from 'react-router-dom'

function Post(){
    const {id} = useParams();
    const [arr, setArr] = useState([]);
    useEffect(() => {
        let cosasGuardadas = JSON.parse(localStorage.getItem('post'));
        console.log(cosasGuardadas);
        if (cosasGuardadas) setArr(cosasGuardadas);
        let PostEspecifico = cosasGuardadas.filter(Publicaciones => Publicaciones.id == id)
        console.log(PostEspecifico);
        setArr(PostEspecifico[0])
      }, []);
 

      return (
        <>
          <p>{arr.name}</p>
          <h1>{arr.id}</h1>
          </>

      )


}
export default Post;