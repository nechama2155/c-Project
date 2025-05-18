// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { assessorThunk } from "../../redux/slices/get/assessorThunk";
// import { deleteAssessorThunk } from "../../redux/slices/delete/deleteAssessorThunk";
// import { Outlet, useNavigate, useParams } from "react-router-dom";
// import { editAssessor } from "../../redux/slices/assessorsSlice";
// import '../cssPages/Assessment.css';
// import { Button } from "@mui/material";
// import { yourAssessorsThunk } from "../../redux/slices/get by customer/yourAssessorsThunk";

// export const Assessors = () => {
//     const [selected, setSelected] = useState(false);
//     const [selectedAs, setSelectedAs] = useState({});
//     const dispatch = useDispatch();
//     const assessorsDetails = useSelector(state => state.assessor.assessors);
//     const type = useSelector(state => state.user.t);
//     const thisCustomer = useSelector(state => state.customer.thisCustomer);
//     const navigate = useNavigate();

//     // useEffect(()=>{
//     //     if(assessorsDetails.length === 0)
//     //         if(type==='a'){
//     //             debugger
//     //           dispatch(assessorThunk());}
//     //         else if(type==='c'){
//     //             debugger
//     //                 dispatch(yourAssessorsThunk(thisCustomer.customerId));}
//     //     },[])

//     return (
//         <div className={`assessment-container Assessors ${type !== 'a' ? 'customer-view' : ''}`}>
//             <div className="assessment-content">
//                 <div className="grid-table">
//                     <div className="grid-header">
//                         {type === 'a' && <div className="grid-cell">ID</div>}
//                         <div className="grid-cell">First Name</div>
//                         <div className="grid-cell">Last Name</div>
//                         <div className="grid-cell">City</div>
//                         <div className="grid-cell">Address</div>
//                         <div className="grid-cell">Phone</div>
//                         <div className="grid-cell">Email</div>
//                         {type === 'a' && (
//                             <>
//                                 <div className="grid-cell">Seniority</div>
//                                 <div className="grid-cell">Available</div>
//                                 <div className="grid-cell">Manager</div>
//                             </>
//                         )}
//                     </div>
                    
//                     {assessorsDetails && assessorsDetails.map(d => (
//                         <div 
//                             key={d.assessorId} 
//                             className={`grid-row ${(selected && selectedAs === d) ? "selected-row" : ""}`}
//                             onClick={() => {setSelected(true); setSelectedAs(d)}}
//                         >
//                             {type === 'a' && <div className="grid-cell">{d.assessorId}</div>}
//                             <div className="grid-cell">{d.assessorFirstName}</div>
//                             <div className="grid-cell">{d.assessorLastName}</div>
//                             <div className="grid-cell">{d.assessorCity}</div>
//                             <div className="grid-cell">{d.assessorAddress}</div>
//                             <div className="grid-cell">{d.assessorPhone}</div>
//                             <div className="grid-cell">{d.assessorEmail}</div>
//                             {type === 'a' && (
//                                 <>
//                                     <div className="grid-cell">{d.seniority}</div>
//                                     <div className="grid-cell">{d.available.toString()}</div>
//                                     <div className="grid-cell">{d.isManager.toString()}</div>
//                                 </>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             </div>

//             <div className="assessment-buttons-fixed">
//                 {type === 'a' && (
//                     <>
//                         <Button 
//                             variant="contained" 
//                             onClick={() => {navigate('addAssessor')}}
//                         >
//                             Add Assessor
//                         </Button>
                        
//                         <Button 
//                             variant="contained" 
//                             onClick={() => {
//                                 dispatch(editAssessor(selectedAs));
//                                 navigate('editAssessor')
//                             }}
//                             disabled={!selected}
//                         >
//                             Edit Assessor
//                         </Button>
                        
//                         <Button 
//                             variant="outlined" 
//                             onClick={() => {
//                                 dispatch(deleteAssessorThunk(selectedAs.assessorId));
//                                 setSelected(false)
//                             }}
//                             disabled={!selected}
//                         >
//                             Delete Assessor
//                         </Button>
//                     </>
//                 )}
//             </div>
            
//             <Outlet></Outlet>
//         </div>
//     );
// }


////////////////////////////////////////////////////////
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { assessorThunk } from "../../redux/slices/get/assessorThunk";
// import { deleteAssessorThunk } from "../../redux/slices/delete/deleteAssessorThunk";
// import { Outlet, useNavigate, useParams } from "react-router-dom";
// import { editAssessor } from "../../redux/slices/assessorsSlice";
// import '../cssPages/Assessment.css';
// import { Button } from "@mui/material";
// import { yourAssessorsThunk } from "../../redux/slices/get by customer/yourAssessorsThunk";

// export const Assessors = () => {
//     const [selected, setSelected] = useState(false);
//     const [selectedAs, setSelectedAs] = useState({});
//     const dispatch = useDispatch();
//     const assessorsDetails = useSelector(state => state.assessor.assessors);
//     const type = useSelector(state => state.user.t);
//     const thisCustomer = useSelector(state => state.customer.thisCustomer);
//     const navigate = useNavigate();

//     // useEffect(()=>{
//     //     if(assessorsDetails.length === 0)
//     //         if(type==='a'){
//     //             debugger
//     //           dispatch(assessorThunk());}
//     //         else if(type==='c'){
//     //             debugger
//     //                 dispatch(yourAssessorsThunk(thisCustomer.customerId));}
//     //     },[])

//     return (
//         <div className={`assessment-container Assessors ${type !== 'a' ? 'customer-view' : ''}`}>
//             <div className="assessment-content">
//                 <div className="grid-table">
//                     <div className="grid-header-container">
//                         <div className="grid-header">
//                             {type === 'a' && <div className="grid-cell">ID</div>}
//                             <div className="grid-cell">First Name</div>
//                             <div className="grid-cell">Last Name</div>
//                             <div className="grid-cell">City</div>
//                             <div className="grid-cell">Address</div>
//                             <div className="grid-cell">Phone</div>
//                             <div className="grid-cell">Email</div>
//                             {type === 'a' && (
//                                 <>
//                                     <div className="grid-cell">Seniority</div>
//                                     <div className="grid-cell">Available</div>
//                                     <div className="grid-cell">Manager</div>
//                                 </>
//                             )}
//                         </div>
//                     </div>
                    
//                     <div className="grid-body-container">
//                         {assessorsDetails && assessorsDetails.map(d => (
//                             <div 
//                                 key={d.assessorId} 
//                                 className={`grid-row ${(selected && selectedAs === d) ? "selected-row" : ""}`}
//                                 onClick={() => {setSelected(true); setSelectedAs(d)}}
//                             >
//                                 {type === 'a' && <div className="grid-cell">{d.assessorId}</div>}
//                                 <div className="grid-cell">{d.assessorFirstName}</div>
//                                 <div className="grid-cell">{d.assessorLastName}</div>
//                                 <div className="grid-cell">{d.assessorCity}</div>
//                                 <div className="grid-cell">{d.assessorAddress}</div>
//                                 <div className="grid-cell">{d.assessorPhone}</div>
//                                 <div className="grid-cell">{d.assessorEmail}</div>
//                                 {type === 'a' && (
//                                     <>
//                                         <div className="grid-cell">{d.seniority}</div>
//                                         <div className="grid-cell">{d.available.toString()}</div>
//                                         <div className="grid-cell">{d.isManager.toString()}</div>
//                                     </>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             <div className="assessment-buttons-fixed">
//                 {type === 'a' && (
//                     <>
//                         <Button 
//                             variant="contained" 
//                             onClick={() => {navigate('addAssessor')}}
//                         >
//                             Add Assessor
//                         </Button>
                        
//                         <Button 
//                             variant="contained" 
//                             onClick={() => {
//                                 dispatch(editAssessor(selectedAs));
//                                 navigate('editAssessor')
//                             }}
//                             disabled={!selected}
//                         >
//                             Edit Assessor
//                         </Button>
                        
//                         <Button 
//                             variant="outlined" 
//                             onClick={() => {
//                                 dispatch(deleteAssessorThunk(selectedAs.assessorId));
//                                 setSelected(false)
//                             }}
//                             disabled={!selected}
//                         >
//                             Delete Assessor
//                         </Button>
//                     </>
//                 )}
//             </div>
            
//             <Outlet></Outlet>
//         </div>
//     );
// }

// import { useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { assessorThunk } from "../../redux/slices/get/assessorThunk";
// import { deleteAssessorThunk } from "../../redux/slices/delete/deleteAssessorThunk";
// import { Outlet, useNavigate, useParams } from "react-router-dom";
// import { editAssessor } from "../../redux/slices/assessorsSlice";
// import '../cssPages/Assessment.css';
// import { Button } from "@mui/material";
// import { yourAssessorsThunk } from "../../redux/slices/get by customer/yourAssessorsThunk";
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
// import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
// import AddIcon from '@mui/icons-material/Add';
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import WorkIcon from '@mui/icons-material/Work';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import CancelIcon from '@mui/icons-material/Cancel';

// export const Assessors = () => {
//     const [selected, setSelected] = useState(false);
//     const [selectedAs, setSelectedAs] = useState({});
//     const dispatch = useDispatch();
//     const assessorsDetails = useSelector(state => state.assessor.assessors);
//     const type = useSelector(state => state.user.t);
//     const thisCustomer = useSelector(state => state.customer.thisCustomer);
//     const navigate = useNavigate();
//     const topRef = useRef(null);
//     const [sortBy, setSortBy] = useState('none');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredAssessors, setFilteredAssessors] = useState([]);

//     // useEffect commented out as in original code

//     useEffect(() => {
//         // Scroll to top when component mounts
//         window.scrollTo(0, 0);
        
//         setFilteredAssessors(assessorsDetails);
//     }, [assessorsDetails]);

//     const scrollToTop = () => {
//         topRef.current?.scrollIntoView({ behavior: 'smooth' });
//     };

//     const handleSort = (sortType) => {
//         setSortBy(sortType);
        
//         let sortedAssessors = [...assessorsDetails];
        
//         if (sortType === 'name') {
//             sortedAssessors.sort((a, b) => a.assessorFirstName.localeCompare(b.assessorFirstName));
//         } else if (sortType === 'id') {
//             sortedAssessors.sort((a, b) => a.assessorId - b.assessorId);
//         } else if (sortType === 'city') {
//             sortedAssessors.sort((a, b) => a.assessorCity.localeCompare(b.assessorCity));
//         } else if (sortType === 'seniority') {
//             sortedAssessors.sort((a, b) => b.seniority - a.seniority);
//         }
        
//         setFilteredAssessors(sortedAssessors);
//     };
    
//     const handleSearch = () => {
//         if (!searchTerm.trim()) {
//             setFilteredAssessors([...assessorsDetails]);
//             return;
//         }
        
//         const term = searchTerm.toLowerCase();
        
//         const results = assessorsDetails.filter(assessor => {
//             // Convert all fields to strings and check if they include the search term
//             return (
//                 String(assessor.assessorId).toLowerCase().includes(term) ||
//                 String(assessor.assessorFirstName).toLowerCase().includes(term) ||
//                 String(assessor.assessorLastName).toLowerCase().includes(term) ||
//                 String(assessor.assessorCity).toLowerCase().includes(term) ||
//                 String(assessor.assessorAddress).toLowerCase().includes(term) ||
//                 String(assessor.assessorPhone).toLowerCase().includes(term) ||
//                 String(assessor.assessorEmail).toLowerCase().includes(term) ||
//                 (type === 'a' && String(assessor.seniority).toLowerCase().includes(term)) ||
//                 (type === 'a' && String(assessor.available).toLowerCase().includes(term)) ||
//                 (type === 'a' && String(assessor.isManager).toLowerCase().includes(term))
//             );
//         });
        
//         setFilteredAssessors(results);
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
//                         <SupervisorAccountIcon sx={{ mr: 1, fontSize: '2rem', color: '#3a7bd5' }} />
//                         Assessor Management
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
//                         {type === 'a' 
//                             ? "View and manage all assessors in the system. Add new assessors, edit their information, or remove them as needed."
//                             : "View information about assessors assigned to your applications and properties."
//                         }
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
//                     {type === 'a' && (
//                         <Button
//                             variant={sortBy === 'seniority' ? 'contained' : 'outlined'}
//                             size="small"
//                             onClick={() => handleSort('seniority')}
//                             startIcon={<WorkIcon />}
//                             sx={{
//                                 background: sortBy === 'seniority' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
//                                 '&:hover': {
//                                     background: sortBy === 'seniority' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
//                                 }
//                             }}
//                         >
//                             Seniority
//                         </Button>
//                     )}
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
//                         placeholder="Search assessors..."
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
//                         {assessorsDetails.length === 0 ? (
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
//                                     No assessors found
//                                 </Typography>
//                                 <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1 }}>
//                                     {type === 'a' 
//                                         ? "Add assessors using the button below"
//                                         : "Assessors will appear here once they are assigned to your applications"
//                                     }
//                                 </Typography>
//                             </Paper>
//                         ) : (
//                             <div className={`assessment-container Assessors ${type !== 'a' ? 'customer-view' : ''}`}>
//                                 <div className="assessment-content">
//                                     <div className="grid-table">
//                                         <div className="grid-header-container">
//                                             <div className="grid-header">
//                                                 {type === 'a' && <div className="grid-cell">ID</div>}
//                                                 <div className="grid-cell">First Name</div>
//                                                 <div className="grid-cell">Last Name</div>
//                                                 <div className="grid-cell">City</div>
//                                                 <div className="grid-cell">Address</div>
//                                                 <div className="grid-cell">Phone</div>
//                                                 <div className="grid-cell">Email</div>
//                                                 {type === 'a' && (
//                                                     <>
//                                                         <div className="grid-cell">Seniority</div>
//                                                         <div className="grid-cell">Available</div>
//                                                         <div className="grid-cell">Manager</div>
//                                                     </>
//                                                 )}
//                                             </div>
//                                         </div>
                                        
//                                         <div className="grid-body-container">
//                                             {filteredAssessors.map(d => (
                                                
//                                                 <div 
//                                                     key={d.assessorId} 
//                                                     className={`grid-row ${(selected && selectedAs === d) ? "selected-row" : ""}`}
//                                                     onClick={() => {setSelected(true); setSelectedAs(d)}}
//                                                 >
//                                                     {type === 'a' && <div className="grid-cell">{d.assessorId}</div>}
//                                                     <div className="grid-cell">{d.assessorFirstName}</div>
//                                                     <div className="grid-cell">{d.assessorLastName}</div>
//                                                     <div className="grid-cell">{d.assessorCity}</div>
//                                                     <div className="grid-cell">{d.assessorAddress}</div>
//                                                     <div className="grid-cell">{d.assessorPhone}</div>
//                                                     <div className="grid-cell">{d.assessorEmail}</div>
//                                                     {type === 'a' && (
//                                                         <>
//                                                             <div className="grid-cell">{d.seniority}</div>
//                                                             <div className="grid-cell">
//                                                                 <Chip 
//                                                                     label={d.available ? "Available" : "Unavailable"}
//                                                                     size="small"
//                                                                     sx={{
//                                                                         bgcolor: d.available ? '#e8f5e9' : '#ffebee',
//                                                                         color: d.available ? '#2e7d32' : '#c62828',
//                                                                         fontWeight: 500
//                                                                     }}
//                                                                     icon={d.available ? <CheckCircleIcon fontSize="small" /> : <CancelIcon fontSize="small" />}
//                                                                 />
//                                                             </div>
//                                                             <div className="grid-cell">
//                                                                 <Chip 
//                                                                     label={d.isManager ? "Manager" : "Assessor"}
//                                                                     size="small"
//                                                                     sx={{
//                                                                         bgcolor: d.isManager ? '#e3f2fd' : '#f5f5f5',
//                                                                         color: d.isManager ? '#1565c0' : '#616161',
//                                                                         fontWeight: 500
//                                                                     }}
//                                                                 />
//                                                             </div>
//                                                         </>
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
            
//             <div className="assessment-buttons-fixed">
//                 {type === 'a' && (
//                     <>
//                         <Button 
//                             variant="contained" 
//                             onClick={() => {navigate('addAssessor')}}
//                             startIcon={<AddIcon />}
//                             sx={{
//                                 background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                                 '&:hover': {
//                                     background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
//                                 },
//                                 mr: 2
//                             }}
//                         >
//                             Add Assessor
//                         </Button>
                        
//                         <Button 
//                             variant="contained" 
//                             onClick={() => {
//                                 dispatch(editAssessor(selectedAs));
//                                 navigate('editAssessor')
//                             }}
//                             disabled={!selected}
//                             startIcon={<EditIcon />}
//                             sx={{
//                                 background: selected ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'rgba(0, 0, 0, 0.12)',
//                                 color: selected ? 'white' : 'rgba(0, 0, 0, 0.26)',
//                                 '&:hover': {
//                                     background: selected ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(0, 0, 0, 0.12)'
//                                 },
//                                 mr: 2
//                             }}
//                         >
//                             Edit Assessor
//                         </Button>
                        
//                         <Button 
//                             variant="outlined" 
//                             onClick={() => {
//                                 dispatch(deleteAssessorThunk(selectedAs.assessorId));
//                                 setSelected(false)
//                             }}
//                             disabled={!selected}
//                             startIcon={<DeleteIcon />}
//                             sx={{
//                                 borderColor: selected ? '#f44336' : 'rgba(0, 0, 0, 0.12)',
//                                 color: selected ? '#f44336' : 'rgba(0, 0, 0, 0.26)',
//                                 '&:hover': {
//                                     borderColor: selected ? '#d32f2f' : 'rgba(0, 0, 0, 0.12)',
//                                     backgroundColor: selected ? 'rgba(244, 67, 54, 0.04)' : 'transparent'
//                                 }
//                             }}
//                         >
//                             Delete Assessor
//                         </Button>
//                     </>
//                 )}
//             </div>
            
//             <Outlet></Outlet>
//         </Box>
//     );
// }


import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assessorThunk } from "../redux/slices/get/assessorThunk";
import { deleteAssessorThunk } from "../redux/slices/delete/deleteAssessorThunk";
import { Outlet, useNavigate } from "react-router-dom";
import { editAssessor } from "../redux/slices/assessorsSlice";
import './cssPages/Assessment.css';
import { yourAssessorsThunk } from "../redux/slices/get by customer/yourAssessorsThunk";
import {
    Box,
    Typography,
    Button,
    Paper,
    Fade,
    TextField,
    InputAdornment,
    IconButton,
    Container,
    Chip
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import DateRangeIcon from '@mui/icons-material/DateRange';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PersonIcon from '@mui/icons-material/Person';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SortIcon from '@mui/icons-material/Sort';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkIcon from '@mui/icons-material/Work';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

export const Assessors = () => {
    const [selected, setSelected] = useState(false);
    const [selectedAs, setSelectedAs] = useState({});
    const dispatch = useDispatch();
    const assessorsDetails = useSelector(state => state.assessor.assessors);
    const type = useSelector(state => state.user.t);
    const thisCustomer = useSelector(state => state.customer.thisCustomer);
    const navigate = useNavigate();
    const topRef = useRef(null);
    const [sortBy, setSortBy] = useState('none');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredAssessors, setFilteredAssessors] = useState([]);

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
        
        // Load assessors if needed
        if(assessorsDetails.length === 0) {
            if(type === 'a') {
                dispatch(assessorThunk());
            } else if(type === 'c') {
                dispatch(yourAssessorsThunk(thisCustomer.customerId));
            }
        }
        
        setFilteredAssessors(assessorsDetails);
    }, [assessorsDetails, dispatch, type, thisCustomer]);

    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSort = (sortType) => {
        setSortBy(sortType);
        
        let sortedAssessors = [...assessorsDetails];
        
        if (sortType === 'name') {
            sortedAssessors.sort((a, b) => a.assessorFirstName.localeCompare(b.assessorFirstName));
        } else if (sortType === 'id') {
            sortedAssessors.sort((a, b) => a.assessorId - b.assessorId);
        } else if (sortType === 'city') {
            sortedAssessors.sort((a, b) => a.assessorCity.localeCompare(b.assessorCity));
        } else if (sortType === 'seniority') {
            sortedAssessors.sort((a, b) => b.seniority - a.seniority);
        }
        
        setFilteredAssessors(sortedAssessors);
    };
    
    const handleSearch = () => {
        if (!searchTerm.trim()) {
            setFilteredAssessors([...assessorsDetails]);
            return;
        }
        
        const term = searchTerm.toLowerCase();
        
        const results = assessorsDetails.filter(assessor => {
            return (
                String(assessor.assessorId || '').toLowerCase().includes(term) ||
                String(assessor.assessorFirstName || '').toLowerCase().includes(term) ||
                String(assessor.assessorLastName || '').toLowerCase().includes(term) ||
                String(assessor.assessorCity || '').toLowerCase().includes(term) ||
                String(assessor.assessorAddress || '').toLowerCase().includes(term) ||
                String(assessor.assessorPhone || '').toLowerCase().includes(term) ||
                String(assessor.assessorEmail || '').toLowerCase().includes(term) ||
                (type === 'a' && String(assessor.seniority || '').toLowerCase().includes(term)) ||
                (type === 'a' && String(assessor.available || '').toLowerCase().includes(term)) ||
                (type === 'a' && String(assessor.isManager || '').toLowerCase().includes(term))
            );
        });
        
        setFilteredAssessors(results);
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
                        sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.125rem' }, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <SupervisorAccountIcon sx={{ mr: 1, fontSize: '2rem', color: '#3a7bd5' }} />
                        Assessor Management
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
                        {type === 'a' 
                            ? "View and manage all assessors in the system. Add new assessors, edit their information, or remove them as needed."
                            : "View information about assessors assigned to your applications and properties."
                        }
                    </Typography>
                </Box>
            </Fade>
            
            <Box sx={{ mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'space-between', alignItems: { xs: 'stretch', md: 'center' } }}>
                {/* Sort buttons */}
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                    <Typography variant="subtitle1" sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                        <SortIcon sx={{ mr: 0.5, fontSize: '1rem' }} /> Sort by:
                    </Typography>
                    <Button
                        variant={sortBy === 'name' ? 'contained' : 'outlined'}
                        size="small"
                        onClick={() => handleSort('name')}
                        startIcon={<PersonIcon />}
                        sx={{
                            background: sortBy === 'name' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'name' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            }
                        }}
                    >
                        Name
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
                        variant={sortBy === 'city' ? 'contained' : 'outlined'}
                        size="small"
                        onClick={() => handleSort('city')}
                        startIcon={<LocationCityIcon />}
                        sx={{
                            background: sortBy === 'city' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'city' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            }
                        }}
                    >
                        City
                    </Button>
                    {type === 'a' && (
                        <Button
                            variant={sortBy === 'seniority' ? 'contained' : 'outlined'}
                            size="small"
                            onClick={() => handleSort('seniority')}
                            startIcon={<WorkIcon />}
                            sx={{
                                background: sortBy === 'seniority' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                                '&:hover': {
                                    background: sortBy === 'seniority' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                                }
                            }}
                        >
                            Seniority
                        </Button>
                    )}
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
                        placeholder="Search assessors..."
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
            </Box>
            
            <Container maxWidth="lg">
                <Fade in={true} timeout={1200}>
                    <Box>
                        {assessorsDetails.length === 0 ? (
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
                                    No assessors found
                                </Typography>
                                <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1 }}>
                                    {type === 'a' 
                                        ? "Add assessors using the button below"
                                        : "Assessors will appear here once they are assigned to your applications"
                                    }
                                </Typography>
                            </Paper>
                        ) : (
                            <div className={`assessment-container Assessors ${type !== 'a' ? 'customer-view' : ''}`}>
                                <div className="assessment-content">
                                    <div className="grid-table">
                                        <div className="grid-header-container">
                                            <div className="grid-header">
                                                {type === 'a' && <div className="grid-cell">ID</div>}
                                                <div className="grid-cell">First Name</div>
                                                <div className="grid-cell">Last Name</div>
                                                <div className="grid-cell">City</div>
                                                <div className="grid-cell">Address</div>
                                                <div className="grid-cell">Phone</div>
                                                <div className="grid-cell">Email</div>
                                                {type === 'a' && (
                                                    <>
                                                        <div className="grid-cell">Seniority</div>
                                                        <div className="grid-cell">Available</div>
                                                        <div className="grid-cell">Manager</div>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <div className="grid-body-container">
                                            {filteredAssessors.map(d => (
                                                <div 
                                                    key={d.assessorId} 
                                                    className={`grid-row ${(selected && selectedAs === d) ? "selected-row" : ""}`}
                                                    onClick={() => {setSelected(true); setSelectedAs(d)}}
                                                >
                                                    {type === 'a' && <div className="grid-cell">{d.assessorId}</div>}
                                                    <div className="grid-cell">{d.assessorFirstName}</div>
                                                    <div className="grid-cell">{d.assessorLastName}</div>
                                                    <div className="grid-cell">{d.assessorCity}</div>
                                                    <div className="grid-cell">{d.assessorAddress}</div>
                                                    <div className="grid-cell">{d.assessorPhone}</div>
                                                    <div className="grid-cell">{d.assessorEmail}</div>
                                                    {type === 'a' && (
                                                        <>
                                                            <div className="grid-cell">{d.seniority}</div>
                                                            <div className="grid-cell">
                                                                <Chip 
                                                                    label={d.available ? "Available" : "Unavailable"}
                                                                    size="small"
                                                                    sx={{
                                                                        bgcolor: d.available ? '#e8f5e9' : '#ffebee',
                                                                        color: d.available ? '#2e7d32' : '#c62828',
                                                                        fontWeight: 500
                                                                    }}
                                                                />
                                                            </div>
                                                            <div className="grid-cell">
                                                                <Chip 
                                                                    label={d.isManager ? "Manager" : "Assessor"}
                                                                    size="small"
                                                                    sx={{
                                                                        bgcolor: d.isManager ? '#e3f2fd' : '#f5f5f5',
                                                                        color: d.isManager ? '#1565c0' : '#616161',
                                                                        fontWeight: 500
                                                                    }}
                                                                />
                                                            </div>
                                                        </>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
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
            
            {selected && (
                <div className="assessment-buttons-fixed">
                    {type === 'a' && (
                        <>
                            <Button 
                                variant="contained"
                                onClick={() => setSelected(false)}
                                sx={{
                                    background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                                    '&:hover': {
                                        background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                                    },
                                    mr: 2
                                }}
                            >
                                Deselect
                            </Button>
                            
                            <Button 
                                variant="contained" 
                                onClick={() => {
                                    dispatch(editAssessor(selectedAs));
                                    navigate('editAssessor')
                                }}
                                startIcon={<EditIcon />}
                                sx={{
                                    background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                                    '&:hover': {
                                        background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                                    },
                                    mr: 2
                                }}
                            >
                                Edit Assessor
                            </Button>
                            
                            <Button 
                                variant="outlined" 
                                onClick={() => {
                                    dispatch(deleteAssessorThunk(selectedAs.assessorId));
                                    setSelected(false)
                                }}
                                startIcon={<DeleteIcon />}
                                sx={{
                                    borderColor: '#f44336',
                                    color: '#f44336',
                                    '&:hover': {
                                        borderColor: '#d32f2f',
                                        backgroundColor: 'rgba(244, 67, 54, 0.04)'
                                    }
                                }}
                            >
                                Delete Assessor
                            </Button>
                        </>
                    )}
                </div>
            )}
            
            {type === 'a' && !selected && (
                <div className="assessment-buttons-fixed">
                    <Button 
                        variant="contained" 
                        onClick={() => {navigate('addAssessor')}}
                        startIcon={<AddIcon />}
                        sx={{
                            background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                            '&:hover': {
                                background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                            }
                        }}
                    >
                        Add Assessor
                    </Button>
                </div>
            )}
            
            <Outlet></Outlet>
        </Box>
    );
}
