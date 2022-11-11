import logo from './logo.svg';
import './App.css';
import Booking from "./components/booking/Booking"
import Formulario from "./components/formulario/Formulario"
import Header from "./components/header/Header"
import ResetUser from './components/resetuser/ResetUser';

import{useState}from "react"

const initinfo={
  nombre:"",
  apellido:"",
  email:""
}
function App() {
  
  const[moto,bookmoto]=useState(false)
  const[cambiodeusuario,setcambiodeusuario]=useState(false)
  const [count,setcount]=useState(0)  
  const[newcount,setnewcount]=useState(0)
  const[inputinfo,setinputinfo]=useState(initinfo)
  const[disponible,setdisponible]=useState(8)
  
  

  return (
    <>
      <div>
        <Header></Header>
        <Booking bookmoto={bookmoto} setcount={setcount} count={count} cambiodeusuario={cambiodeusuario} setcambiodeusuario={setcambiodeusuario} newcount={newcount} setnewcount={setnewcount}disponible={disponible} ></Booking>
        <Formulario count={count} setinputinfo={setinputinfo} inputinfo={inputinfo} setcambiodeusuario={setcambiodeusuario} newcount={newcount} setdisponible={setdisponible} ></Formulario>
        
      </div>
    </>
  );
}

export default App;
