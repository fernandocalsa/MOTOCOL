import "./resetUser.css"
import { useEffect } from "react"
const initinfo={
    nombre:"",
    apellido:"",
    email:""
  }
const ResetUser=({setinputinfo,inputinfo,setcambiodeusuario})=>{
    const BorrarDatos=()=>{        
        setinputinfo(initinfo)
        setcambiodeusuario(true)
        
        console.log("Este método borrara los datos de entrada y las reservas en pantalla, pero no el contador.") 
            
    }    
    return(
        <button className="resetbutton" onClick={BorrarDatos}>Cambiar Usuario</button>
    )
}
export default ResetUser; 