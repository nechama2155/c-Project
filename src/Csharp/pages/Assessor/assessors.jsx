import { useEffect, useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { assessorThunk } from "../../redux/slices/get/assessorThunk";
import { deleteAssessorThunk } from "../../redux/slices/delete/deleteAssessorThunk";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { editAssessor } from "../../redux/slices/assessorsSlice";
import '../cssPages/tables.css'
import '../cssPages/assessor.css'
import { Button } from "@mui/material";
import { yourAssessorsThunk } from "../../redux/slices/get by customer/yourAssessorsThunk";

export const Assessors = () =>{
  
    const [selected,setSelected] = useState(false);
    const [selectedAs,setSelectedAs] = useState({});
    const dispatch = useDispatch();
    const assessorsDetails = useSelector(state=>state.assessor.assessors);
    const type = useSelector(state=>state.user.t);
    const thisCustomer = useSelector(state => state.customer.thisCustomer);

    const navigate = useNavigate();
    // useEffect(()=>{
    //     if(assessorsDetails.length === 0)
    //         if(type==='a'){
    //             debugger
    //           dispatch(assessorThunk());}
    //         else if(type==='c'){
    //             debugger
    //                 dispatch(yourAssessorsThunk(thisCustomer.customerId));}
    //     },[])
    
    return  <div>
    <table>
        <thead>
            <tr>
                {type === 'a' && <th>assessorId</th>}
                <th>assessorFirstName</th>
                <th>assessorLastName</th>
                <th>assessorCity</th>
                <th>assessorAddress</th>
                <th>assessorPhone</th>
                <th>assessorEmail</th> 
                {type === 'a' && <><th>seniority</th>
                <th>available</th>
                <th>isManager</th></>}
            </tr>
        </thead>
        <tbody>
           
                {assessorsDetails && assessorsDetails.map(d => {
           return  <tr key={d.assessorId} onClick={()=>{setSelected(true);setSelectedAs(d)}}className={(selected&& selectedAs === d)?"s":"r"}>
                {type === 'a' &&  <td>{d.assessorId}</td>}
                <td>{d.assessorFirstName}</td>
                <td>{d.assessorLastName}</td>
                <td>{d.assessorCity}</td>
                <td>{d.assessorAddress}</td>
                <td>{d.assessorPhone}</td>
                <td>{d.assessorEmail}</td>
                {type === 'a' && <> <td>{d.seniority}</td>
                <td>{d.available.toString()}</td>
                <td>{d.isManager.toString()}</td></>}
               </tr>
                })}
        </tbody>
    </table>
    {/* <button onClick={()=>(dispatch(assessorThunk()))}>o</button> */}
    {type==='a'&&<>
<Button variant="text" onClick={()=>{navigate('addAssessor')}}>add assessor</Button>
    {selected &&<>
<Button variant="text" onClick={()=>{dispatch(editAssessor(selectedAs));navigate('editAssessor')}}>edit assessor</Button>
<Button variant="text" onClick={()=>{dispatch(deleteAssessorThunk(selectedAs.assessorId));setSelected(false)}}>delete assessor</Button>
 </>  
  }</>
  }
      <Outlet></Outlet>
</div>
}