import "./App.css";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    let cosasGuardadas = JSON.parse(localStorage.getItem("post"));
    if (true) setArr(cosasGuardadas);
  }, []);

  return (
    <>
      <Link to="/blog">Ir a pagina de Markdown</Link>
        {arr.map((cosa) => (
<Link to={`/post/${cosa.id}`}>
          <div>
            <h1>{cosa.title}</h1>
            <h2>{cosa.name}</h2>
            <span> {cosa.id}</span>
            <Markdown remarkPlugins={[remarkGfm]}>{cosa.text.substring(0,20) + "..."}</Markdown>
            <hr />
          </div>
          </Link>
        ))}
      
    </>
  );
}

export default App;
//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
