import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addApplicationThunk } from "../redux/slices/add/addApplicationThunk";
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { assessorThunk } from "../redux/slices/get/assessorThunk";
import { Navigate, useNavigate } from "react-router-dom";
import { TextField } from "@mui/material";
import { FlagCircleTwoTone } from "@mui/icons-material";


export const NewApplication = () => {

    const g = useSelector(state=>state.user.users);
    const thisassessor = useSelector(state=> state.application.thisAssessor);
    const [newCustomer, setNewCustomer] = useState({});
    const [directionsArr, setDirectionsArr] = useState({});
    const [apartmentData, setApartmentData] = useState({apartmentId:0,customerId:""});
    const [applicationData, setApplicationData] = useState({applicationId:0,assessorId:"",applicationDate:new Date().toISOString(),lastApplicationDate:new Date().toISOString(),applicationStatus:11});
    const [allData, setAllData] = useState({});
    const [flag, setFlag] = useState(false);
    const [personalDetails, setPersonalDetails] = useState(false);
    const [finish, setFinish] = useState(false);
    const [str, setStr] = useState("");
    const [loading, setLoading] = useState(false);
    const [payd, setPayd] = useState(false);
    const [nextt, setnextt] = useState(false);
    const [sum, setSum] = useState(0);
    const [creditCard, setCreditCard] = useState({num:"",tokef:"",cvv:""});
    const [size, setSize] = useState(0);
    const [year, setYear] = useState("");
    const dispatch = useDispatch();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    


    useEffect(() => {
      if(str!="")  setApartmentData({ ...apartmentData, directions: str });
    }, [str])

    useEffect(() => {
    if(flag) {
        dispatch(addApplicationThunk(allData));
        setFlag(false);
    } 
      }, [flag])
      useEffect(()=>{
        if(thisassessor.length>0)
            setFinish(true)
      },[thisassessor])

     useEffect(() => {
     cc();
    }, [])
    const open = () => {
        setLoading(true);
        let oo = setInterval(() => {
            setLoading(false);
        }, 5000)

        clearInterval(oo);
    }

    const checkDirections = () => {
        let st="";
        if (directionsArr.east)
            st+=" east"
        if (directionsArr.west)
            st+=" west"
        if (directionsArr.north)
             st+=" north"
        if (directionsArr.south)
             st+=" south"
        setStr(st);
    }


const createNewApplication = () => {
        checkDirections();
        setAllData({...allData,customer:newCustomer,apartment:apartmentData,application:applicationData});
        setFlag(true);
    }

    const cc = () => {
        setNewCustomer({...newCustomer,customerId: g.userId});
    }


    const funToPay = () => {
        const currentYear = new Date().getFullYear();
        const sizeNum = parseInt(size) || 0; 
        const yearNum = parseInt(year) || currentYear;
        
        const yearCost = (currentYear - yearNum) * 200;
        const sizeCost = sizeNum * 250;
        
        const summ = yearCost + sizeCost;
        setSum(summ);
        setnextt(true);
      }
      


        return <div >
              
            {  !finish && <div>
                {!payd&& <>{!nextt && <>
                <TextField id="standard-basic" label="enter your apartment size" variant="standard"  onChange={(e) =>{setSize(e.target.value)}  }/>
                <TextField id="standard-basic" label="enter your apartment Construction year" variant="standard"  onChange={(e) =>{setYear(e.target.value)}  }/>
                <Button  variant="outlined"  onClick={() => {funToPay()}}>next</Button>
                </>
                } 
                {nextt &&<>
                    <label >your Amount to be paid: {sum} </label>
                    <TextField id="standard-basic" label="number" variant="standard"  onChange={(e) =>{setCreditCard({...creditCard,num:e.target.value})}}/>
                    <TextField id="standard-basic" label="tokef" variant="standard"  onChange={(e) =>{setCreditCard({...creditCard,tokef:e.target.value})}}/>
                    <TextField id="standard-basic" label="cvv" variant="standard"  onChange={(e) =>{setCreditCard({...creditCard,cvv:e.target.value})}}/>
                <Button  variant="outlined"  onClick={() => {setPayd(true)}}>next</Button>
                </>}</>}
               {payd && <> <TextField id="standard-basic" label="first name" variant="standard" onChange={(e) => setNewCustomer({ ...newCustomer, customerFirstName: e.target.value })}/>
                <TextField id="standard-basic" label="last name" variant="standard"  onChange={(e) => setNewCustomer({ ...newCustomer, customerLastName: e.target.value })}/>
                
                
                
                <TextField id="standard-basic" label="adress" variant="standard" onChange={(e) => setNewCustomer({ ...newCustomer, customerAddress: e.target.value })}/>
                <TextField id="standard-basic" label="phone" variant="standard" onChange={(e) => setNewCustomer({ ...newCustomer, customerPhone: e.target.value })}/>
                <TextField id="standard-basic" label="city" variant="standard"  onChange={(e) => setNewCustomer({ ...newCustomer, customerCity: e.target.value })}/>
                <TextField id="standard-basic" label="email" variant="standard" type="email" onChange={(e) => setNewCustomer({ ...newCustomer, customerEmail: e.target.value })}/>
                
            
                {/* <Button  variant="outlined"  onClick={() => {setPersonalDetails(true)}}>next</Button> */}
                
                
                <div>

                <div>please enter your apartment details</div>
                <TextField id="standard-basic" label="city" variant="standard" onChange={(e) => setApartmentData({ ...apartmentData, apartmentCity: e.target.value })}/>
                <TextField id="standard-basic" label="address" variant="standard" onChange={(e) => setApartmentData({ ...apartmentData, apartmentAddress: e.target.value })}/>
                <TextField id="standard-basic" label="size" variant="standard" onChange={(e) => setApartmentData({ ...apartmentData, apartmentSize:parseInt( e.target.value )})}/>
                <TextField id="standard-basic" label="air directions" variant="standard" onChange={(e) => setApartmentData({ ...apartmentData, airDirections: parseInt(e.target.value )})}/>
                <TextField id="standard-basic" label="floor" variant="standard" onChange={(e) => setApartmentData({ ...apartmentData, floor: parseInt(e.target.value) })} />
                <label>elevator</label>
                <Checkbox {...label}  onChange={(e) => setApartmentData({ ...apartmentData, elevator: e.target.checked })} />
                <label>directions</label>
                <div>
                    <label>south</label>
                    <Checkbox {...label} onChange={(e) => setDirectionsArr({ ...directionsArr, south: e.target.checked })} />
                    <label>east</label>
                    <Checkbox {...label} onChange={(e) => setDirectionsArr({ ...directionsArr, east: e.target.checked })} />
                    <label>north</label>
                    <Checkbox {...label} onChange={(e) => setDirectionsArr({ ...directionsArr, north: e.target.checked })} />
                    <label>west</label>
                    <Checkbox {...label} onChange={(e) => setDirectionsArr({ ...directionsArr, west: e.target.checked })} />
                </div>
                <Button variant="outlined" onClick={() => { createNewApplication() }}>next</Button>
            </div>
                
                </>
                }
            </div>
            }
  
            {finish &&<>
              <div>your application accepted seccessfuly
<div>in order to see your accounts you need exit and enter again.</div>
</div>
              <Button></Button>
              </>
            }
        </div>
    }




