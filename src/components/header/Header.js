import logo2 from "../../images/moto2.JPG"
import "./header.css"
const Header=()=>{
return(
    <>
        <div>
            <h1 className="titulo">BIENVENIDO A MOTOCOL</h1>
            <img src={logo2} className="logoheader"></img>
        </div>   
    </>
)
}
export default Header; 