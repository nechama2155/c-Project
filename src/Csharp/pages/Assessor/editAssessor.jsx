import { useState ,useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { editAssessorThunk } from "../../redux/slices/edit/editAssessorThunk";
import { Box, Button, TextField } from "@mui/material";

export const EditAssessor = () => {
    const assessor = useSelector(state => state.assessor.assessorEdit);
    const navigate = useNavigate();
    const dispatch = useDispatch();
  const refdialog = useRef();
    const [details, setDetails] = useState({ assessorFirstName: "", assessorLastName: "", assessorCity: "", assessorAddress: "", assessorPhone: "", assessorEmail: "", seniority:"",isManager:""});
    useEffect(() => {
       setDetails(assessor);
       refdialog.current.showModal();
    },[])

    return <div>
 <dialog ref={refdialog}>
 <Button onClick={()=>{refdialog.current.close()}}>✖</Button>

        <div>
        <Box>
       <TextField  id="input-with-icon-adornment" label="First Name" variant="standard"  value={details?.assessorFirstName} onChange={(e) => setDetails({ ...details, assessorFirstName: e.target.value })}/>
      <TextField  label="Last Name"variant="standard"  value={details?.assessorLastName} onChange={(e) => setDetails({ ...details, assessorLastName: e.target.value  })}/>
      <TextField  label="City"  variant="standard"  value={details?.assessorCity} onChange={(e) => setDetails({ ...details, assessorCity: e.target.value })} />
      <TextField  label="Address" variant="standard"  value={details?.assessorAddress} onChange={(e) => setDetails({ ...details, assessorAddress: e.target.value })}/>
      <TextField  label="Phone" variant="standard"  value={details?.assessorPhone} onChange={(e) => setDetails({ ...details, assessorPhone: e.target.value })}/>
      <TextField  label="Email" variant="standard" type="email" value={details?.assessorEmail} onChange={(e) => setDetails({ ...details, assessorEmail: e.target.value })} />
      <TextField  label="Seniority" variant="standard" type="number"  value={details?.seniority} onChange={(e) => setDetails({ ...details, seniority:parseInt( e.target.value) })}/>
      <TextField  label="isManager" variant="standard" type="checkbox" size="lg" defaultChecked={details.isManager}  onChange={(e) => setDetails({ ...details, isManager: e.target.checked })}/>
    </Box>
        </div>
        {/* <Button></Button> */}
        {/* <Button variant="text">Text</Button> */}
        <Button variant="text" onClick={() => {dispatch(editAssessorThunk({...details,assessorId:assessor.assessorId})); navigate('/home/assessors') }}>save</Button>
        </dialog>
    </div>
}




