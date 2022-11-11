import { useState } from "react";
import "./booking.css"

const Booking=({bookmoto,setcount,count,cambiodeusuario,setcambiodeusuario,setnewcount,newcount,disponible})=>{

    const array=["8:00 am","8:30 am","9:00 am","9:30 am","10:00 am","10:30 am","11:00 am","11:30 am","12:00 pm","12:30 pm","1:00 pm","1:30 pm","2:00 pm"]
    const bookedmotos=[false,false,false,false,false,false,false,false,false,false,false,false,false]
    const [message,setmessage]=useState("")
    const [motos,bookmotos]=useState(bookedmotos)

    
    
    let updatedmotos=motos

    if(cambiodeusuario==true){
        newcount=0                          
    }
    
    const setbook=(index)=>{
        if(count<8){
            
            if(cambiodeusuario==true){
                setnewcount(newcount+1)
                bookmoto(true)
                updatedmotos=[...bookedmotos]
                updatedmotos[index]=true
                count=count+1
                setcount(count)                    
                bookmotos(updatedmotos)
                console.log(count)
                setcambiodeusuario(false)

            }else{
                bookmoto(true)
                updatedmotos=[...motos]
                updatedmotos[index]=true
                count=count+1
                setnewcount(newcount+1)
                setcount(count)                           
                bookmotos(updatedmotos)
                console.log(count)
            }
           
            
        }
        else{
            setmessage("No se pueden reservar mas motos, solo tenemos "+disponible+" motos disponibles")
            setTimeout(() => {
                
                setmessage("Recuerda que tenemos un inventario de 8 motos")
              }, 2000) 
            bookmoto(false)
            updatedmotos=[...motos]
            updatedmotos[index]=false
        }        
    }
    const unbook=(index)=>{
        bookmoto(false)
        updatedmotos=[...motos]
        updatedmotos[index]=false
        count=count-1
        setcount(count)
        setnewcount(newcount-1)        
        bookmotos(updatedmotos)       
        console.log(count)
    }

    return(
        <>
            <h1 className="titulobooking">Aqui puedes reservar tu moto</h1>  
            <div className="booking">
            <div>
                    {cambiodeusuario? (
                    <ul>
                    {
                        motos.map((box,index)=>{
                            return(
                                <li key={index}><button className="grey"onClick={() =>{setbook(index)}}>{array[index]}</button></li>
                                
                            )
                        })
                    }
                    </ul>                      
                    ) : (
                        <ul>
                        {
                            motos.map((box,index)=>{
                                return(
                                    <li key={index}>{box?(<button className="green"onClick={() =>{unbook(index)}}>{array[index]}</button>)
                                    :(<button className="grey"onClick={() =>{setbook(index)}}>{array[index]}</button>)} </li>
                                )
                            })
                        }
                    </ul>
                    )}
            </div>
                
                <div className="message">{message}</div>
            </div>
        </>     
    )  
}
export default Booking;