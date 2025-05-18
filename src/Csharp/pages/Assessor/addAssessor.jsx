import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAssessorThunk } from "../../redux/slices/add/addAssessorThunk";
import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";

export const AddAssessor = () => {

    const [details, setDetails] = useState({assessorId:"", assessorFirstName: "", assessorLastName: ""
        , assessorCity: "", assessorAddress: "", assessorPhone: "", assessorEmail: "", seniority:"",isManager:false});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const refdialog = useRef();

    // const param=useParams()
    // console.log(param["id"]);
    useEffect(() => {
        refdialog.current.showModal();
      }, [])
    return <div>
 <dialog ref={refdialog} className="assessorDialog">
 <Button onClick={()=>{refdialog.current.close()}}>✖</Button>

        <div>
      <Box>
      <TextField label="Id"  slotProps={{input:{startAdornment:(<InputAdornment position="start"><AccountCircle/></InputAdornment>)}}} variant="standard"  onChange={(e)=>setDetails({...details, assessorId:e.target.value})}/>
      <TextField label="First Name" variant="standard"  onChange={(e)=>setDetails({...details, assessorFirstName:e.target.value})}/>
      <TextField  label="Last Name" variant="standard" onChange={(e)=>setDetails({...details, assessorLastName:e.target.value})}/>
      <TextField  label="City" variant="standard" onChange={(e)=>setDetails({...details, assessorCity:e.target.value})}/>
      <TextField  label="Address" variant="standard" onChange={(e)=>setDetails({...details, assessorAddress:e.target.value})} />
      <TextField  label="Phone" variant="standard" onChange={(e)=>setDetails({...details, assessorPhone:e.target.value})}/>
      <TextField  label="Email" variant="standard" type="email" onChange={(e)=>setDetails({...details, assessorEmail:e.target.value})}/>
      <TextField  label="Seniority" variant="standard" type="number" onChange={(e)=>setDetails({...details, seniority:parseInt(e.target.value)})}/>
      <TextField  label="isManager" variant="standard" type="checkbox" onChange={(e) => setDetails({ ...details, isManager: e.target.checked })}/>
    </Box>
        </div>
        <Button variant="outlined" onClick={()=>{ dispatch(addAssessorThunk({...details,available:true}));navigate('/home/assessors')}}>add</Button>
        </dialog>
    </div>
}


