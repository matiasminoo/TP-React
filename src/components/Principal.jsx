
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Principal(props) {
const {admin} = props;
  const [arr, setArr] = useState([]);

  useEffect(() => {
    let cosasGuardadas = JSON.parse(localStorage.getItem("post"));
    if (cosasGuardadas) setArr(cosasGuardadas);
  }, []);


function HandleClick(cosa){
    console.log(cosa.id);
    let elim = arr.filter(i => i.id !== cosa.id)
    setArr(elim)
    localStorage.setItem('post', JSON.stringify(elim));


}


  return (
    <>
      <Link to="/blog">Ir a pagina de Markdown</Link>
      <Link to="/Admin">Ir a modo Admin</Link>
        {arr.map((cosa) => (
            <>
<Link to={`/post/${cosa.id}`}>
          <div>
            <h1>{cosa.title}</h1>
            <h2>{cosa.name}</h2>
            <span> {cosa.id}</span>
            <Markdown remarkPlugins={[remarkGfm]}>{cosa.text.substring(0,20) + "..."}</Markdown>

            <hr />
          </div>
          </Link>
                   { admin &&  (<button onClick={() => HandleClick(cosa)}>
                      BORRAR
                  </button>)}
                  </>
        ))}
{admin && (<h1>sos admin</h1>)}
    </>
  );
}

export default Principal;
//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