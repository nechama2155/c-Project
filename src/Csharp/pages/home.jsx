// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import Button from '@mui/material/Button';
// import { Outlet, useNavigate } from "react-router-dom";
// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Drawer from '@mui/material/Drawer';
// // import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// // import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// // import ListItemIcon from '@mui/material/ListItemIcon';
// // import InboxIcon from '@mui/icons-material/MoveToInbox';
// // import MailIcon from '@mui/icons-material/Mail';
// //  <script src="./h.css" ></script> 
// //import './cssPages/h.css'/m
// import './cssPages/h.css'
// import { List, ListItem, TextField } from "@mui/material";
// import { myChats } from "../redux/slices/chatSlice";
// import { myApplicationsThunk } from "../redux/slices/get by assessor/myApplicationsThunk";
// import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
// import { applicationThunk } from "../redux/slices/get/applicatiionThunk";
// import { yourApplicationsThunk } from "../redux/slices/get by customer/yourApplicationsThunk";

// export const Home = () => {

//     // localStorage(userType)
//     const type = useSelector(state => state.user.t);
//     const thisAssessor = useSelector(state => state.assessor.thisAssessor);
//     const thisApplications = useSelector(state => state.application.applications);
//     const getChats = useSelector(state => state.chat.getChats);
//     const sendChats = useSelector(state => state.chat.sendChats);
//     const thisCustomer = useSelector(state => state.customer.thisCustomer);
//     const chats = useSelector(state => state.chat.chats);
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const [details, setDetails] = useState({});
//     const [thisChats, setThisChats] = useState([]);
//     const [IsRead, setIsRead] = useState(0);


//     const [state, setState] = React.useState({
//         // top: false,
//         // left: false,
//         // bottom: false,
//         right: false,
//     });

//     const toggleDrawer = (anchor, open) => (event) => {
//         if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
//             return;
//         }

//         setState({ ...state, [anchor]: open });
//     };

//     const list = (anchor) => (
//         <Box
//             sx={{ width: 250, maxHeight: 50 }}
//             role="combobox"
//             onClick={toggleDrawer(anchor, false)}
//             onKeyDown={toggleDrawer(anchor, false)}
//             className="myBox"
//         >

//             <Divider />
//             <List>
//                 <ListItem Padding>
//                     {type === 'a' && <>
//                         <TextField label="First Name" variant="standard" value={details?.assessorFirstName} onChange={(e) => setDetails({ ...details, assessorFirstName: e.target.value })} />
//                         <TextField label="Last Name" variant="standard" value={details?.assessorLastName} onChange={(e) => setDetails({ ...details, assessorLastName: e.target.value })} />
//                         <TextField label="Phone" variant="standard" value={details?.assessorPhone} onChange={(e) => setDetails({ ...details, assessorPhone: e.target.value })} />
//                         <TextField label="Email" variant="standard" value={details?.assessorEmail} onChange={(e) => setDetails({ ...details, assessorEmail: e.target.value })} />
//                         <TextField label="City" variant="standard" value={details?.assessorCity} onChange={(e) => setDetails({ ...details, assessorCity: e.target.value })} />
//                         <TextField label="Address" variant="standard" value={details?.assessorAddress} onChange={(e) => setDetails({ ...details, assessorAddress: e.target.value })} />
//                         {/* <Button onClick={()=>{}}></Button> */}
//                         <ListItemButton>save</ListItemButton>

//                     </>
//                     }
//                     {type === 'c' && <>
//                         <TextField label="First Name" variant="standard" value={details?.customerFirstName} onChange={(e) => setDetails({ ...details, customerFirstName: e.target.value })} />
//                         <TextField label="Last Name" variant="standard" value={details?.customerLastName} onChange={(e) => setDetails({ ...details, customerLastName: e.target.value })} />
//                         <TextField label="Phone" variant="standard" value={details?.customerPhone} onChange={(e) => setDetails({ ...details, customerPhone: e.target.value })} />
//                         <TextField label="Emay" variant="standard" value={details?.customerCity} onChange={(e) => setDetails({ ...details, customerCity: e.target.value })} />
//                         <TextField label="Addil" variant="standard" value={details?.customerEmail} onChange={(e) => setDetails({ ...details, customerEmail: e.target.value })} />
//                         <TextField label="Citress" variant="standard" value={details?.customerAddress} onChange={(e) => setDetails({ ...details, customerAddress: e.target.value })} />
//                         {/* <Button onClick={()=>{}}></Button> */}
//                         <ListItemButton>save</ListItemButton>
//                     </>}

//                 </ListItem>



//             </List>
//         </Box>
//     );


//     useEffect(() => {
//         if (type === 'a') {
//             setDetails(thisAssessor);
//             if (!thisAssessor.isManager) {
//                 dispatch(myApplicationsThunk(thisAssessor.assessorId));
//             }
//             else dispatch(applicationThunk());
//         }

//         if (type === 'c') {
//             setDetails(thisCustomer);
//              dispatch(yourApplicationsThunk(thisCustomer.customerId));
//         }
//     }, [])

//     // useEffect(() => {   
//     //     let get = [];
//     //     let send = [];
//     //     if (thisApplications.length > 0) {
//     //         const c = [];
//     //         thisApplications.forEach(app => {
//     //             chats.forEach(chat => {
//     //                 if (chat.applicationId === app.applicationId && type === "a"){
//     //                   if(chat.from === "c"){
//     //                     get.push(chat);
//     //                   }
//     //                   else send.push(chat);
//     //                 }
//     //                 if (chat.applicationId === app.applicationId && type === "c"){
//     //                     if(chat.from === "a"){
//     //                       get.push(chat);
//     //                     }
//     //                     else send.push(chat);
//     //                   }
//     //                 c.push(app);
//     //             });
//     //         })
//     //         setThisChats(c);
//     //         // let gs = [get,send];
//     //         // dispatch(setGetAndSend(gs));
//     //     }
//     // }, [thisApplications])

//     // useEffect(() => {
//     //     let numRead = 0;
//     //     if (getChats.length > 0 && thisChats.length>0){
//     //         dispatch(myChats(thisChats));
//     //         getChats.forEach(c=>{
//     //             if(!c.read)
//     //                 numRead++;
//     //         });
//     //         setIsRead(numRead);
//     //     }
//     // }, [getChats,thisChats])


//     return <div className="aba">
//         {/* <div className="t">welcome {user.userFirstName} {user.userLastName}</div> */}
//         <div className="t">
//             <div>
//             <Button onClick={()=>{navigate('fullApplications/lastChats')}} >< MoveToInboxIcon/></Button>
//                 you have {IsRead} new massages.
//                 {/* <img src="../../../public/five.png" alt="" style={{ width: "350px" }} /> */}
//             </div>
//             {/* <img src="logo.png" style={{width:"200px" ,margin:"0px 0px 0px 1400px"}} alt=""/> */}

//             {/* <Button variant="text" onClick={() => navigate("myDetails")}>my Detalis</Button> */}
//             <div>

//                 {type !== 'u' && ['right'].map((anchor) => (
//                     <React.Fragment key={anchor} className="inBox">
//                         <Button onClick={toggleDrawer(anchor, true)} >my details</Button>
//                         <Drawer
//                             anchor={anchor}
//                             open={state[anchor]}
//                             onClose={toggleDrawer(anchor, false)}
//                         >
//                             {list(anchor)}
//                         </Drawer>
//                     </React.Fragment>
//                 ))}
//             </div>
//         </div>

//         <div className="homeLeft">

//             <Button variant="text" onClick={() => navigate("about")}>about</Button><br />
//             {/* <a href="./about">about</a> */}
//             {type === 'a' &&
//                 <>
//                     {!thisAssessor.isManager && <>
//                         <Button variant="text" onClick={() => navigate("assessments")}>myAssessments</Button><br />
//                         <Button variant="text" onClick={() => navigate("applications")}>myAplications</Button><br />
//                         <Button variant="text" onClick={() => navigate("lastTreatment")}>myLastTreatments</Button><br />
//                         <Button variant="text" onClick={() => { navigate("customers") }}>myCustomers</Button><br />
//                         <Button variant="text" onClick={() => { navigate("apartmentDetails") }}>myApartmentDetails</Button><br />
//                     </>}


//                     {thisAssessor.isManager &&
//                         <div>
//                             <Button variant="text" onClick={() => navigate("customers")}>customers</Button><br />
//                             <Button variant="text" onClick={() => navigate("assessors")}>assessors</Button><br />
//                             <Button variant="text" onClick={() => navigate("assessments")}>assessments</Button><br />
//                             <Button variant="text" onClick={() => navigate("applications")}>applications</Button><br />
//                             <Button variant="text" onClick={() => { navigate("apartmentDetails") }}>apartmentDetails</Button><br />

//                         </div>
//                     }
//                 </>
//             }
//             {type === 'c' &&
//                 <>
//                     <Button variant="text" onClick={() => navigate("applications")}>myApplications</Button><br />
//                     <Button variant="text" onClick={() => navigate("assessments")}>myAssessments</Button><br />
//                     <Button variant="text" onClick={() => navigate("apartmentDetails")}>myApartmentDetails</Button><br />
//                     <Button variant="text" onClick={() => navigate("newApplication")}>newApplication</Button><br />
//                     <Button variant="text" onClick={() => navigate("assessors")}>myAssessor</Button><br />
//                     <Button variant="text" onClick={() => navigate("fullApplications")}>my full application</Button><br />
//                 </>
//             }
//             {type === 'u' &&
//                 <>
//                     <Button variant="text" onClick={() => navigate("newApplication")}>newApplication</Button><br />
//                 </>
//             }
//         </div>
//         <div className="homeRight">
//             <div className="body">
//                 <Outlet></Outlet>
//             </div>
//         </div>


//     </div>
// }













// //////////////////////////////////////////////////////


// import {
//   Box, Button, Drawer, Divider, List, ListItem, TextField,
//   Typography, AppBar, Toolbar, IconButton, Badge, Avatar,
//   Container, Paper, ListItemIcon, ListItemText, Tooltip
// } from "@mui/material";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Outlet, useNavigate, NavLink } from "react-router-dom";
// import * as React from 'react';

// import MenuIcon from '@mui/icons-material/Menu';
// import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
// import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
// import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
// import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
// import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
// import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
// import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
// import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
// import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
// import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
// import CloseIcon from '@mui/icons-material/Close';
// import SaveIcon from '@mui/icons-material/Save';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
// // Redux actions
// import { myChats } from "../redux/slices/chatSlice";
// import { myApplicationsThunk } from "../redux/slices/get by assessor/myApplicationsThunk";
// import { applicationThunk } from "../redux/slices/get/applicatiionThunk";
// import { yourApplicationsThunk } from "../redux/slices/get by customer/yourApplicationsThunk";

// // CSS import
// import './cssPages/h.css';

// export const Home = () => {
//   const type = useSelector(state => state.user.t);
//   const thisAssessor = useSelector(state => state.assessor.thisAssessor);
//   const thisApplications = useSelector(state => state.application.applications);
//   const getChats = useSelector(state => state.chat.getChats);
//   const sendChats = useSelector(state => state.chat.sendChats);
//   const thisCustomer = useSelector(state => state.customer.thisCustomer);
//   const chats = useSelector(state => state.chat.chats);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const [details, setDetails] = useState({});
//   const [thisChats, setThisChats] = useState([]);
//   const [isRead, setIsRead] = useState(0);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [userDetailsOpen, setUserDetailsOpen] = useState(false);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   useEffect(() => {
//     if (type === 'a') {
//       setDetails(thisAssessor);
//       if (!thisAssessor.isManager) {
//         dispatch(myApplicationsThunk(thisAssessor.assessorId));
//       } else {
//         dispatch(applicationThunk());
//       }
//     }

//     if (type === 'c') {
//       setDetails(thisCustomer);
//       dispatch(yourApplicationsThunk(thisCustomer.customerId));
//     }
//   }, [type, thisAssessor, thisCustomer, dispatch]);

//   // Calculate unread messages
//   useEffect(() => {
//     let numRead = 0;
//     if (getChats && getChats.length > 0) {
//       getChats.forEach(c => {
//         if (!c.read) numRead++;
//       });
//       setIsRead(numRead);
//     }
//   }, [getChats]);

//   const toggleUserDetails = () => {
//     setUserDetailsOpen(!userDetailsOpen);
//   };

//   const toggleMobileDrawer = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleSaveDetails = () => {
//     // Implement save functionality here
//     setUserDetailsOpen(false);
//   };

//   // Navigation items based on user type
//   const getNavigationItems = () => {
//     const baseItems = [
//       {
//         text: 'About',
//         icon: <HomeOutlinedIcon />,
//         path: 'about'
//       }
//     ];

//     if (type === 'a') {
//       if (!thisAssessor.isManager) {
//         return [
//           ...baseItems,
//           { text: 'My Assessments', icon: <AssessmentOutlinedIcon />, path: 'assessments' },
//           { text: 'My Applications', icon:<AppsOutlinedIcon/> , path: 'applications' },
//           { text: 'Last Treatments', icon: <HistoryOutlinedIcon />, path: 'lastTreatment' },
//           { text: 'My Customers', icon: <PeopleOutlineOutlinedIcon />, path: 'customers' },
//           { text: 'My Apartment Details', icon: <ApartmentOutlinedIcon />, path: 'apartmentDetails' },
//           { text: 'My Folders', icon: <FolderOutlinedIcon />, path: 'folders' },
//         ];
//       } else {
//         return [
//           ...baseItems,
//           { text: 'Customers', icon: <PeopleOutlineOutlinedIcon />, path: 'customers' },
//           { text: 'Assessors', icon: <PersonOutlineOutlinedIcon />, path: 'assessors' },
//           { text: 'Assessments', icon: <AssessmentOutlinedIcon />, path: 'assessments' },
//           { text: 'Applications', icon: <AppsOutlinedIcon />, path: 'applications' },
//           { text: 'Apartment Details', icon: <ApartmentOutlinedIcon />, path: 'apartmentDetails' },
//           { text: 'Folders', icon: <FolderOutlinedIcon />, path: 'folders' }
//         ];
//       }
//     } else if (type === 'c') {
//       return [
//         ...baseItems,
//         { text: 'My Applications', icon: <AppsOutlinedIcon/>, path: 'applications' },
//         { text: 'My Assessments', icon: <AssessmentOutlinedIcon />, path: 'assessments' },
//         { text: 'My Apartment Details', icon: <ApartmentOutlinedIcon />, path: 'apartmentDetails' },
//         { text: 'New Application', icon: <AddCircleOutlineOutlinedIcon />, path: 'newApplication' },
//         { text: 'My Assessor', icon: <PersonOutlineOutlinedIcon />, path: 'assessors' },
//         { text: 'Full Applications', icon: <DescriptionOutlinedIcon />, path: 'fullApplications' },
//         { text: 'My Folders', icon: <FolderOutlinedIcon />, path: 'folders' },
//       ];
//     } else {
//       return [
//         ...baseItems,
//         { text: 'New Application', icon: <AddCircleOutlineOutlinedIcon />, path: 'newApplication' }
//       ];
//     }
//   };

//   const renderUserDetailsForm = () => {
//     if (type === 'a') {
//       return (
//         <>
//           <TextField label="First Name" variant="outlined" fullWidth margin="normal"
//             value={details?.assessorFirstName || ''}
//             onChange={(e) => setDetails({ ...details, assessorFirstName: e.target.value })}
//           />
//           <TextField label="Last Name" variant="outlined" fullWidth margin="normal"
//             value={details?.assessorLastName || ''}
//             onChange={(e) => setDetails({ ...details, assessorLastName: e.target.value })}
//           />
//           <TextField label="Phone" variant="outlined" fullWidth margin="normal"
//             value={details?.assessorPhone || ''}
//             onChange={(e) => setDetails({ ...details, assessorPhone: e.target.value })}
//           />
//           <TextField label="Email" variant="outlined" fullWidth margin="normal"
//             value={details?.assessorEmail || ''}
//             onChange={(e) => setDetails({ ...details, assessorEmail: e.target.value })}
//           />
//           <TextField label="City" variant="outlined" fullWidth margin="normal"
//             value={details?.assessorCity || ''}
//             onChange={(e) => setDetails({ ...details, assessorCity: e.target.value })}
//           />
//           <TextField label="Address" variant="outlined" fullWidth margin="normal"
//             value={details?.assessorAddress || ''}
//             onChange={(e) => setDetails({ ...details, assessorAddress: e.target.value })}
//           />
//         </>
//       );
//     } else if (type === 'c') {
//       return (
//         <>
//           <TextField label="First Name" variant="outlined" fullWidth margin="normal"
//             value={details?.customerFirstName || ''}
//             onChange={(e) => setDetails({ ...details, customerFirstName: e.target.value })}
//           />
//           <TextField label="Last Name" variant="outlined" fullWidth margin="normal"
//             value={details?.customerLastName || ''}
//             onChange={(e) => setDetails({ ...details, customerLastName: e.target.value })}
//           />
//           <TextField label="Phone" variant="outlined" fullWidth margin="normal"
//             value={details?.customerPhone || ''}
//             onChange={(e) => setDetails({ ...details, customerPhone: e.target.value })}
//           />
//           <TextField label="City" variant="outlined" fullWidth margin="normal"
//             value={details?.customerCity || ''}
//             onChange={(e) => setDetails({ ...details, customerCity: e.target.value })}
//           />
//           <TextField label="Email" variant="outlined" fullWidth margin="normal"
//             value={details?.customerEmail || ''}
//             onChange={(e) => setDetails({ ...details, customerEmail: e.target.value })}
//           />
//           <TextField label="Address" variant="outlined" fullWidth margin="normal"
//             value={details?.customerAddress || ''}
//             onChange={(e) => setDetails({ ...details, customerAddress: e.target.value })}
//           />
//         </>
//       );
//     }
//     return null;
//   };

//   return (
//     <Box className="home-container">
//       {/* Header */}
//       <AppBar position="static" elevation={0} sx={{ bgcolor: 'white', color: '#2c3e50' }}>
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             edge="start"
//             onClick={toggleMobileDrawer}
//             sx={{ mr: 2, display: { md: 'none' } }}
//           >
//             <MenuIcon />
//           </IconButton>

//           <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
//             <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
//           </Box>

//           <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//             <Tooltip title="Messages">
//               <IconButton
//                 color="inherit"
//                 onClick={() => navigate('fullApplications/lastChats')}
//                 sx={{ position: 'relative' }}
//               >
//                 <Badge badgeContent={isRead} color="primary">
//                   <MoveToInboxIcon />
//                 </Badge>
//               </IconButton>
//             </Tooltip>

//             <Tooltip title="My Details">
//               <IconButton
//                 color="inherit"
//                 onClick={toggleUserDetails}



//                 sx={{
//                   ml: 1,
//                   bgcolor: 'rgba(26, 86, 219, 0.1)',
//                   '&:hover': { bgcolor: 'rgba(26, 86, 219, 0.2)' }
//                 }}

//               >
//                 <AccountCircleIcon />
//               </IconButton>
//             </Tooltip>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Main content */}
//       <Box className="content-wrapper">
//         {/* Sidebar for desktop */}
//         <Box
//           component="nav"
//           className="sidebar"
//           sx={{
//             display: { xs: 'none', md: 'block' },
//             width: 250,
//             flexShrink: 0
//           }}
//         >
//           <List className="sidebar-nav">
//             {getNavigationItems().map((item, index) => (
//               <ListItem key={index} disablePadding>
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     isActive ? "nav-item active" : "nav-item"
//                   }
//                   style={{ width: '100%', textDecoration: 'none' }}
//                 >
//                   <ListItemIcon sx={{ minWidth: 40 }}>
//                     {item.icon}
//                   </ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </NavLink>
//               </ListItem>
//             ))}
//           </List>
//         </Box>

//         {/* Mobile drawer */}
//         <Drawer
//           variant="temporary"
//           open={mobileOpen}
//           onClose={toggleMobileDrawer}
//           ModalProps={{ keepMounted: true }}
//           sx={{
//             display: { xs: 'block', md: 'none' },
//             '& .MuiDrawer-paper': { width: 250 },
//           }}
//         >
//           <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//             <img src="/logo.png" alt="Logo" style={{ height: '30px' }} />
//             <IconButton onClick={toggleMobileDrawer}>
//               <CloseIcon />
//             </IconButton>
//           </Box>
//           <Divider />
//           <List>
//             {getNavigationItems().map((item, index) => (
//               //   <ListItem

//               <ListItem key={index} disablePadding>
//                 <NavLink
//                   to={item.path}
//                   className={({ isActive }) =>
//                     isActive ? "nav-item active" : "nav-item"
//                   }
//                   style={{ width: '100%', textDecoration: 'none' }}
//                   onClick={toggleMobileDrawer}
//                 >
//                   <ListItemIcon sx={{ minWidth: 40 }}>
//                     {item.icon}
//                   </ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </NavLink>
//               </ListItem>
//             ))}
//           </List>
//         </Drawer>

//         {/* Main content area */}
//         <Box className="main-content">
//           <Container maxWidth="xl" sx={{ height: '100%' }}>
//             <Paper
//               elevation={0}
//               className="content-card fade-in"
//               sx={{
//                 borderRadius: '16px',
//                 overflow: 'hidden',
//                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
//               }}
//             >
//               <Outlet />
//             </Paper>
//           </Container>
//         </Box>
//       </Box>

//       {/* User details drawer */}
//       <Drawer
//         anchor="right"
//         open={userDetailsOpen}
//         onClose={toggleUserDetails}
//         PaperProps={{
//           sx: {
//             width: { xs: '100%', sm: 400 },
//             p: 3,
//             boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.05)'
//           }
//         }}
//       >
//         <Box className="user-details-drawer">
//           <Box className="user-details-header">
//             <Typography variant="h6" fontWeight="600" color="#2c3e50">
//               My Profile
//             </Typography>
//             <IconButton onClick={toggleUserDetails}>
//               <CloseIcon />
//             </IconButton>
//           </Box>

//           <Divider sx={{ mb: 3 }} />

//           <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
//             <Avatar
//               sx={{
//                 width: 100,
//                 height: 100,
//                 bgcolor: 'rgba(26, 86, 219, 0.1)',
//                 color: '#1a56db',
//                 fontSize: '2.5rem',
//                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
//               }}

//             >
//               {type === 'a'
//                 ? details?.assessorFirstName?.charAt(0) || 'A'
//                 : details?.customerFirstName?.charAt(0) || 'C'
//               }
//             </Avatar>
//           </Box>

//           <Box className="user-details-form">
//             {renderUserDetailsForm()}
//           </Box>

//           <Box className="form-actions">
//             <Button
//               variant="outlined"
//               onClick={toggleUserDetails}
//               sx={{
//                 borderRadius: '8px',
//                 textTransform: 'none',
//                 borderColor: '#e0e0e0',
//                 color: '#7f8c8d',
//                 px: 3
//               }}
//             >
//               Cancel
//             </Button>
//             <Button
//               variant="contained"
//               startIcon={<SaveIcon />}
//               onClick={handleSaveDetails}
//               sx={{
//                 borderRadius: '8px',
//                 textTransform: 'none',
//                 background: 'linear-gradient(90deg, #1a56db 0%, #0c4da2 100%)',
//                 boxShadow: '0 4px 15px rgba(26, 86, 219, 0.4)',
//                 px: 3,
//                 '&:hover': {
//                   background: 'linear-gradient(90deg, #1a56db 0%, #0c4da2 80%)',
//                   boxShadow: '0 6px 20px rgba(26, 86, 219, 0.6)',

//                 }
//               }}
//             >
//               Save Changes
//             </Button>
//           </Box>
//         </Box>
//       </Drawer>
//     </Box>
//   );
// };


// ////////////////////////////////////////////////////////////////
import {
  Box, Button, Drawer, Divider, List, ListItem, TextField,
  Typography, AppBar, Toolbar, IconButton, Badge, Avatar,
  Container, Paper, ListItemIcon, ListItemText, Tooltip
} from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';

// Redux actions
import { myChats, setIsRead, setLastChats } from "../redux/slices/chatSlice";
import { myApplicationsThunk } from "../redux/slices/get by assessor/myApplicationsThunk";
import { applicationThunk } from "../redux/slices/get/applicatiionThunk";
import { yourApplicationsThunk } from "../redux/slices/get by customer/yourApplicationsThunk";

// CSS import
import './cssPages/h.css';
import { fullAssessorThunk } from "../redux/slices/get/fullAssessorThunk";
import { fullAssessorManagerThunk } from "../redux/slices/get/fullAssessorManagerThunk";
import { fullCustomerThunk } from "../redux/slices/get/fullCustomerThunk";
import { setFull } from "../redux/slices/userSlice";

export const Home = () => {
  const type = useSelector(state => state.user.t);
  const thisAssessor = useSelector(state => state.assessor.thisAssessor);
  const thisApplications = useSelector(state => state.application.applications);
  const getChats = useSelector(state => state.chat.getChats);
  const sendChats = useSelector(state => state.chat.sendChats);
  const thisCustomer = useSelector(state => state.customer.thisCustomer);
  const chats = useSelector(state => state.chat.chats);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const [thisChats, setThisChats] = useState([]);
  const [ready, setReady] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userDetailsOpen, setUserDetailsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (type === 'a') {
      setDetails(thisAssessor);
      if (!thisAssessor.isManager) {
        dispatch(fullAssessorThunk(thisAssessor.assessorId));
        // dispatch(myApplicationsThunk(thisAssessor.assessorId));
      } else {
        dispatch(fullAssessorManagerThunk());
        // dispatch(applicationThunk());
      }
    }
    if (type === 'c') {
      setDetails(thisCustomer);
      dispatch(fullCustomerThunk(thisCustomer.customerId));
      // dispatch(yourApplicationsThunk(thisCustomer.customerId));
    }
  }, [type, thisAssessor, thisCustomer, dispatch]);

  useEffect(()=>{dispatch(setFull(true));}, [dispatch]);
  // Calculate unread messages
  // useEffect(() => {
  //   debugger
  //   let numRead = 0;
  //   if (getChats && getChats.length > 0) {
  //     getChats.forEach(c => {
  //       if (c.read===false) numRead++;
  //     });
  //     setReady(numRead);
  //     // dispatch(setIsRead()); 

  //   }
  // }, [getChats]);

  // בתוך useEffect שבודק הודעות שלא נקראו
useEffect(() => {
  let numRead = 0;
  if (getChats && Array.isArray(getChats) && getChats.length > 0) {
    getChats.forEach(c => {
      if (c && (c.read === false || c.read === undefined)) numRead++;
    });
    setReady(numRead);
  }
}, [getChats]);

  const toggleUserDetails = () => {
    setUserDetailsOpen(!userDetailsOpen);
  };

  const toggleMobileDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSaveDetails = () => {
    // Implement save functionality here
    setUserDetailsOpen(false);
  };

  // Navigation items based on user type
  const getNavigationItems = () => {
    const baseItems = [
      {
        text: 'About',
        icon: <HomeOutlinedIcon />,
        path: 'about'
      }
    ];

    if (type === 'a') {
      if (!thisAssessor.isManager) {
        return [
          ...baseItems,
          { text: 'My Assessments', icon: <AssessmentOutlinedIcon />, path: 'assessments' },
          { text: 'My Applications', icon: <AppsOutlinedIcon />, path: 'applications' },
          { text: 'Last Treatments', icon: <HistoryOutlinedIcon />, path: 'lastTreatment' },
          { text: 'My Customers', icon: <PeopleOutlineOutlinedIcon />, path: 'customers' },
          { text: 'My Apartment Details', icon: <ApartmentOutlinedIcon />, path: 'apartmentDetails' },
          { text: 'My Folders', icon: <FolderOutlinedIcon />, path: 'folders' },
          { text: 'FolderDemo', icon: <FolderOutlinedIcon />, path: 'folderDemo' },
          { text: 'FilePreview', icon: <FolderOutlinedIcon />, path: 'filePreview' },
          { text: 'FullApplications', icon: <FolderOutlinedIcon />, path: 'fullApplications' }
        ];
      } else {
        return [
          ...baseItems,
          { text: 'Customers', icon: <PeopleOutlineOutlinedIcon />, path: 'customers' },
          { text: 'Assessors', icon: <PersonOutlineOutlinedIcon />, path: 'assessors' },
          { text: 'Assessments', icon: <AssessmentOutlinedIcon />, path: 'assessments' },
          { text: 'Applications', icon: <AppsOutlinedIcon />, path: 'applications' },
          { text: 'Apartment Details', icon: <ApartmentOutlinedIcon />, path: 'apartmentDetails' },
          { text: 'Folders', icon: <FolderOutlinedIcon />, path: 'folders' },
          { text: 'FullApplications', icon: <FolderOutlinedIcon />, path: 'fullApplications' }
        ];
      }
    } else if (type === 'c') {
      return [
        ...baseItems,
        { text: 'My Applications', icon: <AppsOutlinedIcon />, path: 'applications' },
        { text: 'My Assessments', icon: <AssessmentOutlinedIcon />, path: 'assessments' },
        { text: 'My Apartment Details', icon: <ApartmentOutlinedIcon />, path: 'apartmentDetails' },
        { text: 'New Application', icon: <AddCircleOutlineOutlinedIcon />, path: 'newApplication' },
        { text: 'My Assessor', icon: <PersonOutlineOutlinedIcon />, path: 'assessors' },
        { text: 'Full Applications', icon: <DescriptionOutlinedIcon />, path: 'fullApplications' },
        { text: 'My Folders', icon: <FolderOutlinedIcon />, path: 'folders' },
      ];
    } else {
      return [
        ...baseItems,
        { text: 'New Application', icon: <AddCircleOutlineOutlinedIcon />, path: 'newApplication' }
      ];
    }
  };

  const renderUserDetailsForm = () => {
    if (type === 'a') {
      return (
        <>
          <TextField label="First Name" variant="outlined" fullWidth margin="normal"
            value={details?.assessorFirstName || ''}
            onChange={(e) => setDetails({ ...details, assessorFirstName: e.target.value })}
          />
          <TextField label="Last Name" variant="outlined" fullWidth margin="normal"
            value={details?.assessorLastName || ''}
            onChange={(e) => setDetails({ ...details, assessorLastName: e.target.value })}
          />
          <TextField label="Phone" variant="outlined" fullWidth margin="normal"
            value={details?.assessorPhone || ''}
            onChange={(e) => setDetails({ ...details, assessorPhone: e.target.value })}
          />
          <TextField label="Email" variant="outlined" fullWidth margin="normal"
            value={details?.assessorEmail || ''}
            onChange={(e) => setDetails({ ...details, assessorEmail: e.target.value })}
          />
          <TextField label="City" variant="outlined" fullWidth margin="normal"
            value={details?.assessorCity || ''}
            onChange={(e) => setDetails({ ...details, assessorCity: e.target.value })}
          />
          <TextField label="Address" variant="outlined" fullWidth margin="normal"
            value={details?.assessorAddress || ''}
            onChange={(e) => setDetails({ ...details, assessorAddress: e.target.value })}
          />
        </>
      );
    } else if (type === 'c') {
      return (
        <>
          <TextField label="First Name" variant="outlined" fullWidth margin="normal"
            value={details?.customerFirstName || ''}
            onChange={(e) => setDetails({ ...details, customerFirstName: e.target.value })}
          />
          <TextField label="Last Name" variant="outlined" fullWidth margin="normal"
            value={details?.customerLastName || ''}
            onChange={(e) => setDetails({ ...details, customerLastName: e.target.value })}
          />
          <TextField label="Phone" variant="outlined" fullWidth margin="normal"
            value={details?.customerPhone || ''}
            onChange={(e) => setDetails({ ...details, customerPhone: e.target.value })}
          />
          <TextField label="City" variant="outlined" fullWidth margin="normal"
            value={details?.customerCity || ''}
            onChange={(e) => setDetails({ ...details, customerCity: e.target.value })}
          />
          <TextField label="Email" variant="outlined" fullWidth margin="normal"
            value={details?.customerEmail || ''}
            onChange={(e) => setDetails({ ...details, customerEmail: e.target.value })}
          />
          <TextField label="Address" variant="outlined" fullWidth margin="normal"
            value={details?.customerAddress || ''}
            onChange={(e) => setDetails({ ...details, customerAddress: e.target.value })}
          />
        </>
      );
    }
    return null;
  };

  return (
    <Box className="home-container" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Header - Fixed position */}
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'white', color: '#2c3e50', zIndex: 1200 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleMobileDrawer}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Tooltip title="Messages">
              <IconButton
                color="inherit"
                onClick={() => {dispatch(setLastChats(chats));navigate('/home/lastChats')}}
                sx={{ position: 'relative' }}
              >
                <Badge badgeContent={ready} color="primary">
                  <MoveToInboxIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="My Details">
              <IconButton
                color="inherit"
                onClick={toggleUserDetails}
                sx={{
                  ml: 1,
                  bgcolor: 'rgba(26, 86, 219, 0.1)',
                  '&:hover': { bgcolor: 'rgba(26, 86, 219, 0.2)' }
                }}
              >
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Toolbar placeholder to push content below AppBar */}
      <Toolbar />

      {/* Main content */}
      <Box className="content-wrapper" sx={{
        display: 'flex',
        flexGrow: 1,
        overflow: 'hidden',
        height: 'calc(100vh - 64px)' // Subtract AppBar height
      }}>
        {/* Sidebar for desktop - Fixed position */}
        <Box
          component="nav"
          className="sidebar hide-scrollbar"
          sx={{
            display: { xs: 'none', md: 'block' },
            width: 250,
            flexShrink: 0,
            position: 'fixed',
            top: 64, // AppBar height
            left: 0,
            bottom: 0,
            overflowY: 'auto',
            bgcolor: 'white',
            borderRight: '1px solid rgba(0, 0, 0, 0.08)'
          }}
        >
          <List className="sidebar-nav">
            {getNavigationItems().map((item, index) => (
              <ListItem key={index} disablePadding>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                  style={{ width: '100%', textDecoration: 'none' }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={toggleMobileDrawer}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width: 250 },
            zIndex: 1300
          }}
        >
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <img src="/logo.png" alt="Logo" style={{ height: '30px' }} />
            <IconButton onClick={toggleMobileDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {getNavigationItems().map((item, index) => (
              <ListItem key={index} disablePadding>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                  style={{ width: '100%', textDecoration: 'none' }}

                  onClick={toggleMobileDrawer}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Main content area - With scrollable outlet */}
        <Box className="main-content" sx={{
          flexGrow: 1,
          ml: { xs: 0, md: '250px' }, // Margin to account for fixed sidebar
          height: '100%',
          overflow: 'hidden',
          paddingTop: '64px' // Add padding to prevent content from being hidden behind the header
        }}>
          <Container maxWidth="xl" sx={{ height: '100%' }}>
            <Paper
              elevation={0}
              className="content-card fade-in"
              sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* This is where the Outlet is rendered - it will have its own scroll */}
              <Box sx={{
                flexGrow: 1,
                overflow: 'auto', // This enables scrolling just for the outlet content
                height: '100%',
                scrollPaddingTop: '64px' // Add scroll padding to ensure content isn't hidden
              }}>
                <Outlet />
              </Box>
            </Paper>
          </Container>
        </Box>
      </Box>
      {/* User details drawer */}
      <Drawer
        anchor="right"
        open={userDetailsOpen}
        onClose={toggleUserDetails}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 400 },
            p: 3,
            boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.05)'
          }
        }}
      >
        <Box className="user-details-drawer">
          <Box className="user-details-header">
            <Typography variant="h6" fontWeight="600" color="#2c3e50">
              My Profile
            </Typography>
            <IconButton onClick={toggleUserDetails}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 3 }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                bgcolor: 'rgba(26, 86, 219, 0.1)',
                color: '#1a56db',
                fontSize: '2.5rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
              }}
            >
              {type === 'a'
                ? details?.assessorFirstName?.charAt(0) || 'A'
                : details?.customerFirstName?.charAt(0) || 'C'
              }
            </Avatar>
          </Box>
          <Box className="user-details-form">
            {renderUserDetailsForm()}
          </Box>
          <Box className="form-actions">
            <Button
              variant="outlined"
              onClick={toggleUserDetails}
              sx={{
                borderRadius: '8px',
                textTransform: 'none',
                borderColor: '#e0e0e0',
                color: '#7f8c8d',
                px: 3
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={handleSaveDetails}
              sx={{
                borderRadius: '8px',
                textTransform: 'none',
                background: 'linear-gradient(90deg, #1a56db 0%, #0c4da2 100%)',
                boxShadow: '0 4px 15px rgba(26, 86, 219, 0.4)',

                px: 3,
                '&:hover': {
                  background: 'linear-gradient(90deg, #1a56db 0%, #0c4da2 80%)',
                  boxShadow: '0 6px 20px rgba(26, 86, 219, 0.6)',
                }
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};