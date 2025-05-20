// import { useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { applicationThunk } from "../redux/slices/get/applicatiionThunk";
// import { myApplicationsThunk } from "../redux/slices/get by assessor/myApplicationsThunk";
// import { assessmentThunk } from "../redux/slices/get/assessmentThunk";
// import { myAssessmentsThunk } from "../redux/slices/get by assessor/myAssessmentsThunk";
// import { Button } from "@mui/material";
// import * as React from 'react';
// import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
// import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
// import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
// import { Outlet, useNavigate } from "react-router-dom";
// import { apartmentDetailsThunk } from "../redux/slices/get/apartmentDetailsThunk";
// import { myApartmentDetailsThunk } from "../redux/slices/get by assessor/myApartmentDetailsThunk";
// import { yourApplicationsThunk } from "../redux/slices/get by customer/yourApplicationsThunk";
// import { yourAssessmentsThunk } from "../redux/slices/get by customer/yourAssessmentsThunk";
// import { yourApartmentDetailsThunk } from "../redux/slices/get by customer/yourApartmentsDetailsThunk";
// import { yourAssessorsThunk } from "../redux/slices/get by customer/yourAssessorsThunk";
// import { setApplicationId, setLastChats, setTo } from "../redux/slices/chatSlice";





// export const FullApplications = () => {
//     const thisAssessor = useSelector(state => state.assessor.thisAssessor);
//     const customerChose = useSelector(state => state.customer.customerChose);
//     const thisCustomer = useSelector(state => state.customer.thisCustomer);
//     const theApplication = useSelector(state => state.application.applications);
//     const myApplication = useSelector(state => state.application.myApplication);
//     const assessmentsDetails = useSelector(state => state.assessment.assessments);
//     const apartmentsDetails = useSelector(state => state.apartmentDetails.apartmentsDetails);
//     const customersDetails = useSelector(state => state.customer.customers);
//     const assessorsDetails = useSelector(state => state.assessor.assessors);
//     const full = useSelector(state => state.user.full);
//     const chatDetails = useSelector(state => state.chat.chats);
//     const type = useSelector(state => state.user.t);
//     const dispatch = useDispatch();
//     const [sent, setSent] = useState(false);
//     const [fullDetails, setFullDetails] = useState([]);
//     const [finalAssessor, setFinalAssessor] = useState([]);
//     const [applicationsDetails, setApplicationDetails] = useState([...theApplication]);

//     const navigate = useNavigate();
//     const getData = async () => {
//         const res = await dispatch(yourApplicationsThunk(customerChose.customerId));
//         if (res.payload != null) {
//             setApplicationDetails(res.payload);
//         }
//     }
//     useEffect(() => {
//         if (type === "a") {
//             if (thisAssessor.isManager)
//                 setFinalAssessor(assessorsDetails);
//             else {
//                 const a = [];
//                 a.push(thisAssessor);
//                 setFinalAssessor(a);

//             }
//         }
//         else if (type === "c") {
//             setFinalAssessor(assessorsDetails);
//         }
//         if (!full) {
//             //setApplicationDetails(myApplication);
//             getData();
//         }
//         // if (applicationsDetails.length === 0) {

//         //     if(full){
//         //         if(type === "a" && thisAssessor.isManager === true){
//         //             dispatch(applicationThunk());
//         //         }
//         //         if(type === "a" && thisAssessor.isManager === false){
//         //                 dispatch(myApplicationsThunk(thisAssessor.assessorId));
//         //         }
//         //     }
//         //     if(!full){
//         //         dispatch(yourApplicationsThunk(thisCustomer.customerId));
//         //     }


//         // }
//         // if (assessmentsDetails.length === 0) {

//         //     if(full){
//         //         if(type === "a" && thisAssessor.isManager === true){
//         //             dispatch(assessmentThunk());
//         //         }
//         //         if(type === "a" && thisAssessor.isManager === false){
//         //                 dispatch(myAssessmentsThunk(thisAssessor.assessorId));
//         //         }
//         //     }
//         //     if(!full){
//         //         dispatch(yourAssessmentsThunk(thisCustomer.customerId));
//         //     }
//         // }
//         // if (apartmentsDetails.length === 0) {
//         //     // if (type === "a") {
//         //     //     if (thisAssessor.isManager)
//         //     //         dispatch(apartmentDetailsThunk());
//         //     //     else
//         //     //         dispatch(myApartmentDetailsThunk(thisAssessor.assessorId));
//         //     // }
//         //     // else if (type === "c")
//         //     //     dispatch(yourApartmentDetailsThunk(thisCustomer.customerId));
//         //     if(full){
//         //         if(type === "a" && thisAssessor.isManager === true){
//         //             dispatch(apartmentDetailsThunk());
//         //         }
//         //         if(type === "a" && thisAssessor.isManager === false){
//         //                 dispatch(myApartmentDetailsThunk(thisAssessor.assessorId));
//         //         }
//         //     }
//         //     if(!full){
//         //         dispatch(yourApartmentDetailsThunk(thisCustomer.customerId));
//         //     }
//         // }
//         // if (assessorsDetails.length === 0) {
//         //     if (type === "c")
//         //         dispatch(yourAssessorsThunk(thisCustomer.customerId));

//         // }
//         // else {
//         //     if (applicationsDetails.length !== 0) {
//         //         const s = [];
//         //         applicationsDetails.forEach(element => {
//         //             s.push(element.applicationId);
//         //         });
//         //         setFullDetails(s);
//         //     }
//         // }

//     }, [])
//     useEffect(() => {
//         if (fullDetails.length === 0 && applicationsDetails.length !== 0 && apartmentsDetails.length !== 0 && assessmentsDetails.length !== 0 && finalAssessor.length !== 0) {
//             const s = [];
//             applicationsDetails.forEach(element => {
//                 s.push(element.applicationId);
//             });
//             setFullDetails(s);
//         }
//     }, [applicationsDetails, assessmentsDetails, apartmentsDetails, finalAssessor])

//     // const assess = (a, applicationId) => {
//     //     const aa = applicationsDetails.find(c => c.assessorId === a.assessorId);
//     //     if (aa.applicationId === applicationId)
//     //         return true;
//     // }

//     const assess = (a, applicationId) => {
//         const aa = applicationsDetails.find(c => c.assessorId === a.assessorId);
//         if (aa && aa.applicationId === applicationId)
//             return true;
//         return false; // חשוב להחזיר ערך גם במקרה שלא נמצאה התאמה
//     }
//     // const cust = (y, applicationId) => {
//     //     const cc = apartmentsDetails.find(c => c.customerId === y);
//     //     if (cc.apartmentId === applicationId)
//     //         return true;
//     // }
//     const cust = (y, applicationId) => {
//         const cc = apartmentsDetails.find(c => c.customerId === y);
//         if (cc && cc.apartmentId === applicationId)
//             return true;
//         return false; // חשוב להחזיר ערך גם במקרה שלא נמצאה התאמה
//     }

//     const chatMe = (element) => {
//         let arr = [];
//         chatDetails.forEach(e => {
//             if (element === e.applicationId) {
//                 arr.push(e);
//             }
//         });
//         dispatch(setLastChats(arr));
//     }
//     return <div>
//         {/* customer table */}
//         {type === "a" && !full && <table>
//             <thead>
//                 {/* <tr>
//                     <th>id</th>
//                     <th>firstName</th>
//                     <th>lastName</th>
//                     <th>city</th>
//                     <th>address</th>
//                     <th>phone</th>
//                     <th>email</th>
//                   {!thisAssessor.isManager && <th>chat</th>}
//                 </tr> */}
//                 {/* <tr> */}
//                 Customer Details
//                 {/* </tr> */}
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>id: {customerChose.customerId}</td>
//                     <td>firstName: {customerChose.customerFirstName}</td>
//                     <td>lastName: {customerChose.customerLastName}</td>
//                     <td>city: {customerChose.customerCity}</td>
//                     <td>address: {customerChose.customerAddress}</td>
//                     <td>phone: {customerChose.customerPhone}</td>
//                     <td>email: {customerChose.customerEmail}</td>

//                 </tr>

//             </tbody>
//         </table>}

//         {(assessmentsDetails && applicationsDetails && finalAssessor && fullDetails.length > 0) && <>
//             {fullDetails.map(element => {
//                 return <>
//                     <div style={{ border: "solid 2px gray", width: "100%" }}>
//                         <div >
//                             {type === "a" && full && <table>
//                                 <thead>
//                                     <tr>
//                                         <th>id</th>
//                                         <th>firstName</th>
//                                         <th>lastName</th>
//                                         <th>city</th>
//                                         <th>address</th>
//                                         <th>phone</th>
//                                         <th>email</th>
//                                         {!thisAssessor.isManager && <th>chat</th>}
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {/* <tr>
//                     <td>customerChose.customerId}</td>
//                     <td>firstName: {customerChose.customerFirstName}</td>
//                     <td>lastName: {customerChose.customerLastName}</td>
//                     <td>city: {customerChose.customerCity}</td>
//                     <td>address: {customerChose.customerAddress}</td>
//                     <td>phone: {customerChose.customerPhone}</td>
//                     <td>email: {customerChose.customerEmail}</td>

//                 </tr> */}
//                                     {customersDetails && customersDetails.map(d => {

//                                         if (cust(d.customerId, element)) {
//                                             return <tr key={d.customerId}>

//                                                 <td>{d.customerId}</td>
//                                                 <td>firstName: {d.customerFirstName}</td>
//                                                 <td>lastName: {d.customerLastName}</td>
//                                                 <td>city: {d.customerCity}</td>
//                                                 <td>address: {d.customerAddress}</td>
//                                                 <td>phone: {d.customerPhone}</td>
//                                                 <td>email: {d.customerEmail}</td>

//                                             </tr>
//                                         }
//                                     }
//                                     )}

//                                 </tbody>
//                             </table>}
//                             {/* assessor table */}
//                             {(type === "c" || (type === "a" && thisAssessor.isManager === true)) && <table>
//                                 <thead>
//                                     <tr><th>assessor</th></tr>
//                                     <tr>
//                                         <th>assessorFirstName</th>
//                                         <th>assessorLastName</th>
//                                         <th>assessorCity</th>
//                                         <th>assessorAddress</th>
//                                         <th>assessorPhone</th>
//                                         <th>assessorEmail</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {finalAssessor.map(d => {

//                                         if (assess(d, element)) {
//                                             return <tr key={d.assessorId}>

//                                                 <td>{d.assessorFirstName}</td>
//                                                 <td>{d.assessorLastName}</td>
//                                                 <td>{d.assessorCity}</td>
//                                                 <td>{d.assessorAddress}</td>
//                                                 <td>{d.assessorPhone}</td>
//                                                 <td>{d.assessorEmail}</td>
//                                             </tr>
//                                         }
//                                     }
//                                     )}

//                                 </tbody>
//                             </table>}
//                             {/* application table */}

//                             <table>
//                                 <thead>
//                                     <tr><th>application</th></tr>

//                                     <tr>
//                                         <th>applicationId</th>
//                                         <td>applicationDate</td>
//                                         <td>lastApplicationDate</td>
//                                         <td>applicationStatus</td>

//                                     </tr>
//                                 </thead>
//                                 <tbody>


//                                     {applicationsDetails.map(a => {
//                                         if (a.applicationId === element) {
//                                             return <tr key={a.applicationId} >
//                                                 <td>{a.applicationId}</td>
//                                                 <td>{a.applicationDate}</td>
//                                                 <td>{a.lastApplicationDate}</td>
//                                                 <td>{a.applicationStatus}</td>

//                                             </tr>
//                                         }
//                                     })}

//                                 </tbody>
//                             </table>
//                             {/* assessment table */}
//                             <table>
//                                 <thead>
//                                     <tr><th>assessment</th></tr>

//                                     <tr>
//                                         <th>AssessmentId</th>
//                                         <th>Block</th>
//                                         <th>Plot</th>
//                                         <th>SubPlot</th>
//                                         <th>ConstructionYear</th>
//                                         <th>AcquisionPrice</th>
//                                         <th>AssessmentGoal</th>
//                                         <th>LegalState</th>
//                                         <th>BuildingPermit</th>
//                                         <th>IrregularitiesBuilding</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     {assessmentsDetails.map(s => {

//                                         if (s.assessmentId === element) {
//                                             return <tr key={s.assessmentId}>
//                                                 <td>{s.assessmentId}</td>
//                                                 <td>{s.block}</td>
//                                                 <td>{s.plot}</td>
//                                                 <td>{s.subPlot}</td>
//                                                 <td>{s.constructionYear}</td>
//                                                 <td>{s.acquisionPrice}</td>
//                                                 <td>{s.assessmentGoal}</td>
//                                                 <td>{s.legalState}</td>
//                                                 <td>{s.buildingPermit}</td>
//                                                 <td>{s.irregularitiesBuilding}</td>
//                                             </tr>
//                                         }
//                                     })}

//                                 </tbody>
//                             </table>
//                             {/* apartment details */}
//                             <table>
//                                 <thead>
//                                     <tr><th>apartment details</th></tr>
//                                     <tr>
//                                         <th>Id</th>
//                                         <th>CustomerId</th>
//                                         <th>City</th>
//                                         <th>Address</th>
//                                         <th>Size</th>
//                                         <th>Air Directions</th>
//                                         <th>Directions</th>
//                                         <th>Floor</th>
//                                         <th>Elevator</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>

//                                     {apartmentsDetails.map(g => {
//                                         if (g.apartmentId === element) {
//                                             return <tr>
//                                                 <td>{g.apartmentId}</td>
//                                                 <td>{g.customerId}</td>
//                                                 <td>{g.apartmentCity}</td>
//                                                 <td>{g.apartmentAddress}</td>
//                                                 <td>{g.apartmentSize}</td>
//                                                 <td>{g.airDirections}</td>
//                                                 <td>{g.directions}</td>
//                                                 <td>{g.floor}</td>
//                                                 <td>{g.elevator}</td>
//                                             </tr>
//                                         }
//                                     })}
//                                 </tbody>
//                             </table>
//                         </div>
//                         {/* </> */}
//                         <div>
//                             {!thisAssessor.isManager && <>
//                                 {!sent && <Button variant="text" onClick={() => { setSent(true) }}><MailOutlineOutlinedIcon /></Button>}
//                                 {sent && <>
//                                     <Button onClick={() => { dispatch(setApplicationId(element)); dispatch(setTo(customerChose.customerFirstName + " " + customerChose.customerLastName)); navigate('newChat') }}><BookmarkAddOutlinedIcon />new chat</Button><br />
//                                     <Button onClick={() => { chatMe(element); navigate('/home/lastChats') }}><BookmarkAddedOutlinedIcon />last chats</Button>
//                                 </>
//                                 }
//                             </>}
//                         </div>
//                     </div></>
//             })}</>
//         }
//         <Outlet></Outlet>
//     </div>
// }
// ////////////////////////////////////////////























// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Outlet, useNavigate } from "react-router-dom";

// // Material UI
// import { 
//   Button, 
//   Typography, 
//   Paper, 
//   Table, 
//   TableBody, 
//   TableCell, 
//   TableContainer, 
//   TableHead, 
//   TableRow,
//   Grid,
//   Card,
//   CardContent,
//   CardActions,
//   Divider,
//   Box,
//   Chip
// } from "@mui/material";

// // Icons
// import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
// import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
// import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
// import HomeIcon from '@mui/icons-material/Home';
// import PersonIcon from '@mui/icons-material/Person';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import AssessmentIcon from '@mui/icons-material/Assessment';

// // Redux actions
// import { applicationThunk } from "../redux/slices/get/applicatiionThunk";
// import { myApplicationsThunk } from "../redux/slices/get by assessor/myApplicationsThunk";
// import { assessmentThunk } from "../redux/slices/get/assessmentThunk";
// import { myAssessmentsThunk } from "../redux/slices/get by assessor/myAssessmentsThunk";
// import { apartmentDetailsThunk } from "../redux/slices/get/apartmentDetailsThunk";
// import { myApartmentDetailsThunk } from "../redux/slices/get by assessor/myApartmentDetailsThunk";
// import { yourApplicationsThunk } from "../redux/slices/get by customer/yourApplicationsThunk";
// import { yourAssessmentsThunk } from "../redux/slices/get by customer/yourAssessmentsThunk";
// import { yourApartmentDetailsThunk } from "../redux/slices/get by customer/yourApartmentsDetailsThunk";
// import { yourAssessorsThunk } from "../redux/slices/get by customer/yourAssessorsThunk";
// import { setApplicationId, setLastChats, setTo } from "../redux/slices/chatSlice";

// export const FullApplications = () => {
//   // Redux state
//   const thisAssessor = useSelector(state => state.assessor.thisAssessor);
//   const customerChose = useSelector(state => state.customer.customerChose);
//   const thisCustomer = useSelector(state => state.customer.thisCustomer);
//   const theApplication = useSelector(state => state.application.applications);
//   const myApplication = useSelector(state => state.application.myApplication);
//   const assessmentsDetails = useSelector(state => state.assessment.assessments);
//   const apartmentsDetails = useSelector(state => state.apartmentDetails.apartmentsDetails);
//   const customersDetails = useSelector(state => state.customer.customers);
//   const assessorsDetails = useSelector(state => state.assessor.assessors);
//   const full = useSelector(state => state.user.full);
//   const chatDetails = useSelector(state => state.chat.chats);
//   const type = useSelector(state => state.user.t);

//   // Local state
//   const [sent, setSent] = useState(false);
//   const [fullDetails, setFullDetails] = useState([]);
//   const [finalAssessor, setFinalAssessor] = useState([]);
//   const [applicationsDetails, setApplicationDetails] = useState([...theApplication]);

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   // Fetch data for customer applications
//   const getData = async () => {
//     const res = await dispatch(yourApplicationsThunk(customerChose.customerId));
//     if (res.payload != null) {
//       setApplicationDetails(res.payload);
//     }
//   };

//   // Initial data loading
//   useEffect(() => {
//     // Set assessor data based on user type
//     if (type === "a") {
//       if (thisAssessor.isManager)
//         setFinalAssessor(assessorsDetails);
//       else {
//         setFinalAssessor([thisAssessor]);
//       }
//     } else if (type === "c") {
//       setFinalAssessor(assessorsDetails);
//     }

//     // Load applications if not in full view
//     if (!full) {
//       getData();
//     }
//   }, []);

//   // Process data when all required data is loaded
//   useEffect(() => {
//     if (fullDetails.length === 0 && 
//         applicationsDetails.length !== 0 && 
//         apartmentsDetails.length !== 0 && 
//         assessmentsDetails.length !== 0 && 
//         finalAssessor.length !== 0) {
//       const applicationIds = applicationsDetails.map(element => element.applicationId);
//       setFullDetails(applicationIds);
//     }
//   }, [applicationsDetails, assessmentsDetails, apartmentsDetails, finalAssessor]);

//   // Helper functions
//   const assess = (assessor, applicationId) => {
//     const application = applicationsDetails.find(app => app.assessorId === assessor.assessorId);
//     return application && application.applicationId === applicationId;
//   };

//   const cust = (customerId, applicationId) => {
//     const apartment = apartmentsDetails.find(apt => apt.customerId === customerId);
//     return apartment && apartment.apartmentId === applicationId;
//   };

//   const chatMe = (applicationId) => {
//     const relevantChats = chatDetails.filter(chat => applicationId === chat.applicationId);
//     dispatch(setLastChats(relevantChats));
//   };

//   // Get status color for application status
//   const getStatusColor = (status) => {
//     switch(status?.toLowerCase()) {
//       case 'pending': return 'warning';
//       case 'approved': return 'success';
//       case 'rejected': return 'error';
//       default: return 'default';
//     }
//   };

//   // Format date string
//   const formatDate = (dateString) => {
//     if (!dateString) return 'לא זמין';
//     const date = new Date(dateString);
//     return date.toLocaleDateString('he-IL');
//   };

//   return (
//     <Box sx={{ padding: 3, backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
//       {/* Customer details section for assessor view */}
//       {type === "a" && !full && (
//         <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
//           <Typography variant="h5" component="h2" gutterBottom sx={{ 
//             borderBottom: '2px solid #1976d2', 
//             pb: 1, 
//             mb: 3,
//             display: 'flex',
//             alignItems: 'center'
//           }}>
//             <PersonIcon sx={{ mr: 1 }} /> פרטי לקוח
//           </Typography>

//           <Grid container spacing={2}>
//             <Grid item xs={12} sm={6} md={4}>
//               <Typography variant="body1"><strong>מזהה:</strong> {customerChose.customerId}</Typography>
//               <Typography variant="body1"><strong>שם פרטי:</strong> {customerChose.customerFirstName}</Typography>
//               <Typography variant="body1"><strong>שם משפחה:</strong> {customerChose.customerLastName}</Typography>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Typography variant="body1"><strong>עיר:</strong> {customerChose.customerCity}</Typography>
//               <Typography variant="body1"><strong>כתובת:</strong> {customerChose.customerAddress}</Typography>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Typography variant="body1"><strong>טלפון:</strong> {customerChose.customerPhone}</Typography>
//               <Typography variant="body1"><strong>דוא"ל:</strong> {customerChose.customerEmail}</Typography>
//             </Grid>
//           </Grid>
//         </Paper>
//       )}

//       {/* Applications list */}
//       {(assessmentsDetails && applicationsDetails && finalAssessor && fullDetails.length > 0) && (
//         <Grid container spacing={3}>
//           {fullDetails.map(applicationId => (
//             <Grid item xs={12} key={applicationId}>
//               <Card elevation={4} sx={{ borderRadius: 2, overflow: 'visible' }}>
//                 <CardContent>
//                   <Box sx={{ mb: 3 }}>
//                     <Typography variant="h5" component="h2" gutterBottom sx={{ 
//                       borderBottom: '2px solid #1976d2', 
//                       pb: 1,
//                       display: 'flex',
//                       alignItems: 'center'
//                     }}>
//                       <AssignmentIcon sx={{ mr: 1 }} /> בקשה מספר {applicationId}
//                     </Typography>
//                   </Box>

//                   <Grid container spacing={4}>
//                     {/* Customer details for manager view */}
//                     {type === "a" && full && (
//                       <Grid item xs={12}>
//                         <Paper elevation={2} sx={{ p: 2, mb: 3, borderRadius: 2 }}>
//                           <Typography variant="h6" gutterBottom sx={{ 
//                             display: 'flex',
//                             alignItems: 'center',
//                             color: '#1976d2'
//                           }}>
//                             <PersonIcon sx={{ mr: 1 }} /> פרטי לקוח
//                           </Typography>

//                           <TableContainer>
//                             <Table size="small">
//                               <TableHead>
//                                 <TableRow sx={{ backgroundColor: '#f0f7ff' }}>
//                                   <TableCell>מזהה</TableCell>
//                                   <TableCell>שם פרטי</TableCell>
//                                   <TableCell>שם משפחה</TableCell>
//                                   <TableCell>עיר</TableCell>
//                                   <TableCell>כתובת</TableCell>
//                                   <TableCell>טלפון</TableCell>
//                                   <TableCell>דוא"ל</TableCell>
//                                 </TableRow>
//                               </TableHead>
//                               <TableBody>
//                                 {customersDetails && customersDetails.map(customer => {
//                                   if (cust(customer.customerId, applicationId)) {
//                                     return (
//                                       <TableRow key={customer.customerId}>
//                                         <TableCell>{customer.customerId}</TableCell>
//                                         <TableCell>{customer.customerFirstName}</TableCell>
//                                         <TableCell>{customer.customerLastName}</TableCell>
//                                         <TableCell>{customer.customerCity}</TableCell>
//                                         <TableCell>{customer.customerAddress}</TableCell>
//                                         <TableCell>{customer.customerPhone}</TableCell>
//                                         <TableCell>{customer.customerEmail}</TableCell>
//                                       </TableRow>
//                                     );
//                                   }
//                                   return null;
//                                 })}
//                               </TableBody>
//                             </Table>
//                           </TableContainer>
//                         </Paper>
//                       </Grid>
//                     )}

//                     {/* Assessor details */}
//                     {(type === "c" || (type === "a" && thisAssessor.isManager === true)) && (
//                       <Grid item xs={12} md={6}>
//                         <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
//                           <Typography variant="h6" gutterBottom sx={{ 
//                             display: 'flex',
//                             alignItems: 'center',
//                             color: '#1976d2'
//                           }}>
//                             <PersonIcon sx={{ mr: 1 }} /> פרטי שמאי
//                           </Typography>

//                           <TableContainer>
//                             <Table size="small">
//                               <TableHead>
//                                 <TableRow sx={{ backgroundColor: '#f0f7ff' }}>
//                                   <TableCell>שם פרטי</TableCell>
//                                   <TableCell>שם משפחה</TableCell>
//                                   <TableCell>עיר</TableCell>
//                                   <TableCell>כתובת</TableCell>
//                                   <TableCell>טלפון</TableCell>
//                                   <TableCell>דוא"ל</TableCell>
//                                 </TableRow>
//                               </TableHead>
//                               <TableBody>
//                                 {finalAssessor.map(assessor => {
//                                   if (assess(assessor, applicationId)) {
//                                     return (
//                                       <TableRow key={assessor.assessorId}>
//                                         <TableCell>{assessor.assessorFirstName}</TableCell>
//                                         <TableCell>{assessor.assessorLastName}</TableCell>
//                                         <TableCell>{assessor.assessorCity}</TableCell>
//                                         <TableCell>{assessor.assessorAddress}</TableCell>
//                                         <TableCell>{assessor.assessorPhone}</TableCell>
//                                         <TableCell>{assessor.assessorEmail}</TableCell>
//                                       </TableRow>
//                                     );
//                                   }
//                                   return null;
//                                 })}
//                               </TableBody>
//                             </Table>
//                           </TableContainer>
//                         </Paper>
//                       </Grid>
//                     )}

//                     {/* Application details */}
//                     <Grid item xs={12} md={6}>
//                       <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
//                         <Typography variant="h6" gutterBottom sx={{ 
//                           display: 'flex',
//                           alignItems: 'center',
//                           color: '#1976d2'
//                         }}>
//                           <AssignmentIcon sx={{ mr: 1 }} /> פרטי בקשה
//                         </Typography>

//                         <TableContainer>
//                           <Table size="small">
//                             <TableHead>
//                               <TableRow sx={{ backgroundColor: '#f0f7ff' }}>
//                                 <TableCell>מזהה בקשה</TableCell>
//                                 <TableCell>תאריך בקשה</TableCell>
//                                 <TableCell>תאריך עדכון אחרון</TableCell>
//                                 <TableCell>סטטוס</TableCell>
//                               </TableRow>
//                             </TableHead>
//                             <TableBody>
//                               {applicationsDetails.map(application => {
//                                 if (application.applicationId === applicationId) {
//                                   return

// return (
//     <TableRow key={application.applicationId}>
//       <TableCell>{application.applicationId}</TableCell>
//       <TableCell>{formatDate(application.applicationDate)}</TableCell>
//       <TableCell>{formatDate(application.lastApplicationDate)}</TableCell>
//       <TableCell>
//         <Chip 
//           label={application.applicationStatus} 
//           color={getStatusColor(application.applicationStatus)}
//           size="small"
//         />
//       </TableCell>
//     </TableRow>
//   );
// }
// return null;
// })}
// </TableBody>
// </Table>
// </TableContainer>
// </Paper>
// </Grid>

// {/* Assessment details */}
// <Grid item xs={12}>
// <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
// <Typography variant="h6" gutterBottom sx={{ 
// display: 'flex',
// alignItems: 'center',
// color: '#1976d2'
// }}>
// <AssessmentIcon sx={{ mr: 1 }} /> פרטי שומה
// </Typography>

// <TableContainer>
// <Table size="small">
// <TableHead>
// <TableRow sx={{ backgroundColor: '#f0f7ff' }}>
// <TableCell>מזהה שומה</TableCell>
// <TableCell>גוש</TableCell>
// <TableCell>חלקה</TableCell>
// <TableCell>תת-חלקה</TableCell>
// <TableCell>שנת בנייה</TableCell>
// <TableCell>מחיר רכישה</TableCell>
// <TableCell>מטרת שומה</TableCell>
// <TableCell>מצב משפטי</TableCell>
// <TableCell>היתר בנייה</TableCell>
// <TableCell>חריגות בנייה</TableCell>
// </TableRow>
// </TableHead>
// <TableBody>
// {assessmentsDetails.map(assessment => {
// if (assessment.assessmentId === applicationId) {
//   return (
//     <TableRow key={assessment.assessmentId}>
//       <TableCell>{assessment.assessmentId}</TableCell>
//       <TableCell>{assessment.block}</TableCell>
//       <TableCell>{assessment.plot}</TableCell>
//       <TableCell>{assessment.subPlot}</TableCell>
//       <TableCell>{assessment.constructionYear}</TableCell>
//       <TableCell>{assessment.acquisionPrice}</TableCell>
//       <TableCell>{assessment.assessmentGoal}</TableCell>
//       <TableCell>{assessment.legalState}</TableCell>
//       <TableCell>{assessment.buildingPermit ? 'כן' : 'לא'}</TableCell>
//       <TableCell>{assessment.irregularitiesBuilding ? 'כן' : 'לא'}</TableCell>
//     </TableRow>
//   );
// }
// return null;
// })}
// </TableBody>
// </Table>
// </TableContainer>
// </Paper>
// </Grid>

// {/* Apartment details */}
// <Grid item xs={12}>
// <Paper elevation={2} sx={{ p: 2, borderRadius: 2 }}>
// <Typography variant="h6" gutterBottom sx={{ 
// display: 'flex',
// alignItems: 'center',
// color: '#1976d2'
// }}>
// <HomeIcon sx={{ mr: 1 }} /> פרטי הנכס
// </Typography>

// <TableContainer>
// <Table size="small">
// <TableHead>
// <TableRow sx={{ backgroundColor: '#f0f7ff' }}>
// <TableCell>מזהה</TableCell>
// <TableCell>מזהה לקוח</TableCell>
// <TableCell>עיר</TableCell>
// <TableCell>כתובת</TableCell>
// <TableCell>גודל (מ"ר)</TableCell>
// <TableCell>כיווני אוויר</TableCell>
// <TableCell>כיוונים</TableCell>
// <TableCell>קומה</TableCell>
// <TableCell>מעלית</TableCell>
// </TableRow>
// </TableHead>
// <TableBody>
// {apartmentsDetails.map(apartment => {
// if (apartment.apartmentId === applicationId) {
//   return (
//     <TableRow key={apartment.apartmentId}>
//       <TableCell>{apartment.apartmentId}</TableCell>
//       <TableCell>{apartment.customerId}</TableCell>
//       <TableCell>{apartment.apartmentCity}</TableCell>
//       <TableCell>{apartment.apartmentAddress}</TableCell>
//       <TableCell>{apartment.apartmentSize}</TableCell>
//       <TableCell>{apartment.airDirections}</TableCell>
//       <TableCell>{apartment.directions}</TableCell>
//       <TableCell>{apartment.floor}</TableCell>
//       <TableCell>{apartment.elevator ? 'כן' : 'לא'}</TableCell>
//     </TableRow>
//   );
// }
// return null;
// })}
// </TableBody>
// </Table>
// </TableContainer>
// </Paper>
// </Grid>
// </Grid>
// </CardContent>

// {/* Chat actions */}
// {!thisAssessor.isManager && (
// <CardActions sx={{ p: 2, justifyContent: 'flex-end' }}>
// {!sent ? (
// <Button 
// variant="outlined" 
// startIcon={<MailOutlineOutlinedIcon />} 
// onClick={() => { setSent(true) }}
// sx={{ borderRadius: 2 }}
// >
// צור קשר
// </Button>
// ) : (
// <Box sx={{ display: 'flex', gap: 2 }}>
// <Button 
// variant="contained" 
// startIcon={<BookmarkAddOutlinedIcon />}
// onClick={() => { 
// dispatch(setApplicationId(applicationId)); 
// dispatch(setTo(customerChose.customerFirstName + " " + customerChose.customerLastName)); 
// navigate('newChat');
// }}
// sx={{ borderRadius: 2 }}
// >
// צ'אט חדש
// </Button>
// <Button 
// variant="outlined" 
// startIcon={<BookmarkAddedOutlinedIcon />}
// onClick={() => { 
// chatMe(applicationId); 
// navigate('/home/lastChats');
// }}
// sx={{ borderRadius: 2 }}
// >
// צ'אטים קודמים
// </Button>
// </Box>
// )}
// </CardActions>
// )}
// </Card>
// </Grid>
// ))}
// </Grid>
// )}

// {/* No applications message */}
// {(!assessmentsDetails || !applicationsDetails || !finalAssessor || fullDetails.length === 0) && (
// <Paper elevation={3} sx={{ p: 4, textAlign: 'center', borderRadius: 2 }}>
// <Typography variant="h5" color="text.secondary">
// אין בקשות זמינות כרגע
// </Typography>
// <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
// בקשות חדשות יופיעו כאן כאשר יתקבלו
// </Typography>
// </Paper>
// )}

// <Outlet />
// </Box>
// );
// };



//////////////////////////////////////////////////////////////////

// import React, { useState, useEffect, useRef } from 'react';
// import { 
//   Box, 
//   Container, 
//   Typography, 
//   Card, 
//   CardContent, 
//   Button, 
//   Grid, 
//   Paper, 
//   TextField, 
//   InputAdornment, 
//   IconButton, 
//   Table, 
//   TableBody, 
//   TableCell, 
//   TableContainer, 
//   TableHead, 
//   TableRow, 
//   Chip, 
//   Avatar, 
//   Collapse, 
//   Fade,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   Snackbar,
//   CircularProgress,
//   Pagination
// } from '@mui/material';
// import { Alert } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import SortIcon from '@mui/icons-material/Sort';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import PersonIcon from '@mui/icons-material/Person';
// import DateRangeIcon from '@mui/icons-material/DateRange';
// import HomeIcon from '@mui/icons-material/Home';
// import AssessmentIcon from '@mui/icons-material/Assessment';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import ClearIcon from '@mui/icons-material/Clear';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelIcon from '@mui/icons-material/Cancel';
// import BlockIcon from '@mui/icons-material/Block';
// import SaveIcon from '@mui/icons-material/Save';
// import SearchOffIcon from '@mui/icons-material/SearchOff';

// export const  FullApplications = ({ type, thisAssessor, customersDetails, full })=> {
//   const [applicationIds, setApplicationIds] = useState([]);
//   const [applicationsDetails, setApplicationsDetails] = useState(null);
//   const [assessmentsDetails, setAssessmentsDetails] = useState(null);
//   const [finalAssessor, setFinalAssessor] = useState(null);
//   const [expandedApplications, setExpandedApplications] = useState({});
//   const [filteredApplications, setFilteredApplications] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [sortBy, setSortBy] = useState('none');
//   const [loading, setLoading] = useState(true);

//   // Pagination state
//   const [currentPage, setCurrentPage] = useState(1);
//   const applicationsPerPage = 5;

//   // Assessment dialog state

//   const [assessmentDialogOpen, setAssessmentDialogOpen] = useState(false);
//   const [selectedApplicationId, setSelectedApplicationId] = useState(null);
//   const [assessmentValue, setAssessmentValue] = useState('');
//   const [assessmentDate, setAssessmentDate] = useState(new Date().toISOString().split('T')[0]);
//   const [assessmentNotes, setAssessmentNotes] = useState('');
//   const [existingAssessment, setExistingAssessment] = useState(null);

//   // Status change dialog state
//   const [statusDialogOpen, setStatusDialogOpen] = useState(false);
//   const [newStatus, setNewStatus] = useState('');

//   // Snackbar state
//   const [snackbarOpen, setSnackbarOpen] = useState(false);
//   const [snackbarMessage, setSnackbarMessage] = useState('');
//   const [snackbarSeverity, setSnackbarSeverity] = useState('success');

//   const scrollRef = useRef(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         // Fetch applications based on user type
//         let response;
//         if (type === "c") {
//           response = await fetch(`/api/applications/customer/${thisAssessor.customerId}`);
//         } else if (type === "a") {
//           if (thisAssessor.isManager) {
//             response = await fetch('/api/applications');
//           } else {
//             response = await fetch(`/api/applications/assessor/${thisAssessor.assessorId}`);
//           }
//         }

//         if (response.ok) {
//           const data = await response.json();
//           setApplicationIds(data);
//           setFilteredApplications(data);
//         }

//         // Fetch application details
//         const appDetailsResponse = await fetch('/api/applications/details');
//         if (appDetailsResponse.ok) {
//           const appDetailsData = await appDetailsResponse.json();
//           setApplicationsDetails(appDetailsData);
//         }

//         // Fetch assessments
//         const assessmentsResponse = await fetch('/api/assessments');
//         if (assessmentsResponse.ok) {
//           const assessmentsData = await assessmentsResponse.json();
//           setAssessmentsDetails(assessmentsData);
//         }

//         // Fetch assessors
//         const assessorsResponse = await fetch('/api/assessors');
//         if (assessorsResponse.ok) {
//           const assessorsData = await assessorsResponse.json();
//           setFinalAssessor(assessorsData);
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         showSnackbar('Failed to load data. Please try again.', 'error');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [type, thisAssessor]);

//   // Helper function to format dates
//   const formatDate = (dateString) => {
//     if (!dateString) return 'Not specified';
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', { 
//       year: 'numeric', 
//       month: 'short', 
//       day: 'numeric' 
//     });
//   };

//   // Helper function to determine status color
//   const getStatusColor = (status) => {
//     if (!status) return 'default';

//     const statusLower = status.toLowerCase();
//     if (statusLower === 'approved') return 'success';
//     if (statusLower === 'rejected') return 'error';
//     if (statusLower === 'pending') return 'warning';
//     return 'default';
//   };

//   // Toggle application expansion
//   const toggleApplicationExpansion = (applicationId) => {
//     setExpandedApplications(prev => ({
//       ...prev,
//       [applicationId]: !prev[applicationId]
//     }));
//   };

//   // Handle search
//   const handleSearch = () => {
//     if (!searchTerm.trim()) {
//       setFilteredApplications(applicationIds);
//       return;
//     }

//     const searchTermLower = searchTerm.toLowerCase();
//     const filtered = applicationIds.filter(appId => {
//       const application = applicationsDetails.find(app => app.applicationId === appId);
//       if (!application) return false;

//       // Search in multiple fields
//       return (
//         application.applicationId.toString().includes(searchTermLower) ||
//         (application.applicationCity && application.applicationCity.toLowerCase().includes(searchTermLower)) ||
//         (application.applicationAddress && application.applicationAddress.toLowerCase().includes(searchTermLower)) ||
//         (application.applicationStatus && application.applicationStatus.toLowerCase().includes(searchTermLower)) ||
//         (application.applicationPropertyType && application.applicationPropertyType.toLowerCase().includes(searchTermLower))
//       );
//     });

//     setFilteredApplications(filtered);
//     setCurrentPage(1); // Reset to first page after search
//   };

//   // Handle sort
//   const handleSort = (sortType) => {
//     setSortBy(sortType);

//     if (sortType === 'none') {
//       setFilteredApplications([...applicationIds]);
//       return;
//     }

//     const sorted = [...filteredApplications].sort((a, b) => {
//       const appA = applicationsDetails.find(app => app.applicationId === a);
//       const appB = applicationsDetails.find(app => app.applicationId === b);

//       if (!appA || !appB) return 0;

//       if (sortType === 'date') {
//         const dateA = new Date(appA.applicationDate || 0);
//         const dateB = new Date(appB.applicationDate || 0);
//         return dateB - dateA; // Newest first
//       }

//       if (sortType === 'status') {
//         const statusA = appA.applicationStatus || '';
//         const statusB = appB.applicationStatus || '';
//         return statusA.localeCompare(statusB);
//       }

//       if (sortType === 'city') {
//         const cityA = appA.applicationCity || '';
//         const cityB = appB.applicationCity || '';
//         return cityA.localeCompare(cityB);
//       }

//       return 0;
//     });

//     setFilteredApplications(sorted);
//     setCurrentPage(1); // Reset to first page after sorting
//   };

//   // Handle page change for pagination
//   const handlePageChange = (event, value) => {
//     setCurrentPage(value);
//     // Scroll to top of the applications list
//     if (scrollRef.current) {
//       scrollRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   // Helper function to check if customer is associated with application
//   const cust = (customerId, applicationId) => {
//     if (!applicationsDetails) return false;
//     const application = applicationsDetails.find(app => app.applicationId === applicationId);
//     return application && application.customerId === customerId;
//   };

//   // Helper function to check if assessor is associated with application
//   const assess = (assessor, applicationId) => {
//     if (!applicationsDetails) return false;
//     const application = applicationsDetails.find(app => app.applicationId === applicationId);
//     return application && application.assessorId === assessor.assessorId;
//   };

//   // Handle assessment dialog open
//   const handleAssessmentClick = (applicationId) => {
//     setSelectedApplicationId(applicationId);

//     // Check if assessment already exists
//     const existingAssessment = assessmentsDetails.find(
//       assessment => assessment.applicationId === applicationId
//     );

//     if (existingAssessment) {
//       setExistingAssessment(existingAssessment);
//       setAssessmentValue(existingAssessment.assessmentValue || '');
//       setAssessmentDate(existingAssessment.assessmentDate ? new Date(existingAssessment.assessmentDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]);
//       setAssessmentNotes(existingAssessment.assessmentNotes || '');
//     } else {
//       setExistingAssessment(null);
//       setAssessmentValue('');
//       setAssessmentDate(new Date().toISOString().split('T')[0]);
//       setAssessmentNotes('');
//     }

//     setAssessmentDialogOpen(true);
//   };

//   // Handle assessment dialog close
//   const handleCloseAssessmentDialog = () => {
//     setAssessmentDialogOpen(false);
//     setSelectedApplicationId(null);
//     setExistingAssessment(null);
//   };

//   // Handle save assessment
//   const handleSaveAssessment = async () => {
//     try {
//       const assessmentData = {
//         applicationId: selectedApplicationId,
//         assessorId: thisAssessor.assessorId,
//         assessmentValue,
//         assessmentDate,
//         assessmentNotes
//       };

//       let url = '/api/assessments';
//       let method = 'POST';

//       if (existingAssessment) {
//         url = `/api/assessments/${existingAssessment.assessmentId}`;
//         method = 'PUT';
//         assessmentData.assessmentId = existingAssessment.assessmentId;
//       }

//       const response = await fetch(url, {
//         method,
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(assessmentData)
//       });

//       if (response.ok) {
//         // Refresh assessments data
//         const assessmentsResponse = await fetch('/api/assessments');
//         if (assessmentsResponse.ok) {
//           const assessmentsData = await assessmentsResponse.json();
//           setAssessmentsDetails(assessmentsData);
//         }

//         showSnackbar(
//           existingAssessment ? 'Assessment updated successfully' : 'Assessment created successfully',
//           'success'
//         );
//         handleCloseAssessmentDialog();
//       } else {
//         throw new Error('Failed to save assessment');
//       }
//     } catch (error) {
//       console.error('Error saving assessment:', error);
//       showSnackbar('Failed to save assessment. Please try again.', 'error');
//     }
//   };

//   // Handle status change
//   const handleStatusChange = (applicationId, status) => {
//     setSelectedApplicationId(applicationId);
//     setNewStatus(status);
//     setStatusDialogOpen(true);
//   };

//   // Confirm status change
//   const confirmStatusChange = async () => {
//     try {
//       const response = await fetch(`/api/applications/${selectedApplicationId}/status`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ status: newStatus })
//       });

//       if (response.ok) {
//         // Update local state
//         const updatedApplications = applicationsDetails.map(app => 
//           app.applicationId === selectedApplicationId 
//             ? { ...app, applicationStatus: newStatus } 
//             : app
//         );
//         setApplicationsDetails(updatedApplications);

//         showSnackbar(`Application ${newStatus.toLowerCase()} successfully`, 'success');
//         setStatusDialogOpen(false);
//       } else {
//         throw new Error('Failed to update status');
//       }
//     } catch (error) {
//       console.error('Error updating status:', error);
//       showSnackbar('Failed to update application status. Please try again.', 'error');
//     }
//   };

//   // Show snackbar message
//   const showSnackbar = (message, severity) => {
//     setSnackbarMessage(message);
//     setSnackbarSeverity(severity);
//     setSnackbarOpen(true);
//   };

//   // Get current applications for pagination
//   const indexOfLastApplication = currentPage * applicationsPerPage;
//   const indexOfFirstApplication = indexOfLastApplication - applicationsPerPage;
//   const currentApplications = filteredApplications.slice(indexOfFirstApplication, indexOfLastApplication);

//   return (
//     <Box sx={{ py: 4 }} ref={scrollRef}>
//       <Container maxWidth="lg">
//         <Typography 
//           variant="h4" 
//           component="h1" 
//           gutterBottom 
//           sx={{ 
//             fontWeight: 700, 
//             color: '#2c3e50',
//             mb: 4,
//             textAlign: 'center'
//           }}
//         >
//           {type === "c" ? "My Applications" : "Property Assessment Applications"}
//         </Typography>
//       </Container>

//       {/* Filters and search */}
//       <Box sx={{ 
//         mb: 4, 
//         px: 3,
//         display: 'flex', 
//         flexDirection: { xs: 'column', md: 'row' }, 
//         justifyContent: 'space-between',

//         alignItems: { xs: 'stretch', md: 'center' },
//         gap: 2
//       }}>
//         {/* Sort buttons */}
//         <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
//           <Button
//             variant={sortBy === 'date' ? 'contained' : 'outlined'}
//             size="small"
//             onClick={() => handleSort('date')}
//             startIcon={<DateRangeIcon />}
//             sx={{
//               background: sortBy === 'date' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
//               '&:hover': {
//                 background: sortBy === 'date' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
//               }
//             }}
//           >
//             Date
//           </Button>
//           <Button
//             variant={sortBy === 'status' ? 'contained' : 'outlined'}
//             size="small"
//             onClick={() => handleSort('status')}
//             startIcon={<AssignmentIcon />}
//             sx={{
//               background: sortBy === 'status' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
//               '&:hover': {
//                 background: sortBy === 'status' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
//               }
//             }}
//           >
//             Status
//           </Button>
//           <Button
//             variant={sortBy === 'city' ? 'contained' : 'outlined'}
//             size="small"
//             onClick={() => handleSort('city')}
//             startIcon={<HomeIcon />}
//             sx={{
//               background: sortBy === 'city' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
//               '&:hover': {
//                 background: sortBy === 'city' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
//               }
//             }}
//           >
//             City
//           </Button>
//           <Button
//             variant={sortBy === 'none' ? 'contained' : 'outlined'}
//             size="small"
//             onClick={() => handleSort('none')}
//             startIcon={<RefreshIcon />}
//             sx={{
//               background: sortBy === 'none' ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' : 'transparent',
//               color: sortBy === 'none' ? '#2c3e50' : 'inherit',
//               '&:hover': {
//                 background: sortBy === 'none' ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 90%)' : 'rgba(195, 207, 226, 0.1)'
//               }
//             }}
//           >
//             Default View
//           </Button>
//         </Box>

//         {/* Search */}
//         <Box sx={{ display: 'flex', gap: 1, flexGrow: { xs: 1, md: 0 }, maxWidth: { xs: '100%', md: '300px' }, mt: { xs: 2, md: 0 } }}>
//           <TextField
//             size="small"
//             placeholder="Search applications..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//               endAdornment: searchTerm ? (
//                 <InputAdornment position="end">
//                   <IconButton size="small" onClick={() => setSearchTerm('')}>
//                     <ClearIcon fontSize="small" />
//                   </IconButton>
//                 </InputAdornment>
//               ) : null
//             }}
//             sx={{ flexGrow: 1 }}
//           />
//           <Button
//             variant="contained"
//             size="small"
//             onClick={handleSearch}
//             sx={{
//               background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//               '&:hover': {
//                 background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
//               }
//             }}
//           >
//             Search
//           </Button>
//         </Box>
//       </Box>

//       {/* Applications list */}
//       <Container maxWidth="lg">
//         {(assessmentsDetails && applicationsDetails && finalAssessor && currentApplications.length > 0) ? (
//           <Box>
//             {currentApplications.map((applicationId, index) => {
//               const application = applicationsDetails.find(app => app.applicationId === applicationId);
//               const isApproved = application?.applicationStatus?.toLowerCase() === 'approved';
//               const isPending = application?.applicationStatus?.toLowerCase() === 'pending';

//               // Determine card background gradient based on status
//               const gradientBackground = isApproved
//                 ? 'linear-gradient(135deg, #EBF5FB 0%, #D6EAF8 100%)' // Light blue for approved
//                 : isPending
//                   ? 'linear-gradient(135deg, #FEF9E7 0%, #FCF3CF 100%)' // Light yellow for pending
//                   : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'; // Default light gray

//               return (
//                 <Fade in={true} timeout={1000 + (index * 200)} key={applicationId}>
//                   <Card 
//                     elevation={4} 
//                     sx={{ 
//                       borderRadius: 3, 
//                       overflow: 'visible',
//                       mb: 4,
//                       background: gradientBackground,
//                       transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                       '&:hover': {
//                         transform: 'translateY(-3px)',
//                         boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)'
//                       },
//                       ...(isPending && {
//                         borderLeft: '8px solid #f39c12',
//                       }),
//                       ...(isApproved && {
//                         borderLeft: '8px solid #2ecc71',
//                       }),
//                       ...(!isApproved && !isPending && {
//                         borderLeft: '8px solid #e74c3c',
//                       })
//                     }}
//                   >
//                     <CardContent>
//                       <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
//                         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                           <Avatar
//                             sx={{
//                               bgcolor: isPending ? '#f39c12' : isApproved ? '#2ecc71' : '#e74c3c',
//                               color: '#fff',
//                               mr: 2,
//                               width: 40,
//                               height: 40
//                             }}
//                           >
//                             <AssignmentIcon />
//                           </Avatar>
//                           <Typography 
//                             variant="h5" 
//                             component="h2" 
//                             fontWeight="700"
//                             color="#2c3e50"
//                           >
//                             Application #{applicationId}
//                           </Typography>
//                         </Box>

//                         <Box sx={{ display: 'flex', alignItems: 'center', mt: { xs: 2, sm: 0 } }}>
//                           <Chip
//                             label={application?.applicationStatus || 'Unknown'}
//                             color={getStatusColor(application?.applicationStatus)}
//                             sx={{ 
//                               fontWeight: 600,
//                               mr: 2,
//                               boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
//                             }}
//                           />
//                           <Typography variant="body2" color="#7f8c8d" sx={{ display: 'flex', alignItems: 'center' }}>
//                             <DateRangeIcon sx={{ fontSize: 16, mr: 0.5 }} />
//                             {formatDate(application?.applicationDate)}
//                           </Typography>
//                         </Box>
//                       </Box>

//                       <Button
//                         fullWidth
//                         variant="outlined"
//                         onClick={() => toggleApplicationExpansion(applicationId)}
//                         endIcon={expandedApplications[applicationId] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                         sx={{
//                           mb: 2,
//                           borderRadius: 2,
//                           p: 1,
//                           justifyContent: 'space-between',
//                           color: '#2c3e50',
//                           borderColor: 'rgba(44, 62, 80, 0.2)',
//                           '&:hover': {
//                             borderColor: '#3a7bd5',
//                             backgroundColor: 'rgba(58, 123, 213, 0.05)'
//                           }
//                         }}
//                       >
//                         <Typography variant="button" fontWeight="600">
//                           {expandedApplications[applicationId] ? 'Hide Details' : 'View Details'}
//                         </Typography>
//                       </Button>

//                       <Collapse in={expandedApplications[applicationId]} timeout="auto" unmountOnExit>
//                         <Grid container spacing={3}>
//                           {/* Customer details for manager view */}
//                           {type === "a" && full && (
//                             <Grid item xs={12}>
//                               <Paper 
//                                 elevation={0} 
//                                 sx={{ 
//                                   p: 2, 
//                                   mb: 3, 
//                                   borderRadius: 2,
//                                   background: 'rgba(255, 255, 255, 0.5)',
//                                   border: '1px solid rgba(0, 0, 0, 0.05)'
//                                 }}
//                               >
//                                 <Typography 
//                                   variant="h6" 
//                                   gutterBottom 
//                                   sx={{
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     color: '#2c3e50',
//                                     fontWeight: 600,
//                                     mb: 2
//                                   }}
//                                 >
//                                   <PersonIcon sx={{ mr: 1, color: '#3a7bd5' }} /> Customer Details
//                                 </Typography>

//                                 <TableContainer sx={{ borderRadius: 2, overflow: 'hidden' }}>
//                                   <Table size="small">
//                                     <TableHead>
//                                       <TableRow sx={{ backgroundColor: '#f0f7ff' }}>
//                                         <TableCell>ID</TableCell>
//                                         <TableCell>First Name</TableCell>
//                                         <TableCell>Last Name</TableCell>
//                                         <TableCell>City</TableCell>
//                                         <TableCell>Address</TableCell>
//                                         <TableCell>Phone</TableCell>
//                                         <TableCell>Email</TableCell>
//                                       </TableRow>
//                                     </TableHead>
//                                     <TableBody>
//                                       {customersDetails && customersDetails.map(customer => {
//                                         if (cust(customer.customerId, applicationId)) {
//                                           return (
//                                             <TableRow key={customer.customerId}>
//                                               <TableCell>{customer.customerId}</TableCell>
//                                               <TableCell>{customer.customerFirstName}</TableCell>
//                                               <TableCell>{customer.customerLastName}</TableCell>
//                                               <TableCell>{customer.customerCity}</TableCell>
//                                               <TableCell>{customer.customerAddress}</TableCell>
//                                               <TableCell>{customer.customerPhone}</TableCell>
//                                               <TableCell>{customer.customerEmail}</TableCell>
//                                             </TableRow>
//                                           );
//                                         }
//                                         return null;
//                                       })}
//                                     </TableBody>
//                                   </Table>
//                                 </TableContainer>
//                               </Paper>
//                             </Grid>
//                           )}

//                           {/* Assessor details */}
//                           {(type === "c" || (type === "a" && thisAssessor.isManager === true)) && (
//                             <Grid item xs={12} md={6}>
//                               <Paper 
//                                 elevation={0} 
//                                 sx={{ 
//                                   p: 2, 
//                                   borderRadius: 2,
//                                   height: '100%',
//                                   background: 'rgba(255, 255, 255, 0.5)',
//                                   border: '1px solid rgba(0, 0, 0, 0.05)'
//                                 }}
//                               >
//                                 <Typography 
//                                   variant="h6" 
//                                   gutterBottom 
//                                   sx={{
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                     color: '#2c3e50',
//                                     fontWeight: 600,
//                                     mb: 2
//                                   }}
//                                 >
//                                   <PersonIcon sx={{ mr: 1, color: '#3a7bd5' }} /> Assessor Details
//                                 </Typography>

//                                 <TableContainer sx={{ borderRadius: 2, overflow: 'hidden' }}>
//                                   <Table size="small">
//                                     <TableHead>
//                                       <TableRow sx={{ backgroundColor: '#f0f7ff' }}>
//                                         <TableCell>First Name</TableCell>
//                                         <TableCell>Last Name</TableCell>
//                                         <TableCell>City</TableCell>
//                                         <TableCell>Address</TableCell>
//                                         <TableCell>Phone</TableCell>
//                                         <TableCell>Email</TableCell>
//                                       </TableRow>
//                                     </TableHead>
//                                     <TableBody>
//                                       {finalAssessor.map(assessor => {
//                                         if (assess(assessor, applicationId)) {
//                                           return (
//                                             <TableRow key={assessor.assessorId}>
//                                               <TableCell>{assessor.assessorFirstName}</TableCell>
//                                               <TableCell>{assessor.assessorLastName}</TableCell>
//                                               <TableCell>{assessor.assessorCity}</TableCell>
//                                               <TableCell>{assessor.assessorAddress}</TableCell>
//                                               <TableCell>{assessor.assessorPhone}</TableCell>
//                                               <TableCell>{assessor.assessorEmail}</TableCell>
//                                             </TableRow>
//                                           );
//                                         }
//                                         return null;
//                                       })}
//                                     </TableBody>
//                                   </Table>
//                                 </TableContainer>
//                               </Paper>
//                             </Grid>
//                           )}

//                           {/* Application details */}
//                           <Grid item xs={12} md={6}>
//                             <Paper 
//                               elevation={0} 
//                               sx={{ 
//                                 p: 2, 
//                                 borderRadius: 2,
//                                 height: '100%',
//                                 background: 'rgba(255, 255, 255, 0.5)',

// border: '1px solid rgba(0, 0, 0, 0.05)'
// }}
// >
// <Typography 
//   variant="h6" 
//   gutterBottom 
//   sx={{
//     display: 'flex',
//     alignItems: 'center',
//     color: '#2c3e50',
//     fontWeight: 600,
//     mb: 2
//   }}
// >
//   <AssignmentIcon sx={{ mr: 1, color: '#3a7bd5' }} /> Application Details
// </Typography>

// <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
//   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//     <Typography variant="subtitle2" sx={{ minWidth: 120, fontWeight: 600, color: '#34495e' }}>
//       Status:
//     </Typography>
//     <Chip
//       label={application?.applicationStatus || 'Unknown'}
//       color={getStatusColor(application?.applicationStatus)}
//       size="small"
//       sx={{ fontWeight: 600 }}
//     />
//   </Box>

//   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//     <Typography variant="subtitle2" sx={{ minWidth: 120, fontWeight: 600, color: '#34495e' }}>
//       Date:
//     </Typography>
//     <Typography variant="body2">
//       {formatDate(application?.applicationDate)}
//     </Typography>
//   </Box>

//   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//     <Typography variant="subtitle2" sx={{ minWidth: 120, fontWeight: 600, color: '#34495e' }}>
//       City:
//     </Typography>
//     <Typography variant="body2">
//       {application?.applicationCity || 'Not specified'}
//     </Typography>
//   </Box>

//   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//     <Typography variant="subtitle2" sx={{ minWidth: 120, fontWeight: 600, color: '#34495e' }}>
//       Address:
//     </Typography>
//     <Typography variant="body2">
//       {application?.applicationAddress || 'Not specified'}
//     </Typography>
//   </Box>

//   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//     <Typography variant="subtitle2" sx={{ minWidth: 120, fontWeight: 600, color: '#34495e' }}>
//       Property Type:
//     </Typography>
//     <Typography variant="body2">
//       {application?.applicationPropertyType || 'Not specified'}
//     </Typography>
//   </Box>

//   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//     <Typography variant="subtitle2" sx={{ minWidth: 120, fontWeight: 600, color: '#34495e' }}>
//       Property Size:
//     </Typography>
//     <Typography variant="body2">
//       {application?.applicationPropertySize ? `${application.applicationPropertySize} sqm` : 'Not specified'}
//     </Typography>
//   </Box>

//   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//     <Typography variant="subtitle2" sx={{ minWidth: 120, fontWeight: 600, color: '#34495e' }}>
//       Rooms:
//     </Typography>
//     <Typography variant="body2">
//       {application?.applicationRooms || 'Not specified'}
//     </Typography>
//   </Box>
// </Box>
// </Paper>
// </Grid>

// {/* Assessment details */}
// <Grid item xs={12}>
// <Paper 
// elevation={0} 
// sx={{ 
//   p: 2, 
//   borderRadius: 2,
//   background: 'rgba(255, 255, 255, 0.5)',
//   border: '1px solid rgba(0, 0, 0, 0.05)'
// }}
// >
// <Typography 
//   variant="h6" 
//   gutterBottom 
//   sx={{
//     display: 'flex',
//     alignItems: 'center',
//     color: '#2c3e50',
//     fontWeight: 600,
//     mb: 2
//   }}
// >
//   <AssessmentIcon sx={{ mr: 1, color: '#3a7bd5' }} /> Assessment Details
// </Typography>

// {assessmentsDetails.filter(assessment => assessment.applicationId === applicationId).length > 0 ? (
//   <TableContainer sx={{ borderRadius: 2, overflow: 'hidden' }}>
//     <Table size="small">
//       <TableHead>
//         <TableRow sx={{ backgroundColor: '#f0f7ff' }}>
//           <TableCell>Assessment ID</TableCell>
//           <TableCell>Date</TableCell>
//           <TableCell>Value</TableCell>
//           <TableCell>Notes</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {assessmentsDetails
//           .filter(assessment => assessment.applicationId === applicationId)
//           .map(assessment => (
//             <TableRow key={assessment.assessmentId}>
//               <TableCell>{assessment.assessmentId}</TableCell>
//               <TableCell>{formatDate(assessment.assessmentDate)}</TableCell>
//               <TableCell>
//                 {assessment.assessmentValue ? 
//                   `$${Number(assessment.assessmentValue).toLocaleString()}` : 
//                   'Not assessed'}
//               </TableCell>
//               <TableCell>{assessment.assessmentNotes || 'No notes'}</TableCell>
//             </TableRow>
//           ))}
//       </TableBody>
//     </Table>
//   </TableContainer>
// ) : (
//   <Box sx={{ 
//     p: 3, 
//     textAlign: 'center', 
//     backgroundColor: 'rgba(240, 247, 255, 0.5)',
//     borderRadius: 2
//   }}>
//     <AssessmentIcon sx={{ fontSize: 40, color: '#95a5a6', mb: 1 }} />
//     <Typography variant="body1" color="#7f8c8d">
//       No assessment has been performed yet
//     </Typography>
//   </Box>
// )}
// </Paper>
// </Grid>

// {/* Action buttons */}
// <Grid item xs={12}>
// <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2, mt: 2 }}>
// {type === "a" && (
//   <Button
//     variant="contained"
//     color="primary"
//     startIcon={<AssessmentIcon />}
//     onClick={() => handleAssessmentClick(applicationId)}
//     sx={{
//       background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//       '&:hover': {
//         background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
//       }
//     }}
//   >
//     {assessmentsDetails.some(assessment => assessment.applicationId === applicationId) 
//       ? 'Update Assessment' 
//       : 'Create Assessment'}
//   </Button>
// )}

// {type === "a" && thisAssessor.isManager === true && (
//   <Button
//     variant="contained"
//     color="success"
//     startIcon={<CheckCircleIcon />}
//     onClick={() => handleStatusChange(applicationId, 'Approved')}
//     disabled={application?.applicationStatus?.toLowerCase() === 'approved'}
//     sx={{
//       background: 'linear-gradient(90deg, #2ecc71 0%, #27ae60 100%)',
//       '&:hover': {
//         background: 'linear-gradient(90deg, #2ecc71 0%, #27ae60 90%)'
//       },
//       '&.Mui-disabled': {
//         background: '#ecf0f1',
//         color: '#95a5a6'
//       }
//     }}
//   >
//     Approve
//   </Button>
// )}

// {type === "a" && thisAssessor.isManager === true && (
//   <Button
//     variant="contained"
//     color="error"
//     startIcon={<CancelIcon />}
//     onClick={() => handleStatusChange(applicationId, 'Rejected')}
//     disabled={application?.applicationStatus?.toLowerCase() === 'rejected'}
//     sx={{
//       background: 'linear-gradient(90deg, #e74c3c 0%, #c0392b 100%)',
//       '&:hover': {
//         background: 'linear-gradient(90deg, #e74c3c 0%, #c0392b 90%)'
//       },
//       '&.Mui-disabled': {
//         background: '#ecf0f1',
//         color: '#95a5a6'
//       }
//     }}
//   >
//     Reject
//   </Button>
// )}
// </Box>
// </Grid>
// </Grid>
// </Collapse>
// </CardContent>
// </Card>
// </Fade>
// );
// })}

// {/* Pagination */}
// <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4, mb: 4 }}>
// <Pagination 
// count={Math.ceil(filteredApplications.length / applicationsPerPage)} 
// page={currentPage} 
// onChange={handlePageChange}
// color="primary"
// size="large"
// showFirstButton
// showLastButton
// sx={{
// '& .MuiPaginationItem-root': {
// fontSize: '1rem',
// fontWeight: 500
// },
// '& .Mui-selected': {
// background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
// color: 'white'
// }
// }}
// />
// </Box>
// </Box>
// ) : (
// <Box sx={{ textAlign: 'center', py: 8 }}>
// {loading ? (
// <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
// <CircularProgress size={60} sx={{ mb: 3 }} />
// <Typography variant="h6" color="text.secondary">
// Loading applications...
// </Typography>
// </Box>
// ) : (
// <Box>
// <SearchOffIcon sx={{ fontSize: 80, color: '#95a5a6', mb: 2 }} />
// <Typography variant="h5" gutterBottom color="#34495e" fontWeight={600}>
// No applications found
// </Typography>
// <Typography variant="body1" color="#7f8c8d" paragraph>
// {searchTerm 
// ? `No results match your search "${searchTerm}"`
// : 'There are no applications available to display'}
// </Typography>
// {searchTerm && (
// <Button
// variant="outlined"
// startIcon={<RefreshIcon />}
// onClick={() => {
// setSearchTerm('');
// setFilteredApplications(applicationIds);
// }}
// sx={{ mt: 2 }}
// >
// Clear search
// </Button>
// )}
// </Box>
// )}
// </Box>
// )}
// </Container>

// {/* Assessment Dialog */}
// <Dialog 
// open={assessmentDialogOpen} 
// onClose={handleCloseAssessmentDialog}
// maxWidth="md"
// fullWidth
// PaperProps={{
// sx: {
// borderRadius: 3,
// boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
// }
// }}
// >
// <DialogTitle sx={{ 
// background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
// color: 'white',
// display: 'flex',
// alignItems: 'center',
// gap: 1,
// py: 2
// }}>
// <AssessmentIcon sx={{ mr: 1 }} />
// {existingAssessment ? 'Update Assessment' : 'Create New Assessment'}
// </DialogTitle>
// <DialogContent sx={{ pt: 3 }}>
// <Grid container spacing={3}>
// <Grid item xs={12} md={6}>
// <TextField
// label="Assessment Value ($)"
// type="number"
// fullWidth
// value={assessmentValue}
// onChange={(e) => setAssessmentValue(e.target.value)}
// InputProps={{
// startAdornment: <InputAdornment position="start">$</InputAdornment>,
// }}
// variant="outlined"
// sx={{ mb: 2 }}
// />
// </Grid>
// <Grid item xs={12} md={6}>
// <TextField
// label="Assessment Date"
// type="date"
// fullWidth
// value={assessmentDate}
// onChange={(e) => setAssessmentDate(e.target.value)}
// InputLabelProps={{
// shrink: true,
// }}
// variant="outlined"
// sx={{ mb: 2 }}
// />
// </Grid>
// <Grid item xs={12}>
// <TextField
// label="Assessment Notes"
// multiline
// rows={4}
// fullWidth
// value={assessmentNotes}
// onChange={(e) => setAssessmentNotes(e.target.value)}
// variant="outlined"
// placeholder="Enter detailed notes about the property assessment..."
// sx={{ mb: 2 }}
// />
// </Grid>
// </Grid>
// </DialogContent>
// <DialogActions sx={{ px: 3, pb: 3 }}>
// <Button 
// onClick={handleCloseAssessmentDialog}
// variant="outlined"
// startIcon={<CancelIcon />}
// >
// Cancel
// </Button>
// <Button 
// onClick={handleSaveAssessment}
// variant="contained"
// startIcon={<SaveIcon />}
// sx={{
// background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
// '&:hover': {
// background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
// }
// }}
// >
// {existingAssessment ? 'Update' : 'Save'}
// </Button>
// </DialogActions>
// </Dialog>

// {/* Status Change Confirmation Dialog */}
// <Dialog
// open={statusDialogOpen}
// onClose={() => setStatusDialogOpen(false)}
// PaperProps={{
// sx: {
//   borderRadius: 3,
//   boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
// }
// }}
// >
// <DialogTitle sx={{ 
// background: newStatus === 'Approved' 
//   ? 'linear-gradient(90deg, #2ecc71 0%, #27ae60 100%)' 
//   : 'linear-gradient(90deg, #e74c3c 0%, #c0392b 100%)',
// color: 'white',
// display: 'flex',
// alignItems: 'center',
// gap: 1,
// py: 2
// }}>
// {newStatus === 'Approved' ? <CheckCircleIcon sx={{ mr: 1 }} /> : <CancelIcon sx={{ mr: 1 }} />}
// Confirm {newStatus} Application
// </DialogTitle>
// <DialogContent sx={{ pt: 3 }}>
// <Typography variant="body1">
//   Are you sure you want to {newStatus?.toLowerCase()} application #{selectedApplicationId}?
// </Typography>
// <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
//   This action will change the application status and notify the customer.
// </Typography>
// </DialogContent>
// <DialogActions sx={{ px: 3, pb: 3 }}>
// <Button 
//   onClick={() => setStatusDialogOpen(false)}
//   variant="outlined"
//   startIcon={<CancelIcon />}
// >
//   Cancel
// </Button>
// <Button 
//   onClick={confirmStatusChange}
//   variant="contained"
//   color={newStatus === 'Approved' ? 'success' : 'error'}
//   startIcon={newStatus === 'Approved' ? <CheckCircleIcon /> : <BlockIcon />}
//   sx={{
//     background: newStatus === 'Approved' 
//       ? 'linear-gradient(90deg, #2ecc71 0%, #27ae60 100%)' 
//       : 'linear-gradient(90deg, #e74c3c 0%, #c0392b 100%)',
//     '&:hover': {
//       background: newStatus === 'Approved' 
//         ? 'linear-gradient(90deg, #2ecc71 0%, #27ae60 90%)' 
//         : 'linear-gradient(90deg, #e74c3c 0%, #c0392b 90%)'
//     }
//   }}
// >
//   Confirm {newStatus}
// </Button>
// </DialogActions>
// </Dialog>

// {/* Snackbar for notifications */}
// <Snackbar
// open={snackbarOpen}
// autoHideDuration={6000}
// onClose={() => setSnackbarOpen(false)}
// anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
// >
// <Alert 
// onClose={() => setSnackbarOpen(false)} 
// severity={snackbarSeverity} 
// variant="filled"
// sx={{ width: '100%' }}
// >
// {snackbarMessage}
// </Alert>
// </Snackbar>
// </Box>
// );
// }

// export default FullApplications;

// import { useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { applicationThunk } from "../redux/slices/get/applicatiionThunk";
// import { myApplicationsThunk } from "../redux/slices/get by assessor/myApplicationsThunk";
// import { assessmentThunk } from "../redux/slices/get/assessmentThunk";
// import { myAssessmentsThunk } from "../redux/slices/get by assessor/myAssessmentsThunk";
// import { Outlet, useNavigate } from "react-router-dom";
// import { apartmentDetailsThunk } from "../redux/slices/get/apartmentDetailsThunk";
// import { myApartmentDetailsThunk } from "../redux/slices/get by assessor/myApartmentDetailsThunk";
// import { yourApplicationsThunk } from "../redux/slices/get by customer/yourApplicationsThunk";
// import { yourAssessmentsThunk } from "../redux/slices/get by customer/yourAssessmentsThunk";
// import { yourApartmentDetailsThunk } from "../redux/slices/get by customer/yourApartmentsDetailsThunk";
// import { yourAssessorsThunk } from "../redux/slices/get by customer/yourAssessorsThunk";
// import { setApplicationId, setLastChats, setTo } from "../redux/slices/chatSlice";
// import {
//   Box,
//   Typography,
//   Button,
//   Paper,
//   Divider,
//   Container,
//   Avatar,
//   Fade,
//   Collapse,
//   Chip,
//   useMediaQuery,
//   useTheme,
//   Grid,
//   TextField,
//   InputAdornment,
//   IconButton,
//   Tab,
//   Tabs,
//   Card,
//   CardContent,
//   CardHeader,
//   CardActions,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import ClearIcon from '@mui/icons-material/Clear';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import DateRangeIcon from '@mui/icons-material/DateRange';
// import PersonIcon from '@mui/icons-material/Person';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
// import HomeIcon from '@mui/icons-material/Home';
// import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
// import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
// import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import SortIcon from '@mui/icons-material/Sort';
// import NumbersIcon from '@mui/icons-material/Numbers';
// import BadgeIcon from '@mui/icons-material/Badge';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

// export const FullApplications = () => {
//   const thisAssessor = useSelector(state => state.assessor.thisAssessor);
//   const customerChose = useSelector(state => state.customer.customerChose);
//   const thisCustomer = useSelector(state => state.customer.thisCustomer);
//   const theApplication = useSelector(state => state.application.applications);
//   const myApplication = useSelector(state => state.application.myApplication);
//   const assessmentsDetails = useSelector(state => state.assessment.assessments);
//   const apartmentsDetails = useSelector(state => state.apartmentDetails.apartmentsDetails);
//   const customersDetails = useSelector(state => state.customer.customers);
//   const assessorsDetails = useSelector(state => state.assessor.assessors);
//   const full = useSelector(state => state.user.full);
//   const chatDetails = useSelector(state => state.chat.chats);
//   const type = useSelector(state => state.user.t);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const topRef = useRef(null);

//   // State variables
//   const [sent, setSent] = useState(false);
//   const [fullDetails, setFullDetails] = useState([]);
//   const [finalAssessor, setFinalAssessor] = useState([]);
//   const [applicationsDetails, setApplicationDetails] = useState([...theApplication]);
//   const [expandedApplications, setExpandedApplications] = useState({});
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchType, setSearchType] = useState('applicationId');
//   const [filteredApplications, setFilteredApplications] = useState([]);
//   const [sortBy, setSortBy] = useState('none');
//   const [activeTab, setActiveTab] = useState(0);
//   const [confirmDialog, setConfirmDialog] = useState({
//     open: false,
//     action: '',
//     applicationId: null
//   });

//   // Fetch data
//   const getData = async () => {
//     const res = await dispatch(yourApplicationsThunk(customerChose.customerId));
//     if (res.payload != null) {
//       setApplicationDetails(res.payload);
//       setFilteredApplications(res.payload);
//     }
//   }

//   useEffect(() => {
//     // Scroll to top when component mounts
//     window.scrollTo(0, 0);
//     if (type === "a") {
//       if (thisAssessor.isManager)
//         setFinalAssessor(assessorsDetails);
//       else {
//         const a = [];
//         a.push(thisAssessor);
//         setFinalAssessor(a);
//       }
//     }
//     else if (type === "c") {
//       setFinalAssessor(assessorsDetails);
//     }
//     if (!full) {
//       getData();
//     }
//   }, []);

//   useEffect(() => {
//     if (fullDetails.length === 0 && applicationsDetails.length !== 0 && apartmentsDetails.length !== 0 && assessmentsDetails.length !== 0 && finalAssessor.length !== 0) {
//       const s = [];
//       applicationsDetails.forEach(element => {
//         s.push(element.applicationId);
//       });
//       setFullDetails(s);
//       setFilteredApplications(applicationsDetails);
//     }
//   }, [applicationsDetails, assessmentsDetails, apartmentsDetails, finalAssessor]);

//   // Helper functions
//   const assess = (a, applicationId) => {
//     const aa = applicationsDetails.find(c => c.assessorId === a.assessorId);
//     if (aa && aa.applicationId === applicationId)
//       return true;
//     return false;
//   }

//   const cust = (y, applicationId) => {
//     const cc = apartmentsDetails.find(c => c.customerId === y);
//     if (cc && cc.apartmentId === applicationId)
//       return true;
//     return false;
//   }

//   const chatMe = (element) => {
//     let arr = [];
//     chatDetails.forEach(e => {
//       if (element === e.applicationId) {
//         arr.push(e);
//       }
//     });
//     dispatch(setLastChats(arr));
//   }

//   const toggleApplicationExpansion = (applicationId) => {
//     setExpandedApplications(prev => ({
//       ...prev,
//       [applicationId]: !prev[applicationId]
//     }));
//   }

//   const scrollToTop = () => {
//     topRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const formatDate = (dateString) => {
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric'
//       });
//     } catch (e) {
//       return dateString;
//     }
//   };

//   // Search and filter functions
//   const handleSearch = () => {
//     if (!searchTerm.trim()) {
//       setFilteredApplications([...applicationsDetails]);
//       return;
//     }
//     const term = searchTerm.toLowerCase();
//     let results = [];
//     switch (searchType) {
//       case 'applicationId':
//         results = applicationsDetails.filter(app =>
//           app.applicationId.toString().includes(term)
//         );
//         break;
//       case 'assessorName':
//         results = applicationsDetails.filter(app => {
//           const assessor = assessorsDetails.find(a => a.assessorId === app.assessorId);
//           return assessor &&
//             (assessor.assessorFirstName.toLowerCase().includes(term) ||
//               assessor.assessorLastName.toLowerCase().includes(term));
//         });
//         break;
//       case 'assessorId':
//         results = applicationsDetails.filter(app => {
//           const assessor = assessorsDetails.find(a => a.assessorId === app.assessorId);
//           return assessor && assessor.assessorId.toString().toLowerCase().includes(term);
//         });
//         break;
//       case 'customerName':
//         results = applicationsDetails.filter(app => {
//           const apartment = apartmentsDetails.find(apt => apt.apartmentId === app.applicationId);
//           if (!apartment) return false;
//           const customer = customersDetails.find(c => c.customerId === apartment.customerId);
//           return customer &&
//             (customer.customerFirstName.toLowerCase().includes(term) ||
//               customer.customerLastName.toLowerCase().includes(term));
//         });
//         break;
//       case 'customerId':
//         results = applicationsDetails.filter(app => {
//           const apartment = apartmentsDetails.find(apt => apt.apartmentId === app.applicationId);
//           if (!apartment) return false;
//           const customer = customersDetails.find(c => c.customerId === apartment.customerId);
//           return customer && customer.customerId.toString().toLowerCase().includes(term);
//         });
//         break;
//       default:
//         results = applicationsDetails;
//     }
//     setFilteredApplications(results);
//   };

//   const handleSort = (sortType) => {
//     setSortBy(sortType);
//     let sortedApplications = [...applicationsDetails];
//     if (sortType === 'date') {
//       sortedApplications.sort((a, b) => new Date(b.applicationDate) - new Date(a.applicationDate));
//     } else if (sortType === 'status') {
//       sortedApplications.sort((a, b) => a.applicationStatus.localeCompare(b.applicationStatus));
//     } else if (sortType === 'id') {
//       sortedApplications.sort((a, b) => a.applicationId - b.applicationId);
//     }
//     setFilteredApplications(sortedApplications);
//   };

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   // Application actions
//   const handleAcceptApplication = (applicationId) => {
//     setConfirmDialog({
//       open: true,
//       action: 'accept',
//       applicationId
//     });
//   };

//   const handleRejectApplication = (applicationId) => {
//     setConfirmDialog({
//       open: true,
//       action: 'reject',
//       applicationId
//     });
//   };

//   const handleConfirmAction = async () => {
//     const { action, applicationId } = confirmDialog;

//     // Implement your accept/reject logic here
//     if (action === 'accept') {
//       // Accept application logic
//       console.log(`Accepting application ${applicationId}`);
//       // Call your API or dispatch action here
//     } else {
//       // Reject application logic
//       console.log(`Rejecting application ${applicationId}`);
//       // Call your API or dispatch action here
//     }

//     // Close dialog and refresh data
//     setConfirmDialog({ ...confirmDialog, open: false });
//     getData();
//   };

//   // Render customer details card
//   const renderCustomerDetails = () => {
//     if (type === "a" && !full && customerChose) {
//       return (
//         <Fade in={true} timeout={800}>
//           <Paper
//             elevation={3}
//             sx={{
//               mb: 4,
//               borderRadius: 2,
//               overflow: 'hidden',
//               background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//             }}
//           >
//             <CardHeader
//               title="Customer Details"
//               sx={{
//                 background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                 color: 'white',
//                 p: 2
//               }}
//             />
//             <CardContent>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6} md={4}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                     <BadgeIcon sx={{ mr: 1, color: '#3a7bd5' }} />
//                     <Typography variant="body1">
//                       <strong>ID:</strong> {customerChose.customerId}
//                     </Typography>
//                   </Box>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                     <PersonIcon sx={{ mr: 1, color: '#3a7bd5' }} />
//                     <Typography variant="body1">
//                       <strong>Name:</strong> {customerChose.customerFirstName} {customerChose.customerLastName}
//                     </Typography>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={4}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                     <HomeIcon sx={{ mr: 1, color: '#3a7bd5' }} />
//                     <Typography variant="body1">
//                       <strong>Location:</strong> {customerChose.customerCity}, {customerChose.customerAddress}
//                     </Typography>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={4}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                     <MailOutlineOutlinedIcon sx={{ mr: 1, color: '#3a7bd5' }} />
//                     <Typography variant="body1">
//                       <strong>Contact:</strong> {customerChose.customerPhone}, {customerChose.customerEmail}
//                     </Typography>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Paper>
//         </Fade>
//       );
//     }
//     return null;
//   };

//   // Render application cards
//   const renderApplications = () => {
//     if (!fullDetails.length || !filteredApplications.length) {
//       return (
//         <Paper
//           elevation={0}
//           sx={{
//             p: 4,
//             borderRadius: 3,
//             background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//             textAlign:'center'
// }}
// >
// <Typography variant="h6" color="#2c3e50">
//   No applications found
// </Typography>
// <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1 }}>
//   Applications will appear here when available
// </Typography>
// </Paper>
// );
// }

// return filteredApplications.map((application, index) => {
// const applicationId = application.applicationId;
// const isExpanded = expandedApplications[applicationId];
// // Find related data
// const assessment = assessmentsDetails.find(a => a.assessmentId === applicationId);
// const apartment = apartmentsDetails.find(a => a.apartmentId === applicationId);
// const assessor = assessorsDetails.find(a => a.assessorId === application.assessorId);
// const customer = apartment ? customersDetails.find(c => c.customerId === apartment.customerId) : null;

// // Determine background color based on status
// let statusColor = '#3a7bd5'; // Default blue
// let statusBackground = 'rgba(58, 123, 213, 0.1)';
// if (application.applicationStatus === 'Completed') {
// statusColor = '#27ae60'; // Green
// statusBackground = 'rgba(39, 174, 96, 0.1)';
// } else if (application.applicationStatus === 'Pending') {
// statusColor = '#f39c12'; // Orange
// statusBackground = 'rgba(243, 156, 18, 0.1)';
// } else if (application.applicationStatus === 'Rejected') {
// statusColor = '#e74c3c'; // Red
// statusBackground = 'rgba(231, 76, 60, 0.1)';
// }

// return (
// <Fade in={true} timeout={1000 + (index * 200)} key={applicationId}>
// <Paper
//   elevation={2}
//   sx={{
//     mb: 3,
//     borderRadius: 2,
//     overflow: 'hidden',
//     border: '1px solid #e0e0e0',
//     transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//     '&:hover': {
//       transform: 'translateY(-3px)',
//       boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)'
//     },
//     background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
//   }}
// >
//   <Box sx={{ p: 2 }}>
//     <Grid container spacing={2} alignItems="center">
//       <Grid item xs={12} sm={9} md={10}>
//         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//           <Avatar
//             sx={{
//               bgcolor: statusBackground,
//               color: statusColor,
//               mr: 2,
//               width: 40,
//               height: 40
//             }}
//           >
//             <AssignmentIcon />
//           </Avatar>
//           <Box sx={{
//             display: 'flex',
//             alignItems: { xs: 'flex-start', md: 'center' },
//             flexDirection: { xs: 'column', md: 'row' },
//             flexWrap: 'wrap',
//             width: '100%',
//             gap: { xs: 1, md: 0 }
//           }}>
//             <Typography
//               variant="subtitle1"
//               fontWeight="600"
//               color="#2c3e50"
//               sx={{ mr: 2 }}
//             >
//               Application #{applicationId}
//             </Typography>
//             <Box sx={{
//               display: 'flex',
//               alignItems: 'center',
//               mr: { xs: 0, md: 2 },
//               mb: { xs: 0.5, md: 0 },
//               '& .MuiSvgIcon-root': {
//                 fontSize: 16,
//                 mr: 0.5,
//                 color: '#2c3e50',
//                 opacity: 0.8
//               },
//               '& .MuiTypography-root': {
//                 color: '#2c3e50',
//                 opacity: 0.9
//               }
//             }}>
//               <DateRangeIcon />
//               <Typography variant="body2">
//                 {formatDate(application.applicationDate)}
//               </Typography>
//             </Box>
//             <Chip
//               label={application.applicationStatus}
//               size="small"
//               sx={{
//                 ml: { xs: 0, md: 2 },
//                 mt: { xs: 0.5, md: 0 },
//                 bgcolor: statusBackground,
//                 color: statusColor,
//                 fontWeight: 600,
//                 height: 24,
//                 border: `1px solid ${statusColor}`
//               }}
//             />
//           </Box>
//         </Box>
//       </Grid>
//       <Grid item xs={12} sm={3} md={2} sx={{
//         textAlign: { xs: 'left', sm: 'right' },
//         mt: { xs: 1, sm: 0 }
//       }}>
//         <Button
//           variant="contained"
//           onClick={() => toggleApplicationExpansion(applicationId)}
//           endIcon={isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           sx={{
//             borderRadius: '8px',
//             textTransform: 'none',
//             background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//             color: '#ffffff',
//             '&:hover': {
//               background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)',
//             },
//             width: { xs: 'auto', sm: '100%' },
//             maxWidth: { sm: '120px' }
//           }}
//         >
//           {isExpanded ? 'Hide' : 'View'}
//         </Button>
//       </Grid>
//     </Grid>
//     <Collapse in={isExpanded} timeout="auto" unmountOnExit>
//       <Divider sx={{ my: 2 }} />
//       <Box sx={{ mt: 3 }}>
//         <Tabs
//           value={activeTab}
//           onChange={handleTabChange}
//           variant="scrollable"
//           scrollButtons="auto"
//           sx={{
//             mb: 2,
//             '& .MuiTab-root': {
//               textTransform: 'none',
//               minWidth: 100,
//               fontWeight: 500,
//             },
//             '& .Mui-selected': {
//               color: '#3a7bd5',
//               fontWeight: 700,
//             },
//             '& .MuiTabs-indicator': {
//               backgroundColor: '#3a7bd5',
//             }
//           }}
//         >
//           <Tab label="Assessment Details" />
//           <Tab label="Property Information" />
//           {type === "c" || (type === "a" && thisAssessor.isManager) ?
//             <Tab label="Assessor Details" /> : null}
//           {type === "a" && full ?
//             <Tab label="Customer Details" /> : null}
//         </Tabs>
//         {/* Assessment Details Tab */}
//         {activeTab === 0 && assessment && (
//           <Paper
//             elevation={0}
//             sx={{
//               p: 2,
//               borderRadius: 2,
//               background: 'rgba(255, 255, 255, 0.7)',
//               border: '1px solid rgba(0, 0, 0, 0.1)'
//             }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Assessment ID
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {assessment.assessmentId}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Land Details
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   Block: {assessment.block}, Plot: {assessment.plot}, Sub-Plot: {assessment.subPlot}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Construction Year
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {assessment.constructionYear}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Acquisition Price
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   ${assessment.acquisionPrice}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Assessment Goal
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {assessment.assessmentGoal}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Legal State
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {assessment.legalState}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={6}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Building Permit
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {assessment.buildingPermit ? "Yes" : "No"}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={6}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Irregularities Building
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {assessment.irregularitiesBuilding ? "Yes" : "No"}
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Paper>
//         )}
//         {/* Property Information Tab */}
//         {activeTab === 1 && apartment && (
//           <Paper
//             elevation={0}
//             sx={{
//               p: 2,
//               borderRadius: 2,
//               background: 'rgba(255, 255, 255, 0.7)',
//               border: '1px solid rgba(0, 0, 0, 0.1)'
//             }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Property ID
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {apartment.apartmentId}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Location
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {apartment.apartmentCity}, {apartment.apartmentAddress}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Size
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {apartment.apartmentSize} sq.m
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Floor
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {apartment.floor}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Elevator
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {apartment.elevator ? "Yes" : "No"}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Air Directions
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {apartment.airDirections}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Directions
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {apartment.directions}
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Paper>
//         )}
//         {/* Assessor Details Tab */}
//         {activeTab === 2 && (type === "c" || (type === "a" && thisAssessor.isManager)) && assessor && (
//           <Paper
//             elevation={0}
//             sx={{
//               p: 2,
//               borderRadius: 2,
//               background: 'rgba(255, 255, 255, 0.7)',
//               border: '1px solid rgba(0, 0, 0, 0.1)'
//             }}
//           >
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Assessor ID
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {assessor.assessorId}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Name
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {assessor.assessorFirstName} {assessor.assessorLastName}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>
//                 <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                   Email
//                 </Typography>
//                 <Typography variant="body2" gutterBottom>
//                   {assessor.assessorEmail}
//                 </Typography>
//               </Grid>
//               <Grid item xs={12} sm={6} md={4}>

// <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
// Phone
// </Typography>
// <Typography variant="body2" gutterBottom>
// {assessor.assessorPhone}
// </Typography>
// </Grid>
// <Grid item xs={12} sm={6} md={4}>
// <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
// License Number
// </Typography>
// <Typography variant="body2" gutterBottom>
// {assessor.licenseNumber}
// </Typography>
// </Grid>
// <Grid item xs={12} sm={6} md={4}>
// <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
// Experience
// </Typography>
// <Typography variant="body2" gutterBottom>
// {assessor.experience} years
// </Typography>
// </Grid>
// </Grid>
// </Paper>
// )}
// {/* Customer Details Tab */}
// {activeTab === 3 && type === "a" && full && customer && (
// <Paper
// elevation={0}
// sx={{
// p: 2,
// borderRadius: 2,
// background: 'rgba(255, 255, 255, 0.7)',
// border: '1px solid rgba(0, 0, 0, 0.1)'
// }}
// >
// <Grid container spacing={2}>
// <Grid item xs={12} sm={6} md={4}>
// <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
// Customer ID
// </Typography>
// <Typography variant="body2" gutterBottom>
// {customer.customerId}
// </Typography>
// </Grid>
// <Grid item xs={12} sm={6} md={4}>
// <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
// Name
// </Typography>
// <Typography variant="body2" gutterBottom>
// {customer.customerFirstName} {customer.customerLastName}
// </Typography>
// </Grid>
// <Grid item xs={12} sm={6} md={4}>
// <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
// Email
// </Typography>
// <Typography variant="body2" gutterBottom>
// {customer.customerEmail}
// </Typography>
// </Grid>
// <Grid item xs={12} sm={6} md={4}>
// <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
// Phone
// </Typography>
// <Typography variant="body2" gutterBottom>
// {customer.customerPhone}
// </Typography>
// </Grid>
// <Grid item xs={12} sm={6} md={4}>
// <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
// Address
// </Typography>
// <Typography variant="body2" gutterBottom>
// {customer.customerAddress}
// </Typography>
// </Grid>
// <Grid item xs={12} sm={6} md={4}>
// <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
// City
// </Typography>
// <Typography variant="body2" gutterBottom>
// {customer.customerCity}
// </Typography>
// </Grid>
// </Grid>
// </Paper>
// )}
// </Box>
// {/* {type === "a" && !full && (
// <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}> */}
// {/* <Button
// variant="contained"
// color="primary"
// onClick={() => handleAcceptApplication(applicationId)}
// sx={{
// mr: 2,
// borderRadius: '8px',
// textTransform: 'none',
// background: 'linear-gradient(90deg, #27ae60 0%, #2ecc71 100%)',
// '&:hover': {
// background: 'linear-gradient(90deg, #219653 0%, #27ae60 100%)',
// }
// }}
// >
// Accept Application
// </Button>
// <Button
// variant="contained"
// color="error"
// onClick={() => handleRejectApplication(applicationId)}
// sx={{
// borderRadius: '8px',
// textTransform: 'none',
// background: 'linear-gradient(90deg, #e74c3c 0%, #c0392b 100%)',
// '&:hover': {
// background: 'linear-gradient(90deg, #c0392b 0%, #e74c3c 100%)',
// }
// }}
// >
// Reject Application
// </Button> */}
// {/* </Box> */}
// {/* )} */}
// </Collapse>
// </Box>
// </Paper>
// </Fade>
// );
// });
// };

// return (
// <Container maxWidth="xl" sx={{ py: 4 }} ref={topRef}>
// {renderCustomerDetails()}

// {/* Search and Filter Section */}
// <Paper
// elevation={2}
// sx={{
// p: 2,
// mb: 4,
// borderRadius: 2,
// background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
// }}
// >
// <Grid container spacing={2} alignItems="center">
// <Grid item xs={12} md={6}>
// <TextField
// fullWidth
// variant="outlined"
// placeholder="Search applications..."
// value={searchTerm}
// onChange={(e) => setSearchTerm(e.target.value)}
// onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
// InputProps={{
// startAdornment: (
// <InputAdornment position="start">
// <SearchIcon color="action" />
// </InputAdornment>
// ),
// endAdornment: searchTerm && (
// <InputAdornment position="end">
// <IconButton
// aria-label="clear search"
// onClick={() => {
// setSearchTerm('');
// setFilteredApplications(applicationsDetails);
// }}
// edge="end"
// >
// <ClearIcon fontSize="small" />
// </IconButton>
// </InputAdornment>
// ),
// sx: {
// borderRadius: 2,
// bgcolor: 'rgba(255, 255, 255, 0.7)',
// '&:hover': {
// bgcolor: 'rgba(255, 255, 255, 0.9)',
// }
// }
// }}
// sx={{ mb: { xs: 2, md: 0 } }}
// />
// </Grid>
// <Grid item xs={12} md={6}>
// <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
// <Button
// variant="outlined"
// startIcon={<FilterListIcon />}
// onClick={() => setSearchType('applicationId')}
// color={searchType === 'applicationId' ? 'primary' : 'inherit'}
// sx={{
// borderRadius: 2,
// textTransform: 'none',
// borderColor: searchType === 'applicationId' ? '#3a7bd5' : 'rgba(0, 0, 0, 0.23)',
// color: searchType === 'applicationId' ? '#3a7bd5' : 'inherit',
// bgcolor: 'rgba(255, 255, 255, 0.7)',
// '&:hover': {
// bgcolor: 'rgba(255, 255, 255, 0.9)',
// borderColor: '#3a7bd5'
// }
// }}
// >
// Application ID
// </Button>
// <Button
// variant="outlined"
// startIcon={<PersonOutlineIcon />}
// onClick={() => setSearchType('assessorName')}
// color={searchType === 'assessorName' ? 'primary' : 'inherit'}
// sx={{
// borderRadius: 2,
// textTransform: 'none',
// borderColor: searchType === 'assessorName' ? '#3a7bd5' : 'rgba(0, 0, 0, 0.23)',
// color: searchType === 'assessorName' ? '#3a7bd5' : 'inherit',
// bgcolor: 'rgba(255, 255, 255, 0.7)',
// '&:hover': {
// bgcolor: 'rgba(255, 255, 255, 0.9)',
// borderColor: '#3a7bd5'
// }
// }}
// >
// Assessor Name
// </Button>
// <Button
// variant="outlined"
// startIcon={<SortIcon />}
// onClick={() => handleSort(sortBy === 'date' ? 'none' : 'date')}
// color={sortBy === 'date' ? 'primary' : 'inherit'}
// sx={{
// borderRadius: 2,
// textTransform: 'none',
// borderColor: sortBy === 'date' ? '#3a7bd5' : 'rgba(0, 0, 0, 0.23)',
// color: sortBy === 'date' ? '#3a7bd5' : 'inherit',
// bgcolor: 'rgba(255, 255, 255, 0.7)',
// '&:hover': {
// bgcolor: 'rgba(255, 255, 255, 0.9)',
// borderColor: '#3a7bd5'
// }
// }}
// >
// Sort by Date
// </Button>
// <Button
// variant="contained"
// startIcon={<SearchIcon />}
// onClick={handleSearch}
// sx={{
// borderRadius: 2,
// textTransform: 'none',
// background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
// color: '#ffffff',
// '&:hover': {
// background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)',
// }
// }}
// >
// Search
// </Button>
// <IconButton
// onClick={() => {
// setSearchTerm('');
// setSortBy('none');
// setFilteredApplications(applicationsDetails);
// }}
// sx={{
// borderRadius: 2,
// bgcolor: 'rgba(255, 255, 255, 0.7)',
// '&:hover': {
// bgcolor: 'rgba(255, 255, 255, 0.9)',
// }
// }}
// >
// <RefreshIcon />
// </IconButton>
// </Box>
// </Grid>
// </Grid>
// </Paper>

// {/* Applications List */}
// <Box sx={{ mb: 4 }}>
// <Typography variant="h5" gutterBottom fontWeight="600" color="#2c3e50">
// Applications
// {filteredApplications.length > 0 && (
// <Chip
// label={`${filteredApplications.length} found`}
// size="small"
// sx={{
// ml: 2,
// bgcolor: 'rgba(58, 123, 213, 0.1)',
// color: '#3a7bd5',
// fontWeight: 600
// }}
// />
// )}
// </Typography>
// <Divider sx={{ mb: 3 }} />

// {renderApplications()}

// {filteredApplications.length > 5 && (
// <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
// <Button
// variant="outlined"
// onClick={scrollToTop}
// startIcon={<KeyboardArrowUpIcon />}
// sx={{
// borderRadius: 2,
// textTransform: 'none',
// borderColor: '#3a7bd5',
// color: '#3a7bd5',
// '&:hover': {
// bgcolor: 'rgba(58, 123, 213, 0.1)',
// }
// }}
// >
// Back to Top
// </Button>
// </Box>
// )}
// </Box>

// {/* Confirmation Dialog for Accept/Reject */}
// {/* <Dialog
// open={confirmDialog.open}
// onClose={() => setConfirmDialog({ ...confirmDialog, open: false })}
// aria-labelledby="alert-dialog-title"
// aria-describedby="alert-dialog-description"
// >
// <DialogTitle id="alert-dialog-title">
// {confirmDialog.action === 'accept' ? "Accept Application" : "Reject Application"}
// </DialogTitle>
// <DialogContent>
// <DialogContentText id="alert-dialog-description">
// {confirmDialog.action === 'accept'
// ? "Are you sure you want to accept this application? This action cannot be undone."
// : "Are you sure you want to reject this application? This action cannot be undone."}
// </DialogContentText>
// </DialogContent>
// <DialogActions>
// <Button
// onClick={() => setConfirmDialog({ ...confirmDialog, open: false })}
// sx={{ color: '#7f8c8d' }}
// >
// Cancel
// </Button>
// <Button
// onClick={handleConfirmAction}
// autoFocus
// variant="contained"
// color={confirmDialog.action === 'accept' ? "success" : "error"}
// >
// Confirm {confirmDialog.action === 'accept' ? "Accept" : "Reject"}
// </Button>
// </DialogActions>
// </Dialog> */}
// </Container>
// );
// };

// export default FullApplications;








/////////////////////////////////////////////////////////////////////////////




// import { useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { applicationThunk } from "../redux/slices/get/applicatiionThunk";
// import { myApplicationsThunk } from "../redux/slices/get by assessor/myApplicationsThunk";
// import { assessmentThunk } from "../redux/slices/get/assessmentThunk";
// import { myAssessmentsThunk } from "../redux/slices/get by assessor/myAssessmentsThunk";
// import { Outlet, useNavigate } from "react-router-dom";
// import { apartmentDetailsThunk } from "../redux/slices/get/apartmentDetailsThunk";
// import { myApartmentDetailsThunk } from "../redux/slices/get by assessor/myApartmentDetailsThunk";
// import { yourApplicationsThunk } from "../redux/slices/get by customer/yourApplicationsThunk";
// import { yourAssessmentsThunk } from "../redux/slices/get by customer/yourAssessmentsThunk";
// import { yourApartmentDetailsThunk } from "../redux/slices/get by customer/yourApartmentsDetailsThunk";
// import { yourAssessorsThunk } from "../redux/slices/get by customer/yourAssessorsThunk";
// import { setApplicationId, setLastChats, setTo } from "../redux/slices/chatSlice";
// import {
//   Box,
//   Typography,
//   Button,
//   Paper,
//   Divider,
//   Container,
//   Avatar,
//   Fade,
//   Collapse,
//   Chip,
//   useMediaQuery,
//   useTheme,
//   Grid,
//   TextField,
//   InputAdornment,
//   IconButton,
//   Tab,
//   Tabs,
//   Card,
//   CardContent,
//   CardHeader,
//   CardActions,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import ClearIcon from '@mui/icons-material/Clear';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import DateRangeIcon from '@mui/icons-material/DateRange';
// import PersonIcon from '@mui/icons-material/Person';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import AssignmentLateIcon from '@mui/icons-material/AssignmentLate';
// import HomeIcon from '@mui/icons-material/Home';
// import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
// import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
// import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import SortIcon from '@mui/icons-material/Sort';
// import NumbersIcon from '@mui/icons-material/Numbers';
// import BadgeIcon from '@mui/icons-material/Badge';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// import "./cssPages/Assessment.css";

// export const FullApplications = () => {
//   const thisAssessor = useSelector(state => state.assessor.thisAssessor);
//   const customerChose = useSelector(state => state.customer.customerChose);
//   const thisCustomer = useSelector(state => state.customer.thisCustomer);
//   const theApplication = useSelector(state => state.application.applications);
//   const myApplication = useSelector(state => state.application.myApplication);
//   const assessmentsDetails = useSelector(state => state.assessment.assessments);
//   const apartmentsDetails = useSelector(state => state.apartmentDetails.apartmentsDetails);
//   const customersDetails = useSelector(state => state.customer.customers);
//   const assessorsDetails = useSelector(state => state.assessor.assessors);
//   const full = useSelector(state => state.user.full);
//   const chatDetails = useSelector(state => state.chat.chats);
//   const type = useSelector(state => state.user.t);
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const topRef = useRef(null);

//   // State variables
//   const [sent, setSent] = useState(false);
//   const [fullDetails, setFullDetails] = useState([]);
//   const [finalAssessor, setFinalAssessor] = useState([]);
//   const [applicationsDetails, setApplicationDetails] = useState([...theApplication]);
//   const [expandedApplications, setExpandedApplications] = useState({});
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchType, setSearchType] = useState('applicationId');
//   const [filteredApplications, setFilteredApplications] = useState([]);
//   const [sortBy, setSortBy] = useState('none');
//   const [activeTab, setActiveTab] = useState(0);
//   const [confirmDialog, setConfirmDialog] = useState({
//     open: false,
//     action: '',
//     applicationId: null
//   });

//   // Fetch data
//   const getData = async () => {
//     const res = await dispatch(yourApplicationsThunk(customerChose.customerId));
//     if (res.payload != null) {
//       setApplicationDetails(res.payload);
//       setFilteredApplications(res.payload);
//     }
//   }

//   useEffect(() => {
//     // Scroll to top when component mounts
//     window.scrollTo(0, 0);
//     if (type === "a") {
//       if (thisAssessor.isManager)
//         setFinalAssessor(assessorsDetails);
//       else {
//         const a = [];
//         a.push(thisAssessor);
//         setFinalAssessor(a);
//       }
//     }
//     else if (type === "c") {
//       setFinalAssessor(assessorsDetails);
//     }
//     if (!full) {
//       getData();
//     }
//   }, []);

//   useEffect(() => {
//     if (fullDetails.length === 0 && 
//         applicationsDetails.length !== 0 && 
//         apartmentsDetails.length !== 0 && 
//         assessmentsDetails.length !== 0 && 
//         finalAssessor.length !== 0) {
//       const s = [];
//       applicationsDetails.forEach(element => {
//         s.push(element.applicationId);
//       });
//       setFullDetails(s);
//       setFilteredApplications(applicationsDetails);
//     }
//   }, [applicationsDetails, assessmentsDetails, apartmentsDetails, finalAssessor]);

//   // Helper functions
//   const assess = (a, applicationId) => {
//     const aa = applicationsDetails.find(c => c.assessorId === a.assessorId);
//     if (aa && aa.applicationId === applicationId)
//       return true;
//     return false;
//   }

//   const cust = (y, applicationId) => {
//     const cc = apartmentsDetails.find(c => c.customerId === y);
//     if (cc && cc.apartmentId === applicationId)
//       return true;
//     return false;
//   }

//   const chatMe = (element) => {
//     let arr = [];
//     chatDetails.forEach(e => {
//       if (element === e.applicationId) {
//         arr.push(e);
//       }
//     });
//     dispatch(setLastChats(arr));
//   }

//   const toggleApplicationExpansion = (applicationId) => {
//     setExpandedApplications(prev => ({
//       ...prev,
//       [applicationId]: !prev[applicationId]
//     }));
//   }

//   const scrollToTop = () => {
//     topRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const formatDate = (dateString) => {
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric'
//       });
//     } catch (e) {
//       return dateString;
//     }
//   };

//   // Search and filter functions
//   const handleSearch = () => {
//     if (!searchTerm.trim()) {
//       setFilteredApplications([...applicationsDetails]);
//       return;
//     }

//     const term = searchTerm.toLowerCase();
//     let results = [];

//     switch (searchType) {
//       case 'applicationId':
//         results = applicationsDetails.filter(app =>
//           app.applicationId.toString().includes(term)
//         );
//         break;
//       case 'assessorName':
//         results = applicationsDetails.filter(app => {
//           const assessor = assessorsDetails.find(a => a.assessorId === app.assessorId);
//           return assessor &&
//             (assessor.assessorFirstName.toLowerCase().includes(term) ||
//               assessor.assessorLastName.toLowerCase().includes(term));
//         });
//         break;
//       case 'assessorId':
//         results = applicationsDetails.filter(app => {
//           const assessor = assessorsDetails.find(a => a.assessorId === app.assessorId);
//           return assessor && assessor.assessorId.toString().toLowerCase().includes(term);
//         });
//         break;
//       case 'customerName':
//         results = applicationsDetails.filter(app => {
//           const apartment = apartmentsDetails.find(apt => apt.apartmentId === app.applicationId);
//           if (!apartment) return false;
//           const customer = customersDetails.find(c => c.customerId === apartment.customerId);
//           return customer &&
//             (customer.customerFirstName.toLowerCase().includes(term) ||
//               customer.customerLastName.toLowerCase().includes(term));
//         });
//         break;
//       case 'customerId':
//         results = applicationsDetails.filter(app => {
//           const apartment = apartmentsDetails.find(apt => apt.apartmentId === app.applicationId);
//           if (!apartment) return false;
//           const customer = customersDetails.find(c => c.customerId === apartment.customerId);
//           return customer && customer.customerId.toString().toLowerCase().includes(term);
//         });
//         break;
//       default:
//         results = applicationsDetails;
//     }

//     setFilteredApplications(results);
//   };

//   const handleSort = (sortType) => {
//     setSortBy(sortType);
//     let sortedApplications = [...applicationsDetails];

//     if (sortType === 'date') {
//       sortedApplications.sort((a, b) => new Date(b.applicationDate) - new Date(a.applicationDate));
//     } else if (sortType === 'status') {
//       sortedApplications.sort((a, b) => a.applicationStatus.localeCompare(b.applicationStatus));
//     } else if (sortType === 'id') {
//       sortedApplications.sort((a, b) => a.applicationId - b.applicationId);
//     }

//     setFilteredApplications(sortedApplications);
//   };

//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   // Get status color for chips
// //   const getStatusColor = (status) => {
// //     if (!status) return { color: 'default', bg: 'rgba(0, 0, 0, 0.08)', text: '#757575' };

// //     const statusLower = status.toLowerCase();
// //     if (statusLower.includes('complete') || statusLower.includes('approve')) {
// //       return { color: 'success', bg: 'rgba(46, 125, 50, 0.1)', text: '#2e7d32' };
// //     } else if (statusLower.includes('pending') || statusLower.includes('progress')) {
// //       return { color: 'warning', bg: 'rgba(237, 108, 2, 0.1)', text: '#ed6c02' };
// //     } else if (statusLower.includes('reject') || statusLower.includes('cancel')) {
// //       return { color: 'error', bg: 'rgba(211, 47, 47, 0.1)', text: '#d32f2f' };
// //     }
// //     return { color: 'primary', bg: 'rgba(25, 118, 210, 0.1)', text: '#1976d2' };
// //   };
// // פונקציה מתוקנת - הוסף אותה בתחילת הקובץ fullApplications.jsx
// // (לפני הפונקציה FullApplications)
// const getStatusColor = (status) => {
//     // אם הסטטוס הוא מספר, המר אותו למחרוזת
//     if (typeof status === 'number') {
//       status = status.toString();
//     }

//     // בדיקה שהסטטוס הוא מחרוזת תקינה
//     if (!status || typeof status !== 'string') {
//       // ערך ברירת מחדל אם הסטטוס אינו מחרוזת
//       return { bg: '#e0e0e0', text: '#757575' };
//     }

//     const statusLower = status.toLowerCase();

//     if (statusLower.includes('approved') || statusLower.includes('complete') || statusLower === '5') {
//       return { bg: 'rgba(39, 174, 96, 0.1)', text: '#27ae60' };
//     } else if (statusLower.includes('pending') || statusLower.includes('progress') || statusLower === '2' || statusLower === '3' || statusLower === '4') {
//       return { bg: 'rgba(243, 156, 18, 0.1)', text: '#f39c12' };
//     } else if (statusLower.includes('rejected') || statusLower.includes('cancel') || statusLower === '6') {
//       return { bg: 'rgba(231, 76, 60, 0.1)', text: '#e74c3c' };
//     } else if (statusLower.includes('new') || statusLower === '1') {
//       return { bg: 'rgba(58, 123, 213, 0.1)', text: '#3a7bd5' };
//     } else {
//       return { bg: '#e0e0e0', text: '#757575' };
//     }
//   };

//   // Render customer details card
//   const renderCustomerDetails = () => {
//     if (type === "a" && !full && customerChose) {
//       return (
//         <Fade in={true} timeout={800}>
//           <Paper
//             elevation={3}
//             sx={{
//               mb: 4,
//               borderRadius: 2,
//               overflow: 'hidden',
//               background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//             }}
//           >
//             <CardHeader
//               title="Customer Details"
//               sx={{
//                 background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                 color: 'white',
//                 p: 2
//               }}
//             />
//             <CardContent>
//               <Grid container spacing={2}>
//                 <Grid item xs={12} sm={6} md={4}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                     <BadgeIcon sx={{ mr: 1, color: '#3a7bd5' }} />
//                     <Typography variant="body1">
//                       <strong>ID:</strong> {customerChose.customerId}
//                     </Typography>
//                   </Box>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                     <PersonIcon sx={{ mr: 1, color: '#3a7bd5' }} />
//                     <Typography variant="body1">
//                       <strong>Name:</strong> {customerChose.customerFirstName} {customerChose.customerLastName}
//                     </Typography>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={4}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                     <HomeIcon sx={{ mr: 1, color: '#3a7bd5' }} />
//                     <Typography variant="body1">
//                       <strong>Location:</strong> {customerChose.customerCity}, {customerChose.customerAddress}
//                     </Typography>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} sm={6} md={4}>
//                   <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
//                     <MailOutlineOutlinedIcon sx={{ mr: 1, color: '#3a7bd5' }} />
//                     <Typography variant="body1">
//                       <strong>Contact:</strong> {customerChose.customerPhone}, {customerChose.customerEmail}
//                     </Typography>
//                   </Box>
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Paper>
//         </Fade>
//       );
//     }
//     return null;
//   };

//   // Render application cards
//   const renderApplications = () => {
//     if (!fullDetails.length || !filteredApplications.length) {
//       return (
//         <Paper
//           elevation={0}
//           sx={{
//             p: 4,
//             borderRadius: 3,
//             background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//             textAlign: 'center'
//           }}
//         >
//           <Typography variant="h6" color="#2c3e50">
//             No applications found
//           </Typography>
//           <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1 }}>
//             Applications will appear here when available
//           </Typography>
//         </Paper>
//       );
//     }

//     return filteredApplications.map((application, index) => {
//       const applicationId = application.applicationId;
//       const isExpanded = expandedApplications[applicationId];

//       // Find related data
//       const assessment = assessmentsDetails.find(a => a.assessmentId === applicationId);
//       const apartment = apartmentsDetails.find(a => a.apartmentId === applicationId);
//       const assessor = assessorsDetails.find(a => a.assessorId === application.assessorId);
//       const customer = apartment ? customersDetails.find(c => c.customerId === apartment.customerId) : null;

//       // Get status styling
//       const statusStyle = getStatusColor(application.applicationStatus);

//       return (
//         <Fade in={true} timeout={1000 + (index * 200)} key={applicationId}>
//           <Card 
//             className="application-card"
//             sx={{
//               mb: 3,
//               borderRadius: 2,
//               overflow: 'hidden',
//               border: '1px solid #e0e0e0',
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//               '&:hover': {
//                 transform: 'translateY(-3px)',
//                 boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)'
//               }
//             }}
//           >
//             <CardHeader
//               avatar={
//                 <Avatar sx={{ bgcolor: statusStyle.bg, color: statusStyle.text }}>
//                   <AssignmentIcon />
//                 </Avatar>
//               }
//               title={
//                 <Typography variant="h6" component="div">
//                   Application #{applicationId}
//                 </Typography>
//               }
//               subheader={
//                 <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
//                   <DateRangeIcon sx={{ fontSize: 16, mr: 0.5, color: 'text.secondary' }} />
//                   <Typography variant="body2" color="text.secondary">
//                     {formatDate(application.applicationDate)}
//                   </Typography>
//                   <Chip
//                     label={application.applicationStatus}
//                     size="small"
//                     sx={{
//                       ml: 2,
//                       bgcolor: statusStyle.bg,
//                       color: statusStyle.text,
//                       fontWeight: 600,
//                       height: 24,
//                       border: `1px solid ${statusStyle.text}`
//                     }}
//                   />
//                 </Box>
//               }
//               action={
//                 <Button
//                   variant="contained"
//                   onClick={() => toggleApplicationExpansion(applicationId)}
//                   endIcon={isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                   sx={{
//                     borderRadius: '8px',
//                     textTransform: 'none',
//                     background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                     color: '#ffffff',
//                     '&:hover': {
//                       background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)',
//                     },
//                     mt: 1,
//                     mr: 1
//                   }}
//                 >
//                   {isExpanded ? 'Hide' : 'View'}
//                 </Button>
//               }
//             />

//             <Collapse in={isExpanded} timeout="auto" unmountOnExit>
//               <CardContent>
//                 <Tabs
//                   value={activeTab}
//                   onChange={handleTabChange}
//                   variant="scrollable"
//                   scrollButtons="auto"
//                   sx={{
//                     mb: 2,
//                     '& .MuiTab-root': {
//                       textTransform: 'none',
//                       minWidth: 100,
//                       fontWeight: 500,
//                     },
//                     '& .Mui-selected': {
//                       color: '#3a7bd5',
//                       fontWeight: 700,
//                     },
//                     '& .MuiTabs-indicator': {
//                       backgroundColor: '#3a7bd5',
//                     }
//                   }}
//                 >
//                   <Tab label="Assessment Details" />
//                   <Tab label="Property Information" />
//                   {(type === "c" || (type === "a" && thisAssessor.isManager)) && <Tab label="Assessor Details" />}
//                   {(type === "a" && full) && <Tab label="Customer Details" />}
//                 </Tabs>

//                 {/* Assessment Details Tab */}
//                 {activeTab === 0 && (
//                   <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid rgba(224, 224, 224, 1)' }}>
//                     <Table aria-label="assessment details table">
//                       <TableHead sx={{ bgcolor: 'rgba(58, 123, 213, 0.05)' }}>
//                         <TableRow>
//                           <TableCell width="20%" sx={{ fontWeight: 'bold' }}>Field</TableCell>
//                           <TableCell width="80%" sx={{ fontWeight: 'bold' }}>Value</TableCell>
//                         </TableRow>
//                       </TableHead>
//                       <TableBody>
//                         {assessment ? (
//                           <>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Assessment ID</TableCell>
//                               <TableCell>{assessment.assessmentId}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Block</TableCell>
//                               <TableCell>{assessment.block}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Plot</TableCell>
//                               <TableCell>{assessment.plot}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Sub-Plot</TableCell>
//                               <TableCell>{assessment.subPlot}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Construction Year</TableCell>
//                               <TableCell>{assessment.constructionYear}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Acquisition Price</TableCell>
//                               <TableCell>${assessment.acquisionPrice}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Assessment Goal</TableCell>
//                               <TableCell>{assessment.assessmentGoal}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Legal State</TableCell>
//                               <TableCell>
//                                 <Chip 
//                                   label={assessment.legalState} 
//                                   size="small"
//                                   sx={{
//                                     bgcolor: getStatusColor(assessment.legalState).bg,
//                                     color: getStatusColor(assessment.legalState).text
//                                   }}
//                                 />
//                               </TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Building Permit</TableCell>
//                               <TableCell>{assessment.buildingPermit ? "Yes" : "No"}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Irregularities Building</TableCell>
//                               <TableCell>{assessment.irregularitiesBuilding ? "Yes" : "No"}</TableCell>
//                             </TableRow>
//                           </>
//                         ) : (
//                           <TableRow>
//                             <TableCell colSpan={2} align="center">No assessment data available</TableCell>
//                           </TableRow>
//                         )}
//                       </TableBody>
//                     </Table>
//                   </TableContainer>
//                 )}

//                 {/* Property Information Tab */}
//                 {activeTab === 1 && (
//                   <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid rgba(224, 224, 224, 1)' }}>
//                     <Table aria-label="property information table">
//                       <TableHead sx={{ bgcolor: 'rgba(58, 123, 213, 0.05)' }}>
//                         <TableRow>
//                           <TableCell width="20%" sx={{ fontWeight: 'bold' }}>Field</TableCell>
//                           <TableCell width="80%" sx={{ fontWeight: 'bold' }}>Value</TableCell>
//                         </TableRow>
//                       </TableHead>
//                       <TableBody>
//                         {apartment ? (
//                           <>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Property ID</TableCell>
//                               <TableCell>{apartment.apartmentId}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">City</TableCell>
//                               <TableCell>{apartment.apartmentCity}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Address</TableCell>
//                               <TableCell>{apartment.apartmentAddress}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Size</TableCell>
//                               <TableCell>{apartment.apartmentSize} sq.m</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Floor</TableCell>
//                               <TableCell>{apartment.floor}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Elevator</TableCell>
//                               <TableCell>{apartment.elevator ? "Yes" : "No"}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Air Directions</TableCell>
//                               <TableCell>{apartment.airDirections}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Directions</TableCell>
//                               <TableCell>{apartment.directions}</TableCell>
//                             </TableRow>
//                           </>
//                         ) : (
//                           <TableRow>
//                             <TableCell colSpan={2} align="center">No property data available</TableCell>
//                           </TableRow>
//                         )}
//                       </TableBody>
//                     </Table>
//                   </TableContainer>
//                 )}

//                 {/* Assessor Details Tab */}
//                 {activeTab === 2 && (type === "c" || (type === "a" && thisAssessor.isManager)) && (
//                   <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid rgba(224, 224, 224, 1)' }}>
//                     <Table aria-label="assessor details table">
//                       <TableHead sx={{ bgcolor: 'rgba(58, 123, 213, 0.05)' }}>
//                         <TableRow>
//                           <TableCell width="20%" sx={{ fontWeight: 'bold' }}>Field</TableCell>
//                           <TableCell width="80%" sx={{ fontWeight: 'bold' }}>Value</TableCell>
//                         </TableRow>
//                       </TableHead>
//                       <TableBody>
//                         {assessor ? (
//                           <>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Assessor ID</TableCell>
//                               <TableCell>{assessor.assessorId}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Name</TableCell>
//                               <TableCell>{assessor.assessorFirstName} {assessor.assessorLastName}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">City</TableCell>
//                               <TableCell>{assessor.assessorCity}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Address</TableCell>
//                               <TableCell>{assessor.assessorAddress}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Phone</TableCell>
//                               <TableCell>{assessor.assessorPhone}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Email</TableCell>
//                               <TableCell>{assessor.assessorEmail}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Seniority</TableCell>
//                               <TableCell>{assessor.seniority} years</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Available</TableCell>
//                               <TableCell>{assessor.available ? "Yes" : "No"}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Manager</TableCell>
//                               <TableCell>{assessor.isManager ? "Yes" : "No"}</TableCell>
//                             </TableRow>
//                           </>
//                         ) : (
//                           <TableRow>
//                             <TableCell colSpan={2} align="center">No assessor data available</TableCell>
//                           </TableRow>
//                         )}
//                       </TableBody>
//                     </Table>
//                   </TableContainer>
//                 )}

//                 {/* Customer Details Tab */}
//                 {activeTab === 3 && type === "a" && full && (
//                   <TableContainer component={Paper} sx={{ boxShadow: 'none', border: '1px solid rgba(224, 224, 224, 1)' }}>
//                     <Table aria-label="customer details table">
//                       <TableHead sx={{ bgcolor: 'rgba(58, 123, 213, 0.05)' }}>
//                         <TableRow>
//                           <TableCell width="20%" sx={{ fontWeight: 'bold' }}>Field</TableCell>
//                           <TableCell width="80%" sx={{ fontWeight: 'bold' }}>Value</TableCell>
//                         </TableRow>
//                       </TableHead>
//                       <TableBody>
//                         {customer ? (
//                           <>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Customer ID</TableCell>
//                               <TableCell>{customer.customerId}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Name</TableCell>
//                               <TableCell>{customer.customerFirstName} {customer.customerLastName}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">City</TableCell>
//                               <TableCell>{customer.customerCity}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Address</TableCell>
//                               <TableCell>{customer.customerAddress}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Phone</TableCell>
//                               <TableCell>{customer.customerPhone}</TableCell>
//                             </TableRow>
//                             <TableRow>
//                               <TableCell component="th" scope="row">Email</TableCell>
//                               <TableCell>{customer.customerEmail}</TableCell>
//                             </TableRow>
//                           </>
//                         ) : (
//                           <TableRow>
//                             <TableCell colSpan={2} align="center">No customer data available</TableCell>
//                           </TableRow>
//                         )}
//                       </TableBody>
//                     </Table>
//                   </TableContainer>
//                 )}
//               </CardContent>

//               <CardActions sx={{ justifyContent: 'flex-end', p: 2, pt: 0 }}>
//                 {type === "a" && (
//                   <Button
//                     variant="contained"
//                     startIcon={<MailOutlineOutlinedIcon />}
//                     onClick={() => {
//                       dispatch(setApplicationId(applicationId));
//                       dispatch(setTo(customer?.customerId || null));
//                       chatMe(applicationId);
//                       navigate('/home/lastChats');
//                     }}
//                     sx={{
//                       borderRadius: '8px',
//                       textTransform: 'none',
//                       background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                       color: '#ffffff',
//                       '&:hover': {
//                         background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)',
//                       }
//                     }}
//                   >
//                     View Chats
//                   </Button>
//                 )}

//                 {type === "c" && (
//                   <Button
//                     variant="contained"
//                     startIcon={<BookmarkAddOutlinedIcon />}
//                     onClick={() => {
//                       dispatch(setApplicationId(applicationId));
//                       dispatch(setTo(assessor?.assessorId || null));
//                       chatMe(applicationId);
//                       navigate('/home/newChat');
//                     }}
//                     sx={{
//                       borderRadius: '8px',
//                       textTransform: 'none',
//                       background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                       color: '#ffffff',
//                       mr: 2,
//                       '&:hover': {
//                         background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)',
//                       }
//                     }}
//                   >
//                     New Chat
//                   </Button>
//                 )}

//                 {type === "c" && (
//                   <Button
//                     variant="outlined"
//                     startIcon={<BookmarkAddedOutlinedIcon />}
//                     onClick={() => {
//                       dispatch(setApplicationId(applicationId));
//                       dispatch(setTo(assessor?.assessorId || null));
//                       chatMe(applicationId);
//                       navigate('/home/lastChats');
//                     }}
//                     sx={{
//                       borderRadius: '8px',
//                       textTransform: 'none',
//                       borderColor: '#3a7bd5',
//                       color: '#3a7bd5',
//                       '&:hover': {
//                         borderColor: '#2b5876',
//                         background: 'rgba(58, 123, 213, 0.04)',
//                       }
//                     }}
//                   >
//                     Last Chats
//                   </Button>
//                 )}
//               </CardActions>
//             </Collapse>
//           </Card>
//         </Fade>
//       );
//     });
//   };

//   return (
//     <div className="assessment-container">
//       <div className="assessment-content">
//         <Container maxWidth="xl" sx={{ py: 2 }} ref={topRef}>
//           {renderCustomerDetails()}

//           {/* Search and Filter Section */}
//           <Paper
//             elevation={2}
//             sx={{
//               p: 2,
//               mb: 4,
//               borderRadius: 2,
//               background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
//             }}
//           >
//             <Grid container spacing={2} alignItems="center">
//               <Grid item xs={12} md={6}>
//                 <TextField
//                   fullWidth
//                   variant="outlined"
//                   placeholder="Search applications..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//                   InputProps={{
//                     startAdornment: (
//                       <InputAdornment position="start">
//                         <SearchIcon color="action" />
//                       </InputAdornment>
//                     ),
//                     endAdornment: searchTerm && (
//                       <InputAdornment position="end">
//                         <IconButton
//                           aria-label="clear search"
//                           onClick={() => {
//                             setSearchTerm('');
//                             setFilteredApplications(applicationsDetails);
//                           }}
//                           edge="end"
//                         >
//                           <ClearIcon fontSize="small" />
//                         </IconButton>
//                       </InputAdornment>
//                     ),
//                     sx: {
//                       borderRadius: 2,
//                       bgcolor: 'rgba(255, 255, 255, 0.7)',
//                       '&:hover': {
//                         bgcolor: 'rgba(255, 255, 255, 0.9)',
//                       }
//                     }
//                   }}
//                   sx={{ mb: { xs: 2, md: 0 } }}
//                 />
//               </Grid>
//               <Grid item xs={12} md={6}>
//                 <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-end' } }}>
//                   <Button
//                     variant="outlined"
//                     startIcon={<NumbersIcon />}
//                     onClick={() => setSearchType('applicationId')}
//                     color={searchType === 'applicationId' ? 'primary' : 'inherit'}
//                     sx={{
//                       borderRadius: 2,
//                       textTransform: 'none',
//                       borderColor: searchType === 'applicationId' ? '#3a7bd5' : 'rgba(0, 0, 0, 0.23)',
//                       color: searchType === 'applicationId' ? '#3a7bd5' : 'inherit',
//                       bgcolor: 'rgba(255, 255, 255, 0.7)',
//                       '&:hover': {
//                         bgcolor: 'rgba(255, 255, 255, 0.9)',
//                         borderColor: '#3a7bd5'
//                       }
//                     }}
//                   >
//                     Application ID
//                   </Button>
//                   <Button
//                     variant="outlined"
//                     startIcon={<PersonOutlineIcon />}
//                     onClick={() => setSearchType('assessorName')}
//                     color={searchType === 'assessorName' ? 'primary' : 'inherit'}
//                     sx={{
//                       borderRadius: 2,
//                       textTransform: 'none',
//                       borderColor: searchType === 'assessorName' ? '#3a7bd5' : 'rgba(0, 0, 0, 0.23)',
//                       color: searchType === 'assessorName' ? '#3a7bd5' : 'inherit',
//                       bgcolor: 'rgba(255, 255, 255, 0.7)',
//                       '&:hover': {
//                         bgcolor: 'rgba(255, 255, 255, 0.9)',
//                         borderColor: '#3a7bd5'
//                       }
//                     }}
//                   >
//                     Assessor Name
//                   </Button>
//                   <Button
//                     variant="outlined"
//                     startIcon={<SortIcon />}
//                     onClick={() => handleSort(sortBy === 'date' ? 'none' : 'date')}
//                     color={sortBy === 'date' ? 'primary' : 'inherit'}
//                     sx={{
//                       borderRadius: 2,
//                       textTransform: 'none',
//                       borderColor: sortBy === 'date' ? '#3a7bd5' : 'rgba(0, 0, 0, 0.23)',
//                       color: sortBy === 'date' ? '#3a7bd5' : 'inherit',
//                       bgcolor: 'rgba(255, 255, 255, 0.7)',
//                       '&:hover': {
//                         bgcolor: 'rgba(255, 255, 255, 0.9)',
//                         borderColor: '#3a7bd5'
//                       }
//                     }}
//                   >
//                     Sort by Date {sortBy === 'date' ? '↓' : ''}
//                   </Button>
//                   <Button
//                     variant="contained"
//                     startIcon={<SearchIcon />}
//                     onClick={handleSearch}
//                     sx={{
//                       borderRadius: 2,
//                       textTransform: 'none',
//                       background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                       color: '#ffffff',
//                       '&:hover': {
//                         background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)',
//                       }
//                     }}
//                   >
//                     Search
//                   </Button>
//                   <IconButton
//                     onClick={() => {
//                       setSearchTerm('');
//                       setSortBy('none');
//                       setFilteredApplications(applicationsDetails);
//                     }}
//                     sx={{
//                       borderRadius: 2,
//                       bgcolor: 'rgba(255, 255, 255, 0.7)',
//                       '&:hover': {
//                         bgcolor: 'rgba(255, 255, 255, 0.9)',
//                       }
//                     }}
//                   >
//                     <RefreshIcon />
//                   </IconButton>
//                 </Box>
//               </Grid>
//             </Grid>
//           </Paper>

//           {/* Applications List */}
//           <Box sx={{ mb: 4 }}>
//             <Typography variant="h5" gutterBottom fontWeight="600" color="#2c3e50">
//               Applications
//               {filteredApplications.length > 0 && (
//                 <Chip
//                   label={`${filteredApplications.length} found`}
//                   size="small"
//                   sx={{
//                     ml: 2,
//                     bgcolor: 'rgba(58, 123, 213, 0.1)',
//                     color: '#3a7bd5',
//                     fontWeight: 600
//                   }}
//                 />
//               )}
//             </Typography>
//             <Divider sx={{ mb: 3 }} />

//             {/* Grid view for applications */}
//             <div className="grid-table">
//               {filteredApplications.length > 0 && (
//                 <div className="grid-header">
//                   <div className="grid-cell">ID</div>
//                   <div className="grid-cell">Assessor</div>
//                   <div className="grid-cell">Application Date</div>
//                   <div className="grid-cell">Last Update</div>
//                   <div className="grid-cell">Status</div>
//                   <div className="grid-cell">Actions</div>
//                 </div>
//               )}

//               {filteredApplications.length > 0 ? (
//                 filteredApplications.map((application) => {
//                   const applicationId = application.applicationId;
//                   const assessor = assessorsDetails.find(a => a.assessorId === application.assessorId);
//                   const statusStyle = getStatusColor(application.applicationStatus);

//                   return (
//                     <div 
//                       key={applicationId}
//                       className={`grid-row ${expandedApplications[applicationId] ? "selected-row" : ""}`}
//                       onClick={() => toggleApplicationExpansion(applicationId)}
//                     >
//                       <div className="grid-cell">{applicationId}</div>
//                       <div className="grid-cell">
//                         {assessor ? `${assessor.assessorFirstName} ${assessor.assessorLastName}` : 'Unknown'}
//                       </div>
//                       <div className="grid-cell">{formatDate(application.applicationDate)}</div>
//                       <div className="grid-cell">{formatDate(application.lastApplicationDate)}</div>
//                       <div className="grid-cell">
//                         <Chip
//                           label={application.applicationStatus}
//                           size="small"
//                           sx={{
//                             bgcolor: statusStyle.bg,
//                             color: statusStyle.text,
//                             fontWeight: 600,
//                             border: `1px solid ${statusStyle.text}`
//                           }}
//                         />
//                       </div>
//                       <div className="grid-cell">
//                         <Box sx={{ display: 'flex', gap: 1 }}>
//                           {type === "a" && (
//                             <Button
//                               size="small"
//                               variant="contained"
//                               startIcon={<MailOutlineOutlinedIcon />}
//                               onClick={(e) => {
//                                 e.stopPropagation();
//                                 dispatch(setApplicationId(applicationId));
//                                 const apartment = apartmentsDetails.find(a => a.apartmentId === applicationId);
//                                 const customer = apartment ? customersDetails.find(c => c.customerId === apartment.customerId) : null;
//                                 dispatch(setTo(customer?.customerId || null));
//                                 chatMe(applicationId);
//                                 navigate('/home/lastChats');
//                               }}
//                               sx={{
//                                 borderRadius: '4px',
//                                 textTransform: 'none',
//                                 background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                                 fontSize: '0.75rem',
//                                 py: 0.5
//                               }}
//                             >
//                               Chats
//                             </Button>
//                           )}

//                           {type === "c" && (
//                             <>
//                               <Button
//                                 size="small"
//                                 variant="contained"
//                                 startIcon={<BookmarkAddOutlinedIcon />}
//                                 onClick={(e) => {
//                                   e.stopPropagation();
//                                   dispatch(setApplicationId(applicationId));
//                                   dispatch(setTo(assessor?.assessorId || null));
//                                   chatMe(applicationId);
//                                   navigate('/home/newChat');
//                                 }}
//                                 sx={{
//                                   borderRadius: '4px',
//                                   textTransform: 'none',
//                                   background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                                   fontSize: '0.75rem',
//                                   py: 0.5

//                                 }}
//                                 >
//                                   New
//                                 </Button>
//                                 <Button
//                                   size="small"
//                                   variant="outlined"
//                                   startIcon={<BookmarkAddedOutlinedIcon />}
//                                   onClick={(e) => {
//                                     e.stopPropagation();
//                                     dispatch(setApplicationId(applicationId));
//                                     dispatch(setTo(assessor?.assessorId || null));
//                                     chatMe(applicationId);
//                                     navigate('/home/lastChats');
//                                   }}
//                                   sx={{
//                                     borderRadius: '4px',
//                                     textTransform: 'none',
//                                     borderColor: '#3a7bd5',
//                                     color: '#3a7bd5',
//                                     fontSize: '0.75rem',
//                                     py: 0.5
//                                   }}
//                                 >
//                                   History
//                                 </Button>
//                               </>
//                             )}
//                           </Box>
//                         </div>
//                       </div>
//                     );
//                   })
//                 ) : (
//                   <div className="empty-state">
//                     <Typography variant="h6" color="#2c3e50" align="center">
//                       No applications found
//                     </Typography>
//                     <Typography variant="body2" color="#7f8c8d" align="center" sx={{ mt: 1 }}>
//                       {searchTerm ? 'Try adjusting your search criteria' : 'Applications will appear here when available'}
//                     </Typography>
//                   </div>
//                 )}
//               </div>

//               {filteredApplications.length > 0 && renderApplications()}

//               {filteredApplications.length > 5 && (
//                 <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
//                   <Button
//                     variant="outlined"
//                     onClick={scrollToTop}
//                     startIcon={<KeyboardArrowUpIcon />}
//                     sx={{
//                       borderRadius: 2,
//                       textTransform: 'none',
//                       borderColor: '#3a7bd5',
//                       color: '#3a7bd5',
//                       '&:hover': {
//                         bgcolor: 'rgba(58, 123, 213, 0.1)',
//                       }
//                     }}
//                   >
//                     Back to Top
//                   </Button>
//                 </Box>
//               )}
//             </Box>
//           </Container>
//         </div>
//       </div>
//     );
//   };

//   export default FullApplications;


//////////////////////////////////////////////////
// import { useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { applicationThunk } from "../redux/slices/get/applicatiionThunk";
// import { myApplicationsThunk } from "../redux/slices/get by assessor/myApplicationsThunk";
// import { assessmentThunk } from "../redux/slices/get/assessmentThunk";
// import { myAssessmentsThunk } from "../redux/slices/get by assessor/myAssessmentsThunk";
// import {
//   Button,
//   Box,
//   Typography,
//   Paper,
//   Divider,
//   Container,
//   Fade,
//   Collapse,
//   Chip,
//   TextField,
//   InputAdornment,
//   IconButton,
//   FormControl,
//   InputLabel,
//   Select,
//   MenuItem
// } from "@mui/material";
// import * as React from 'react';
// import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
// import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
// import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
// import { Outlet, useNavigate } from "react-router-dom";
// import { apartmentDetailsThunk } from "../redux/slices/get/apartmentDetailsThunk";
// import { myApartmentDetailsThunk } from "../redux/slices/get by assessor/myApartmentDetailsThunk";
// import { yourApplicationsThunk } from "../redux/slices/get by customer/yourApplicationsThunk";
// import { yourAssessmentsThunk } from "../redux/slices/get by customer/yourAssessmentsThunk";
// import { yourApartmentDetailsThunk } from "../redux/slices/get by customer/yourApartmentsDetailsThunk";
// import { yourAssessorsThunk } from "../redux/slices/get by customer/yourAssessorsThunk";
// import { setApplicationId, setLastChats, setTo } from "../redux/slices/chatSlice";
// import SearchIcon from '@mui/icons-material/Search';
// import ClearIcon from '@mui/icons-material/Clear';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import DateRangeIcon from '@mui/icons-material/DateRange';
// import PersonIcon from '@mui/icons-material/Person';
// import AssignmentIcon from '@mui/icons-material/Assignment';
// import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

// export const FullApplications = () => {
//   const thisAssessor = useSelector(state => state.assessor.thisAssessor);
//   const customerChose = useSelector(state => state.customer.customerChose);
//   const thisCustomer = useSelector(state => state.customer.thisCustomer);
//   const theApplication = useSelector(state => state.application.applications);
//   const myApplication = useSelector(state => state.application.myApplication);
//   const assessmentsDetails = useSelector(state => state.assessment.assessments);
//   const apartmentsDetails = useSelector(state => state.apartmentDetails.apartmentsDetails);
//   const customersDetails = useSelector(state => state.customer.customers);
//   const assessorsDetails = useSelector(state => state.assessor.assessors);
//   const full = useSelector(state => state.user.full);
//   const chatDetails = useSelector(state => state.chat.chats);
//   const type = useSelector(state => state.user.t);
//   const dispatch = useDispatch();
//   const [sent, setSent] = useState(false);
//   const [fullDetails, setFullDetails] = useState([]);
//   const [finalAssessor, setFinalAssessor] = useState([]);
//   const [applicationsDetails, setApplicationDetails] = useState([...theApplication]);
//   const navigate = useNavigate();

//   // חדש - עבור העיצוב החדש
//   const topRef = useRef(null);
//   const [expandedItems, setExpandedItems] = useState({});
//   const [expandAll, setExpandAll] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredApplications, setFilteredApplications] = useState([]);
//   const [sortBy, setSortBy] = useState('none');

//   const getData = async () => {
//     const res = await dispatch(yourApplicationsThunk(customerChose.customerId));
//     if (res.payload != null) {
//       setApplicationDetails(res.payload);
//     }
//   }

//   useEffect(() => {
//     // Scroll to top when component mounts
//     window.scrollTo(0, 0);

//     if (type === "a") {
//       if (thisAssessor.isManager)
//         setFinalAssessor(assessorsDetails);
//       else {
//         const a = [];
//         a.push(thisAssessor);
//         setFinalAssessor(a);
//       }
//     }
//     else if (type === "c") {
//       setFinalAssessor(assessorsDetails);
//     }
//     if (!full) {
//       getData();
//     }
//   }, []);

//   useEffect(() => {
//     if (fullDetails.length === 0 && applicationsDetails.length !== 0 && apartmentsDetails.length !== 0 && assessmentsDetails.length !== 0 && finalAssessor.length !== 0) {
//       const s = [];
//       applicationsDetails.forEach(element => {
//         s.push(element.applicationId);
//       });
//       setFullDetails(s);
//       setFilteredApplications(s); // עבור החיפוש והמיון
//     }
//   }, [applicationsDetails, assessmentsDetails, apartmentsDetails, finalAssessor]);

//   const assess = (a, applicationId) => {
//     const aa = applicationsDetails.find(c => c.assessorId === a.assessorId);
//     if (aa && aa.applicationId === applicationId)
//       return true;
//     return false;
//   }

//   const cust = (y, applicationId) => {
//     const cc = apartmentsDetails.find(c => c.customerId === y);
//     if (cc && cc.apartmentId === applicationId)
//       return true;
//     return false;
//   }

//   const chatMe = (element) => {
//     let arr = [];
//     chatDetails.forEach(e => {
//       if (element === e.applicationId) {
//         arr.push(e);
//       }
//     });
//     dispatch(setLastChats(arr));
//   }

//   // פונקציות חדשות עבור העיצוב החדש
//   const scrollToTop = () => {
//     topRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   const toggleItemExpansion = (itemId) => {
//     setExpandedItems(prev => ({
//       ...prev,
//       [itemId]: !prev[itemId]
//     }));
//   };

//   const toggleExpandAll = () => {
//     const newExpandAll = !expandAll;
//     setExpandAll(newExpandAll);

//     // עדכון כל הפריטים להיות מורחבים או מכווצים
//     const newExpandedItems = {};
//     fullDetails.forEach(id => {
//       newExpandedItems[id] = newExpandAll;
//     });
//     setExpandedItems(newExpandedItems);
//   };

//   const handleSearch = () => {
//     if (!searchTerm.trim()) {
//       setFilteredApplications([...fullDetails]);
//       return;
//     }

//     const term = searchTerm.toLowerCase();

//     // חיפוש בכל הנתונים
//     const results = fullDetails.filter(appId => {
//       // בדיקה באפליקציות
//       const app = applicationsDetails.find(a => a.applicationId === appId);
//       if (app && Object.values(app).some(val =>
//         val && typeof val === 'string' && val.toLowerCase().includes(term)
//       )) {
//         return true;
//       }

//       // בדיקה בהערכות
//       const assessment = assessmentsDetails.find(a => a.assessmentId === appId);
//       if (assessment && Object.values(assessment).some(val =>
//         val && typeof val === 'string' && val.toLowerCase().includes(term)
//       )) {
//         return true;
//       }

//       // בדיקה בפרטי דירה
//       const apartment = apartmentsDetails.find(a => a.apartmentId === appId);
//       if (apartment && Object.values(apartment).some(val =>
//         val && typeof val === 'string' && val.toLowerCase().includes(term)
//       )) {
//         return true;
//       }

//       return false;
//     });

//     setFilteredApplications(results);
//   };

//   const handleSort = (sortType) => {
//     setSortBy(sortType);

//     let sortedApplications = [...fullDetails];

//     if (sortType === 'date') {
//       // מיון לפי תאריך אפליקציה
//       sortedApplications.sort((a, b) => {
//         const appA = applicationsDetails.find(app => app.applicationId === a);
//         const appB = applicationsDetails.find(app => app.applicationId === b);
//         if (!appA || !appB) return 0;
//         return new Date(appB.applicationDate) - new Date(appA.applicationDate);
//       });
//     } else if (sortType === 'id') {
//       // מיון לפי מזהה אפליקציה
//       sortedApplications.sort((a, b) => a - b);
//     } else if (sortType === 'status') {
//       // מיון לפי סטטוס
//       sortedApplications.sort((a, b) => {
//         const appA = applicationsDetails.find(app => app.applicationId === a);
//         const appB = applicationsDetails.find(app => app.applicationId === b);
//         if (!appA || !appB) return 0;
//         return appA.applicationStatus.localeCompare(appB.applicationStatus);
//       });
//     }

//     setFilteredApplications(sortedApplications);
//   };

//   // פונקציה לקבלת צבע לפי סטטוס
//   // פונקציה לקבלת צבע לפי סטטוס - עם בדיקת תקינות
//   const getStatusColor = (status) => {
//     // בדיקה שהסטטוס הוא מחרוזת תקינה
//     if (!status || typeof status !== 'string') {
//       return '#9e9e9e'; // צבע ברירת מחדל אם הסטטוס אינו תקין
//     }

//     switch (status.toLowerCase()) {
//       case 'approved':
//         return '#4caf50'; // Green
//       case 'pending':
//         return '#ff9800'; // Orange
//       case 'rejected':
//         return '#f44336'; // Red
//       default:
//         return '#9e9e9e'; // Grey
//     }
//   };


//   // פונקציה לפורמט תאריך
//   const formatDate = (dateString) => {
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'short',
//         day: 'numeric'
//       });
//     } catch (e) {
//       return dateString;
//     }
//   };

//   return (
//     <Box sx={{ p: { xs: 2, md: 4 }, position: 'relative' }} ref={topRef}>
//       <Fade in={true} timeout={1000}>
//         <Box sx={{ textAlign: 'center', mb: 6 }}>
//           <Typography
//             variant="h4"
//             component="h1"
//             fontWeight="700"
//             color="#2c3e50"
//             sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.125rem' } }}
//           >
//             Full Applications
//           </Typography>
//           <Typography
//             variant="subtitle1"
//             color="#7f8c8d"
//             sx={{
//               maxWidth: 800,
//               mx: 'auto',
//               mb: 4,
//               lineHeight: 1.8,
//               px: { xs: 2, md: 0 }
//             }}
//           >
//             View complete details for all applications including assessor information, property details, and assessment data.
//           </Typography>
//         </Box>
//       </Fade>

//       {/* Customer details for assessor view */}
//       {type === "a" && !full && (
//         <Paper
//           elevation={1}
//           sx={{
//             p: 3,
//             mb: 4,
//             borderRadius: 2,
//             background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
//           }}
//         >
//           <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#2c3e50' }}>
//             Customer Details
//           </Typography>
//           <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 2 }}>
//             <Box>
//               <Typography variant="body2" color="text.secondary">ID</Typography>
//               <Typography variant="body1">{customerChose.customerId}</Typography>
//             </Box>
//             <Box>
//               <Typography variant="body2" color="text.secondary">First Name</Typography>
//               <Typography variant="body1">{customerChose.customerFirstName}</Typography>
//             </Box>
//             <Box>
//               <Typography variant="body2" color="text.secondary">Last Name</Typography>
//               <Typography variant="body1">{customerChose.customerLastName}</Typography>
//             </Box>
//             <Box>
//               <Typography variant="body2" color="text.secondary">City</Typography>
//               <Typography variant="body1">{customerChose.customerCity}</Typography>
//             </Box>
//             <Box>
//               <Typography variant="body2" color="text.secondary">Address</Typography>
//               <Typography variant="body1">{customerChose.customerAddress}</Typography>
//             </Box>
//             <Box>
//               <Typography variant="body2" color="text.secondary">Phone</Typography>
//               <Typography variant="body1">{customerChose.customerPhone}</Typography>
//             </Box>
//             <Box>
//               <Typography variant="body2" color="text.secondary">Email</Typography>
//               <Typography variant="body1">{customerChose.customerEmail}</Typography>
//             </Box>
//           </Box>
//         </Paper>
//       )}

//       {/* Search and filter controls */}
//       <Box sx={{ mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'space-between', alignItems: { xs: 'stretch', md: 'center' } }}>
//         {/* Sort buttons */}
//         <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
//           <Typography variant="subtitle1" sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
//             <UnfoldMoreIcon sx={{ mr: 0.5, fontSize: '1rem' }} /> Sort by:
//           </Typography>
//           <Button
//             variant={sortBy === 'date' ? 'contained' : 'outlined'}
//             size="small"
//             onClick={() => handleSort('date')}
//             startIcon={<DateRangeIcon />}
//             sx={{
//               background: sortBy === 'date' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
//               '&:hover': {
//                 background: sortBy === 'date' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
//               }
//             }}
//           >
//             Date
//           </Button>
//           <Button
//             variant={sortBy === 'id' ? 'contained' : 'outlined'}
//             size="small"
//             onClick={() => handleSort('id')}
//             startIcon={<AssignmentIcon />}
//             sx={{
//               background: sortBy === 'id' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
//               '&:hover': {
//                 background: sortBy === 'id' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
//               }
//             }}
//           >
//             ID
//           </Button>
//           <Button
//             variant={sortBy === 'status' ? 'contained' : 'outlined'}
//             size="small"
//             onClick={() => handleSort('status')}
//             startIcon={<PersonIcon />}
//             sx={{
//               background: sortBy === 'status' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
//               '&:hover': {
//                 background: sortBy === 'status' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
//               }
//             }}
//           >
//             Status
//           </Button>
//           <Button
//             variant={sortBy === 'none' ? 'contained' : 'outlined'}
//             size="small"
//             onClick={() => handleSort('none')}
//             startIcon={<RefreshIcon />}
//             sx={{
//               background: sortBy === 'none' ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' : 'transparent',
//               color: sortBy === 'none' ? '#2c3e50' : 'inherit',
//               '&:hover': {
//                 background: sortBy === 'none' ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 90%)' : 'rgba(195, 207, 226, 0.1)'
//               }
//             }}
//           >
//             Default
//           </Button>
//         </Box>

//         {/* Search */}
//         <Box sx={{ display: 'flex', gap: 1, flexGrow: { xs: 1, md: 0 }, maxWidth: { xs: '100%', md: '300px' }, mt: { xs: 2, md: 0 } }}>
//           <TextField
//             size="small"
//             placeholder="Search applications..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//               endAdornment: searchTerm ? (
//                 <InputAdornment position="end">
//                   <IconButton size="small" onClick={() => setSearchTerm('')}>
//                     <ClearIcon fontSize="small" />
//                   </IconButton>
//                 </InputAdornment>
//               ) : null
//             }}
//             sx={{ flexGrow: 1 }}
//           />
//           <Button
//             variant="contained"
//             size="small"
//             onClick={handleSearch}
//             sx={{
//               background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//               '&:hover': {
//                 background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
//               }
//             }}
//           >
//             Search
//           </Button>
//         </Box>

//         {/* Expand All Button */}
//         <Button
//           variant="outlined"
//           size="small"
//           onClick={toggleExpandAll}
//           startIcon={expandAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//           sx={{
//             borderColor: '#3a7bd5',
//             color: '#3a7bd5',
//             '&:hover': {
//               borderColor: '#2b5876',
//               backgroundColor: 'rgba(58, 123, 213, 0.1)'
//             }
//           }}
//         >
//           {expandAll ? "Collapse All" : "Expand All"}
//         </Button>
//       </Box>

//       <Container maxWidth="lg">
//         <Fade in={true} timeout={1200}>
//           <Box>
//             {(assessmentsDetails && applicationsDetails && finalAssessor && fullDetails.length > 0) ? (
//               (filteredApplications.length > 0 ? filteredApplications : fullDetails).map((element, index) => {
//                 // מצא את האפליקציה הנוכחית
//                 const currentApplication = applicationsDetails.find(a => a.applicationId === element);
//                 // קבע צבע רקע לפי סטטוס
//                 const gradientBackground = currentApplication ?
//                   `linear-gradient(135deg, ${getStatusColor(currentApplication.applicationStatus)}10 0%, ${getStatusColor(currentApplication.applicationStatus)}20 100%)` :
//                   'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';

//                 return (
//                   <Fade in={true} timeout={1000 + (index * 200)} key={element}>
//                     <Paper
//                       elevation={1}
//                       sx={{
//                         mb: 3,
//                         borderRadius: 2,
//                         overflow: 'hidden',
//                         border: `1px solid #e0e0e0`,
//                         borderLeft: currentApplication ?
//                           `5px solid ${getStatusColor(currentApplication.applicationStatus)}` :
//                           '5px solid #9e9e9e',
//                         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                         '&:hover': {
//                           transform: 'translateY(-3px)',
//                           boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)'
//                         }
//                       }}
//                     >
//                       {/* Header with application ID and expand button */}
//                       <Box
//                         sx={{
//                           p: 2,
//                           display: 'flex',
//                           justifyContent: 'space-between',
//                           alignItems: 'center',
//                           background: gradientBackground
//                         }}
//                         onClick={() => toggleItemExpansion(element)}
//                       >
//                         <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                           <Typography variant="h6" sx={{ fontWeight: 600, color: '#2c3e50' }}>
//                             Application #{element}
//                           </Typography>
//                           {currentApplication && currentApplication.applicationStatus && (
//                             <Chip
//                               label={currentApplication.applicationStatus}
//                               size="small"
//                               sx={{
//                                 ml: 2,
//                                 bgcolor: `${getStatusColor(currentApplication.applicationStatus)}20`,
//                                 color: getStatusColor(currentApplication.applicationStatus),
//                                 fontWeight: 500
//                               }}
//                             />
//                           )}

//                         </Box>
//                         <Button
//                           variant="text"
//                           size="small"
//                           endIcon={expandedItems[element] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                           sx={{ color: '#3a7bd5' }}
//                         >
//                           {expandedItems[element] ? "Hide Details" : "Show Details"}
//                         </Button>
//                       </Box>

//                       {/* Collapsible content with all tables */}
//                       <Collapse in={expandedItems[element] || expandAll} timeout="auto" unmountOnExit>
//                         <Box sx={{ p: 2 }}>
//                           {/* Customer table for assessor in full mode */}
//                           {type === "a" && full && (
//                             <Box sx={{ mb: 3 }}>
//                               <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
//                                 Customer Details
//                               </Typography>
//                               <div className="grid-table">
//                                 <div className="grid-header-container">
//                                   <div className="grid-header">
//                                     <div className="grid-cell">ID</div>
//                                     <div className="grid-cell">First Name</div>
//                                     <div className="grid-cell">Last Name</div>
//                                     <div className="grid-cell">City</div>
//                                     <div className="grid-cell">Address</div>
//                                     <div className="grid-cell">Phone</div>
//                                     <div className="grid-cell">Email</div>
//                                   </div>
//                                 </div>
//                                 <div className="grid-body-container">
//                                   {customersDetails && customersDetails.map(d => {
//                                     if (cust(d.customerId, element)) {
//                                       return (
//                                         <div key={d.customerId} className="grid-row">
//                                           <div className="grid-cell">{d.customerId}</div>
//                                           <div className="grid-cell">{d.customerFirstName}</div>
//                                           <div className="grid-cell">{d.customerLastName}</div>
//                                           <div className="grid-cell">{d.customerCity}</div>
//                                           <div className="grid-cell">{d.customerAddress}</div>
//                                           <div className="grid-cell">{d.customerPhone}</div>
//                                           <div className="grid-cell">{d.customerEmail}</div>
//                                         </div>
//                                       );
//                                     }
//                                     return null;
//                                   })}
//                                 </div>
//                               </div>
//                             </Box>
//                           )}

//                           {/* Assessor table */}
//                           {(type === "c" || (type === "a" && thisAssessor.isManager === true)) && (
//                             <Box sx={{ mb: 3 }}>
//                               <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
//                                 Assessor Details
//                               </Typography>
//                               <div className="grid-table">
//                                 <div className="grid-header-container">
//                                   <div className="grid-header">
//                                     <div className="grid-cell">First Name</div>
//                                     <div className="grid-cell">Last Name</div>
//                                     <div className="grid-cell">City</div>
//                                     <div className="grid-cell">Address</div>
//                                     <div className="grid-cell">Phone</div>
//                                     <div className="grid-cell">Email</div>
//                                   </div>
//                                 </div>
//                                 <div className="grid-body-container">
//                                   {finalAssessor.map(d => {
//                                     if (assess(d, element)) {
//                                       return (
//                                         <div key={d.assessorId} className="grid-row">
//                                           <div className="grid-cell">{d.assessorFirstName}</div>
//                                           <div className="grid-cell">{d.assessorLastName}</div>
//                                           <div className="grid-cell">{d.assessorCity}</div>
//                                           <div className="grid-cell">{d.assessorAddress}</div>
//                                           <div className="grid-cell">{d.assessorPhone}</div>
//                                           <div className="grid-cell">{d.assessorEmail}</div>
//                                         </div>
//                                       );
//                                     }
//                                     return null;
//                                   })}
//                                 </div>
//                               </div>
//                             </Box>
//                           )}

//                           {/* Application table */}
//                           <Box sx={{ mb: 3 }}>
//                             <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
//                               Application Details
//                             </Typography>
//                             <div className="grid-table">
//                               <div className="grid-header-container">
//                                 <div className="grid-header">
//                                   <div className="grid-cell">Application ID</div>
//                                   <div className="grid-cell">Application Date</div>
//                                   <div className="grid-cell">Last Application Date</div>
//                                   <div className="grid-cell">Application Status</div>
//                                 </div>
//                               </div>
//                               <div className="grid-body-container">
//                                 {applicationsDetails.map(a => {
//                                   if (a.applicationId === element) {
//                                     return (
//                                       <div key={a.applicationId} className="grid-row">
//                                         <div className="grid-cell">{a.applicationId}</div>
//                                         <div className="grid-cell">{formatDate(a.applicationDate)}</div>
//                                         <div className="grid-cell">{formatDate(a.lastApplicationDate)}</div>
//                                         <div className="grid-cell">
//                                           <Chip
//                                             label={a.applicationStatus}
//                                             size="small"
//                                             sx={{
//                                               bgcolor: a.applicationStatus === 'Approved' ? '#e3f2fd' :
//                                                 a.applicationStatus === 'Pending' ? '#fff8e1' :
//                                                   a.applicationStatus === 'Rejected' ? '#ffebee' : '#e0e0e0',
//                                               color: a.applicationStatus === 'Approved' ? '#1565c0' :
//                                                 a.applicationStatus === 'Pending' ? '#ff8f00' :
//                                                   a.applicationStatus === 'Rejected' ? '#c62828' : '#616161',
//                                               fontWeight: 500
//                                             }}
//                                           />
//                                         </div>
//                                       </div>
//                                     );
//                                   }
//                                   return null;
//                                 })}
//                               </div>
//                             </div>
//                           </Box>

//                           {/* Assessment table */}
//                           <Box sx={{ mb: 3 }}>
//                             <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
//                               Assessment Details
//                             </Typography>
//                             <div className="grid-table">
//                               <div className="grid-header-container">
//                                 <div className="grid-header">
//                                   <div className="grid-cell">Assessment ID</div>
//                                   <div className="grid-cell">Block</div>
//                                   <div className="grid-cell">Plot</div>
//                                   <div className="grid-cell">Sub Plot</div>
//                                   <div className="grid-cell">Construction Year</div>
//                                   <div className="grid-cell">Acquision Price</div>
//                                   <div className="grid-cell">Assessment Goal</div>
//                                   <div className="grid-cell">Legal State</div>
//                                   <div className="grid-cell">Building Permit</div>
//                                   <div className="grid-cell">Irregularities Building</div>
//                                 </div>
//                               </div>
//                               <div className="grid-body-container">
//                                 {assessmentsDetails.map(s => {
//                                   if (s.assessmentId === element) {
//                                     return (
//                                       <div key={s.assessmentId} className="grid-row">
//                                         <div className="grid-cell">{s.assessmentId}</div>
//                                         <div className="grid-cell">{s.block}</div>
//                                         <div className="grid-cell">{s.plot}</div>
//                                         <div className="grid-cell">{s.subPlot}</div>
//                                         <div className="grid-cell">{s.constructionYear}</div>
//                                         <div className="grid-cell">{s.acquisionPrice}</div>
//                                         <div className="grid-cell">{s.assessmentGoal}</div>
//                                         <div className="grid-cell">{s.legalState}</div>
//                                         <div className="grid-cell">{s.buildingPermit}</div>
//                                         <div className="grid-cell">{s.irregularitiesBuilding}</div>
//                                       </div>
//                                     );
//                                   }
//                                   return null;
//                                 })}
//                               </div>
//                             </div>
//                           </Box>

//                           {/* Apartment details table */}
//                           <Box sx={{ mb: 3 }}>
//                             <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
//                               Apartment Details
//                             </Typography>
//                             <div className="grid-table">
//                               <div className="grid-header-container">
//                                 <div className="grid-header">
//                                   <div className="grid-cell">ID</div>
//                                   <div className="grid-cell">Customer ID</div>
//                                   <div className="grid-cell">City</div>
//                                   <div className="grid-cell">Address</div>
//                                   <div className="grid-cell">Size</div>
//                                   <div className="grid-cell">Air Directions</div>
//                                   <div className="grid-cell">Directions</div>
//                                   <div className="grid-cell">Floor</div>
//                                   <div className="grid-cell">Elevator</div>
//                                 </div>
//                               </div>
//                               <div className="grid-body-container">
//                                 {apartmentsDetails.map(g => {
//                                   if (g.apartmentId === element) {
//                                     return (
//                                       <div key={g.apartmentId} className="grid-row">
//                                         <div className="grid-cell">{g.apartmentId}</div>
//                                         <div className="grid-cell">{g.customerId}</div>
//                                         <div className="grid-cell">{g.apartmentCity}</div>
//                                         <div className="grid-cell">{g.apartmentAddress}</div>
//                                         <div className="grid-cell">{g.apartmentSize}</div>
//                                         <div className="grid-cell">{g.airDirections}</div>
//                                         <div className="grid-cell">{g.directions}</div>
//                                         <div className="grid-cell">{g.floor}</div>
//                                         <div className="grid-cell">{g.elevator}</div>
//                                       </div>
//                                     );
//                                   }
//                                   return null;
//                                 })}
//                               </div>
//                             </div>
//                           </Box>

//                           {/* Chat buttons */}
//                           {!thisAssessor.isManager && (
//                             <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
//                               {!sent ? (
//                                 <Button
//                                   variant="contained"
//                                   startIcon={<MailOutlineOutlinedIcon />}
//                                   onClick={() => { setSent(true) }}
//                                   sx={{
//                                     background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                                     '&:hover': {
//                                       background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
//                                     }
//                                   }}
//                                 >
//                                   Message Options
//                                 </Button>
//                               ) : (
//                                 <>
//                                   <Button
//                                     variant="contained"
//                                     startIcon={<BookmarkAddOutlinedIcon />}
//                                     onClick={() => {
//                                       dispatch(setApplicationId(element));
//                                       dispatch(setTo(customerChose.customerFirstName + " " + customerChose.customerLastName));
//                                       navigate('newChat');
//                                     }}
//                                     sx={{
//                                       background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                                       '&:hover': {
//                                         background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
//                                       }
//                                     }}
//                                   >
//                                     New Chat
//                                   </Button>
//                                   <Button
//                                     variant="outlined"
//                                     startIcon={<BookmarkAddedOutlinedIcon />}
//                                     onClick={() => {
//                                       chatMe(element);
//                                       navigate('/home/lastChats');
//                                     }}
//                                     sx={{
//                                       borderColor: '#3a7bd5',
//                                       color: '#3a7bd5',
//                                       '&:hover': {
//                                         borderColor: '#2b5876',
//                                         backgroundColor: 'rgba(58, 123, 213, 0.1)'
//                                       }
//                                     }}
//                                   >
//                                     View Past Chats
//                                   </Button>
//                                 </>
//                               )}
//                             </Box>
//                           )}
//                         </Box>
//                       </Collapse>
//                     </Paper>
//                   </Fade>
//                 );
//               })
//             ) : (
//               <Paper
//                 elevation={0}
//                 sx={{
//                   p: 4,
//                   borderRadius: 3,
//                   background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//                   textAlign: 'center'
//                 }}
//               >
//                 <Typography variant="h6" color="#2c3e50">
//                   No applications found
//                 </Typography>
//                 <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1 }}>
//                   Applications will appear here once they are created
//                 </Typography>
//               </Paper>
//             )}
//           </Box>
//         </Fade>
//       </Container>

//       {/* Scroll to top button */}
//       <Button
//         variant="contained"
//         onClick={scrollToTop}
//         sx={{
//           position: 'fixed',
//           bottom: 20,
//           right: 20,
//           minWidth: 0,
//           width: 50,
//           height: 50,
//           borderRadius: '50%',
//           boxShadow: '0 4px 15px rgba(195, 207, 226, 0.4)',
//           background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//           color: '#2c3e50',
//           '&:hover': {
//             background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 80%)',
//             boxShadow: '0 6px 20px rgba(195, 207, 226, 0.6)',
//           },
//           zIndex: 1000,
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center'
//         }}
//       >
//         <KeyboardArrowUpIcon />
//       </Button>

//       <Outlet />
//     </Box>
//   );
// }

/////////////////////////////////////////////////////


import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applicationThunk } from "../redux/slices/get/applicatiionThunk";
import { myApplicationsThunk } from "../redux/slices/get by assessor/myApplicationsThunk";
import { assessmentThunk } from "../redux/slices/get/assessmentThunk";
import { myAssessmentsThunk } from "../redux/slices/get by assessor/myAssessmentsThunk";
import {
  Button,
  Box,
  Typography,
  Paper,
  Divider,
  Container,
  Fade,
  Collapse,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
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
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

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

  // חדש - עבור העיצוב החדש
  const topRef = useRef(null);
  const [expandedItems, setExpandedItems] = useState({});
  const [expandAll, setExpandAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [sortBy, setSortBy] = useState('none');

  const getData = async () => {
    const res = await dispatch(yourApplicationsThunk(customerChose.customerId));
    if (res.payload != null) {
      setApplicationDetails(res.payload);
    }
  }

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

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
      getData();
    }
  }, []);

  useEffect(() => {
    if (fullDetails.length === 0 && applicationsDetails.length !== 0 && apartmentsDetails.length !== 0 && assessmentsDetails.length !== 0 && finalAssessor.length !== 0) {
      const s = [];
      applicationsDetails.forEach(element => {
        s.push(element.applicationId);
      });
      setFullDetails(s);
      setFilteredApplications(s); // עבור החיפוש והמיון
    }
  }, [applicationsDetails, assessmentsDetails, apartmentsDetails, finalAssessor]);

  const assess = (a, applicationId) => {
    const aa = applicationsDetails.find(c => c.assessorId === a.assessorId);
    if (aa && aa.applicationId === applicationId)
      return true;
    return false;
  }

  const cust = (y, applicationId) => {
    const cc = apartmentsDetails.find(c => c.customerId === y);
    if (cc && cc.apartmentId === applicationId)
      return true;
    return false;
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

  // פונקציות חדשות עבור העיצוב החדש
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleItemExpansion = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const toggleExpandAll = () => {
    const newExpandAll = !expandAll;
    setExpandAll(newExpandAll);

    // עדכון כל הפריטים להיות מורחבים או מכווצים
    const newExpandedItems = {};
    fullDetails.forEach(id => {
      newExpandedItems[id] = newExpandAll;
    });
    setExpandedItems(newExpandedItems);
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredApplications([...fullDetails]);
      return;
    }

    const term = searchTerm.toLowerCase();

    // חיפוש בכל הנתונים
    const results = fullDetails.filter(appId => {
      // בדיקה באפליקציות
      const app = applicationsDetails.find(a => a.applicationId === appId);
      if (app && Object.values(app).some(val =>
        val && typeof val === 'string' && val.toLowerCase().includes(term)
      )) {
        return true;
      }

      // בדיקה בהערכות
      const assessment = assessmentsDetails.find(a => a.assessmentId === appId);
      if (assessment && Object.values(assessment).some(val =>
        val && typeof val === 'string' && val.toLowerCase().includes(term)
      )) {
        return true;
      }

      // בדיקה בפרטי דירה
      const apartment = apartmentsDetails.find(a => a.apartmentId === appId);
      if (apartment && Object.values(apartment).some(val =>
        val && typeof val === 'string' && val.toLowerCase().includes(term)
      )) {
        return true;
      }

      return false;
    });

    setFilteredApplications(results);
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);

    let sortedApplications = [...fullDetails];

    if (sortType === 'date') {
      // מיון לפי תאריך אפליקציה
      sortedApplications.sort((a, b) => {
        const appA = applicationsDetails.find(app => app.applicationId === a);
        const appB = applicationsDetails.find(app => app.applicationId === b);
        if (!appA || !appB) return 0;
        return new Date(appB.applicationDate) - new Date(appA.applicationDate);
      });
    } else if (sortType === 'id') {
      // מיון לפי מזהה אפליקציה
      sortedApplications.sort((a, b) => a - b);
    } else if (sortType === 'status') {
      // מיון לפי סטטוס
      sortedApplications.sort((a, b) => {
        const appA = applicationsDetails.find(app => app.applicationId === a);
        const appB = applicationsDetails.find(app => app.applicationId === b);
        if (!appA || !appB) return 0;
        return appA.applicationStatus.localeCompare(appB.applicationStatus);
      });
    }

    setFilteredApplications(sortedApplications);
  };

  // פונקציה לקבלת צבע לפי סטטוס - עם בדיקת תקינות
  const getStatusColor = (status) => {
    // בדיקה שהסטטוס הוא מחרוזת תקינה
    if (!status || typeof status !== 'string') {
      return '#9e9e9e'; // צבע ברירת מחדל אם הסטטוס אינו תקין
    }

    switch (status.toLowerCase()) {
      case 'approved':
        return '#4caf50'; // Green
      case 'pending':
        return '#ff9800'; // Orange
      case 'rejected':
        return '#f44336'; // Red
      default:
        return '#9e9e9e'; // Grey
    }
  };

  // פונקציה לפורמט תאריך
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } catch (e) {
      return dateString;
    }
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, position: 'relative' }} ref={topRef}>
      <Fade in={true} timeout={1000}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight="700"
            color="#2c3e50"
            sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.125rem' } }}
          >
            Full Applications
          </Typography>
          <Typography
            variant="subtitle1"
            color="#7f8c8d"
            sx={{
              maxWidth: 800,
              mx: 'auto',
              mb: 4,
              lineHeight: 1.8,
              px: { xs: 2, md: 0 }
            }}
          >
            View complete details for all applications including assessor information, property details, and assessment data.
          </Typography>
        </Box>
      </Fade>

      {/* Customer details for assessor view */}
      {type === "a" && !full && (
        <Paper
          elevation={1}
          sx={{
            p: 3,
            mb: 4,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#2c3e50' }}>
            Customer Details
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 2 }}>
            <Box>
              <Typography variant="body2" color="text.secondary">ID</Typography>
              <Typography variant="body1">{customerChose.customerId}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">First Name</Typography>
              <Typography variant="body1">{customerChose.customerFirstName}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">Last Name</Typography>
              <Typography variant="body1">{customerChose.customerLastName}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">City</Typography>
              <Typography variant="body1">{customerChose.customerCity}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">Address</Typography>
              <Typography variant="body1">{customerChose.customerAddress}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">Phone</Typography>
              <Typography variant="body1">{customerChose.customerPhone}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">Email</Typography>
              <Typography variant="body1">{customerChose.customerEmail}</Typography>
            </Box>
          </Box>
        </Paper>
      )}

      {/* Search and filter controls */}
      <Box sx={{ mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'space-between', alignItems: { xs: 'stretch', md: 'center' } }}>
        {/* Sort buttons */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
          <Typography variant="subtitle1" sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
          <UnfoldMoreIcon sx={{ mr: 0.5, fontSize: '1rem' }} /> Sort by:
          </Typography>
          <Button
            variant={sortBy === 'date' ? 'contained' : 'outlined'}
            size="small"
            onClick={() => handleSort('date')}
            startIcon={<DateRangeIcon />}
            sx={{
              background: sortBy === 'date' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
              '&:hover': {
                background: sortBy === 'date' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
              }
            }}
          >
            Date
          </Button>
          <Button
            variant={sortBy === 'id' ? 'contained' : 'outlined'}
            size="small"
            onClick={() => handleSort('id')}
            startIcon={<AssignmentIcon />}
            sx={{
              background: sortBy === 'id' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
              '&:hover': {
                background: sortBy === 'id' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
              }
            }}
          >
            ID
          </Button>
          <Button
            variant={sortBy === 'status' ? 'contained' : 'outlined'}
            size="small"
            onClick={() => handleSort('status')}
            startIcon={<PersonIcon />}
            sx={{
              background: sortBy === 'status' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
              '&:hover': {
                background: sortBy === 'status' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
              }
            }}
          >
            Status
          </Button>
          <Button
            variant={sortBy === 'none' ? 'contained' : 'outlined'}
            size="small"
            onClick={() => handleSort('none')}
            startIcon={<RefreshIcon />}
            sx={{
              background: sortBy === 'none' ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' : 'transparent',
              color: sortBy === 'none' ? '#2c3e50' : 'inherit',
              '&:hover': {
                background: sortBy === 'none' ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 90%)' : 'rgba(195, 207, 226, 0.1)'
              }
            }}
          >
            Default
          </Button>
        </Box>

        {/* Search */}
        <Box sx={{ display: 'flex', gap: 1, flexGrow: { xs: 1, md: 0 }, maxWidth: { xs: '100%', md: '300px' }, mt: { xs: 2, md: 0 } }}>
          <TextField
            size="small"
            placeholder="Search applications..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
              endAdornment: searchTerm ? (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={() => setSearchTerm('')}>
                    <ClearIcon fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ) : null
            }}
            sx={{ flexGrow: 1 }}
          />
          <Button
            variant="contained"
            size="small"
            onClick={handleSearch}
            sx={{
              background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
              '&:hover': {
                background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
              }
            }}
          >
            Search
          </Button>
        </Box>

        {/* Expand All Button */}
        <Button
          variant="outlined"
          size="small"
          onClick={toggleExpandAll}
          startIcon={expandAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          sx={{
            borderColor: '#3a7bd5',
            color: '#3a7bd5',
            '&:hover': {
              borderColor: '#2b5876',
              backgroundColor: 'rgba(58, 123, 213, 0.1)'
            }
          }}
        >
          {expandAll ? "Collapse All" : "Expand All"}
        </Button>
      </Box>

      <Container maxWidth="lg">
        <Fade in={true} timeout={1200}>
          <Box>
            {(assessmentsDetails && applicationsDetails && finalAssessor && fullDetails.length > 0) ? (
              (filteredApplications.length > 0 ? filteredApplications : fullDetails).map((element, index) => {
                // מצא את האפליקציה הנוכחית
                const currentApplication = applicationsDetails.find(a => a.applicationId === element);
                // קבע צבע רקע לפי סטטוס
                const gradientBackground = currentApplication ?
                  `linear-gradient(135deg, ${getStatusColor(currentApplication.applicationStatus)}10 0%, ${getStatusColor(currentApplication.applicationStatus)}20 100%)` :
                  'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';

                return (
                  <Fade in={true} timeout={1000 + (index * 200)} key={element}>
                    <Paper
                      elevation={1}
                      sx={{
                        mb: 3,
                        borderRadius: 2,
                        overflow: 'hidden',
                        border: `1px solid #e0e0e0`,
                        borderLeft: currentApplication ?
                          `5px solid ${getStatusColor(currentApplication.applicationStatus)}` :
                          '5px solid #9e9e9e',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)'
                        }
                      }}
                    >
                      {/* Header with application ID and expand button */}
                      <Box
                        sx={{
                          p: 2,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          background: gradientBackground,
                          cursor: 'pointer'
                        }}
                        onClick={() => toggleItemExpansion(element)}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography variant="h6" sx={{ fontWeight: 600, color: '#2c3e50' }}>
                            Application #{element}
                          </Typography>
                          {currentApplication && currentApplication.applicationStatus && (
                            <Chip
                              label={currentApplication.applicationStatus}
                              size="small"
                              sx={{
                                ml: 2,
                                bgcolor: `${getStatusColor(currentApplication.applicationStatus)}20`,
                                color: getStatusColor(currentApplication.applicationStatus),
                                fontWeight: 500
                              }}
                            />
                          )}
                        </Box>
                        <Button
                          variant="text"
                          size="small"
                          endIcon={expandedItems[element] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          sx={{ color: '#3a7bd5' }}
                        >
                          {expandedItems[element] ? "Hide Details" : "Show Details"}
                        </Button>
                      </Box>

                      {/* Collapsible content with all tables */}
                      <Collapse in={expandedItems[element] || expandAll} timeout="auto" unmountOnExit>
                        <Box sx={{ p: 2 }}>
                          {/* Customer table for assessor in full mode */}
                          {type === "a" && full && (
                            <Box sx={{ mb: 3 }}>
                              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
                                Customer Details
                              </Typography>
                              <TableContainer component={Paper} sx={{ boxShadow: 'none', mb: 3, overflowX: 'auto' }}>
                                <Table size="small" aria-label="customer details table">
                                  <TableHead>
                                    <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
                                      <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>First Name</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>Last Name</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>City</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>Address</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>Phone</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {customersDetails && customersDetails.map(d => {
                                      if (cust(d.customerId, element)) {
                                        return (
                                          <TableRow key={d.customerId}>
                                            <TableCell>{d.customerId}</TableCell>
                                            <TableCell>{d.customerFirstName}</TableCell>
                                            <TableCell>{d.customerLastName}</TableCell>
                                            <TableCell>{d.customerCity}</TableCell>
                                            <TableCell>{d.customerAddress}</TableCell>
                                            <TableCell>{d.customerPhone}</TableCell>
                                            <TableCell>{d.customerEmail}</TableCell>
                                          </TableRow>
                                        );
                                      }
                                      return null;
                                    })}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </Box>
                          )}

                          {/* Assessor table */}
                          {(type === "c" || (type === "a" && thisAssessor.isManager === true)) && (
                            <Box sx={{ mb: 3 }}>
                              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
                                Assessor Details
                              </Typography>
                              <TableContainer component={Paper} sx={{ boxShadow: 'none', mb: 3, overflowX: 'auto' }}>
                                <Table size="small" aria-label="assessor details table">
                                  <TableHead>
                                    <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
                                      <TableCell sx={{ fontWeight: 'bold' }}>First Name</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>Last Name</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>City</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>Address</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>Phone</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {finalAssessor.map(d => {
                                      if (assess(d, element)) {
                                        return (
                                          <TableRow key={d.assessorId}>
                                            <TableCell>{d.assessorFirstName}</TableCell>
                                            <TableCell>{d.assessorLastName}</TableCell>
                                            <TableCell>{d.assessorCity}</TableCell>
                                            <TableCell>{d.assessorAddress}</TableCell>
                                            <TableCell>{d.assessorPhone}</TableCell>
                                            <TableCell>{d.assessorEmail}</TableCell>
                                          </TableRow>
                                        );
                                      }
                                      return null;
                                    })}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </Box>
                          )}

                          {/* Application table */}
                          <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
                              Application Details
                            </Typography>
                            <TableContainer component={Paper} sx={{ boxShadow: 'none', mb: 3, overflowX: 'auto' }}>
                              <Table size="small" aria-label="application details table">
                                <TableHead>
                                  <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Application ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Application Date</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Last Application Date</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Application Status</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {applicationsDetails.map(a => {
                                    if (a.applicationId === element) {
                                      return (
                                        <TableRow key={a.applicationId}>
                                          <TableCell>{a.applicationId}</TableCell>
                                          <TableCell>{formatDate(a.applicationDate)}</TableCell>
                                          <TableCell>{formatDate(a.lastApplicationDate)}</TableCell>
                                          <TableCell>
                                            <Chip
                                              label={a.applicationStatus}
                                              size="small"
                                              sx={{
                                                bgcolor: a.applicationStatus === 'Approved' ? '#e3f2fd' :
                                                  a.applicationStatus === 'Pending' ? '#fff8e1' :
                                                    a.applicationStatus === 'Rejected' ? '#ffebee' : '#e0e0e0',
                                                color: a.applicationStatus === 'Approved' ? '#1565c0' :
                                                  a.applicationStatus === 'Pending' ? '#ff8f00' :
                                                    a.applicationStatus === 'Rejected' ? '#c62828' : '#616161',
                                                fontWeight: 500
                                              }}
                                            />
                                          </TableCell>
                                        </TableRow>
                                                                     );
                                                                    }
                                                                    return null;
                                                                  })}
                                                                </TableBody>
                                                              </Table>
                                                            </TableContainer>
                                                          </Box>
                                
                                                          {/* Assessment table */}
                                                          <Box sx={{ mb: 3 }}>
                                                            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
                                                              Assessment Details
                                                            </Typography>
                                                            <TableContainer component={Paper} sx={{ boxShadow: 'none', mb: 3, overflowX: 'auto' }}>
                                                              <Table size="small" aria-label="assessment details table">
                                                                <TableHead>
                                                                  <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Assessment ID</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Block</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Plot</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Sub Plot</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Construction Year</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Acquision Price</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Assessment Goal</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Legal State</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Building Permit</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Irregularities Building</TableCell>
                                                                  </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                  {assessmentsDetails.map(s => {
                                                                    if (s.assessmentId === element) {
                                                                      return (
                                                                        <TableRow key={s.assessmentId}>
                                                                          <TableCell>{s.assessmentId}</TableCell>
                                                                          <TableCell>{s.block}</TableCell>
                                                                          <TableCell>{s.plot}</TableCell>
                                                                          <TableCell>{s.subPlot}</TableCell>
                                                                          <TableCell>{s.constructionYear}</TableCell>
                                                                          <TableCell>{s.acquisionPrice}</TableCell>
                                                                          <TableCell>{s.assessmentGoal}</TableCell>
                                                                          <TableCell>{s.legalState}</TableCell>
                                                                          <TableCell>{s.buildingPermit}</TableCell>
                                                                          <TableCell>{s.irregularitiesBuilding}</TableCell>
                                                                        </TableRow>
                                                                      );
                                                                    }
                                                                    return null;
                                                                  })}
                                                                </TableBody>
                                                              </Table>
                                                            </TableContainer>
                                                          </Box>
                                
                                                          {/* Apartment details table */}
                                                          <Box sx={{ mb: 3 }}>
                                                            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
                                                              Apartment Details
                                                            </Typography>
                                                            <TableContainer component={Paper} sx={{ boxShadow: 'none', mb: 3, overflowX: 'auto' }}>
                                                              <Table size="small" aria-label="apartment details table">
                                                                <TableHead>
                                                                  <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Customer ID</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>City</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Address</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Size</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Air Directions</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Directions</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Floor</TableCell>
                                                                    <TableCell sx={{ fontWeight: 'bold' }}>Elevator</TableCell>
                                                                  </TableRow>
                                                                </TableHead>
                                                                <TableBody>
                                                                  {apartmentsDetails.map(g => {
                                                                    if (g.apartmentId === element) {
                                                                      return (
                                                                        <TableRow key={g.apartmentId}>
                                                                          <TableCell>{g.apartmentId}</TableCell>
                                                                          <TableCell>{g.customerId}</TableCell>
                                                                          <TableCell>{g.apartmentCity}</TableCell>
                                                                          <TableCell>{g.apartmentAddress}</TableCell>
                                                                          <TableCell>{g.apartmentSize}</TableCell>
                                                                          <TableCell>{g.airDirections}</TableCell>
                                                                          <TableCell>{g.directions}</TableCell>
                                                                          <TableCell>{g.floor}</TableCell>
                                                                          <TableCell>{g.elevator}</TableCell>
                                                                        </TableRow>
                                                                      );
                                                                    }
                                                                    return null;
                                                                  })}
                                                                </TableBody>
                                                              </Table>
                                                            </TableContainer>
                                                          </Box>
                                
                                                          {/* Chat buttons */}
                                                          {!thisAssessor.isManager && (
                                                            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                                                              {!sent ? (
                                                                <Button
                                                                  variant="contained"
                                                                  startIcon={<MailOutlineOutlinedIcon />}
                                                                  onClick={() => { setSent(true) }}
                                                                  sx={{
                                                                    background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                                                                    '&:hover': {
                                                                      background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                                                                    }
                                                                  }}
                                                                >
                                                                  Message Options
                                                                </Button>
                                                              ) : (
                                                                <>
                                                                  <Button
                                                                    variant="contained"
                                                                    startIcon={<BookmarkAddOutlinedIcon />}
                                                                    onClick={() => {
                                                                      dispatch(setApplicationId(element));
                                                                      dispatch(setTo(customerChose.customerFirstName + " " + customerChose.customerLastName));
                                                                      navigate('newChat');
                                                                    }}
                                                                    sx={{
                                                                      background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                                                                      '&:hover': {
                                                                        background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                                                                      }
                                                                    }}
                                                                  >
                                                                    New Chat
                                                                  </Button>
                                                                  <Button
                                                                    variant="outlined"
                                                                    startIcon={<BookmarkAddedOutlinedIcon />}
                                                                    onClick={() => {
                                                                      chatMe(element);
                                                                      navigate('/home/lastChats');
                                                                    }}
                                                                    sx={{
                                                                      borderColor: '#3a7bd5',
                                                                      color: '#3a7bd5',
                                                                      '&:hover': {
                                                                        borderColor: '#2b5876',
                                                                        backgroundColor: 'rgba(58, 123, 213, 0.1)'
                                                                      }
                                                                    }}
                                                                  >
                                                                    View Past Chats
                                                                  </Button>
                                                                </>
                                                              )}
                                                            </Box>
                                                          )}
                                                        </Box>
                                                      </Collapse>
                                                    </Paper>
                                                  </Fade>
                                                );
                                              })
                                            ) : (
                                              <Paper
                                                elevation={0}
                                                sx={{
                                                  p: 4,
                                                  borderRadius: 3,
                                                  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                                                  textAlign: 'center'
                                                }}
                                              >
                                                <Typography variant="h6" color="#2c3e50">
                                                  No applications found
                                                </Typography>
                                                <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1 }}>
                                                  Applications will appear here once they are created
                                                </Typography>
                                              </Paper>
                                            )}
                                          </Box>
                                        </Fade>
                                      </Container>
                                
                                      {/* Scroll to top button */}
                                      <Button
                                        variant="contained"
                                        onClick={scrollToTop}
                                        sx={{
                                          position: 'fixed',
                                          bottom: 20,
                                          right: 20,
                                          minWidth: 0,
                                          width: 50,
                                          height: 50,
                                          borderRadius: '50%',
                                          boxShadow: '0 4px 15px rgba(195, 207, 226, 0.4)',
                                          background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                                          color: '#2c3e50',
                                          '&:hover': {
                                            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 80%)',
                                            boxShadow: '0 6px 20px rgba(195, 207, 226, 0.6)',
                                          },
                                          zIndex: 1000,
                                          display: 'flex',
                                          justifyContent: 'center',
                                          alignItems: 'center'
                                        }}
                                      >
                                        <KeyboardArrowUpIcon />
                                      </Button>
                                
                                      <Outlet />
                                    </Box>
                                  );
                                }
                                       






