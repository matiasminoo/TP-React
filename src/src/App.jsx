import './App.css';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Blog from './components/blog';
import {Link} from 'react-router-dom'
import {  
  Routes, 
  Route 
} from 'react-router-dom';
import { useState } from 'react'
function App() {
  const [arr,setArr] = useState([])
  return (
    <>
         <Link to="/markdown">Ir a pagina de Markdown</Link>
         <Routes>
       {/* <Route exact path='/hola' element={<div>hola</div>} /> */}
        <Route exact path='/markdown' element={<Blog arr={arr} setArr={setArr}/>} />
      </Routes>
       {arr.map( cosa => (
       <>
    <h1>{cosa.title}</h1>
    <h2>{cosa.name}</h2>
    <Markdown remarkPlugins={[remarkGfm]}>{cosa.text}</Markdown> 
</>
   ))}
       
    </>
  );
}

export default App;
//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