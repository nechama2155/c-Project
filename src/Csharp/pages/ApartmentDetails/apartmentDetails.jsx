import { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { apartmentDetailsThunk } from "../../redux/slices/get/apartmentDetailsThunk";
import Aod from "@mui/icons-material/Aod";
import { myApartmentDetailsThunk } from "../../redux/slices/get by assessor/myApartmentDetailsThunk";
import { yourApartmentDetailsThunk } from "../../redux/slices/get by customer/yourApartmentsDetailsThunk";

export const ApartmentDetails = () => {

    const apartmentsDetails = useSelector(state => state.apartmentDetails.apartmentsDetails);
    const thisAssessor = useSelector(state => state.assessor.thisAssessor);
    const thisCustomer = useSelector(state => state.customer.thisCustomer);
    const type = useSelector(state => state.user.t);
    const dispatch = useDispatch();
    const [selected,setSelected] = useState(false);
    const [selectedAs,setSelectedAs] = useState({});
    
    // useEffect(() => {
    //     if (apartmentsDetails.length === 0) {
    //         if (type === "a") {
    //             if (thisAssessor.isManager)
    //                 dispatch(apartmentDetailsThunk());
    //             // else
    //                 // dispatch(myApartmentDetailsThunk(thisAssessor.assessorId));
    //         }
    //         else if (type === "c") {
    //             dispatch(yourApartmentDetailsThunk(thisCustomer.customerId));
    //         }
    //     }
    // }, [])
    return <div >
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>CustomerId</th>
                    <th>City</th>
                    <th>Address</th>
                    <th>Size</th>
                    <th>Air Directions</th>
                    <th>Directions</th>
                    <th>Floor</th>
                    <th>Elevator</th>
                </tr>
            </thead>
            <tbody>
               
                    {apartmentsDetails && apartmentsDetails.map(d => {
               return  <tr key={d.apartmentId}  onClick={()=>{setSelected(true);setSelectedAs(d)}} className={(selected&& selectedAs === d)?"s":"r"}>
                    <td>{d.apartmentId}</td>
                    <td>{d.customerId}</td>
                    <td>{d.apartmentCity}</td>
                    <td>{d.apartmentAddress}</td>
                    <td>{d.apartmentSize}</td>
                    <td>{d.airDirections}</td>
                    <td>{d.directions}</td>
                    <td>{d.floor}</td>
                    <td>{d.elevator}</td>
                   </tr>
                    })}
               
            </tbody>
        </table>
        {/* <input type="file"/> */}
        {/* <button onClick={()=>(dispatch(apartmentDetailsThunk()))}>o</button> */}
    </div>
}