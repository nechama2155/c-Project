import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applicationThunk } from "../redux/slices/get/applicatiionThunk";
import { myApplicationsThunk } from "../redux/slices/get by assessor/myApplicationsThunk";
import { assessmentThunk } from "../redux/slices/get/assessmentThunk";
import { myAssessmentsThunk } from "../redux/slices/get by assessor/myAssessmentsThunk";
import { Button } from "@mui/material";
import * as React from 'react';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { Outlet, useNavigate } from "react-router-dom";
import { apartmentDetailsThunk } from "../redux/slices/get/apartmentDetailsThunk";
import { myApartmentDetailsThunk } from "../redux/slices/get by assessor/myApartmentDetailsThunk";
import { yourApplicationsThunk } from "../redux/slices/get by customer/yourApplicationsThunk";
import { yourAssessmentsThunk } from "../redux/slices/get by customer/yourAssessmentsThunk";
import { yourApartmentDetailsThunk } from "../redux/slices/get by customer/yourApartmentsDetailsThunk";
import { yourAssessorsThunk } from "../redux/slices/get by customer/yourAssessorsThunk";
import { setApplicationId, setLastChats, setTo } from "../redux/slices/chatSlice";





export const FullApplications = () => {
    const thisAssessor = useSelector(state => state.assessor.thisAssessor);
    const customerChose = useSelector(state => state.customer.customerChose);
    const thisCustomer = useSelector(state => state.customer.thisCustomer);
    const theApplication = useSelector(state => state.application.applications);
    const myApplication = useSelector(state => state.application.myApplication);
    const assessmentsDetails = useSelector(state => state.assessment.assessments);
    const apartmentsDetails = useSelector(state => state.apartmentDetails.apartmentsDetails);
    const customersDetails = useSelector(state => state.customer.customers);
    const assessorsDetails = useSelector(state => state.assessor.assessors);
    const full = useSelector(state => state.user.full);
    const chatDetails = useSelector(state => state.chat.chats);
    const type = useSelector(state => state.user.t);
    const dispatch = useDispatch();
    const [sent, setSent] = useState(false);
    const [fullDetails, setFullDetails] = useState([]);
    const [finalAssessor, setFinalAssessor] = useState([]);
    const [applicationsDetails, setApplicationDetails] = useState([...theApplication]);

    const navigate = useNavigate();
    const getData = async () => {
        const res = await dispatch(yourApplicationsThunk(customerChose.customerId));
        if (res.payload != null) {
            setApplicationDetails(res.payload);
        }
    }
    useEffect(() => {
        if (type === "a") {
            if (thisAssessor.isManager)
                setFinalAssessor(assessorsDetails);
            else {
                const a = [];
                a.push(thisAssessor);
                setFinalAssessor(a);

            }
        }
        else if (type === "c") {
            setFinalAssessor(assessorsDetails);
        }
        if (!full) {
            //setApplicationDetails(myApplication);
            getData();
        }
        // if (applicationsDetails.length === 0) {

        //     if(full){
        //         if(type === "a" && thisAssessor.isManager === true){
        //             dispatch(applicationThunk());
        //         }
        //         if(type === "a" && thisAssessor.isManager === false){
        //                 dispatch(myApplicationsThunk(thisAssessor.assessorId));
        //         }
        //     }
        //     if(!full){
        //         dispatch(yourApplicationsThunk(thisCustomer.customerId));
        //     }


        // }
        // if (assessmentsDetails.length === 0) {

        //     if(full){
        //         if(type === "a" && thisAssessor.isManager === true){
        //             dispatch(assessmentThunk());
        //         }
        //         if(type === "a" && thisAssessor.isManager === false){
        //                 dispatch(myAssessmentsThunk(thisAssessor.assessorId));
        //         }
        //     }
        //     if(!full){
        //         dispatch(yourAssessmentsThunk(thisCustomer.customerId));
        //     }
        // }
        // if (apartmentsDetails.length === 0) {
        //     // if (type === "a") {
        //     //     if (thisAssessor.isManager)
        //     //         dispatch(apartmentDetailsThunk());
        //     //     else
        //     //         dispatch(myApartmentDetailsThunk(thisAssessor.assessorId));
        //     // }
        //     // else if (type === "c")
        //     //     dispatch(yourApartmentDetailsThunk(thisCustomer.customerId));
        //     if(full){
        //         if(type === "a" && thisAssessor.isManager === true){
        //             dispatch(apartmentDetailsThunk());
        //         }
        //         if(type === "a" && thisAssessor.isManager === false){
        //                 dispatch(myApartmentDetailsThunk(thisAssessor.assessorId));
        //         }
        //     }
        //     if(!full){
        //         dispatch(yourApartmentDetailsThunk(thisCustomer.customerId));
        //     }
        // }
        // if (assessorsDetails.length === 0) {
        //     if (type === "c")
        //         dispatch(yourAssessorsThunk(thisCustomer.customerId));

        // }
        // else {
        //     if (applicationsDetails.length !== 0) {
        //         const s = [];
        //         applicationsDetails.forEach(element => {
        //             s.push(element.applicationId);
        //         });
        //         setFullDetails(s);
        //     }
        // }

    }, [])
    useEffect(() => {
        if (fullDetails.length === 0 && applicationsDetails.length !== 0 && apartmentsDetails.length !== 0 && assessmentsDetails.length !== 0 && finalAssessor.length !== 0) {
            const s = [];
            applicationsDetails.forEach(element => {
                s.push(element.applicationId);
            });
            setFullDetails(s);
        }
    }, [applicationsDetails, assessmentsDetails, apartmentsDetails, finalAssessor])

    const assess = (a, applicationId) => {
        const aa = applicationsDetails.find(c => c.assessorId === a.assessorId);
        if (aa.applicationId === applicationId)
            return true;
    }
    const cust = (y, applicationId) => {
        const cc = apartmentsDetails.find(c => c.customerId === y);
        if (cc.apartmentId === applicationId)
            return true;
    }
    const chatMe = (element) => {
        let arr = [];
        chatDetails.forEach(e => {
            if (element === e.applicationId) {
                arr.push(e);
            }
        });
        dispatch(setLastChats(arr));
    }
    return <div>
        {/* customer table */}
        {type === "a" && !full && <table>
            <thead>
                {/* <tr>
                    <th>id</th>
                    <th>firstName</th>
                    <th>lastName</th>
                    <th>city</th>
                    <th>address</th>
                    <th>phone</th>
                    <th>email</th>
                  {!thisAssessor.isManager && <th>chat</th>}
                </tr> */}
                {/* <tr> */}
                Customer Details
                {/* </tr> */}
            </thead>
            <tbody>
                <tr>
                    <td>id: {customerChose.customerId}</td>
                    <td>firstName: {customerChose.customerFirstName}</td>
                    <td>lastName: {customerChose.customerLastName}</td>
                    <td>city: {customerChose.customerCity}</td>
                    <td>address: {customerChose.customerAddress}</td>
                    <td>phone: {customerChose.customerPhone}</td>
                    <td>email: {customerChose.customerEmail}</td>

                </tr>

            </tbody>
        </table>}

        {(assessmentsDetails && applicationsDetails && finalAssessor) && <>
            {fullDetails.map(element => {
                return <>
                    <div style={{ border: "solid 2px gray", width: "100%" }}>
                        <div >
                            {type === "a" && full && <table>
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
                                    {/* <tr>
                    <td>customerChose.customerId}</td>
                    <td>firstName: {customerChose.customerFirstName}</td>
                    <td>lastName: {customerChose.customerLastName}</td>
                    <td>city: {customerChose.customerCity}</td>
                    <td>address: {customerChose.customerAddress}</td>
                    <td>phone: {customerChose.customerPhone}</td>
                    <td>email: {customerChose.customerEmail}</td>

                </tr> */}
                                    {customersDetails.map(d => {

                                        if (cust(d.customerId, element)) {
                                            return <tr key={d.customerId}>

                                                <td>{d.customerId}</td>
                                                <td>firstName: {d.customerFirstName}</td>
                                                <td>lastName: {d.customerLastName}</td>
                                                <td>city: {d.customerCity}</td>
                                                <td>address: {d.customerAddress}</td>
                                                <td>phone: {d.customerPhone}</td>
                                                <td>email: {d.customerEmail}</td>

                                            </tr>
                                        }
                                    }
                                    )}

                                </tbody>
                            </table>}
                            {/* assessor table */}
                            {(type === "c" || (type === "a" && thisAssessor.isManager === true)) && <table>
                                <thead>
                                    <tr><th>assessor</th></tr>
                                    <tr>
                                        <th>assessorFirstName</th>
                                        <th>assessorLastName</th>
                                        <th>assessorCity</th>
                                        <th>assessorAddress</th>
                                        <th>assessorPhone</th>
                                        <th>assessorEmail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {finalAssessor.map(d => {

                                        if (assess(d, element)) {
                                            return <tr key={d.assessorId}>

                                                <td>{d.assessorFirstName}</td>
                                                <td>{d.assessorLastName}</td>
                                                <td>{d.assessorCity}</td>
                                                <td>{d.assessorAddress}</td>
                                                <td>{d.assessorPhone}</td>
                                                <td>{d.assessorEmail}</td>
                                            </tr>
                                        }
                                    }
                                    )}

                                </tbody>
                            </table>}
                            {/* application table */}

                            <table>
                                <thead>
                                    <tr><th>application</th></tr>

                                    <tr>
                                        <th>applicationId</th>
                                        <td>applicationDate</td>
                                        <td>lastApplicationDate</td>
                                        <td>applicationStatus</td>

                                    </tr>
                                </thead>
                                <tbody>


                                    {applicationsDetails.map(a => {
                                        if (a.applicationId === element) {
                                            return <tr key={a.applicationId} >
                                                <td>{a.applicationId}</td>
                                                <td>{a.applicationDate}</td>
                                                <td>{a.lastApplicationDate}</td>
                                                <td>{a.applicationStatus}</td>

                                            </tr>
                                        }
                                    })}

                                </tbody>
                            </table>
                            {/* assessment table */}
                            <table>
                                <thead>
                                    <tr><th>assessment</th></tr>

                                    <tr>
                                        <th>AssessmentId</th>
                                        <th>Block</th>
                                        <th>Plot</th>
                                        <th>SubPlot</th>
                                        <th>ConstructionYear</th>
                                        <th>AcquisionPrice</th>
                                        <th>AssessmentGoal</th>
                                        <th>LegalState</th>
                                        <th>BuildingPermit</th>
                                        <th>IrregularitiesBuilding</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {assessmentsDetails.map(s => {

                                        if (s.assessmentId === element) {
                                            return <tr key={s.assessmentId}>
                                                <td>{s.assessmentId}</td>
                                                <td>{s.block}</td>
                                                <td>{s.plot}</td>
                                                <td>{s.subPlot}</td>
                                                <td>{s.constructionYear}</td>
                                                <td>{s.acquisionPrice}</td>
                                                <td>{s.assessmentGoal}</td>
                                                <td>{s.legalState}</td>
                                                <td>{s.buildingPermit}</td>
                                                <td>{s.irregularitiesBuilding}</td>
                                            </tr>
                                        }
                                    })}

                                </tbody>
                            </table>
                            {/* apartment details */}
                            <table>
                                <thead>
                                    <tr><th>apartment details</th></tr>
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

                                    {apartmentsDetails.map(g => {
                                        if (g.apartmentId === element) {
                                            return <tr>
                                                <td>{g.apartmentId}</td>
                                                <td>{g.customerId}</td>
                                                <td>{g.apartmentCity}</td>
                                                <td>{g.apartmentAddress}</td>
                                                <td>{g.apartmentSize}</td>
                                                <td>{g.airDirections}</td>
                                                <td>{g.directions}</td>
                                                <td>{g.floor}</td>
                                                <td>{g.elevator}</td>
                                            </tr>
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                        {/* </> */}
                        <div>
                            {!thisAssessor.isManager && <>
                                {!sent && <Button variant="text" onClick={() => { setSent(true) }}><MailOutlineOutlinedIcon /></Button>}
                                {sent && <>
                                    <Button onClick={() => { dispatch(setApplicationId(element)); dispatch(setTo(customerChose.customerFirstName + " " + customerChose.customerLastName)); navigate('newChat') }}><BookmarkAddOutlinedIcon />new chat</Button><br />
                                    <Button onClick={() => { chatMe(element); navigate('/home/lastChats') }}><BookmarkAddedOutlinedIcon />last chats</Button>
                                </>
                                }
                            </>}
                        </div>
                    </div></>
            })}</>
        }
        <Outlet></Outlet>
    </div>
}