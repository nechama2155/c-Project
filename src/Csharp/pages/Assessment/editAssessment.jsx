import { useState ,useEffect, useRef} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from "@mui/material";
import { editAssessmentThunk } from "../../redux/slices/edit/editAssessmentThunk";
import { setIsMy } from "../../redux/slices/assessmentSlice";


export const EditAssessment = () => {
    const assessment = useSelector(state => state.assessment.assessmentsEdit);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const refdialog = useRef();
    const [details, setDetails] = useState({block:"",plot:"",subPlot:"",constructionYear:"",acquisionPrice:"",assessmentGoal:"",legalState:"",buildingPermit:"",irregularitiesBuilding:""});
  
    useEffect(() => { 
      setDetails(assessment);
        refdialog.current.showModal();
       
      }, [])

    
    return <div>
 <dialog ref={refdialog}>
 <Button onClick={()=>{refdialog.current.close()}}>✖</Button>

        <div>
        <Box>
       <TextField  id="input-with-icon-adornment" label="Block" variant="standard"  value={details?.block} onChange={(e) => setDetails({ ...details, block: e.target.value })}/>
      <TextField  label="Plot"variant="standard"  value={details?.plot} onChange={(e) => setDetails({ ...details, plot: e.target.value  })}/>
      <TextField  label="SubPlot"  variant="standard"  value={details?.subPlot} onChange={(e) => setDetails({ ...details, subPlot: e.target.value })} />
      <TextField  label="ConstructionYear" variant="standard"  value={details?.constructionYear} onChange={(e) => setDetails({ ...details, constructionYear: e.target.value })}/>
      <TextField  label="AcquisionPrice" variant="standard"  value={details?.acquisionPrice} onChange={(e) => setDetails({ ...details, acquisionPrice: e.target.value })}/>
      <TextField  label="AssessmentGoal" variant="standard" type="email" value={details?.assessmentGoal} onChange={(e) => setDetails({ ...details, assessmentGoal: e.target.value })} />
      <TextField  label="LegalState" variant="standard" type="number"  value={details?.legalState} onChange={(e) => setDetails({ ...details, legalState:parseInt( e.target.value) })}/>
      <TextField  label="BuildingPermit" variant="standard" type="checkbox" size="lg" defaultChecked={details.buildingPermit}  onChange={(e) => setDetails({ ...details, buildingPermit: e.target.checked })}/>
      <TextField  label="IrregularitiesBuilding" variant="standard" type="checkbox" size="lg" defaultChecked={details.irregularitiesBuilding}  onChange={(e) => setDetails({ ...details, irregularitiesBuilding: e.target.checked })}/>
    </Box>
{/* 
    <th>AssessmentId</th>
                    <th>Block</th>
                    <th>Plot</th>
                    <th>SubPlot</th>
                    <th>ConstructionYear</th>
                    <th>AcquisionPrice</th>
                    <th>AssessmentGoal</th>
                    <th>LegalState</th>
                    <th>BuildingPermit</th>
                    <th>IrregularitiesBuilding</th> */}
        </div>
        {/* <Button></Button> */}
        {/* <Button variant="text">Text</Button> */}
        <Button variant="text" onClick={() => {dispatch(setIsMy(details));dispatch(editAssessmentThunk({...details,assessmentId:assessment.assessmentId})); navigate('/home/assessments') }}>save</Button>
        </dialog>
    </div>
}



