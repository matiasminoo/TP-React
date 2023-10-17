import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './admin.css'

function Admin(props) {
    const navigate = useNavigate();
    const {admin, setAdmin} = props;
    const [pass, setPass] = useState("");
    const [error,setError] = useState("")


    function HandleSubmit(e) {
        e.preventDefault();
        if(pass == "valo"){
            setAdmin(true);
            console.log("algo")
            navigate('/');
        }else {
            setAdmin(false)
        setError(true)
        }
        
    }

    return(
        <div className= "admin-container">
    <nav className= "admin-nav">
        <ul>
        <li><Link to="/">Volver a la pagina principal</Link></li>
        <li><Link to="/blog">Ir a pagina de Markdown</Link></li>
        <li><Link to="/Admin">Ir a modo Admin</Link></li>
        </ul>
    </nav>
            <form className= "admin-form" onSubmit={HandleSubmit}>
                <input className= "admin-input" value={pass} type= 'password' placeholder= "Ingresa la contraseña" onChange={e => setPass(e.target.value)} />
                <button className= "admin-button">enviar</button>
            </form>
            {error && (<p className= "admin-error">Contraseña incorrecta</p>)}
            
        </div>
    )
}
export default Admin;