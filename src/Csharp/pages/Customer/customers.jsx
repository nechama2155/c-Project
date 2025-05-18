// import { useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { customerThunk } from "../../redux/slices/get/customerThunk";
// import { Outlet, useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";
// // import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

// // import * as React from 'react';
// // import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
// // import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
// // import { setChoseDetails } from "../../redux/slices/customerSlice";

// import { myCustomersThunk } from "../../redux/slices/get by assessor/myCustomersThunk";

// import GridViewIcon from '@mui/icons-material/GridView';
// import { setCustomerChose } from "../../redux/slices/customerSlice";
// import { setFull } from "../../redux/slices/userSlice";

// export const Customers = () => {

//     const [selected, setSelected] = useState(false);
//     const [selectedAs, setSelectedAs] = useState({});
//     const dispatch = useDispatch();
//     const customersDetails = useSelector(state => state.customer.customers);
//     const thisAssessor = useSelector(state => state.assessor.thisAssessor);
//     const navigate = useNavigate()
//   const type = useSelector(state => state.user.t);


//     // useEffect(() => {
//     //     if (customersDetails.length === 0 && type==="a"){
//     //              if(thisAssessor.isManager === false)
//     //                 // dispatch(myCustomersThunk(thisAssessor.assessorId));       
//     //               dispatch(customerThunk());
//     //             //   else
//     //                     }
//     // }, [])


//     return <div>
//  <table>
//             <thead>
//                 <tr>
//                     <th>id</th>
//                     <th>firstName</th>
//                     <th>lastName</th>
//                     <th>city</th>
//                     <th>address</th>
//                     <th>phone</th>
//                     <th>email</th>
//                   {!thisAssessor.isManager && <th>chat</th>}
//                 </tr>
//             </thead>
//             <tbody>

//                 {customersDetails && customersDetails.map(d => {
//                     return <tr key={d.customerId} onClick={() => { setSelected(true); setSelectedAs(d)}} className={(selected && selectedAs === d) ? "s" : "r"}>
//                         <td>{d.customerId}</td>
//                         <td>{d.customerFirstName}</td>
//                         <td>{d.customerLastName}</td>
//                         <td>{d.customerCity}</td>
//                         <td>{d.customerAddress}</td>
//                         <td>{d.customerPhone}</td>
//                         <td>{d.customerEmail}</td>
//                       {!thisAssessor.isManager &&<>
//                         <td>

//                         {/* <MailOutlineOutlinedIcon /> */}
//                             {/* {((chat && !sent ) || selectedAs !== d) &&  */}
//                             <Button variant="text" onClick={() => {dispatch(setFull(false));dispatch(setCustomerChose(d)) ;navigate('/home/fullApplications') }}><GridViewIcon/>all applications</Button>
//                             {/* } */}
//                             {/* {(sent && !chat)&&selectedAs === d && <> */}
//                                 {/* <Button onClick={() => { dispatch(setChoseDetails(d));navigate('newChat') }}><BookmarkAddOutlinedIcon />new chat</Button><br />
//                                 <Button onClick={() => navigate('lastChats')}><BookmarkAddedOutlinedIcon />last chats</Button> */}

//                             {/* </> */}
//                             {/* } */}
//                         </td>
//                         </>}

//                     </tr>
//                 })}

//             </tbody>
//         </table>

//         {/* {newChat && <>

//         </>
//         } */}
//         {/* <button onClick={()=>(dispatch(customerThunk()))}>getAll</button> */}
//         {/* <Button variant="text" onClick={()=>{navigate('addCustomer')}}>add customer</Button> */}

//         {/* {selected &&<> */}
//         {/* <Button variant="text" onClick={()=>{dispatch(editCustomer(selectedAs));navigate('editCustomer')}}>edit customer</Button> */}
//         {/* <button onClick={()=>{dispatch(deleteCustomerThunk(selectedAs.customerId));setSelected(false)}}>delete customer</button> */}
//         {/* </>   */}

//         <Outlet></Outlet>
//     </div>
// }
//////////////////////////////////////

// import { useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { customerThunk } from "../../redux/slices/get/customerThunk";
// import { Outlet, useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";
// import { myCustomersThunk } from "../../redux/slices/get by assessor/myCustomersThunk";
// import GridViewIcon from '@mui/icons-material/GridView';
// import { setCustomerChose } from "../../redux/slices/customerSlice";
// import { setFull } from "../../redux/slices/userSlice";
// import "../cssPages/Assessment.css";

// export const Customers = () => {
//     const [selected, setSelected] = useState(false);
//     const [selectedAs, setSelectedAs] = useState({});
//     const dispatch = useDispatch();
//     const customersDetails = useSelector(state => state.customer.customers);
//     const thisAssessor = useSelector(state => state.assessor.thisAssessor);
//     const navigate = useNavigate();
//     const type = useSelector(state => state.user.t);

//     // useEffect commented out as in original code

//     return (
//         <div className={`assessment-container Customers ${thisAssessor.isManager ? 'manager-view' : ''}`}>
//             <div className="assessment-content">
//                 <div className="grid-table">
//                     <div className="grid-header-container">
//                         <div className="grid-header">
//                             <div className="grid-cell">ID</div>
//                             <div className="grid-cell">First Name</div>
//                             <div className="grid-cell">Last Name</div>
//                             <div className="grid-cell">City</div>
//                             <div className="grid-cell">Address</div>
//                             <div className="grid-cell">Phone</div>
//                             <div className="grid-cell">Email</div>
//                             {!thisAssessor.isManager && <div className="grid-cell">Actions</div>}
//                         </div>
//                     </div>

//                     <div className="grid-body-container">
//                         {customersDetails && customersDetails.map(d => (
//                             <div 
//                                 key={d.customerId} 
//                                 className={`grid-row ${(selected && selectedAs === d) ? "selected-row" : ""}`}
//                                 onClick={() => { setSelected(true); setSelectedAs(d) }}
//                             >
//                                 <div className="grid-cell">{d.customerId}</div>
//                                 <div className="grid-cell">{d.customerFirstName}</div>
//                                 <div className="grid-cell">{d.customerLastName}</div>
//                                 <div className="grid-cell">{d.customerCity}</div>
//                                 <div className="grid-cell">{d.customerAddress}</div>
//                                 <div className="grid-cell">{d.customerPhone}</div>
//                                 <div className="grid-cell">{d.customerEmail}</div>
//                                 {!thisAssessor.isManager && (
//                                     <div className="grid-cell action-cell">
//                                         <Button 
//                                             variant="contained" 
//                                             size="small"
//                                             startIcon={<GridViewIcon />}
//                                             onClick={(e) => {
//                                                 e.stopPropagation(); // Prevent row selection
//                                                 dispatch(setFull(false));
//                                                 dispatch(setCustomerChose(d));
//                                                 navigate('/home/fullApplications');
//                                             }}
//                                         >
//                                             Applications
//                                         </Button>
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <Outlet></Outlet>
//         </div>
//     );
// }


// import { useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { customerThunk } from "../../redux/slices/get/customerThunk";
// import { Outlet, useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";
// import { myCustomersThunk } from "../../redux/slices/get by assessor/myCustomersThunk";
// import GridViewIcon from '@mui/icons-material/GridView';
// import { setCustomerChose } from "../../redux/slices/customerSlice";
// import { setFull } from "../../redux/slices/userSlice";
// import "../cssPages/Assessment.css";
// import {
//     Box,
//     Typography,
//     Paper,
//     Fade,
//     TextField,
//     InputAdornment,
//     IconButton,
//     Container,
//     Chip
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import ClearIcon from '@mui/icons-material/Clear';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import SortIcon from '@mui/icons-material/Sort';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import PersonIcon from '@mui/icons-material/Person';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

// export const Customers = () => {
//     const [selected, setSelected] = useState(false);
//     const [selectedAs, setSelectedAs] = useState({});
//     const dispatch = useDispatch();
//     const customersDetails = useSelector(state => state.customer.customers);
//     const thisAssessor = useSelector(state => state.assessor.thisAssessor);
//     const navigate = useNavigate();
//     const type = useSelector(state => state.user.t);
//     const topRef = useRef(null);
//     const [sortBy, setSortBy] = useState('none');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredCustomers, setFilteredCustomers] = useState([]);

//     // useEffect commented out as in original code

//     useEffect(() => {
//         // Scroll to top when component mounts
//         window.scrollTo(0, 0);

//         setFilteredCustomers(customersDetails);
//     }, [customersDetails]);

//     const scrollToTop = () => {
//         topRef.current?.scrollIntoView({ behavior: 'smooth' });
//     };

//     const handleSort = (sortType) => {
//         setSortBy(sortType);

//         let sortedCustomers = [...customersDetails];

//         if (sortType === 'name') {
//             sortedCustomers.sort((a, b) => a.customerFirstName.localeCompare(b.customerFirstName));
//         } else if (sortType === 'id') {
//             sortedCustomers.sort((a, b) => a.customerId - b.customerId);
//         } else if (sortType === 'city') {
//             sortedCustomers.sort((a, b) => a.customerCity.localeCompare(b.customerCity));
//         }

//         setFilteredCustomers(sortedCustomers);
//     };

//     const handleSearch = () => {
//         if (!searchTerm.trim()) {
//             setFilteredCustomers([...customersDetails]);
//             return;
//         }

//         const term = searchTerm.toLowerCase();

//         const results = customersDetails.filter(customer => {
//             // Convert all fields to strings and check if they include the search term
//             return (
//                 String(customer.customerId).toLowerCase().includes(term) ||
//                 String(customer.customerFirstName).toLowerCase().includes(term) ||
//                 String(customer.customerLastName).toLowerCase().includes(term) ||
//                 String(customer.customerCity).toLowerCase().includes(term) ||
//                 String(customer.customerAddress).toLowerCase().includes(term) ||
//                 String(customer.customerPhone).toLowerCase().includes(term) ||
//                 String(customer.customerEmail).toLowerCase().includes(term)
//             );
//         });

//         setFilteredCustomers(results);
//     };

//     return (
//         <Box sx={{ p: { xs: 2, md: 4 }, position: 'relative' }} ref={topRef}>
//             <Fade in={true} timeout={1000}>
//                 <Box sx={{ textAlign: 'center', mb: 6 }}>
//                     <Typography
//                         variant="h4"
//                         component="h1"
//                         fontWeight="700"
//                         color="#2c3e50"
//                         sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.125rem' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//                     >
//                         <PeopleAltIcon sx={{ mr: 1, fontSize: '2rem', color: '#3a7bd5' }} />
//                         Customer Management
//                     </Typography>
//                     <Typography
//                         variant="subtitle1"
//                         color="#7f8c8d"
//                         sx={{
//                             maxWidth: 800,
//                             mx: 'auto',
//                             mb: 4,
//                             lineHeight: 1.8,
//                             px: { xs: 2, md: 0 }
//                         }}
//                     >
//                         View and manage all customers in one place. Access customer information and their applications.
//                     </Typography>
//                 </Box>
//             </Fade>

//             <Box sx={{ mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'space-between', alignItems: { xs: 'stretch', md: 'center' } }}>
//                 {/* Sort buttons */}
//                 <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
//                     <Typography variant="subtitle1" sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
//                         <SortIcon sx={{ mr: 0.5, fontSize: '1rem' }} /> Sort by:
//                     </Typography>
//                     <Button
//                         variant={sortBy === 'name' ? 'contained' : 'outlined'}
//                         size="small"
//                         onClick={() => handleSort('name')}
//                         startIcon={<PersonIcon />}
//                         sx={{
//                             background: sortBy === 'name' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
//                             '&:hover': {
//                                 background: sortBy === 'name' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
//                             }
//                         }}
//                     >
//                         Name
//                     </Button>
//                     <Button
//                         variant={sortBy === 'id' ? 'contained' : 'outlined'}
//                         size="small"
//                         onClick={() => handleSort('id')}
//                         startIcon={<PersonIcon />}
//                         sx={{
//                             background: sortBy === 'id' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
//                             '&:hover': {
//                                 background: sortBy === 'id' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
//                             }
//                         }}
//                     >
//                         ID
//                     </Button>
//                     <Button
//                         variant={sortBy === 'city' ? 'contained' : 'outlined'}
//                         size="small"
//                         onClick={() => handleSort('city')}
//                         startIcon={<LocationOnIcon />}
//                         sx={{
//                             background: sortBy === 'city' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
//                             '&:hover': {
//                                 background: sortBy === 'city' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
//                             }
//                         }}
//                     >
//                         City
//                     </Button>
//                     <Button
//                         variant={sortBy === 'none' ? 'contained' : 'outlined'}
//                         size="small"
//                         onClick={() => handleSort('none')}
//                         startIcon={<RefreshIcon />}
//                         sx={{
//                             background: sortBy === 'none' ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' : 'transparent',
//                             color: sortBy === 'none' ? '#2c3e50' : 'inherit',
//                             '&:hover': {
//                                 background: sortBy === 'none' ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 90%)' : 'rgba(195, 207, 226, 0.1)'
//                             }
//                         }}
//                     >
//                         Default
//                     </Button>
//                 </Box>

//                 {/* Search */}
//                 <Box sx={{ display: 'flex', gap: 1, flexGrow: { xs: 1, md: 0 }, maxWidth: { xs: '100%', md: '300px' }, mt: { xs: 2, md: 0 } }}>
//                     <TextField
//                         size="small"
//                         placeholder="Search customers..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         InputProps={{
//                             startAdornment: (
//                                 <InputAdornment position="start">
//                                     <SearchIcon />
//                                 </InputAdornment>
//                             ),
//                             endAdornment: searchTerm ? (
//                                 <InputAdornment position="end">
//                                     <IconButton size="small" onClick={() => setSearchTerm('')}>
//                                         <ClearIcon fontSize="small" />
//                                     </IconButton>
//                                 </InputAdornment>
//                             ) : null
//                         }}
//                         sx={{ flexGrow: 1 }}
//                     />
//                     <Button
//                         variant="contained"
//                         size="small"
//                         onClick={handleSearch}
//                         sx={{
//                             background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                             '&:hover': {
//                                 background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
//                             }
//                         }}
//                     >
//                         Search
//                     </Button>
//                 </Box>
//             </Box>

//             <Container maxWidth="lg">
//                 <Fade in={true} timeout={1200}>
//                     <Box>
//                         {customersDetails.length === 0 ? (
//                             <Paper
//                                 elevation={0}
//                                 sx={{
//                                     p: 4,
//                                     borderRadius: 3,
//                                     background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//                                     textAlign: 'center'
//                                 }}
//                             >
//                                 <Typography variant="h6" color="#2c3e50">
//                                     No customers found
//                                 </Typography>
//                                 <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1 }}>
//                                     Customers will appear here once they are added
//                                 </Typography>
//                             </Paper>
//                         ) : (
//                             <div className={`assessment-container Customers ${thisAssessor.isManager ? 'manager-view' : ''}`}>
//                                 <div className="assessment-content">
//                                     <div className="grid-table">
//                                         <div className="grid-header-container">
//                                             <div className="grid-header">
//                                                 <div className="grid-cell">ID</div>
//                                                 <div className="grid-cell">First Name</div>
//                                                 <div className="grid-cell">Last Name</div>
//                                                 <div className="grid-cell">City</div>
//                                                 <div className="grid-cell">Address</div>
//                                                 <div className="grid-cell">Phone</div>
//                                                 <div className="grid-cell">Email</div>
//                                                 {!thisAssessor.isManager && <div className="grid-cell">Actions</div>}
//                                             </div>
//                                         </div>

//                                         <div className="grid-body-container">
//                                             {filteredCustomers.map(d => (
//                                                 <div 
//                                                     key={d.customerId} 
//                                                     className={`grid-row ${(selected && selectedAs === d) ? "selected-row" : ""}`}
//                                                     onClick={() => { setSelected(true); setSelectedAs(d) }}
//                                                 >
//                                                     <div className="grid-cell">{d.customerId}</div>
//                                                     <div className="grid-cell">{d.customerFirstName}</div>
//                                                     <div className="grid-cell">{d.customerLastName}</div>
//                                                     <div className="grid-cell">{d.customerCity}</div>
//                                                     <div className="grid-cell">{d.customerAddress}</div>
//                                                     <div className="grid-cell">{d.customerPhone}</div>
//                                                     <div className="grid-cell">{d.customerEmail}</div>
//                                                     {!thisAssessor.isManager && (
//                                                         <div className="grid-cell action-cell">
//                                                             <Button 
//                                                                 variant="contained" 
//                                                                 size="small"
//                                                                 startIcon={<GridViewIcon />}
//                                                                 onClick={(e) => {
//                                                                     e.stopPropagation(); // Prevent row selection
//                                                                     dispatch(setFull(false));
//                                                                     dispatch(setCustomerChose(d));
//                                                                     navigate('/home/fullApplications');
//                                                                 }}
//                                                                 sx={{
//                                                                     background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                                                                     '&:hover': {
//                                                                         background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
//                                                                     }
//                                                                 }}
//                                                             >
//                                                                 Applications
//                                                             </Button>
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </Box>
//                 </Fade>
//             </Container>

//             {/* Scroll to top button */}
//             <Button
//                 variant="contained"
//                 onClick={scrollToTop}
//                 sx={{

//                     position: 'fixed',
//                     bottom: 20,
//                     right: 20,
//                     minWidth: 0,
//                     width: 50,
//                     height: 50,
//                     borderRadius: '50%',
//                     boxShadow: '0 4px 15px rgba(195, 207, 226, 0.4)',
//                     background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//                     color: '#2c3e50',
//                     '&:hover': {
//                         background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 80%)',
//                         boxShadow: '0 6px 20px rgba(195, 207, 226, 0.6)',
//                     },
//                     zIndex: 1000,
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}
//             >
//                 <KeyboardArrowUpIcon />
//             </Button>

//             {selected && (
//                 <div className="assessment-buttons-fixed">
//                     <Button 
//                         variant="contained"
//                         onClick={() => setSelected(false)}
//                         sx={{
//                             background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                             '&:hover': {
//                                 background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
//                             },
//                             mr: 2
//                         }}
//                     >
//                         Deselect
//                     </Button>
//                     {!thisAssessor.isManager && (
//                         <Button 
//                             variant="outlined"
//                             startIcon={<GridViewIcon />}
//                             onClick={() => {
//                                 dispatch(setFull(false));
//                                 dispatch(setCustomerChose(selectedAs));
//                                 navigate('/home/fullApplications');
//                             }}
//                             sx={{
//                                 borderColor: '#3a7bd5',
//                                 color: '#3a7bd5',
//                                 '&:hover': {
//                                     borderColor: '#2b5876',
//                                     backgroundColor: 'rgba(58, 123, 213, 0.1)'
//                                 }
//                             }}
//                         >
//                             View Applications
//                         </Button>
//                     )}
//                 </div>
//             )}

//             <Outlet></Outlet>
//         </Box>
//     );
// }


/////////////////////////////////////
// import { useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { customerThunk } from "../../redux/slices/get/customerThunk";
// import { Outlet, useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";
// import { myCustomersThunk } from "../../redux/slices/get by assessor/myCustomersThunk";
// import GridViewIcon from '@mui/icons-material/GridView';
// import { setCustomerChose } from "../../redux/slices/customerSlice";
// import { setFull } from "../../redux/slices/userSlice";
// import "../cssPages/Assessment.css";
// import {
//     Box,
//     Typography,
//     Paper,
//     Fade,
//     TextField,
//     InputAdornment,
//     IconButton,
//     Container,
//     Chip
// } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// import ClearIcon from '@mui/icons-material/Clear';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import SortIcon from '@mui/icons-material/Sort';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import PersonIcon from '@mui/icons-material/Person';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';
// import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

// export const Customers = () => {
//     const [selected, setSelected] = useState(false);
//     const [selectedAs, setSelectedAs] = useState({});
//     const dispatch = useDispatch();
//     const customersDetails = useSelector(state => state.customer.customers);
//     const thisAssessor = useSelector(state => state.assessor.thisAssessor);
//     const navigate = useNavigate();
//     const type = useSelector(state => state.user.t);
//     const topRef = useRef(null);
//     const [sortBy, setSortBy] = useState('none');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredCustomers, setFilteredCustomers] = useState([]);

//     // useEffect commented out as in original code

//     useEffect(() => {
//         // Scroll to top when component mounts
//         window.scrollTo(0, 0);

//         setFilteredCustomers(customersDetails);
//     }, [customersDetails]);

//     const scrollToTop = () => {
//         topRef.current?.scrollIntoView({ behavior: 'smooth' });
//     };

//     const handleSort = (sortType) => {
//         setSortBy(sortType);

//         let sortedCustomers = [...customersDetails];

//         if (sortType === 'name') {
//             sortedCustomers.sort((a, b) => a.customerFirstName.localeCompare(b.customerFirstName));
//         } else if (sortType === 'id') {
//             sortedCustomers.sort((a, b) => a.customerId - b.customerId);
//         } else if (sortType === 'city') {
//             sortedCustomers.sort((a, b) => a.customerCity.localeCompare(b.customerCity));
//         }

//         setFilteredCustomers(sortedCustomers);
//     };

//     const handleSearch = () => {
//         if (!searchTerm.trim()) {
//             setFilteredCustomers([...customersDetails]);
//             return;
//         }

//         const term = searchTerm.toLowerCase();

//         const results = customersDetails.filter(customer => {
//             // Convert all fields to strings and check if they include the search term
//             return (
//                 String(customer.customerId).toLowerCase().includes(term) ||
//                 String(customer.customerFirstName).toLowerCase().includes(term) ||
//                 String(customer.customerLastName).toLowerCase().includes(term) ||
//                 String(customer.customerCity).toLowerCase().includes(term) ||
//                 String(customer.customerAddress).toLowerCase().includes(term) ||
//                 String(customer.customerPhone).toLowerCase().includes(term) ||
//                 String(customer.customerEmail).toLowerCase().includes(term)
//             );
//         });

//         setFilteredCustomers(results);
//     };

//     return (
//         <Box sx={{ p: { xs: 2, md: 4 }, position: 'relative' }} ref={topRef}>
//             <Fade in={true} timeout={1000}>
//                 <Box sx={{ textAlign: 'center', mb: 6 }}>
//                     <Typography
//                         variant="h4"
//                         component="h1"
//                         fontWeight="700"
//                         color="#2c3e50"
//                         sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.125rem' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//                     >
//                         <PeopleAltIcon sx={{ mr: 1, fontSize: '2rem', color: '#3a7bd5' }} />
//                         Customer Management
//                     </Typography>
//                     <Typography
//                         variant="subtitle1"
//                         color="#7f8c8d"
//                         sx={{
//                             maxWidth: 800,
//                             mx: 'auto',
//                             mb: 4,
//                             lineHeight: 1.8,
//                             px: { xs: 2, md: 0 }
//                         }}
//                     >
//                         View and manage all customers in one place. Access customer information and their applications.
//                     </Typography>
//                 </Box>
//             </Fade>

//             <Box sx={{ mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'space-between', alignItems: { xs: 'stretch', md: 'center' } }}>
//                 {/* Sort buttons */}
//                 <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
//                     <Typography variant="subtitle1" sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
//                         <SortIcon sx={{ mr: 0.5, fontSize: '1rem' }} /> Sort by:
//                     </Typography>
//                     <Button
//                         variant={sortBy === 'name' ? 'contained' : 'outlined'}
//                         size="small"
//                         onClick={() => handleSort('name')}
//                         startIcon={<PersonIcon />}
//                         sx={{
//                             background: sortBy === 'name' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
//                             '&:hover': {
//                                 background: sortBy === 'name' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
//                             }
//                         }}
//                     >
//                         Name
//                     </Button>
//                     <Button
//                         variant={sortBy === 'id' ? 'contained' : 'outlined'}
//                         size="small"
//                         onClick={() => handleSort('id')}
//                         startIcon={<PersonIcon />}
//                         sx={{
//                             background: sortBy === 'id' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
//                             '&:hover': {
//                                 background: sortBy === 'id' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
//                             }
//                         }}
//                     >
//                         ID
//                     </Button>
//                     <Button
//                         variant={sortBy === 'city' ? 'contained' : 'outlined'}
//                         size="small"
//                         onClick={() => handleSort('city')}
//                         startIcon={<LocationOnIcon />}
//                         sx={{
//                             background: sortBy === 'city' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
//                             '&:hover': {
//                                 background: sortBy === 'city' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
//                             }
//                         }}
//                     >
//                         City
//                     </Button>
//                     <Button
//                         variant={sortBy === 'none' ? 'contained' : 'outlined'}
//                         size="small"
//                         onClick={() => handleSort('none')}
//                         startIcon={<RefreshIcon />}
//                         sx={{
//                             background: sortBy === 'none' ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' : 'transparent',
//                             color: sortBy === 'none' ? '#2c3e50' : 'inherit',
//                             '&:hover': {
//                                 background: sortBy === 'none' ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 90%)' : 'rgba(195, 207, 226, 0.1)'
//                             }
//                         }}
//                     >
//                         Default
//                     </Button>
//                 </Box>

//                 {/* Search */}
//                 <Box sx={{ display: 'flex', gap: 1, flexGrow: { xs: 1, md: 0 }, maxWidth: { xs: '100%', md: '300px' }, mt: { xs: 2, md: 0 } }}>
//                     <TextField
//                         size="small"
//                         placeholder="Search customers..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         InputProps={{
//                             startAdornment: (
//                                 <InputAdornment position="start">
//                                     <SearchIcon />
//                                 </InputAdornment>
//                             ),
//                             endAdornment: searchTerm ? (
//                                 <InputAdornment position="end">
//                                     <IconButton size="small" onClick={() => setSearchTerm('')}>
//                                         <ClearIcon fontSize="small" />
//                                     </IconButton>
//                                 </InputAdornment>
//                             ) : null
//                         }}
//                         sx={{ flexGrow: 1 }}
//                     />
//                     <Button
//                         variant="contained"
//                         size="small"
//                         onClick={handleSearch}
//                         sx={{
//                             background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                             '&:hover': {
//                                 background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
//                             }
//                         }}
//                     >
//                         Search
//                     </Button>
//                 </Box>
//             </Box>

//             <Container maxWidth="lg">
//                 <Fade in={true} timeout={1200}>
//                     <Box>
//                         {customersDetails.length === 0 ? (
//                             <Paper
//                                 elevation={0}
//                                 sx={{
//                                     p: 4,
//                                     borderRadius: 3,
//                                     background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//                                     textAlign: 'center'
//                                 }}
//                             >
//                                 <Typography variant="h6" color="#2c3e50">
//                                     No customers found
//                                 </Typography>
//                                 <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1 }}>
//                                     Customers will appear here once they are added
//                                 </Typography>
//                             </Paper>
//                         ) : (
//                             <div className={`assessment-container Customers ${thisAssessor.isManager ? 'manager-view' : ''}`}>
//                                 <div className="assessment-content">
//                                     <div className="grid-table">
//                                         <div className="grid-header-container">
//                                             <div className="grid-header">
//                                                 <div className="grid-cell">ID</div>
//                                                 <div className="grid-cell">First Name</div>
//                                                 <div className="grid-cell">Last Name</div>
//                                                 <div className="grid-cell">City</div>
//                                                 <div className="grid-cell">Address</div>
//                                                 <div className="grid-cell">Phone</div>
//                                                 <div className="grid-cell">Email</div>
//                                                 {!thisAssessor.isManager && <div className="grid-cell">Actions</div>}
//                                             </div>
//                                         </div>

//                                         <div className="grid-body-container">
//                                             {filteredCustomers.map(d => (
//                                                 <div 
//                                                     key={d.customerId} 
//                                                     className={`grid-row ${(selected && selectedAs === d) ? "selected-row" : ""}`}
//                                                     onClick={() => { setSelected(true); setSelectedAs(d) }}
//                                                 >
//                                                     <div className="grid-cell">{d.customerId}</div>
//                                                     <div className="grid-cell">{d.customerFirstName}</div>
//                                                     <div className="grid-cell">{d.customerLastName}</div>
//                                                     <div className="grid-cell">{d.customerCity}</div>
//                                                     <div className="grid-cell">{d.customerAddress}</div>
//                                                     <div className="grid-cell">{d.customerPhone}</div>
//                                                     <div className="grid-cell">{d.customerEmail}</div>
//                                                     {!thisAssessor.isManager && (
//                                                         <div className="grid-cell action-cell">
//                                                             <Button 
//                                                                 variant="contained" 
//                                                                 size="small"
//                                                                 startIcon={<GridViewIcon />}
//                                                                 onClick={(e) => {
//                                                                     e.stopPropagation(); // Prevent row selection
//                                                                     dispatch(setFull(false));
//                                                                     dispatch(setCustomerChose(d));
//                                                                     navigate('/home/fullApplications');
//                                                                 }}
//                                                                 sx={{
//                                                                     background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                                                                     '&:hover': {
//                                                                         background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
//                                                                     }
//                                                                 }}
//                                                             >
//                                                                 Applications
//                                                             </Button>
//                                                         </div>
//                                                     )}
//                                                 </div>
//                                             ))}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </Box>
//                 </Fade>
//             </Container>

//             {/* Scroll to top button */}
//             <Button
//                 variant="contained"
//                 onClick={scrollToTop}
//                 sx={{
//                     position: 'fixed',
//                     bottom: 20,
//                     right: 20,
//                     minWidth: 0,
//                     width: 50,
//                     height: 50,
//                     borderRadius: '50%',
//                     boxShadow: '0 4px 15px rgba(195, 207, 226, 0.4)',
//                     background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//                     color: '#2c3e50',
//                     '&:hover': {
//                         background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 80%)',
//                         boxShadow: '0 6px 20px rgba(195, 207, 226, 0.6)',
//                     },
//                     zIndex: 1000,
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}
//             >
//                 <KeyboardArrowUpIcon />
//             </Button>

//             {selected && (
//                 <div className="assessment-buttons-fixed">
//                     <Button 
//                         variant="contained"
//                         onClick={() => setSelected(false)}
//                         sx={{
//                             background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                             '&:hover': {
//                                 background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
//                             },
//                             mr: 2
//                         }}
//                     >
//                         Deselect
//                     </Button>
//                     {!thisAssessor.isManager && (
//                         <Button 
//                             variant="outlined"
//                             startIcon={<GridViewIcon />}
//                             onClick={() => {
//                                 dispatch(setFull(false));
//                                 dispatch(setCustomerChose(selectedAs));
//                                 navigate('/home/fullApplications');
//                             }}
//                             sx={{
//                                 borderColor: '#3a7bd5',
//                                 color: '#3a7bd5',
//                                 '&:hover': {
//                                     borderColor: '#2b5876',
//                                     backgroundColor: 'rgba(58, 123, 213, 0.1)'
//                                 }
//                             }}
//                         >
//                             View Applications
//                         </Button>
//                     )}
//                 </div>
//             )}

//             <Outlet></Outlet>
//         </Box>
//     );
// }

/////////////////
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { customerThunk } from "../../redux/slices/get/customerThunk";
import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { myCustomersThunk } from "../../redux/slices/get by assessor/myCustomersThunk";
import GridViewIcon from '@mui/icons-material/GridView';
import { setCustomerChose } from "../../redux/slices/customerSlice";
import { setFull } from "../../redux/slices/userSlice";
import "../cssPages/Assessment.css";
import {
    Box,
    Typography,
    Paper,
    Fade,
    TextField,
    InputAdornment,
    IconButton,
    Container,
    Chip,
    useMediaQuery,
    useTheme
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import SortIcon from '@mui/icons-material/Sort';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

export const Customers = () => {
    const [selected, setSelected] = useState(false);
    const [selectedAs, setSelectedAs] = useState({});
    const dispatch = useDispatch();
    const customersDetails = useSelector(state => state.customer.customers);
    const thisAssessor = useSelector(state => state.assessor.thisAssessor);
    const navigate = useNavigate();
    const type = useSelector(state => state.user.t);
    const topRef = useRef(null);
    const [sortBy, setSortBy] = useState('none');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCustomers, setFilteredCustomers] = useState([]);

    // הוספת שימוש בתמה ובדיקות מדיה לרספונסיביות
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'));

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);

        setFilteredCustomers(customersDetails);
    }, [customersDetails]);

    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSort = (sortType) => {
        setSortBy(sortType);

        let sortedCustomers = [...customersDetails];

        if (sortType === 'name') {
            sortedCustomers.sort((a, b) => a.customerFirstName.localeCompare(b.customerFirstName));
        } else if (sortType === 'id') {
            sortedCustomers.sort((a, b) => a.customerId - b.customerId);
        } else if (sortType === 'city') {
            sortedCustomers.sort((a, b) => a.customerCity.localeCompare(b.customerCity));
        }

        setFilteredCustomers(sortedCustomers);
    };

    const handleSearch = () => {
        if (!searchTerm.trim()) {
            setFilteredCustomers([...customersDetails]);
            return;
        }

        const term = searchTerm.toLowerCase();

        const results = customersDetails.filter(customer => {
            // Convert all fields to strings and check if they include the search term
            return (
                String(customer.customerId).toLowerCase().includes(term) ||
                String(customer.customerFirstName).toLowerCase().includes(term) ||
                String(customer.customerLastName).toLowerCase().includes(term) ||
                String(customer.customerCity).toLowerCase().includes(term) ||
                String(customer.customerAddress).toLowerCase().includes(term) ||
                String(customer.customerPhone).toLowerCase().includes(term) ||
                String(customer.customerEmail).toLowerCase().includes(term)
            );
        });

        setFilteredCustomers(results);
    };

    return (
        <Box sx={{ p: { xs: 1, sm: 2, md: 4 }, position: 'relative' }} ref={topRef}>
            <Fade in={true} timeout={1000}>
                <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 6 } }}>
                    <Typography
                        variant="h4"
                        component="h1"
                        fontWeight="700"
                        color="#2c3e50"
                        sx={{
                            mb: 2,
                            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2.125rem' },
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        <PeopleAltIcon sx={{ mr: 1, fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }, color: '#3a7bd5' }} />
                        Customer Management
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="#7f8c8d"
                        sx={{
                            maxWidth: 800,
                            mx: 'auto',
                            mb: { xs: 2, md: 4 },
                            lineHeight: 1.8,
                            px: { xs: 2, md: 0 },
                            fontSize: { xs: '0.875rem', md: '1rem' }
                        }}
                    >
                        View and manage all customers in one place. Access customer information and their applications.
                    </Typography>
                </Box>
            </Fade>

            {/* חלק החיפוש והמיון */}
            <Box sx={{
                mb: { xs: 2, md: 4 },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 1, md: 2 },
                justifyContent: 'space-between',
                alignItems: { xs: 'stretch', md: 'center' }
            }}>
                {/* Sort buttons */}
                <Box sx={{
                    display: 'flex',
                    gap: { xs: 0.5, md: 1 },
                    flexWrap: 'wrap',
                    justifyContent: { xs: 'center', sm: 'flex-start' }
                }}>
                    <Typography variant="subtitle1" sx={{
                        mr: { xs: 0.5, md: 1 },
                        display: 'flex',
                        alignItems: 'center',
                        fontSize: { xs: '0.8rem', md: '1rem' }
                    }}>
                        <SortIcon sx={{ mr: 0.5, fontSize: { xs: '0.8rem', md: '1rem' } }} /> Sort by:
                    </Typography>
                    <Button
                        variant={sortBy === 'name' ? 'contained' : 'outlined'}
                        size={isXsScreen ? "small" : "medium"}
                        onClick={() => handleSort('name')}
                        startIcon={<PersonIcon />}
                        sx={{
                            background: sortBy === 'name' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'name' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            },
                            fontSize: { xs: '0.7rem', md: '0.875rem' },
                            padding: { xs: '4px 8px', md: '6px 16px' },
                            minWidth: { xs: '60px', md: 'auto' }
                        }}
                    >
                        Name
                    </Button>
                    <Button
                        variant={sortBy === 'id' ? 'contained' : 'outlined'}
                        size={isXsScreen ? "small" : "medium"}
                        onClick={() => handleSort('id')}
                        startIcon={<PersonIcon />}
                        sx={{
                            background: sortBy === 'id' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'id' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            },
                            fontSize: { xs: '0.7rem', md: '0.875rem' },
                            padding: { xs: '4px 8px', md: '6px 16px' },
                            minWidth: { xs: '60px', md: 'auto' }
                        }}
                    >
                        ID
                    </Button>
                    <Button
                        variant={sortBy === 'city' ? 'contained' : 'outlined'}
                        size={isXsScreen ? "small" : "medium"}
                        onClick={() => handleSort('city')}
                        startIcon={<LocationOnIcon />}
                        sx={{
                            background: sortBy === 'city' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'city' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            },
                            fontSize: { xs: '0.7rem', md: '0.875rem' },
                            padding: { xs: '4px 8px', md: '6px 16px' },
                            minWidth: { xs: '60px', md: 'auto' }
                        }}
                    >
                        City
                    </Button>
                    <Button
                        variant={sortBy === 'none' ? 'contained' : 'outlined'}
                        size={isXsScreen ? "small" : "medium"}
                        onClick={() => handleSort('none')}
                        startIcon={<RefreshIcon />}
                        sx={{
                            background: sortBy === 'none' ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' : 'transparent',
                            color: sortBy === 'none' ? '#2c3e50' : 'inherit',
                            '&:hover': {
                                background: sortBy === 'none' ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 90%)' : 'rgba(195, 207, 226, 0.1)'
                            },
                            fontSize: { xs: '0.7rem', md: '0.875rem' },
                            padding: { xs: '4px 8px', md: '6px 16px' },
                            minWidth: { xs: '60px', md: 'auto' }
                        }}
                    >
                        Default
                    </Button>
                </Box>

                {/* Search */}
                <Box sx={{
                    display: 'flex',
                    gap: 1,
                    flexGrow: { xs: 1, md: 0 },
                    maxWidth: { xs: '100%', md: '300px' },
                    mt: { xs: 2, md: 0 }
                }}>
                    <TextField
                        size="small"
                        placeholder={isXsScreen ? "Search..." : "Search customers..."}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon fontSize={isXsScreen ? "small" : "medium"} />
                                </InputAdornment>
                            ),
                            endAdornment: searchTerm ? (
                                <InputAdornment position="end">
                                    <IconButton size="small" onClick={() => {
                                        setSearchTerm('');
                                        setFilteredCustomers(customersDetails);
                                    }}>
                                        <ClearIcon fontSize="small" />
                                    </IconButton>
                                </InputAdornment>
                            ) : null
                        }}
                        sx={{
                            flexGrow: 1,
                            '& .MuiInputBase-root': {
                                fontSize: { xs: '0.875rem', md: '1rem' }
                            }
                        }}
                    />
                    <Button
                        variant="contained"
                        size="small"
                        onClick={handleSearch}
                        sx={{
                            background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                            '&:hover': {
                                background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                            },
                            whiteSpace: 'nowrap',
                            fontSize: { xs: '0.75rem', md: '0.875rem' }
                        }}
                    >
                        {isXsScreen ? "Go" : "Search"}
                    </Button>
                </Box>
            </Box>

            <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
                <Fade in={true} timeout={1200}>
                    <Box>
                        {customersDetails.length === 0 ? (
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 2, md: 4 },
                                    borderRadius: 3,
                                    background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                                    textAlign: 'center'
                                }}
                            >
                                <Typography variant="h6" color="#2c3e50" sx={{ fontSize: { xs: '1rem', md: '1.25rem' } }}>
                                    No customers found
                                </Typography>

                                <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                                    Customers will appear here once they are added
                                </Typography>
                            </Paper>
                        ) : (
                            <Box sx={{
                                overflowX: 'auto',
                                boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
                                borderRadius: 2,
                                bgcolor: 'white'
                            }}>
                                <table style={{
                                    width: '100%',
                                    borderCollapse: 'collapse',
                                    minWidth: isMdScreen ? '900px' : '100%'
                                }}>
                                    <thead>
                                        <tr style={{
                                            backgroundColor: '#f8f9fa',
                                            borderBottom: '2px solid #e9ecef'
                                        }}>
                                            <th style={{
                                                padding: '12px 16px',
                                                textAlign: 'left',
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                                color: '#495057',
                                                whiteSpace: 'nowrap'
                                            }}>ID</th>
                                            <th style={{
                                                padding: '12px 16px',
                                                textAlign: 'left',
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                                color: '#495057',
                                                whiteSpace: 'nowrap'
                                            }}>First Name</th>
                                            <th style={{
                                                padding: '12px 16px',
                                                textAlign: 'left',
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                                color: '#495057',
                                                whiteSpace: 'nowrap'
                                            }}>Last Name</th>
                                            <th style={{
                                                padding: '12px 16px',
                                                textAlign: 'left',
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                                color: '#495057',
                                                whiteSpace: 'nowrap'
                                            }}>City</th>
                                            {!isXsScreen && (
                                                <th style={{
                                                    padding: '12px 16px',
                                                    textAlign: 'left',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600,
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>Address</th>
                                            )}
                                            {!isMdScreen && (
                                                <th style={{
                                                    padding: '12px 16px',
                                                    textAlign: 'left',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600,
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>Phone</th>
                                            )}
                                            {!isXsScreen && (
                                                <th style={{
                                                    padding: '12px 16px',
                                                    textAlign: 'left',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600,
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>Email</th>
                                            )}
                                            {!thisAssessor.isManager && (
                                                <th style={{
                                                    padding: '12px 16px',
                                                    textAlign: 'center',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600,
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>Actions</th>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredCustomers.map((customer, index) => (
                                            <tr
                                                key={customer.customerId}
                                                style={{
                                                    backgroundColor: (selected && selectedAs.customerId === customer.customerId)
                                                        ? 'rgba(58, 123, 213, 0.08)'
                                                        : index % 2 === 0 ? 'white' : '#f8f9fa',
                                                    cursor: 'pointer',
                                                    transition: 'background-color 0.2s'
                                                }}
                                                onClick={() => { setSelected(true); setSelectedAs(customer) }}
                                                onMouseOver={(e) => {
                                                    if (!(selected && selectedAs.customerId === customer.customerId)) {
                                                        e.currentTarget.style.backgroundColor = 'rgba(58, 123, 213, 0.04)';
                                                    }
                                                }}
                                                onMouseOut={(e) => {
                                                    if (!(selected && selectedAs.customerId === customer.customerId)) {
                                                        e.currentTarget.style.backgroundColor = index % 2 === 0 ? 'white' : '#f8f9fa';
                                                    }
                                                }}
                                            >
                                                <td style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid #e9ecef',
                                                    fontSize: '0.875rem',
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>{customer.customerId}</td>
                                                <td style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid #e9ecef',
                                                    fontSize: '0.875rem',
                                                    color: '#212529',
                                                    fontWeight: 500,
                                                    whiteSpace: 'nowrap'
                                                }}>{customer.customerFirstName}</td>
                                                <td style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid #e9ecef',
                                                    fontSize: '0.875rem',
                                                    color: '#212529',
                                                    whiteSpace: 'nowrap'
                                                }}>{customer.customerLastName}</td>
                                                <td style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid #e9ecef',
                                                    fontSize: '0.875rem',
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>{customer.customerCity}</td>
                                                {!isXsScreen && (
                                                    <td style={{
                                                        padding: '12px 16px',
                                                        borderBottom: '1px solid #e9ecef',
                                                        fontSize: '0.875rem',
                                                        color: '#495057',
                                                        whiteSpace: 'nowrap'
                                                    }}>{customer.customerAddress}</td>
                                                )}
                                                {!isMdScreen && (
                                                    <td style={{
                                                        padding: '12px 16px',
                                                        borderBottom: '1px solid #e9ecef',
                                                        fontSize: '0.875rem',
                                                        color: '#495057',
                                                        whiteSpace: 'nowrap'
                                                    }}>{customer.customerPhone}</td>
                                                )}
                                                {!isXsScreen && (
                                                    <td style={{
                                                        padding: '12px 16px',
                                                        borderBottom: '1px solid #e9ecef',
                                                        fontSize: '0.875rem',
                                                        color: '#495057',
                                                        whiteSpace: 'nowrap'
                                                    }}>{customer.customerEmail}</td>
                                                )}
                                                {!thisAssessor.isManager && (
                                                    <td style={{
                                                        padding: '12px 16px',
                                                        borderBottom: '1px solid #e9ecef',
                                                        fontSize: '0.875rem',
                                                        color: '#495057',
                                                        textAlign: 'center',
                                                        whiteSpace: 'nowrap'
                                                    }}>
                                                        <Button
                                                            variant="contained"
                                                            size="small"
                                                            startIcon={<GridViewIcon />}
                                                            onClick={(e) => {
                                                                e.stopPropagation(); // Prevent row selection
                                                                dispatch(setFull(false));
                                                                dispatch(setCustomerChose(customer));
                                                                navigate('/home/fullApplications');
                                                            }}
                                                            sx={{
                                                                background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                                                                '&:hover': {
                                                                    background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                                                                },
                                                                fontSize: '0.75rem',
                                                                whiteSpace: 'nowrap',
                                                                minWidth: 'fit-content'
                                                            }}
                                                        >
                                                            {isXsScreen ? "Apps" : "Applications"}
                                                        </Button>
                                                    </td>
                                                )}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </Box>
                        )}
                    </Box>
                </Fade>
            </Container>

            {/* מידע על מספר התוצאות */}
            {filteredCustomers.length > 0 && (
                <Box sx={{
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1
                }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                        Showing {filteredCustomers.length} of {customersDetails.length} customers
                    </Typography>
                    {searchTerm && (
                        <Chip
                            label={`Search: "${searchTerm}"`}
                            size="small"
                            onDelete={() => {
                                setSearchTerm('');
                                setFilteredCustomers(customersDetails);
                            }}
                            sx={{ fontSize: '0.75rem' }}
                        />
                    )}
                </Box>
            )}

            {/* Scroll to top button */}
            <Button
                variant="contained"
                onClick={scrollToTop}
                sx={{
                    position: 'fixed',
                    bottom: { xs: 16, md: 20 },
                    right: { xs: 16, md: 20 },
                    minWidth: 0,
                    width: { xs: 40, md: 50 },
                    height: { xs: 40, md: 50 },
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
                <KeyboardArrowUpIcon fontSize={isXsScreen ? "small" : "medium"} />
            </Button>

            {/* כפתורי פעולה כאשר לקוח נבחר */}
            {selected && (
                <Box sx={{
                    position: 'fixed',
                    bottom: { xs: 16, md: 20 },
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    gap: { xs: 1, md: 2 },
                    zIndex: 999,
                    px: { xs: 2, md: 4 }
                }}>
                    <Paper sx={{
                        display: 'flex',
                        gap: { xs: 1, md: 2 },
                        p: { xs: 1, md: 2 },
                        borderRadius: 8,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                        bgcolor: 'rgba(255,255,255,0.95)',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <Button
                            variant="contained"
                            onClick={() => setSelected(false)}
                            sx={{
                                background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                                '&:hover': {
                                    background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                                },
                                fontSize: { xs: '0.75rem', md: '0.875rem' },
                                whiteSpace: 'nowrap'
                            }}
                        >
                            Deselect
                        </Button>

                        {!thisAssessor.isManager && (
                            <Button
                                variant="outlined"
                                startIcon={<GridViewIcon />}
                                onClick={() => {
                                    dispatch(setFull(false));
                                    dispatch(setCustomerChose(selectedAs));
                                    navigate('/home/fullApplications');
                                }}
                                sx={{
                                    borderColor: '#3a7bd5',
                                    color: '#3a7bd5',
                                    '&:hover': {
                                        borderColor: '#2b5876',
                                        backgroundColor: 'rgba(58, 123, 213, 0.1)'
                                    },
                                    whiteSpace: 'nowrap',
                                    fontSize: { xs: '0.75rem', md: '0.875rem' }
                                }}
                            >
                                View Applications
                            </Button>
                        )}

                        <Button
                            variant="outlined"
                            startIcon={<PersonIcon />}
                            onClick={() => {
                                // Navigate to customer details view
                                console.log("View details for customer:", selectedAs);
                            }}
                            sx={{
                                borderColor: '#3a7bd5',
                                color: '#3a7bd5',
                                '&:hover': {
                                    borderColor: '#2b5876',
                                    backgroundColor: 'rgba(58, 123, 213, 0.1)'
                                },
                                whiteSpace: 'nowrap',
                                fontSize: { xs: '0.75rem', md: '0.875rem' }
                            }}
                        >
                            Customer Details
                        </Button>
                    </Paper>
                </Box>
            )}

            {/* מידע מפורט על הלקוח הנבחר במסכים קטנים */}
            {selected && isXsScreen && (
                <Box sx={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '90%',
                    maxWidth: '350px',
                    zIndex: 998,
                    display: selectedAs ? 'block' : 'none'
                }}>
                    <Paper sx={{
                        p: 2,
                        borderRadius: 2,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                        bgcolor: 'rgba(255,255,255,0.98)',
                        backdropFilter: 'blur(10px)',
                        maxHeight: '80vh',
                        overflowY: 'auto'
                    }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                            <Typography variant="h6" fontWeight="600" color="#2c3e50">
                                Customer Details
                            </Typography>
                            <IconButton size="small" onClick={() => setSelected(false)}>
                                <ClearIcon fontSize="small" />
                            </IconButton>
                        </Box>

                        <Box sx={{ mb: 1 }}>
                            <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                                ID
                            </Typography>
                            <Typography variant="body1" fontWeight="500">
                                {selectedAs.customerId}
                            </Typography>
                        </Box>

                        <Box sx={{ mb: 1 }}>
                            <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                                Full Name
                            </Typography>
                            <Typography variant="body1" fontWeight="500">
                                {selectedAs.customerFirstName} {selectedAs.customerLastName}
                            </Typography>
                        </Box>

                        <Box sx={{ mb: 1 }}>
                            <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                                Address
                            </Typography>
                            <Typography variant="body1">
                                {selectedAs.customerAddress}, {selectedAs.customerCity}
                            </Typography>
                        </Box>

                        <Box sx={{ mb: 1 }}>
                            <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                                Phone
                            </Typography>
                            <Typography variant="body1">
                                {selectedAs.customerPhone}
                            </Typography>
                        </Box>

                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                                Email
                            </Typography>
                            <Typography variant="body1" sx={{ wordBreak: 'break-word' }}>
                                {selectedAs.customerEmail}
                            </Typography>
                        </Box>

                        {!thisAssessor.isManager && (
                            <Button
                                variant="contained"
                                fullWidth
                                startIcon={<GridViewIcon />}
                                onClick={() => {
                                    dispatch(setFull(false));
                                    dispatch(setCustomerChose(selectedAs));
                                    navigate('/home/fullApplications');
                                }}
                                sx={{
                                    background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                                    '&:hover': {
                                        background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                                    },
                                    mt: 1
                                }}
                            >
                                View Applications
                            </Button>
                        )}
                    </Paper>
                </Box>
            )}

            <Outlet></Outlet>
        </Box>
    );
};
