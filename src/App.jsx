import './App.css';
import Blog from './components/blog';
import {Link} from 'react-router-dom'
function App() {
  return (
    <>
     <Link to="/markdown">Ir a pagina de Markdown</Link>
      <Blog/> 
    </>
  );
}

export default App;
//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