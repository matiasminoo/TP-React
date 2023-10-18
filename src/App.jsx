import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Principal from "./components/Principal";
import Blog from "./components/blog";
import Admin from "./components/Admin";

function App() {
  /*const [arr, setArr] = useState([]);

  useEffect(() => {
    let cosasGuardadas = JSON.parse(localStorage.getItem("post"));
    if (cosasGuardadas) setArr(cosasGuardadas);
  }, []); */
  const [admin,setAdmin] = useState()

  return (
    <>
    <Routes>
    <Route
        path="/"
        element={<Principal admin={admin}/>}
      />
      <Route
        exact
        path="/blog"
        element={<Blog />}
      />

      <Route 
        exact
        path="/Admin"
        element={<Admin admin={admin} setAdmin={setAdmin} />}
      />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
    </>
  );
}

export default App;
//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
