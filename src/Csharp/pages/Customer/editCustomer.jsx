import { useState ,useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editCustomerThunk } from "../../redux/slices/edit/editCustomerthunk";


export const EditCustomer = () => {
    const customer = useSelector(state => state.customer.customerEdit);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [details, setDetails] = useState({ customerFirstName: "",customerLastName: "", customerCity: "", customerAddress: "", customerPhone: "", customerEmail: ""});
    useEffect(() => {
       setDetails(customer);
    
    },[])
    return <div>

        <div>
            <label>First Name:</label>
            <input type="text" defaultValue={details?.customerFirstName} onChange={(e) => setDetails({ ...details, customerFirstName: e.target.value })} /><br />
            <label>Last Name:</label>
            <input type="text" defaultValue={details?.customerLastName} onChange={(e) => setDetails({ ...details, customerLastName: e.target.value })} /><br />
            <label>City:</label>
            <input type="text" defaultValue={details?.customerCity} onChange={(e) => setDetails({ ...details, customerCity: e.target.value })} /><br />
            <label>Address:</label>
            <input type="text" defaultValue={details?.customerAddress} onChange={(e) => setDetails({ ...details, customerAddress: e.target.value })} /><br />
            <label>Phone:</label>
            <input type="text" defaultValue={details?.customerPhone} onChange={(e) => setDetails({ ...details,customerPhone: e.target.value })} /><br />
            <label>Email:</label>
            <input type="email" defaultValue={details?.customerEmail} onChange={(e) => setDetails({ ...details, customerEmail: e.target.value })} /><br />  </div>
        {/* <Button></Button> */}
        {/* <Button variant="text">Text</Button> */}
        <button onClick={() => {dispatch(editCustomerThunk({...details,customerId:customer.customerId})); navigate('/customers') }}>save</button>
    </div>
}



