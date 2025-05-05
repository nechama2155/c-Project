import { Button, TextareaAutosize } from "@mui/material"
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addChatThunk } from "../redux/slices/add/addChatThunk";

export const NewChat = () =>{

    const navigate = useNavigate();
    const refdialog = useRef();
    const customer = useSelector(state=> state.customer.customerChose);
    const type = useSelector(state=> state.user.t);
    const [data,setData] = useState({sendDate:new Date().toISOString(),from:type,read:false,information:"",chatId:0,applicationId:0,to:customer.customerId});
    const [flag,setFlag] = useState(false);
    const dispatch = useDispatch();
    const appId = useSelector(state=> state.chat.applicationId);
    const fullTo = useSelector(state=> state.chat.to);
    useEffect(() => {
         
        refdialog.current.showModal();
    }, [])
    useEffect(() => {        

setData({...data,applicationId:appId})

    }, [appId])
       const openTimer = () => {
       setFlag(true);
            let oo = setInterval(() => {
            setFlag(false);   
            navigate('/home/fullApplications');
            clearInterval(oo);
            }, 2000)
    
        }

    return <div>
       <dialog ref={refdialog}>
            {!flag && <><Button onClick={() => { refdialog.current.close(); navigate('/home/fullApplications')}}>✖</Button><br/>
                <label>to: {fullTo}</label><br/>
                <label>date: {new Date().toLocaleDateString()}</label> <br/>
                <TextareaAutosize
                    aria-label="minimum height"
                    minRows={20}
                    placeholder="your massage..."
                    style={{ width: 250 }}
                    onChange={(e)=>{setData({...data,information:e.target.value})}}
                /><br/>
                <Button onClick={() => {dispatch(addChatThunk(data));openTimer()}}>send</Button>
                </>}
            {flag &&<div>your messege sent succssesfully</div> }
            </dialog>
            
          

    </div>
}