import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customerThunk } from "../../redux/slices/get/customerThunk";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
// import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

// import * as React from 'react';
// import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
// import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
// import { setChoseDetails } from "../../redux/slices/customerSlice";

import { myCustomersThunk } from "../../redux/slices/get by assessor/myCustomersThunk";

import GridViewIcon from '@mui/icons-material/GridView';
import { setCustomerChose } from "../../redux/slices/customerSlice";
import { setFull } from "../../redux/slices/userSlice";

export const Customers = () => {

    const [selected, setSelected] = useState(false);
    const [selectedAs, setSelectedAs] = useState({});
    const dispatch = useDispatch();
    const customersDetails = useSelector(state => state.customer.customers);
    const thisAssessor = useSelector(state => state.assessor.thisAssessor);
    const navigate = useNavigate()
  const type = useSelector(state => state.user.t);


    // useEffect(() => {
    //     if (customersDetails.length === 0 && type==="a"){
    //              if(thisAssessor.isManager === false)
    //                 // dispatch(myCustomersThunk(thisAssessor.assessorId));       
    //               dispatch(customerThunk());
    //             //   else
    //                     }
    // }, [])


    return <div>
 <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>city</th>
                    <th>address</th>
                    <th>phone</th>
                    <th>email</th>
                  {!thisAssessor.isManager && <th>chat</th>}
                </tr>
            </thead>
            <tbody>

                {customersDetails && customersDetails.map(d => {
                    return <tr key={d.customerId} onClick={() => { setSelected(true); setSelectedAs(d)}} className={(selected && selectedAs === d) ? "s" : "r"}>
                        <td>{d.customerId}</td>
                        <td>{d.customerFirstName}</td>
                        <td>{d.customerLastName}</td>
                        <td>{d.customerCity}</td>
                        <td>{d.customerAddress}</td>
                        <td>{d.customerPhone}</td>
                        <td>{d.customerEmail}</td>
                      {!thisAssessor.isManager &&<>
                        <td>
                     
                        {/* <MailOutlineOutlinedIcon /> */}
                            {/* {((chat && !sent ) || selectedAs !== d) &&  */}
                            <Button variant="text" onClick={() => {dispatch(setFull(false));dispatch(setCustomerChose(d)) ;navigate('/home/fullApplications') }}><GridViewIcon/>all applications</Button>
                            {/* } */}
                            {/* {(sent && !chat)&&selectedAs === d && <> */}
                                {/* <Button onClick={() => { dispatch(setChoseDetails(d));navigate('newChat') }}><BookmarkAddOutlinedIcon />new chat</Button><br />
                                <Button onClick={() => navigate('lastChats')}><BookmarkAddedOutlinedIcon />last chats</Button> */}

                            {/* </> */}
                            {/* } */}
                        </td>
                        </>}

                    </tr>
                })}

            </tbody>
        </table>

        {/* {newChat && <>
            
        </>
        } */}
        {/* <button onClick={()=>(dispatch(customerThunk()))}>getAll</button> */}
        {/* <Button variant="text" onClick={()=>{navigate('addCustomer')}}>add customer</Button> */}

        {/* {selected &&<> */}
        {/* <Button variant="text" onClick={()=>{dispatch(editCustomer(selectedAs));navigate('editCustomer')}}>edit customer</Button> */}
        {/* <button onClick={()=>{dispatch(deleteCustomerThunk(selectedAs.customerId));setSelected(false)}}>delete customer</button> */}
        {/* </>   */}

        <Outlet></Outlet>
    </div>
}







