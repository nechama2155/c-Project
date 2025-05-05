import { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { addCustomerThunk } from "../../redux/slices/add/addCustomerThunk ";
import { useNavigate } from "react-router-dom";


export const AddCustomer = () => {

    const [details, setDetails] = useState({ customerId: "", customerFirstName: "", customerLastname: "", customerCity: "", customerAddress: "", CustomerPhone: "", CustomerEmail: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    

    return <div>
        <div>
            <label>Id:</label>
            <input type="text" onChange={(e)=>setDetails({...details, customerId:e.target.value})}/>
            <label>First Name:</label>
            <input type="text" onChange={(e)=>setDetails({...details, customerFirstName:e.target.value})}/>
            <label>Last Name:</label>
            <input type="text" onChange={(e)=>setDetails({...details, customerLastname:e.target.value})}/><br />
            <label>City:</label>
            <input type="text" onChange={(e)=>setDetails({...details, customerCity:e.target.value})}/><br />
            <label>Address:</label>
            <input type="text" onChange={(e)=>setDetails({...details, customerAddress:e.target.value})}/><br />
            <label>Phone:</label>
            <input type="text" onChange={(e)=>setDetails({...details, CustomerPhone:e.target.value})}/><br />
            <label>Email:</label>
            <input type="email" onChange={(e)=>setDetails({...details, CustomerEmail:e.target.value})}/><br />

        </div> 
        <button onClick={()=>{dispatch(addCustomerThunk(details));navigate("/customers")}}>add</button> 

    </div>
}
