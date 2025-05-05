import { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Logon = () =>{

    const [details, setDetails] = useState({id:"",firstName:"",lastName: "",phone:"",address:"",city:"",email:""});
    // const [phone, setPhone] = useState("");
    // const [adress, setName] = useState("");
    // const [name, setName] = useState("");
    const navigate = useNavigate();

    const nextNavigate = () =>{
        // navigate('/home')
    
     }
    return <div>
    <input type="text" placeholder="name" onChange={(e)=> setDetails({...details,phone:e.target.value})}></input>
    <input type="password" placeholder="id" onChange={(e)=> setDetails({...details,address:e.target.value})}></input>
    <input type="password" placeholder="id" onChange={(e)=> setDetails({...details,city:e.target.value})}></input>
    <input type="password" placeholder="id" onChange={(e)=> setDetails({...details,email:e.target.value})}></input>
    <button onClick={()=>nextNavigate()}>next</button> 
    </div>
}