import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './admin.css'

function Admin(props) {
    const navigate = useNavigate();
    const {setAdmin} = props;
    const [pass, setPass] = useState("");
    const [error,setError] = useState("");
    const [ver,setVer] = useState("password");


    function HandleSubmit(e) {
        e.preventDefault();
        if(pass === "react"){
            setAdmin(true);
            navigate('/');
        }else {
            setAdmin(false)
        setError(true)
        }
        
    }
    function ViewPass(e){
        e.preventDefault()
    if(ver === "password"){
    setVer("text")
 }else{ setVer("password")}

}

    return(
        <>
         <header>
        <img src="https://cdn4.iconfinder.com/data/icons/communication-v2/64/number_numero_count_thirty_five-2-512.png" alt="logo" />
      <nav className= "nav-menu">
        <ul >
          <li>
            <Link  to="/">Volver a la pagina principal</Link>
          </li>
          <li>
            <Link  to="/blog">Publicar tu post</Link>
          </li>
          <li>
          <Link  to="https://www.mercadopago.com.ar/">Apoyanos</Link>
          </li>
        </ul>
      </nav>
      </header>
      <div className="ContenedorGeneral">
      {error && (<h1 className= "admin-error">Contraseña incorrecta</h1>)}
            <form className= "admin-form">
                <input className= "admin-input" value={pass} type= {ver} placeholder= "Ingresa la contraseña" onChange={e => setPass(e.target.value)} />
                <button className="admin-button" onClick={ViewPass} >Ver contraseña 🔐</button>
                <button  className="admin-button"  onClick={HandleSubmit}>Enviar</button>
            </form></div>
            
        </>
    )
}
export default Admin;