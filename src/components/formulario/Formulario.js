import { useEffect, useState } from "react";
import "./formulario.css"



const Formulario=({setinputinfo,inputinfo,count,setcambiodeusuario,newcount,setdisponible})=>{
  
  const[message,setmessage]=useState("")
  const handlerchangeform = (field) => (e) =>
  setinputinfo({ ...inputinfo, [field]: e.target.value });
    
  const guardarusuario=()=>{
    
    setmessage(inputinfo.nombre+" has reservado "+newcount+" motos")
    setinputinfo(inputinfo)
    setcambiodeusuario(true)
    setTimeout(() => {
      setinputinfo({nombre:"",apellido:"",email:""})
      setdisponible(8-count)
    }, 1000)       
    
      
  } 
   

  return(
          <>    
            <div className="subtitulo">Diligencia tus Datos </div>
              <div className="formulario">    
                <label>Nombre 
                  <input type='text' value={inputinfo.nombre}  onChange={handlerchangeform("nombre")} />   
                </label>
                <label>Apellido           
                  <input type='text'value={inputinfo.apellido} onChange={handlerchangeform("apellido")}/>   
                </label>
                <label>E-mail            
                  <input type='email' value={inputinfo.email} onChange={handlerchangeform("email")}/>   
                </label>
                <button onClick={guardarusuario}>Reservar</button>
              </div>
            <h2 className="formmessage">{message}</h2>   
          </>
  )
}
export default Formulario; 