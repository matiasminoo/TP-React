import "./App.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {

  const [arr, setArr] = useState([]);

  useEffect(() => {
    let cosasGuardadas = JSON.parse(localStorage.getItem('post'));
    if (cosasGuardadas) setArr(cosasGuardadas);
  }, []);

  return (
    <>

<Link to="/blog">Ir a pagina de Markdown</Link>

  
      {arr.map((cosa) => (
        <>
        <div>
          <h1>{cosa.title}</h1>
          <h2>{cosa.name}</h2>
          <span> {cosa.id}</span>
          <Markdown remarkPlugins={[remarkGfm]}>{cosa.text}</Markdown>
          <Link to={`/post/${cosa.id}`}>ir al post</Link>
            <hr />
          </div>
        </>
      ))}
    </>
  );
}

export default App;
//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
