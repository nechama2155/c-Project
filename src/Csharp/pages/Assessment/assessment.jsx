// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { assessmentThunk } from "../../redux/slices/get/assessmentThunk"
// import { Button } from "@mui/material";
// import { Outlet, useNavigate } from "react-router-dom";
// import { editAssessment, setIsMy } from "../../redux/slices/assessmentSlice";
// import { myAssessmentsThunk } from "../../redux/slices/get by assessor/myAssessmentsThunk";
// import { yourAssessmentsThunk } from "../../redux/slices/get by customer/yourAssessmentsThunk";
// import { applicationThunk } from "../../redux/slices/get/applicatiionThunk";

// export const Assessment = () => {

//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const assessmentDetails = useSelector(state => state.assessment.assessments);
//     const appliationsDetails = useSelector(state => state.application.applications);
//     const successed = useSelector(state => state.assessment.sucsses);
//     const [selected, setSelected] = useState(false);
//     const [selectedAs, setSelectedAs] = useState({});
//     const [applicationToEdit, setApplicationToEdit] = useState({});
//     const type = useSelector(state => state.user.t);
//     const thisCustomer = useSelector(state => state.customer.thisCustomer);
//     const thisAssessor = useSelector(state => state.assessor.thisAssessor);
//     useEffect(() => {

//     //     if (assessmentDetails.length === 0) {
//     //         if (type === "a") {
//     //             if (thisAssessor.isManager)
//     //                 dispatch(assessmentThunk());
//     //             // else
//     //                 // dispatch(myAssessmentsThunk(thisAssessor.assessorId));
//     //         }
//     //         else if (type === "c") {
//     //             dispatch(yourAssessmentsThunk(thisCustomer.customerId));
//     //         }
//     //     }

//     }, [])

//       const setStatus = () => { 
//         appliationsDetails.map(a => {
//             if (a.applicationId === selectedAs.applicationId) {
//                 a.applicationStatus = 5;
//                 setApplicationToEdit(a);
//             }
//         })
//         dispatch(applicationThunk(applicationToEdit));


//       }

//     return <div>
//         {assessmentDetails.length > 0 && <table>
//             <thead>
//                 <tr>
//                     <th>AssessmentId</th>
//                     <th>Block</th>
//                     <th>Plot</th>
//                     <th>SubPlot</th>
//                     <th>ConstructionYear</th>
//                     <th>AcquisionPrice</th>
//                     <th>AssessmentGoal</th>
//                     <th>LegalState</th>
//                     <th>BuildingPermit</th>
//                     <th>IrregularitiesBuilding</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {assessmentDetails && assessmentDetails.map(d => {

//                     return <tr key={d.assessmentId} onClick={() => { setSelected(true); setSelectedAs(d) }} className={(selected && selectedAs === d) ? "s" : "r"}>
//                         <td>{d.assessmentId}</td>
//                         <td>{d.block}</td>
//                         <td>{d.plot}</td>
//                         <td>{d.subPlot}</td>
//                         <td>{d.constructionYear}</td>
//                         <td>{d.acquisionPrice}</td>
//                         <td>{d.assessmentGoal}</td>
//                         <td>{d.legalState}</td>
//                         <td>{d.buildingPermit}</td>
//                         <td>{d.irregularitiesBuilding}</td>
//                     </tr>
//                 })}

//             </tbody>
//         </table>}
//         {selected &&  type === 'a' && !thisAssessor.isManager && <>
//             <Button variant="text" onClick={() => { dispatch(editAssessment(selectedAs)); navigate('editAssessment') }}>edit assessment</Button>
//             <Button variant="outlined" onClick={()=>setStatus()}>setStatus</Button>

//         </>
//         }
//         <Outlet />
//         {/* <button onClick={()=>(dispatch(assessmentThunk()))}>o</button> */}
//     </div>
// }
////////////////////////////////////


// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState, useRef } from "react";
// import { assessmentThunk } from "../../redux/slices/get/assessmentThunk";
// import { myAssessmentsThunk } from "../../redux/slices/get by assessor/myAssessmentsThunk";
// import { yourAssessmentsThunk } from "../../redux/slices/get by customer/yourAssessmentsThunk";
// import { applicationThunk } from "../../redux/slices/get/applicatiionThunk";
// import { editAssessment, setIsMy } from "../../redux/slices/assessmentSlice";
// import { Outlet, useNavigate } from "react-router-dom";

// // Material UI Imports
// import {
//   Container,
//   Paper,
//   Typography,
//   Grid,
//   Button,
//   Box,
//   Avatar,
//   Chip,
//   Divider,
//   TextField,
//   InputAdornment,
//   IconButton,
//   Collapse,
//   Fade,
//   Dialog,
//   DialogTitle,
//   DialogContent,
//   DialogContentText,
//   DialogActions,
//   Tabs,
//   Tab
// } from "@mui/material";

// // Icons
// import SearchIcon from '@mui/icons-material/Search';
// import ClearIcon from '@mui/icons-material/Clear';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import SortIcon from '@mui/icons-material/Sort';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import AssessmentIcon from '@mui/icons-material/Assessment';
// import EditIcon from '@mui/icons-material/Edit';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import DateRangeIcon from '@mui/icons-material/DateRange';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import GavelIcon from '@mui/icons-material/Gavel';
// import DescriptionIcon from '@mui/icons-material/Description';

// export const Assessment = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const topRef = useRef(null);

//   // Redux state
//   const assessmentDetails = useSelector(state => state.assessment.assessments);
//   const applicationsDetails = useSelector(state => state.application.applications);
//   const successed = useSelector(state => state.assessment.sucsses);
//   const type = useSelector(state => state.user.t);
//   const thisCustomer = useSelector(state => state.customer.thisCustomer);
//   const thisAssessor = useSelector(state => state.assessor.thisAssessor);

//   // Local state
//   const [selected, setSelected] = useState(false);
//   const [selectedAs, setSelectedAs] = useState({});
//   const [applicationToEdit, setApplicationToEdit] = useState({});
//   const [expandedAssessments, setExpandedAssessments] = useState({});
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchType, setSearchType] = useState('assessmentId');
//   const [sortBy, setSortBy] = useState('none');
//   const [filteredAssessments, setFilteredAssessments] = useState([]);
//   const [confirmDialog, setConfirmDialog] = useState({
//     open: false,
//     action: '',
//     assessmentId: null
//   });
//   const [activeTab, setActiveTab] = useState(0);

//   // Fetch data on component mount
//   useEffect(() => {
//     if (assessmentDetails.length === 0) {
//       if (type === "a") {
//         if (thisAssessor.isManager)
//           dispatch(assessmentThunk());
//         // else
//         //   dispatch(myAssessmentsThunk(thisAssessor.assessorId));
//       }
//       else if (type === "c") {
//         dispatch(yourAssessmentsThunk(thisCustomer.customerId));
//       }
//     }

//     setFilteredAssessments(assessmentDetails);
//   }, [dispatch, assessmentDetails.length, type, thisAssessor, thisCustomer]);

//   // Format date function
//   const formatDate = (dateString) => {
//     if (!dateString) return "N/A";
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     });
//   };

//   // Toggle assessment expansion
//   const toggleAssessmentExpansion = (assessmentId) => {
//     setExpandedAssessments(prev => ({
//       ...prev,
//       [assessmentId]: !prev[assessmentId]
//     }));
//   };

//   // Scroll to top function
//   const scrollToTop = () => {
//     topRef.current?.scrollIntoView({ behavior: 'smooth' });
//   };

//   // Handle tab change
//   const handleTabChange = (event, newValue) => {
//     setActiveTab(newValue);
//   };

//   // Handle search
//   const handleSearch = () => {
//     if (!searchTerm.trim()) {
//       setFilteredAssessments(assessmentDetails);
//       return;
//     }

//     const filtered = assessmentDetails.filter(assessment => {
//       if (searchType === 'assessmentId') {
//         return assessment.assessmentId.toString().includes(searchTerm);
//       } else if (searchType === 'block') {
//         return assessment.block.toString().includes(searchTerm);
//       } else if (searchType === 'plot') {
//         return assessment.plot.toString().includes(searchTerm);
//       }
//       return true;
//     });

//     setFilteredAssessments(filtered);
//   };

//   // Handle sort
//   const handleSort = (sortType) => {
//     setSortBy(sortType);

//     if (sortType === 'none') {
//       setFilteredAssessments([...assessmentDetails]);
//       return;
//     }

//     const sorted = [...filteredAssessments].sort((a, b) => {
//       if (sortType === 'price') {
//         return a.acquisionPrice - b.acquisionPrice;
//       } else if (sortType === 'year') {
//         return a.constructionYear - b.constructionYear;
//       }
//       return 0;
//     });

//     setFilteredAssessments(sorted);
//   };

//   // Handle edit assessment
//   const handleEditAssessment = (assessment) => {
//     setSelected(true);
//     setSelectedAs(assessment);
//     dispatch(editAssessment(assessment));
//     navigate('editAssessment');
//   };

//   // Handle set status
//   const handleSetStatus = (assessment) => {
//     setSelected(true);
//     setSelectedAs(assessment);
//     setConfirmDialog({
//       open: true,
//       action: 'setStatus',
//       assessmentId: assessment.assessmentId
//     });
//   };

//   // Handle confirm action
//   const handleConfirmAction = () => {
//     if (confirmDialog.action === 'setStatus') {
//       const updatedApplication = applicationsDetails.find(
//         a => a.applicationId === selectedAs.applicationId
//       );

//       if (updatedApplication) {
//         updatedApplication.applicationStatus = 5;
//         setApplicationToEdit(updatedApplication);
//         dispatch(applicationThunk(updatedApplication));
//       }
//     }

//     setConfirmDialog({ ...confirmDialog, open: false });
//   };

//   // Render assessments
//   const renderAssessments = () => {
//     if (!filteredAssessments || filteredAssessments.length === 0) {
//       return (
//         <Paper
//           elevation={2}
//           sx={{
//             p: 4,
//             borderRadius: 2,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//             justifyContent: 'center',
//             minHeight: 200,
//             background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//             textAlign: 'center'
//           }}
//         >
//           <Typography variant="h6" color="#2c3e50">
//             No assessments found
//           </Typography>
//           <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1 }}>
//             Assessments will appear here when available
//           </Typography>
//         </Paper>
//       );
//     }

//     return filteredAssessments.map((assessment, index) => {
//       const assessmentId = assessment.assessmentId;
//       const isExpanded = expandedAssessments[assessmentId];
//       const isSelected = selected && selectedAs.assessmentId === assessmentId;

//       // Determine background color based on legal state
//       let statusColor = '#3a7bd5'; // Default blue
//       let statusBackground = 'rgba(58, 123, 213, 0.1)';

//       if (assessment.legalState === 'Approved') {
//         statusColor = '#27ae60'; // Green
//         statusBackground = 'rgba(39, 174, 96, 0.1)';
//       } else if (assessment.legalState === 'Pending') {
//         statusColor = '#f39c12'; // Orange
//         statusBackground = 'rgba(243, 156, 18, 0.1)';
//       } else if (assessment.legalState === 'Rejected') {
//         statusColor = '#e74c3c'; // Red
//         statusBackground = 'rgba(231, 76, 60, 0.1)';
//       }

//       return (
//         <Fade in={true} timeout={1000 + (index * 200)} key={assessmentId}>
//           <Paper
//             elevation={2}
//             sx={{
//               mb: 3,
//               borderRadius: 2,
//               overflow: 'hidden',
//               border: isSelected ? '2px solid #3a7bd5' : '1px solid #e0e0e0',
//               transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//               '&:hover': {
//                 transform: 'translateY(-3px)',
//                 boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)'
//               },
//               background: isSelected 
//                 ? 'linear-gradient(135deg, #e0f7fa 0%, #b3e5fc 100%)'
//                 : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
//             }}
//             onClick={() => { setSelected(true); setSelectedAs(assessment); }}
//           >
//             <Box sx={{ p: 2 }}>
//               <Grid container spacing={2} alignItems="center">
//                 <Grid item xs={12} sm={9} md={10}>
//                   <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                     <Avatar
//                       sx={{
//                         bgcolor: statusBackground,
//                         color: statusColor,
//                         mr: 2,
//                         width: 40,
//                         height: 40
//                       }}
//                     >
//                       <AssessmentIcon />
//                     </Avatar>
//                     <Box sx={{
//                       display: 'flex',
//                       alignItems: { xs: 'flex-start', md: 'center' },
//                       flexDirection: { xs: 'column', md: 'row' },
//                       flexWrap: 'wrap',
//                       width: '100%',
//                       gap: { xs: 1, md: 0 }
//                     }}>
//                       <Typography
//                         variant="subtitle1"
//                         fontWeight="600"
//                         color="#2c3e50"
//                         sx={{ mr: 2 }}
//                       >
//                         Assessment #{assessmentId}
//                       </Typography>
//                       <Box sx={{
//                         display: 'flex',
//                         alignItems: 'center',
//                         mr: { xs: 0, md: 2 },
//                         mb: { xs: 0.5, md: 0 },
//                         '& .MuiSvgIcon-root': {
//                           fontSize: 16,
//                           mr: 0.5,
//                           color: '#2c3e50',
//                           opacity: 0.8
//                         },
//                         '& .MuiTypography-root': {
//                           color: '#2c3e50',
//                           opacity: 0.9
//                         }
//                       }}>
//                         <HomeWorkIcon />
//                         <Typography variant="body2">
//                           Block: {assessment.block}, Plot: {assessment.plot}
//                         </Typography>
//                       </Box>
//                       <Chip
//                         label={assessment.legalState || "Unknown"}
//                         size="small"
//                         sx={{
//                           ml: { xs: 0, md: 2 },
//                           mt: { xs: 0.5, md: 0 },
//                           bgcolor: statusBackground,
//                           color: statusColor,
//                           fontWeight: 600,
//                           height: 24,
//                           border: `1px solid ${statusColor}`
//                         }}
//                       />
//                     </Box>
//                   </Box>
//                 </Grid>
//                 <Grid item xs={12} sm={3} md={2} sx={{
//                   textAlign: { xs: 'left', sm: 'right' },
//                   mt: { xs: 1, sm: 0 }
//                 }}>
//                   <Button
//                     variant="contained"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       toggleAssessmentExpansion(assessmentId);
//                     }}
//                     endIcon={isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                     sx={{
//                       borderRadius: '8px',
//                       textTransform: 'none',
//                       background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                       color: '#ffffff',
//                       '&:hover': {
//                         background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)',
//                       },
//                       width: { xs: 'auto', sm: '100%' },
//                       maxWidth: { sm: '120px' }
//                     }}
//                   >
//                     {isExpanded ? 'Hide' : 'View'}
//                   </Button>
//                 </Grid>
//               </Grid>
//               <Collapse in={isExpanded} timeout="auto" unmountOnExit>
//                 <Divider sx={{ my: 2 }} />
//                 <Box sx={{ mt: 3 }}>
//                   <Grid container spacing={2}>
//                     <Grid item xs={12} sm={6} md={4}>
//                       <Paper
//                         elevation={0}
//                         sx={{
//                           p: 2,
//                           borderRadius: 2,
//                           background: 'rgba(255, 255, 255, 0.7)',
//                           border: '1px solid rgba(0, 0, 0, 0.1)',
//                           height: '100%'
//                         }}
//                       >
//                         <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
//                           <HomeWorkIcon sx={{ fontSize: 18, mr: 1, verticalAlign:
//  'text-bottom' }} />
// Property Details
// </Typography>
// <Divider sx={{ mb: 1.5 }} />
// <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
// <Box>
//   <Typography variant="body2" color="#7f8c8d">Block:</Typography>
//   <Typography variant="body1" fontWeight="500">{assessment.block}</Typography>
// </Box>
// <Box>
//   <Typography variant="body2" color="#7f8c8d">Plot:</Typography>
//   <Typography variant="body1" fontWeight="500">{assessment.plot}</Typography>
// </Box>
// <Box>
//   <Typography variant="body2" color="#7f8c8d">Sub-Plot:</Typography>
//   <Typography variant="body1" fontWeight="500">{assessment.subPlot}</Typography>
// </Box>
// </Box>
// </Paper>
// </Grid>
// <Grid item xs={12} sm={6} md={4}>
// <Paper
// elevation={0}
// sx={{
// p: 2,
// borderRadius: 2,
// background: 'rgba(255, 255, 255, 0.7)',
// border: '1px solid rgba(0, 0, 0, 0.1)',
// height: '100%'
// }}
// >
// <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
// <DateRangeIcon sx={{ fontSize: 18, mr: 1, verticalAlign: 'text-bottom' }} />
// Construction & Value
// </Typography>
// <Divider sx={{ mb: 1.5 }} />
// <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
// <Box>
//   <Typography variant="body2" color="#7f8c8d">Construction Year:</Typography>
//   <Typography variant="body1" fontWeight="500">{assessment.constructionYear}</Typography>
// </Box>
// <Box>
//   <Typography variant="body2" color="#7f8c8d">Acquisition Price:</Typography>
//   <Typography variant="body1" fontWeight="500">
//     ${assessment.acquisionPrice?.toLocaleString() || 'N/A'}
//   </Typography>
// </Box>
// <Box>
//   <Typography variant="body2" color="#7f8c8d">Assessment Goal:</Typography>
//   <Typography variant="body1" fontWeight="500">{assessment.assessmentGoal}</Typography>
// </Box>
// </Box>
// </Paper>
// </Grid>
// <Grid item xs={12} sm={6} md={4}>
// <Paper
// elevation={0}
// sx={{
// p: 2,
// borderRadius: 2,
// background: 'rgba(255, 255, 255, 0.7)',
// border: '1px solid rgba(0, 0, 0, 0.1)',
// height: '100%'
// }}
// >
// <Typography variant="subtitle2" color="#3a7bd5" gutterBottom>
// <GavelIcon sx={{ fontSize: 18, mr: 1, verticalAlign: 'text-bottom' }} />
// Legal Information
// </Typography>
// <Divider sx={{ mb: 1.5 }} />
// <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
// <Box>
//   <Typography variant="body2" color="#7f8c8d">Legal State:</Typography>
//   <Typography variant="body1" fontWeight="500">{assessment.legalState}</Typography>
// </Box>
// <Box>
//   <Typography variant="body2" color="#7f8c8d">Building Permit:</Typography>
//   <Typography variant="body1" fontWeight="500">
//     {assessment.buildingPermit ? "Yes" : "No"}
//   </Typography>
// </Box>
// <Box>
//   <Typography variant="body2" color="#7f8c8d">Irregularities Building:</Typography>
//   <Typography variant="body1" fontWeight="500">
//     {assessment.irregularitiesBuilding ? "Yes" : "No"}
//   </Typography>
// </Box>
// </Box>
// </Paper>
// </Grid>
// </Grid>
// </Box>
// {type === 'a' && !thisAssessor.isManager && (
// <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
// <Button
// variant="contained"
// startIcon={<EditIcon />}
// onClick={(e) => {
// e.stopPropagation();
// handleEditAssessment(assessment);
// }}
// sx={{
// borderRadius: '8px',
// textTransform: 'none',
// background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
// '&:hover': {
// background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)',
// }
// }}
// >
// Edit Assessment
// </Button>
// <Button
// variant="contained"
// startIcon={<CheckCircleOutlineIcon />}
// onClick={(e) => {
// e.stopPropagation();
// handleSetStatus(assessment);
// }}
// sx={{
// borderRadius: '8px',
// textTransform: 'none',
// background: 'linear-gradient(90deg, #27ae60 0%, #2ecc71 100%)',
// '&:hover': {
// background: 'linear-gradient(90deg, #219653 0%, #27ae60 100%)',
// }
// }}
// >
// Set Status
// </Button>
// </Box>
// )}
// </Collapse>
// </Box>
// </Paper>
// </Fade>
// );
// });
// };

// return (
// <Container maxWidth="xl" sx={{ py: 4 }} ref={topRef}>
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
// placeholder="Search assessments..."
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
// setFilteredAssessments(assessmentDetails);
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
// onClick={() => setSearchType('assessmentId')}
// color={searchType === 'assessmentId' ? 'primary' : 'inherit'}
// sx={{
// borderRadius: 2,
// textTransform: 'none',
// borderColor: searchType === 'assessmentId' ? '#3a7bd5' : 'rgba(0, 0, 0, 0.23)',
// color: searchType === 'assessmentId' ? '#3a7bd5' : 'inherit',
// bgcolor: 'rgba(255, 255, 255, 0.7)',
// '&:hover': {
// bgcolor: 'rgba(255, 255, 255, 0.9)',
// borderColor: '#3a7bd5'
// }
// }}
// >
// Assessment ID
// </Button>
// <Button
// variant="outlined"
// startIcon={<HomeWorkIcon />}
// onClick={() => setSearchType('block')}
// color={searchType === 'block' ? 'primary' : 'inherit'}
// sx={{
// borderRadius: 2,
// textTransform: 'none',
// borderColor: searchType === 'block' ? '#3a7bd5' : 'rgba(0, 0, 0, 0.23)',
// color: searchType === 'block' ? '#3a7bd5' : 'inherit',
// bgcolor: 'rgba(255, 255, 255, 0.7)',
// '&:hover': {
// bgcolor: 'rgba(255, 255, 255, 0.9)',
// borderColor: '#3a7bd5'
// }
// }}
// >
// Block
// </Button>
// <Button
// variant="outlined"
// startIcon={<AttachMoneyIcon />}
// onClick={() => handleSort(sortBy === 'price' ? 'none' : 'price')}
// color={sortBy === 'price' ? 'primary' : 'inherit'}
// sx={{
// borderRadius: 2,
// textTransform: 'none',
// borderColor: sortBy === 'price' ? '#3a7bd5' : 'rgba(0, 0, 0, 0.23)',
// color: sortBy === 'price' ? '#3a7bd5' : 'inherit',
// bgcolor: 'rgba(255, 255, 255, 0.7)',
// '&:hover': {
// bgcolor: 'rgba(255, 255, 255, 0.9)',
// borderColor: '#3a7bd5'
// }
// }}
// >
// Sort by Price
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
// setFilteredAssessments(assessmentDetails);
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

// {/* Assessments List */}
// <Box sx={{ mb: 4 }}>
// <Typography variant="h5" gutterBottom fontWeight="600" color="#2c3e50">
// Assessments
// {filteredAssessments.length > 0 && (
// <Chip
// label={`${filteredAssessments.length} found`}
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

// {renderAssessments()}

// {filteredAssessments.length > 5 && (
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

// {/* Confirmation Dialog for Set Status */}
// <Dialog
// open={confirmDialog.open}
// onClose={() => setConfirmDialog({ ...confirmDialog, open: false })}
// aria-labelledby="alert-dialog-title"
// aria-describedby="alert-dialog-description"
// >
// <DialogTitle id="alert-dialog-title">
// Set Application Status
// </DialogTitle>
// <DialogContent>
// <DialogContentText id="alert-dialog-description">
// Are you sure you want to update the status of this application? This action cannot be undone.
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
// color="success"
// >
// Confirm
// </Button>
// </DialogActions>
// </Dialog>

// {/* Outlet for nested routes */}
// <Outlet />
// </Container>
// );
// };

// export default Assessment;

///////////////////////////////////////////////////////////////
// import React, { useEffect, useState, useRef } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Outlet, useNavigate } from "react-router-dom";
// import { 
//   Box, 
//   Typography, 
//   Button, 
//   Paper, 
//   Table, 
//   TableBody, 
//   TableCell, 
//   TableContainer, 
//   TableHead, 
//   TableRow,
//   Chip,
//   Container,
//   Fade,
//   useTheme,
//   useMediaQuery,
//   IconButton,
//   TextField,
//   InputAdornment,
//   Divider,
//   Tooltip,
//   Grid,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogContentText,
//   DialogTitle,
//   Alert,
//   Collapse,
//   AppBar,
//   Toolbar
// } from "@mui/material";
// import { assessmentThunk } from "../../redux/slices/get/assessmentThunk";
// import { editAssessment } from "../../redux/slices/assessmentSlice";
// import { myAssessmentsThunk } from "../../redux/slices/get by assessor/myAssessmentsThunk";
// import { yourAssessmentsThunk } from "../../redux/slices/get by customer/yourAssessmentsThunk";
// import { applicationThunk } from "../../redux/slices/get/applicatiionThunk";

// // Icons
// import EditIcon from '@mui/icons-material/Edit';
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import SearchIcon from '@mui/icons-material/Search';
// import ClearIcon from '@mui/icons-material/Clear';
// import RefreshIcon from '@mui/icons-material/Refresh';
// import SortIcon from '@mui/icons-material/Sort';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import FilterListIcon from '@mui/icons-material/FilterList';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import CheckIcon from '@mui/icons-material/Check';
// import CloseIcon from '@mui/icons-material/Close';

// export const Assessment = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));
//   const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
//   const tableContainerRef = useRef(null);

//   const assessmentDetails = useSelector(state => state.assessment.assessments);
//   const appliationsDetails = useSelector(state => state.application.applications);
//   const successed = useSelector(state => state.assessment.sucsses);
//   const type = useSelector(state => state.user.t);
//   const thisCustomer = useSelector(state => state.customer.thisCustomer);
//   const thisAssessor = useSelector(state => state.assessor.thisAssessor);

//   const [selected, setSelected] = useState(false);
//   const [selectedAs, setSelectedAs] = useState({});
//   const [applicationToEdit, setApplicationToEdit] = useState({});
//   const [searchTerm, setSearchTerm] = useState('');
//   const [filteredAssessments, setFilteredAssessments] = useState([]);
//   const [sortBy, setSortBy] = useState('none');
//   const [sortDirection, setSortDirection] = useState('asc');
//   const [confirmDialog, setConfirmDialog] = useState(false);
//   const [successAlert, setSuccessAlert] = useState(false);

//   // Colors from LastChats component
//   const colors = {
//     primary: '#3a7bd5',
//     primaryLight: '#EBF5FB',
//     primaryDark: '#2b5876',
//     secondary: '#f5f7fa',
//     secondaryDark: '#c3cfe2',
//     text: '#2c3e50',
//     textLight: '#7f8c8d',
//     success: '#1E8449',
//     successLight: '#D5F5E3',
//     error: '#C0392B',
//     errorLight: '#FADBD8',
//     warning: '#F39C12',
//     warningLight: '#FEF9E7',
//     background: '#f8f9fa',
//     border: '#e0e0e0'
//   };

//   useEffect(() => {
//     if (assessmentDetails.length === 0) {
//       if (type === "a") {
//         if (thisAssessor.isManager)
//           dispatch(assessmentThunk());
//         // else
//         //   dispatch(myAssessmentsThunk(thisAssessor.assessorId));
//       }
//       else if (type === "c") {
//         dispatch(yourAssessmentsThunk(thisCustomer.customerId));
//       }
//     }

//     setFilteredAssessments(assessmentDetails);
//   }, [dispatch, assessmentDetails, type, thisAssessor, thisCustomer]);

//   const setStatus = () => {
//     setConfirmDialog(false);
//     const updatedApplications = appliationsDetails.map(a => {
//       if (a.applicationId === selectedAs.applicationId) {
//         return { ...a, applicationStatus: 5 };
//       }
//       return a;
//     });

//     const applicationToUpdate = updatedApplications.find(
//       a => a.applicationId === selectedAs.applicationId
//     );

//     if (applicationToUpdate) {
//       setApplicationToEdit(applicationToUpdate);
//       dispatch(applicationThunk(applicationToUpdate));
//       setSuccessAlert(true);
//       setTimeout(() => setSuccessAlert(false), 5000);
//     }
//   };

//   const handleSearch = () => {
//     if (!searchTerm.trim()) {
//       setFilteredAssessments([...assessmentDetails]);
//       return;
//     }

//     const term = searchTerm.toLowerCase();
//     const results = assessmentDetails.filter(assessment => {
//       return (
//         assessment.assessmentId?.toString().includes(term) ||
//         assessment.block?.toString().includes(term) ||
//         assessment.plot?.toString().includes(term) ||
//         assessment.subPlot?.toString().includes(term) ||
//         assessment.constructionYear?.toString().includes(term) ||
//         (assessment.assessmentGoal?.toLowerCase() || '').includes(term) ||
//         (assessment.legalState?.toLowerCase() || '').includes(term)
//       );
//     });

//     setFilteredAssessments(results);
//   };

//   const handleSort = (field) => {
//     let direction = 'asc';
//     if (sortBy === field && sortDirection === 'asc') {
//       direction = 'desc';
//     }

//     setSortBy(field);
//     setSortDirection(direction);

//     const sortedAssessments = [...filteredAssessments].sort((a, b) => {
//       if (field === 'none') return 0;

//       let valueA = a[field];
//       let valueB = b[field];

//       if (typeof valueA === 'string') valueA = valueA.toLowerCase();
//       if (typeof valueB === 'string') valueB = valueB.toLowerCase();

//       if (valueA < valueB) return direction === 'asc' ? -1 : 1;
//       if (valueA > valueB) return direction === 'asc' ? 1 : -1;
//       return 0;
//     });

//     setFilteredAssessments(sortedAssessments);
//   };

//   const getLegalStateColor = (state) => {
//     if (!state) return { bg: '#e0e0e0', text: '#757575' };

//     const legalState = state.toLowerCase();
//     if (legalState.includes('legal') || legalState.includes('approved')) {
//       return { bg: colors.successLight, text: colors.success };
//     } else if (legalState.includes('pending')) {
//       return { bg: colors.warningLight, text: colors.warning };
//     } else {
//       return { bg: colors.errorLight, text: colors.error };
//     }
//   };

//   return (
//     <Box sx={{ 
//       display: 'flex', 
//       flexDirection: 'column', 
//       height: '100vh',
//       bgcolor: colors.background
//     }}>
//       <Container maxWidth="xl" sx={{ py: 4, flexGrow: 1, overflow: 'auto', pb: 10 }}>
//         <Fade in={true} timeout={800}>
//           <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
//             <Typography
//               variant="h4"
//               component="h1"
//               fontWeight="700"
//               color={colors.text}
//               sx={{ 
//                 mb: 2, 
//                 fontSize: { xs: '1.75rem', md: '2.125rem' },
//                 background: `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)`,
//                 WebkitBackgroundClip: 'text',
//                 WebkitTextFillColor: 'transparent',
//               }}
//             >
//               <HomeWorkIcon sx={{ mr: 1, verticalAlign: 'middle', fontSize: 'inherit' }} />
//               Property Assessments
//             </Typography>
//             <Typography
//               variant="subtitle1"
//               color={colors.textLight}
//               sx={{
//                 maxWidth: 800,
//                 mx: 'auto',
//                 mb: 4,
//                 lineHeight: 1.8,
//                 px: { xs: 2, md: 0 }
//               }}
//             >
//               View and manage property assessments. Select an assessment to enable editing options.
//             </Typography>
//           </Box>
//         </Fade>

//         {/* Success Alert */}
//         <Collapse in={successAlert}>
//           <Alert 
//             severity="success"
//             sx={{ mb: 3, borderRadius: '8px' }}
//             action={
//               <IconButton
//                 aria-label="close"
//                 color="inherit"
//                 size="small"
//                 onClick={() => setSuccessAlert(false)}
//               >
//                 <CloseIcon fontSize="inherit" />
//               </IconButton>
//             }
//           >
//             Status has been successfully updated!
//           </Alert>
//         </Collapse>

//         {/* Search and Filter Section */}
//         <Paper
//           elevation={2}
//           sx={{
//             p: 2,
//             mb: 4,
//             borderRadius: '12px',
//             background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
//           }}
//         >
//           <Grid container spacing={2} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <TextField
//                 fullWidth
//                 variant="outlined"
//                 placeholder="Search assessments..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <SearchIcon color="action" />
//                     </InputAdornment>
//                   ),
//                   endAdornment: searchTerm && (
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="clear search"
//                         onClick={() => {
//                           setSearchTerm('');
//                           setFilteredAssessments(assessmentDetails);
//                         }}
//                         edge="end"
//                       >
//                         <ClearIcon fontSize="small" />
//                       </IconButton>
//                     </InputAdornment>
//                   ),
//                   sx: {
//                     borderRadius: '8px',
//                     bgcolor: 'rgba(255, 255, 255, 0.7)',
//                     '&:hover': {
//                       bgcolor: 'rgba(255, 255, 255, 0.9)',
//                     }
//                   }
//                 }}
//                 sx={{ mb: { xs: 2, md: 0 } }}
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'center', md: 'flex-end' } }}>
//                 <Button
//                   variant="outlined"
//                   startIcon={<FilterListIcon />}
//                   onClick={() => handleSort('assessmentId')}
//                   color={sortBy === 'assessmentId' ? 'primary' : 'inherit'}
//                   sx={{
//                     borderRadius: '8px',
//                     textTransform: 'none',
//                     borderColor: sortBy === 'assessmentId' ? colors.primary : 'rgba(0, 0, 0, 0.23)',
//                     color: sortBy === 'assessmentId' ? colors.primary : 'inherit',
//                     bgcolor: 'rgba(255, 255, 255, 0.7)',
//                     '&:hover': {
//                       bgcolor: 'rgba(255, 255, 255, 0.9)',
//                       borderColor: colors.primary
//                     }
//                   }}
//                 >
//                   ID {sortBy === 'assessmentId' && (sortDirection === 'asc' ? '↑' : '↓')}
//                 </Button>
//                 <Button
//                   variant="outlined"
//                   startIcon={<AttachMoneyIcon />}
//                   onClick={() => handleSort('acquisionPrice')}
//                   color={sortBy === 'acquisionPrice' ? 'primary' : 'inherit'}
//                   sx={{
//                     borderRadius: '8px',
//                     textTransform: 'none',
//                     borderColor: sortBy === 'acquisionPrice' ? colors.primary : 'rgba(0, 0, 0, 0.23)',
//                     color: sortBy === 'acquisionPrice' ? colors.primary : 'inherit',
//                     bgcolor: 'rgba(255, 255, 255, 0.7)',
//                     '&:hover': {
//                       bgcolor: 'rgba(255, 255, 255, 0.9)',
//                       borderColor: colors.primary
//                     }
//                   }}
//                 >
//                   Price {sortBy === 'acquisionPrice' && (sortDirection === 'asc' ? '↑' : '↓')}
//                 </Button>
//                 <Button
//                   variant="contained"
//                   startIcon={<SearchIcon />}
//                   onClick={handleSearch}
//                   sx={{
//                     borderRadius: '8px',
//                     textTransform: 'none',
//                     background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
//                     color: '#ffffff',
//                     '&:hover': {
//                       background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)',
//                     }
//                   }}
//                 >
//                   Search
//                 </Button>
//                 <IconButton
//                   onClick={() => {
//                     setSearchTerm('');
//                     setSortBy('none');
//                     setFilteredAssessments(assessmentDetails);
//                   }}
//                   sx={{
//                     borderRadius: '8px',
//                     bgcolor: 'rgba(255, 255, 255, 0.7)',
//                     '&:hover': {
//                       bgcolor: 'rgba(255, 255, 255, 0.9)',
//                     }
//                   }}
//                 >
//                   <RefreshIcon />
//                 </IconButton>
//               </Box>
//             </Grid>
//           </Grid>
//         </Paper>

//         {/* Assessments Table */}
//         <Paper
//           elevation={3}
//           sx={{
//             borderRadius: '12px',
//             overflow: 'hidden',
//             mb: 4,
//             boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
//           }}
//           ref={tableContainerRef}
//         >
//           {filteredAssessments.length > 0 ? (
//             <TableContainer sx={{ maxHeight: 'calc(100vh - 350px)', overflowX: 'auto' }}>
//               <Table stickyHeader>
//                 <TableHead>
//                   <TableRow>
//                     <TableCell 
//                       sx={{ 
//                         fontWeight: 'bold', 
//                         backgroundColor: colors.secondary,
//                         color: colors.text
//                       }}
//                     >
//                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                         AssessmentId
//                         <IconButton 
//                           size="small" 
//                           onClick={() => handleSort('assessmentId')}
//                           sx={{ ml: 0.5, p: 0 }}
//                         >
//                           {sortBy === 'assessmentId' && (
//                             sortDirection === 'asc' ? 
//                               <KeyboardArrowUpIcon fontSize="small" /> : 
//                               <SortIcon fontSize="small" />
//                           )}
//                         </IconButton>
//                       </Box>
//                     </TableCell>
//                     <TableCell 
//                       sx={{ 
//                         fontWeight: 'bold', 
//                         backgroundColor: colors.secondary,
//                         color: colors.text
//                       }}
//                     >
//                       Block
//                     </TableCell>
//                     <TableCell 
//                       sx={{ 
//                         fontWeight: 'bold', 
//                         backgroundColor: colors.secondary,
//                         color: colors.text
//                       }}
//                     >
//                       Plot
//                     </TableCell>
//                     <TableCell 
//                       sx={{ 
//                         fontWeight: 'bold', 
//                         backgroundColor: colors.secondary,
//                         color: colors.text,
//                         display: { xs: 'none', sm: 'table-cell' }
//                       }}
//                     >
//                       SubPlot
//                     </TableCell>
//                     <TableCell 
//                       sx={{ 
//                         fontWeight: 'bold', 
//                         backgroundColor: colors.secondary,
//                         color: colors.text,
//                         display: { xs: 'none', sm: 'table-cell' }
//                       }}
//                     >
//                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                         Construction Year
//                         <IconButton 
//                           size="small" 
//                           onClick={() => handleSort('constructionYear')}
//                           sx={{ ml: 0.5, p: 0 }}
//                         >
//                           {sortBy === 'constructionYear' && (
//                             sortDirection === 'asc' ? 
//                               <KeyboardArrowUpIcon fontSize="small" /> : 
//                               <SortIcon fontSize="small" />
//                           )}
//                         </IconButton>
//                       </Box>
//                     </TableCell>
//                     <TableCell 
//                       sx={{ 
//                         fontWeight: 'bold', 
//                         backgroundColor: colors.secondary,
//                         color: colors.text,
//                         display: { xs: 'none', md: 'table-cell' }
//                       }}
//                     >
//                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                         Acquisition Price
//                         <IconButton 
//                           size="small" 
//                           onClick={() => handleSort('acquisionPrice')}
//                           sx={{ ml: 0.5, p: 0 }}
//                         >
//                           {sortBy === 'acquisionPrice' && (
//                             sortDirection === 'asc' ? 
//                               <KeyboardArrowUpIcon fontSize="small" /> : 
//                               <SortIcon fontSize="small" />
//                           )}
//                         </IconButton>
//                       </Box>
//                     </TableCell>
//                     <TableCell 
//                       sx={{ 
//                         fontWeight: 'bold', 
//                         backgroundColor: colors.secondary,
//                         color: colors.text,
//                         display: { xs: 'none', md: 'table-cell' }
//                       }}
//                     >
//                       Assessment Goal
//                     </TableCell>
//                     <TableCell 
//                       sx={{ 
//                         fontWeight: 'bold', 
//                         backgroundColor: colors.secondary,
//                         color: colors.text
//                       }}
//                     >
//                       <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                         Legal State
//                         <IconButton 
//                           size="small" 
//                           onClick={() => handleSort('legalState')}
//                           sx={{ ml: 0.5, p: 0 }}
//                         >
//                           {sortBy === 'legalState' && (
//                             sortDirection === 'asc' ? 
//                               <KeyboardArrowUpIcon fontSize="small" /> : 
//                               <SortIcon fontSize="small" />
//                           )}
//                         </IconButton>
//                       </Box>
//                     </TableCell>
//                     <TableCell 
//                       sx={{ 
//                         fontWeight: 'bold', 
//                         backgroundColor: colors.secondary,
//                         color: colors.text,
//                         display: { xs: 'none', md: 'table-cell' }
//                       }}
//                     >
//                       Building Permit
//                     </TableCell>
//                     <TableCell 
//                       sx={{ 
//                         fontWeight: 'bold', 
//                         backgroundColor: colors.secondary,
//                         color: colors.text,
//                         display: { xs: 'none', md: 'table-cell' }
//                       }}
//                     >
//                       Irregularities
//                     </TableCell>
//                   </TableRow>
//                 </TableHead>
//                 <TableBody>
//                   {filteredAssessments.map((assessment) => (
//                     <TableRow
//                       key={assessment.assessmentId}
//                       onClick={() => { setSelected(true); setSelectedAs(assessment) }}
//                       sx={{
//                         cursor: 'pointer',
//                         backgroundColor: selected && selectedAs.assessmentId === assessment.assessmentId 
//                           ? colors.primaryLight 
//                           : 'inherit',
//                         '&:hover': {
//                           backgroundColor: selected && selectedAs.assessmentId === assessment.assessmentId 
//                             ? colors.primaryLight 
//                             : 'rgba(58, 123, 213, 0.05)',
//                         }
//                       }}
//                     >
//                       <TableCell>
//                         <Chip 
//                           label={assessment.assessmentId} 
//                           size="small" 
//                           sx={{ 
//                             fontWeight: 'bold',
//                             bgcolor: colors.primaryLight,
//                             color: colors.primary,
//                             border: `1px solid ${colors.primary}`
//                           }} 
//                         />
//                       </TableCell>
//                       <TableCell>{assessment.block}</TableCell>
//                       <TableCell>{assessment.plot}</TableCell>
//                       <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>
//                         {assessment.subPlot}
//                       </TableCell>
//                       <TableCell sx={{ display: { xs: 'none', sm: 'table-cell' } }}>
//                         {assessment.constructionYear}
//                       </TableCell>
//                       <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
//                         {typeof assessment.acquisionPrice === 'number' 
//                           ? assessment.acquisionPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 })
//                           : assessment.acquisionPrice
//                         }
//                       </TableCell>
//                       <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
//                         <Tooltip title={assessment.assessmentGoal || ''}>
//                           <Typography
//                             variant="body2"
//                             sx={{
//                               maxWidth: 200,
//                               overflow: 'hidden',
//                               textOverflow: 'ellipsis',
//                               whiteSpace: 'nowrap'
//                             }}
//                           >
//                             {assessment.assessmentGoal}
//                           </Typography>
//                         </Tooltip>
//                       </TableCell>
//                       <TableCell>
//                         <Chip 
//                           label={assessment.legalState || 'Unknown'} 
//                           size="small" 
//                           sx={{ 
//                             bgcolor: getLegalStateColor(assessment.legalState).bg,
//                             color: getLegalStateColor(assessment.legalState).text,
//                             fontWeight: 500,
//                             border: `1px solid ${getLegalStateColor(assessment.legalState).text}`
//                           }} 
//                         />
//                       </TableCell>
//                       <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
//                         {assessment.buildingPermit ? (
//                           <Chip 
//                             label="Yes" 
//                             size="small" 
//                             sx={{ 
//                               bgcolor: colors.successLight,
//                               color: colors.success,
//                               border: `1px solid ${colors.success}`
//                             }} 
//                             icon={<CheckIcon style={{ fontSize: '0.8rem' }} />}
//                           />
//                         ) : (
//                           <Chip 
//                             label="No" 
//                             size="small" 
//                             sx={{ 
//                               bgcolor: colors.errorLight,
//                               color: colors.error,
//                               border: `1px solid ${colors.error}`
//                             }} 
//                             icon={<CloseIcon style={{ fontSize: '0.8rem' }} />}
//                           />
//                         )}
//                       </TableCell>
//                       <TableCell sx={{ display: { xs: 'none', md: 'table-cell' } }}>
//                         {assessment.irregularitiesBuilding ? (
//                           <Chip 
//                             label="Yes" 
//                             size="small" 
//                             sx={{ 
//                               bgcolor: colors.errorLight,
//                               color: colors.error,
//                               border: `1px solid ${colors.error}`
//                             }} 
//                             icon={<CloseIcon style={{ fontSize: '0.8rem' }} />}
//                           />
//                         ) : (
//                           <Chip 
//                             label="No" 
//                             size="small" 
//                             sx={{ 
//                               bgcolor: colors.successLight,
//                               color: colors.success,
//                               border: `1px solid ${colors.success}`
//                             }} 
//                             icon={<CheckIcon style={{ fontSize: '0.8rem' }} />}
//                           />
//                         )}
//                       </TableCell>
//                     </TableRow>
//                   ))}
//                 </TableBody>
//               </Table>
//             </TableContainer>
//           ) : (
//             <Box sx={{ p: 4, textAlign: 'center' }}>
//               <Typography variant="h6" color={colors.textLight}>
//                 No assessments found
//               </Typography>
//               <Typography variant="body2" color={colors.textLight} sx={{ mt: 1 }}>
//                 {searchTerm ? 'Try adjusting your search criteria' : 'Assessments will appear here when available'}
//               </Typography>
//             </Box>
//           )}
//         </Paper>

//         {/* Mobile View - Selected Assessment Details */}
//         {selected && isSmall && (
//           <Fade in={true} timeout={500}>
//             <Paper
//               elevation={3}
//               sx={{
//                 p: 3,
//                 borderRadius: '12px',
//                 mb: 4,
//                 background: 'white',
//                 boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
//               }}
//             >
//               <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
//                 <Typography variant="h6" color={colors.text} fontWeight="600">
//                   Selected Assessment
//                 </Typography>
//                 <Chip 
//                   label={selectedAs.legalState || 'Unknown'} 
//                   size="small" 
//                   sx={{ 
//                     bgcolor: getLegalStateColor(selectedAs.legalState).bg,
//                     color: getLegalStateColor(selectedAs.legalState).text,
//                     fontWeight: 500,
//                     border: `1px solid ${getLegalStateColor(selectedAs.legalState).text}`
//                   }} 
//                 />
//               </Box>

//               <Divider sx={{ my: 2 }} />

//               <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                   <Typography variant="caption" color={colors.textLight}>Assessment ID</Typography>
//                   <Typography variant="body1" fontWeight="500" color={colors.text}>
//                     {selectedAs.assessmentId}
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Typography variant="caption" color={colors.textLight}>Construction Year</Typography>
//                   <Typography variant="body1" fontWeight="500" color={colors.text}>
//                     {selectedAs.constructionYear || 'N/A'}
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Typography variant="caption" color={colors.textLight}>Block</Typography>
//                   <Typography variant="body1" fontWeight="500" color={colors.text}>
//                     {selectedAs.block || 'N/A'}
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Typography variant="caption" color={colors.textLight}>Plot</Typography>
//                   <Typography variant="body1" fontWeight="500" color={colors.text}>
//                     {selectedAs.plot || 'N/A'}
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Typography variant="caption" color={colors.textLight}>SubPlot</Typography>
//                   <Typography variant="body1" fontWeight="500" color={colors.text}>
//                     {selectedAs.subPlot || 'N/A'}
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Typography variant="caption" color={colors.textLight}>Acquisition Price</Typography>
//                   <Typography variant="body1" fontWeight="500" color={colors.text}>
//                     {typeof selectedAs.acquisionPrice === 'number' 
//                       ? selectedAs.acquisionPrice.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
//                       : selectedAs.acquisionPrice || 'N/A'
//                     }
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={12}>
//                   <Typography variant="caption" color={colors.textLight}>Assessment Goal</Typography>
//                   <Typography variant="body1" fontWeight="500" color={colors.text}>
//                     {selectedAs.assessmentGoal || 'N/A'}
//                   </Typography>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Typography variant="caption" color={colors.textLight}>Building Permit</Typography>
//                   <Box sx={{ mt: 0.5 }}>
//                     <Chip 
//                       label={selectedAs.buildingPermit ? "Yes" : "No"} 
//                       size="small" 
//                       sx={{ 
//                         bgcolor: selectedAs.buildingPermit ? colors.successLight : colors.errorLight,
//                         color: selectedAs.buildingPermit ? colors.success : colors.error,
//                         fontWeight: 500,
//                         border: `1px solid ${selectedAs.buildingPermit ? colors.success : colors.error}`
//                       }} 
//                       icon={selectedAs.buildingPermit 
//                         ? <CheckIcon style={{ fontSize: '0.8rem' }} />
//                         : <CloseIcon style={{ fontSize: '0.8rem' }} />
//                       }
//                     />
//                   </Box>
//                 </Grid>
//                 <Grid item xs={6}>
//                   <Typography variant="caption" color={colors.textLight}>Irregularities</Typography>
//                   <Box sx={{ mt: 0.5 }}>
//                     <Chip 
//                       label={selectedAs.irregularitiesBuilding ? "Yes" : "No"} 
//                       size="small" 
//                       sx={{ 
//                         bgcolor: selectedAs.irregularitiesBuilding ? colors.errorLight : colors.successLight,
//                         color: selectedAs.irregularitiesBuilding ? colors.error : colors.success,
//                         fontWeight: 500,
//                         border: `1px solid ${selectedAs.irregularitiesBuilding ? colors.error : colors.success}`
//                       }} 
//                       icon={selectedAs.irregularitiesBuilding
//                         ? <CloseIcon style={{ fontSize: '0.8rem' }} />
//                         : <CheckIcon style={{ fontSize: '0.8rem' }} />
//                       }
//                     />
//                   </Box>
//                 </Grid>
//               </Grid>
//             </Paper>
//           </Fade>
//         )}

//         {/* Outlet for nested routes */}
//         <Outlet />
//       </Container>

//       {/* Fixed Action Bar at Bottom */}
//       <AppBar 
//         position="fixed" 
//         color="default" 
//         sx={{ 
//           top: 'auto', 
//           bottom: 0,
//           boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
//           background: 'white'
//         }}
//       >
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//           <Box sx={{ display: 'flex', alignItems: 'center' }}>
//             {selected && (
//               <Typography variant="body1" fontWeight="500" color={colors.text}>
//                 Selected: Assessment #{selectedAs.assessmentId}
//               </Typography>
//             )}
//           </Box>
//           <Box sx={{ display: 'flex', gap: 2 }}>
//             {type === 'a' && !thisAssessor?.isManager && (
//               <>
//                 <Button
//                   variant="contained"
//                   startIcon={<EditIcon />}
//                   disabled={!selected}
//                   onClick={() => { 
//                     dispatch(editAssessment(selectedAs)); 
//                     navigate('editAssessment');
//                   }}
//                   sx={{
//                     background: selected ? `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)` : 'rgba(0, 0, 0, 0.12)',
//                     borderRadius: '8px',
//                     textTransform: 'none',
//                     px: 3,
//                     py: 1,
//                     '&:hover': {
//                       background: selected ? `linear-gradient(90deg, ${colors.primary} 0%, ${colors.primaryDark} 90%)` : 'rgba(0, 0, 0, 0.12)'
//                     },
//                     '&.Mui-disabled': {
//                       color: 'rgba(255, 255, 255, 0.7)',
//                     }
//                   }}
//                 >
//                   Edit Assessment
//                 </Button>

//                 <Button
//                   variant="outlined"
//                   startIcon={<CheckCircleIcon />}
//                   disabled={!selected}
//                   onClick={() => setConfirmDialog(true)}
//                   sx={{
//                     borderColor: selected ? colors.success : 'rgba(0, 0, 0, 0.12)',
//                     color: selected ? colors.success : 'rgba(0, 0, 0, 0.26)',
//                     borderRadius: '8px',
//                     textTransform: 'none',
//                     px: 3,
//                     py: 1,
//                     '&:hover': {
//                       borderColor: selected ? colors.success : 'rgba(0, 0, 0, 0.12)',
//                       background: selected ? 'rgba(30, 132, 73, 0.1)' : 'transparent'
//                     },
//                     '&.Mui-disabled': {
//                       borderColor: 'rgba(0, 0, 0, 0.12)',
//                     }
//                   }}
//                 >
//                   Set Status
//                 </Button>
//               </>
//             )}
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Confirmation Dialog */}
//       <Dialog
//         open={confirmDialog}
//         onClose={() => setConfirmDialog(false)}
//         aria-labelledby="alert-dialog-title"
//         aria-describedby="alert-dialog-description"
//         PaperProps={{
//           sx: {
//             borderRadius: '12px',
//             boxShadow: '0 8px 30px rgba(0, 0, 0, 0.12)'
//           }
//         }}
//       >
//         <DialogTitle id="alert-dialog-title" sx={{ pb: 1 }}>
//           <Typography variant="h6" fontWeight="600" color={colors.text}>
//             Set Application Status
//           </Typography>
//         </DialogTitle>
//         <DialogContent>
//           <DialogContentText id="alert-dialog-description" color={colors.text}>
//             Are you sure you want to update the status of this application? This action cannot be undone.
//           </DialogContentText>
//         </DialogContent>
//         <DialogActions sx={{ px: 3, pb: 3 }}>
//           <Button
//             onClick={() => setConfirmDialog(false)}
//             sx={{ 
//               color: colors.textLight,
//               borderRadius: '8px',
//               textTransform: 'none'
//             }}
//           >
//             Cancel
//           </Button>
//           <Button
//             onClick={setStatus}
//             variant="contained"
//             sx={{ 
//               background: `linear-gradient(90deg, ${colors.success} 0%, #186A3B 100%)`,
//               color: '#ffffff',
//               borderRadius: '8px',
//               textTransform: 'none',
//               '&:hover': {
//                 background: `linear-gradient(90deg, ${colors.success} 0%, #186A3B 90%)`
//               }
//             }}
//           >
//             Confirm
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </Box>
//   );
// };

// export default Assessment;

///////////////////////////////////////////////
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState } from "react";
// import { assessmentThunk } from "../../redux/slices/get/assessmentThunk";
// import { Button } from "@mui/material";
// import { Outlet, useNavigate } from "react-router-dom";
// import { editAssessment } from "../../redux/slices/assessmentSlice";
// import { myAssessmentsThunk } from "../../redux/slices/get by assessor/myAssessmentsThunk";
// import { yourAssessmentsThunk } from "../../redux/slices/get by customer/yourAssessmentsThunk";
// import { applicationThunk } from "../../redux/slices/get/applicatiionThunk";
// import "../cssPages/Assessment.css";

// export const Assessment = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const assessmentDetails = useSelector(state => state.assessment.assessments);
//     const appliationsDetails = useSelector(state => state.application.applications);
//     const [selected, setSelected] = useState(false);
//     const [selectedAs, setSelectedAs] = useState({});
//     const [applicationToEdit, setApplicationToEdit] = useState({});
//     const type = useSelector(state => state.user.t);
//     const thisCustomer = useSelector(state => state.customer.thisCustomer);
//     const thisAssessor = useSelector(state => state.assessor.thisAssessor);

//     useEffect(() => {
//         // Commented out as per original code
//     }, []);

//     const setStatus = () => {
//         appliationsDetails.map(a => {
//             if (a.applicationId === selectedAs.applicationId) {
//                 a.applicationStatus = 5;
//                 setApplicationToEdit(a);
//             }
//         });
//         dispatch(applicationThunk(applicationToEdit));
//     };

//     const handleRowClick = (assessment) => {
//         setSelected(true);
//         setSelectedAs(assessment);
//     };

//     // Check if all required assessment data is complete
//     const isAssessmentComplete = () => {
//         if (!selected || !selectedAs) return false;

//         // List of required fields
//         const requiredFields = [
//             'block',
//             'plot',
//             'subPlot',
//             'constructionYear',
//             'acquisionPrice',
//             'assessmentGoal',
//             'legalState',
//             'buildingPermit',
//             'irregularitiesBuilding'
//         ];

//         // Check that all required fields exist and are not empty
//         return requiredFields.every(field => {
//             const value = selectedAs[field];
//             return value !== null && value !== undefined && value !== '';
//         });
//     };

//     // Check if user can see action buttons
//     const canSeeActions = type === 'a' && !thisAssessor.isManager;

//     // Check if all data is complete
//     const isComplete = isAssessmentComplete();

//     return (
//         <div className="assessment-container">
//             <div className="assessment-content">
//                 {assessmentDetails.length > 0 && (
//                     <div className="grid-table">
//                         <div className="grid-header-container">
//                             <div className="grid-header">
//                                 <div className="grid-cell">ID</div>
//                                 <div className="grid-cell">Block</div>
//                                 <div className="grid-cell">Plot</div>
//                                 <div className="grid-cell">SubPlot</div>
//                                 <div className="grid-cell">Year</div>
//                                 <div className="grid-cell">Price</div>
//                                 <div className="grid-cell">Goal</div>
//                                 <div className="grid-cell">Legal</div>
//                                 <div className="grid-cell">Permit</div>
//                                 <div className="grid-cell">Irregularities</div>
//                             </div>
//                         </div>

//                         <div className="grid-body-container">
//                             {assessmentDetails.map((d) => (
//                                 <div 
//                                     key={d.assessmentId} 
//                                     className={`grid-row ${selected && selectedAs.assessmentId === d.assessmentId ? "selected-row" : ""}`}
//                                     onClick={() => handleRowClick(d)}
//                                 >
//                                     <div className="grid-cell">{d.assessmentId}</div>
//                                     <div className="grid-cell">{d.block}</div>
//                                     <div className="grid-cell">{d.plot}</div>
//                                     <div className="grid-cell">{d.subPlot}</div>
//                                     <div className="grid-cell">{d.constructionYear}</div>
//                                     <div className="grid-cell">{d.acquisionPrice}</div>
//                                     <div className="grid-cell">{d.assessmentGoal}</div>
//                                     <div className="grid-cell">{d.legalState}</div>
//                                     <div className="grid-cell">{d.buildingPermit}</div>
//                                     <div className="grid-cell">{d.irregularitiesBuilding}</div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}

//                 <Outlet />
//             </div>

//             {canSeeActions && (
//                 <div className="assessment-buttons-fixed">
//                     <Button 
//                         variant="contained" 
//                         color="primary" 
//                         disabled={!selected}
//                         onClick={() => { 
//                             dispatch(editAssessment(selectedAs)); 
//                             navigate('editAssessment'); 
//                         }}
//                     >
//                         Edit Assessment
//                     </Button>
//                     <Button 
//                         variant="outlined" 
//                         color="secondary" 
//                         disabled={!isComplete}
//                         onClick={setStatus}
//                         title={!isComplete ? "All assessment fields must be filled to set status" : ""}
//                     >
//                         Set Status
//                     </Button>
//                 </div>
//             )}
//         </div>
//     );
// };
/////////////////////////////
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useState, useRef } from "react";
// import { assessmentThunk } from "../../redux/slices/get/assessmentThunk";
// import { Button } from "@mui/material";
// import { Outlet, useNavigate } from "react-router-dom";
// import { editAssessment } from "../../redux/slices/assessmentSlice";
// import { myAssessmentsThunk } from "../../redux/slices/get by assessor/myAssessmentsThunk";
// import { yourAssessmentsThunk } from "../../redux/slices/get by customer/yourAssessmentsThunk";
// import { applicationThunk } from "../../redux/slices/get/applicatiionThunk";
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
// import AssessmentIcon from '@mui/icons-material/Assessment';
// import HomeWorkIcon from '@mui/icons-material/HomeWork';
// import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
// import GavelIcon from '@mui/icons-material/Gavel';
// import EditIcon from '@mui/icons-material/Edit';
// import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// export const Assessment = () => {
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const assessmentDetails = useSelector(state => state.assessment.assessments);
//     const appliationsDetails = useSelector(state => state.application.applications);
//     const [selected, setSelected] = useState(false);
//     const [selectedAs, setSelectedAs] = useState({});
//     const [applicationToEdit, setApplicationToEdit] = useState({});
//     const type = useSelector(state => state.user.t);
//     const thisCustomer = useSelector(state => state.customer.thisCustomer);
//     const thisAssessor = useSelector(state => state.assessor.thisAssessor);
//     const topRef = useRef(null);
//     const [sortBy, setSortBy] = useState('none');
//     const [searchTerm, setSearchTerm] = useState('');
//     const [filteredAssessments, setFilteredAssessments] = useState([]);

//     useEffect(() => {
//         // Scroll to top when component mounts
//         window.scrollTo(0, 0);

//         setFilteredAssessments(assessmentDetails);
//     }, [assessmentDetails]);

//     const scrollToTop = () => {
//         topRef.current?.scrollIntoView({ behavior: 'smooth' });
//     };

//     const handleSort = (sortType) => {
//         setSortBy(sortType);

//         let sortedAssessments = [...assessmentDetails];

//         if (sortType === 'id') {
//             sortedAssessments.sort((a, b) => a.assessmentId - b.assessmentId);
//         } else if (sortType === 'block') {
//             sortedAssessments.sort((a, b) => a.block.localeCompare(b.block));
//         } else if (sortType === 'price') {
//             sortedAssessments.sort((a, b) => a.acquisionPrice - b.acquisionPrice);
//         } else if (sortType === 'year') {
//             sortedAssessments.sort((a, b) => a.constructionYear - b.constructionYear);
//         }

//         setFilteredAssessments(sortedAssessments);
//     };

//     const handleSearch = () => {
//         if (!searchTerm.trim()) {
//             setFilteredAssessments([...assessmentDetails]);
//             return;
//         }

//         const term = searchTerm.toLowerCase();

//         const results = assessmentDetails.filter(assessment => {
//             // Convert all fields to strings and check if they include the search term
//             return (
//                 String(assessment.assessmentId).toLowerCase().includes(term) ||
//                 String(assessment.block).toLowerCase().includes(term) ||
//                 String(assessment.plot).toLowerCase().includes(term) ||
//                 String(assessment.subPlot).toLowerCase().includes(term) ||
//                 String(assessment.constructionYear).toLowerCase().includes(term) ||
//                 String(assessment.acquisionPrice).toLowerCase().includes(term) ||
//                 (assessment.assessmentGoal || '').toLowerCase().includes(term) ||
//                 (assessment.legalState || '').toLowerCase().includes(term) ||
//                 String(assessment.buildingPermit).toLowerCase().includes(term) ||
//                 String(assessment.irregularitiesBuilding).toLowerCase().includes(term)
//             );
//         });

//         setFilteredAssessments(results);
//     };

//     const handleRowClick = (assessment) => {
//         setSelected(true);
//         setSelectedAs(assessment);
//     };

//     // Check if all required assessment data is complete
//     const isAssessmentComplete = () => {
//         if (!selected || !selectedAs) return false;

//         // List of required fields
//         const requiredFields = [
//             'block',
//             'plot',
//             'subPlot',
//             'constructionYear',
//             'acquisionPrice',
//             'assessmentGoal',
//             'legalState',
//             'buildingPermit',
//             'irregularitiesBuilding'
//         ];

//         // Check that all required fields exist and are not empty
//         return requiredFields.every(field => {
//             const value = selectedAs[field];
//             return value !== null && value !== undefined && value !== '';
//         });
//     };

//     // Check if user can see action buttons
//     const canSeeActions = type === 'a' && !thisAssessor.isManager;

//     // Check if all data is complete
//     const isComplete = isAssessmentComplete();

//     const setStatus = () => {
//         appliationsDetails.map(a => {
//             if (a.applicationId === selectedAs.applicationId) {
//                 a.applicationStatus = 5;
//                 setApplicationToEdit(a);
//             }
//         });
//         dispatch(applicationThunk(applicationToEdit));
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
//                         <AssessmentIcon sx={{ mr: 1, fontSize: '2rem', color: '#3a7bd5' }} />
//                         Property Assessments
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
//                         View and manage property assessments. Select an assessment to enable editing options and update property information.
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
//                         variant={sortBy === 'id' ? 'contained' : 'outlined'}
//                         size="small"
//                         onClick={() => handleSort('id')}
//                         startIcon={<AssessmentIcon />}
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
//                         variant={sortBy === 'block' ? 'contained' : 'outlined'}
//                         size="small"
//                         onClick={() => handleSort('block')}
//                         startIcon={<HomeWorkIcon />}
//                         sx={{
//                             background: sortBy === 'block' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
//                             '&:hover': {
//                                 background: sortBy === 'block' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
//                             }
//                         }}
//                     >
//                         Block
//                     </Button>
//                     <Button
//                         variant={sortBy === 'price' ? 'contained' : 'outlined'}
//                         size="small"
//                         onClick={() => handleSort('price')}
//                         startIcon={<AttachMoneyIcon />}
//                         sx={{
//                             background: sortBy === 'price' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
//                             '&:hover': {
//                                 background: sortBy === 'price' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
//                             }
//                         }}
//                     >
//                         Price
//                     </Button>
//                     <Button
//                         variant={sortBy === 'year' ? 'contained' : 'outlined'}
//                         size="small"
//                         onClick={() => handleSort('year')}
//                         startIcon={<GavelIcon />}
//                         sx={{
//                             background: sortBy === 'year' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
//                             '&:hover': {
//                                 background: sortBy === 'year' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
//                             }
//                         }}
//                     >
//                         Year
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
//                         placeholder="Search assessments..."
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
//                         {assessmentDetails.length === 0 ? (
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
//                                     No assessments found
//                                 </Typography>
//                                 <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1 }}>
//                                     Assessments will appear here once they are created
//                                 </Typography>
//                             </Paper>
//                         ) : (
//                             <div className="assessment-container">
//                                 <div className="assessment-content">
//                                     {filteredAssessments.length > 0 && (
//                                         <div className="grid-table">
//                                             <div className="grid-header-container">
//                                                 <div className="grid-header">
//                                                     <div className="grid-cell">ID</div>
//                                                     <div className="grid-cell">Block</div>
//                                                     <div className="grid-cell">Plot</div>
//                                                     <div className="grid-cell">SubPlot</div>
//                                                     <div className="grid-cell">Construction Year</div>
//                                                     <div className="grid-cell">Acquisition Price</div>
//                                                     <div className="grid-cell">Assessment Goal</div>
//                                                     <div className="grid-cell">Legal State</div>
//                                                     <div className="grid-cell">Building Permit</div>
//                                                     <div className="grid-cell">Irregularities</div>
//                                                 </div>
//                                             </div>

//                                             <div className="grid-body-container">
//                                                 {filteredAssessments.map(d => (
//                                                     <div 
//                                                         key={d.assessmentId} 
//                                                         className={`grid-row ${(selected && selectedAs === d) ? "selected-row" : ""}`}
//                                                         onClick={() => handleRowClick(d)}
//                                                     >
//                                                         <div className="grid-cell">{d.assessmentId}</div>
//                                                         <div className="grid-cell">{d.block}</div>
//                                                         <div className="grid-cell">{d.plot}</div>
//                                                         <div className="grid-cell">{d.subPlot}</div>
//                                                         <div className="grid-cell">{d.constructionYear}</div>
//                                                         <div className="grid-cell">{d.acquisionPrice}</div>
//                                                         <div className="grid-cell">{d.assessmentGoal}</div>
//                                                         <div className="grid-cell">{d.legalState}</div>
//                                                         <div className="grid-cell">
//                                                             <Chip 
//                                                                 label={d.buildingPermit ? "Yes" : "No"}
//                                                                 size="small"
//                                                                 sx={{
//                                                                     bgcolor: d.buildingPermit ? '#e3f2fd' : '#ffebee',
//                                                                     color: d.buildingPermit ? '#1565c0' : '#c62828',
//                                                                     fontWeight: 500
//                                                                 }}
//                                                             />
//                                                         </div>
//                                                         <div className="grid-cell">
//                                                             <Chip 
//                                                                 label={d.irregularitiesBuilding ? "Yes" : "No"}
//                                                                 size="small"
//                                                                 sx={{
//                                                                     bgcolor: !d.irregularitiesBuilding ? '#e3f2fd' : '#ffebee',
//                                                                     color: !d.irregularitiesBuilding ? '#1565c0' : '#c62828',
//                                                                     fontWeight: 500
//                                                                 }}
//                                                             />
//                                                         </div>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     )}

//                                     {filteredAssessments.length === 0 && (
//                                         <Paper
//                                             elevation={0}
//                                             sx={{
//                                                 p: 4,
//                                                 borderRadius: 3,
//                                                 background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//                                                 textAlign: 'center'
//                                             }}
//                                         >
//                                             <Typography variant="h6" color="#2c3e50">
//                                                 No matching assessments found
//                                             </Typography>
//                                             <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1 }}>
//                                                 Try adjusting your search criteria
//                                             </Typography>
//                                         </Paper>
//                                     )}
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

//                     {canSeeActions && (
//                         <>
//                             <Button 
//                                 variant="outlined"
//                                 startIcon={<EditIcon />}
//                                 onClick={() => {
//                                     dispatch(editAssessment(selectedAs));
//                                     navigate('editAssessment');
//                                 }}
//                                 sx={{
//                                     borderColor: '#3a7bd5',
//                                     color: '#3a7bd5',
//                                     '&:hover': {
//                                         borderColor: '#2b5876',
//                                         backgroundColor: 'rgba(58, 123, 213, 0.1)'
//                                     },
//                                     mr: 2
//                                 }}
//                             >
//                                 Edit Assessment
//                             </Button>

//                             {isComplete && (
//                                 <Button 
//                                     variant="contained"
//                                     startIcon={<CheckCircleOutlineIcon />}
//                                     onClick={setStatus}
//                                     sx={{
//                                         background: 'linear-gradient(90deg, #43a047 0%, #2e7d32 100%)',
//                                         '&:hover': {
//                                             background: 'linear-gradient(90deg, #43a047 0%, #2e7d32 90%)'
//                                         }
//                                     }}
//                                 >
//                                     Complete Assessment
//                                 </Button>
//                             )}
//                         </>
//                     )}
//                 </div>
//             )}

//             <Outlet></Outlet>
//         </Box>
//     );
// }
/////////////

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { assessmentThunk } from "../../redux/slices/get/assessmentThunk";
import { Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { editAssessment } from "../../redux/slices/assessmentSlice";
import { myAssessmentsThunk } from "../../redux/slices/get by assessor/myAssessmentsThunk";
import { yourAssessmentsThunk } from "../../redux/slices/get by customer/yourAssessmentsThunk";
import { applicationThunk } from "../../redux/slices/get/applicatiionThunk";
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
    useTheme,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Alert,
    Snackbar
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import SortIcon from '@mui/icons-material/Sort';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import AssessmentIcon from '@mui/icons-material/Assessment';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GavelIcon from '@mui/icons-material/Gavel';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import InfoIcon from '@mui/icons-material/Info';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export const Assessment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const assessmentDetails = useSelector(state => state.assessment.assessments);
    const appliationsDetails = useSelector(state => state.application.applications);
    const [selected, setSelected] = useState(false);
    const [selectedAs, setSelectedAs] = useState({});
    const [applicationToEdit, setApplicationToEdit] = useState({});
    const type = useSelector(state => state.user.t);
    const thisCustomer = useSelector(state => state.customer.thisCustomer);
    const thisAssessor = useSelector(state => state.assessor.thisAssessor);
    const topRef = useRef(null);
    const [sortBy, setSortBy] = useState('none');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredAssessments, setFilteredAssessments] = useState([]);
    const [confirmDialog, setConfirmDialog] = useState(false);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');

    // הוספת שימוש בתמה ובדיקות מדיה לרספונסיביות
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
    const isLgScreen = useMediaQuery(theme.breakpoints.down('lg'));

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);

        if (assessmentDetails.length === 0) {
            if (type === "a") {
                if (thisAssessor.isManager)
                    dispatch(assessmentThunk());
                // else
                //   dispatch(myAssessmentsThunk(thisAssessor.assessorId));
            }
            else if (type === "c") {
                dispatch(yourAssessmentsThunk(thisCustomer.customerId));
            }
        }

        setFilteredAssessments(assessmentDetails);
    }, [dispatch, assessmentDetails, type, thisAssessor, thisCustomer]);

    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSort = (sortType) => {
        setSortBy(sortType);

        let sortedAssessments = [...filteredAssessments];

        if (sortType === 'id') {
            sortedAssessments.sort((a, b) => a.assessmentId - b.assessmentId);
        } else if (sortType === 'block') {
            sortedAssessments.sort((a, b) => a.block.localeCompare(b.block));
        } else if (sortType === 'price') {
            sortedAssessments.sort((a, b) => a.acquisionPrice - b.acquisionPrice);
        } else if (sortType === 'year') {
            sortedAssessments.sort((a, b) => a.constructionYear - b.constructionYear);
        } else if (sortType === 'legal') {
            sortedAssessments.sort((a, b) => (a.legalState || '').localeCompare(b.legalState || ''));
        }

        setFilteredAssessments(sortedAssessments);
    };

    const handleSearch = () => {
        if (!searchTerm.trim()) {
            setFilteredAssessments([...assessmentDetails]);
            return;
        }

        const term = searchTerm.toLowerCase();

        const results = assessmentDetails.filter(assessment => {
            // Convert all fields to strings and check if they include the search term
            return (
                String(assessment.assessmentId).toLowerCase().includes(term) ||
                String(assessment.block).toLowerCase().includes(term) ||
                String(assessment.plot).toLowerCase().includes(term) ||
                String(assessment.subPlot).toLowerCase().includes(term) ||
                String(assessment.constructionYear).toLowerCase().includes(term) ||
                String(assessment.acquisionPrice).toLowerCase().includes(term) ||
                (assessment.assessmentGoal || '').toLowerCase().includes(term) ||
                (assessment.legalState || '').toLowerCase().includes(term)
            );
        });

        setFilteredAssessments(results);
    };

    const handleRowClick = (assessment) => {
        setSelected(true);
        setSelectedAs(assessment);
    };

    // Check if all required assessment data is complete
    const isAssessmentComplete = () => {
        if (!selected || !selectedAs) return false;

        // List of required fields
        const requiredFields = [
            'block',
            'plot',
            'subPlot',
            'constructionYear',
            'acquisionPrice',
            'assessmentGoal',
            'legalState',
            'buildingPermit',
            'irregularitiesBuilding'
        ];

        // Check that all required fields exist and are not empty
        return requiredFields.every(field => {
            const value = selectedAs[field];
            return value !== null && value !== undefined && value !== '';
        });
    };

    // Check if user can see action buttons
    const canSeeActions = type === 'a' && !thisAssessor.isManager;

    // Check if all data is complete
    const isComplete = isAssessmentComplete();

    const setStatus = () => {
        setConfirmDialog(false);
        const updatedApplications = appliationsDetails.map(a => {
            if (a.applicationId === selectedAs.applicationId) {
                return { ...a, applicationStatus: 5 };
            }
            return a;
        });

        const applicationToUpdate = updatedApplications.find(
            a => a.applicationId === selectedAs.applicationId
        );

        if (applicationToUpdate) {
            setApplicationToEdit(applicationToUpdate);
            dispatch(applicationThunk(applicationToUpdate));
            setSnackbarMessage('Status has been successfully updated!');
            setSnackbarOpen(true);
        }
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
                        <AssessmentIcon sx={{ mr: 1, fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }, color: '#3a7bd5' }} />
                        Property Assessments
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
                        View and manage property assessments. Access detailed information about each assessment.
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
                        variant={sortBy === 'id' ? 'contained' : 'outlined'}
                        size={isXsScreen ? "small" : "medium"}
                        onClick={() => handleSort('id')}
                        startIcon={<AssessmentIcon />}
                        sx={{
                            background: sortBy === 'id' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'id' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            },
                            fontSize: { xs: '0.7rem', md: '0.875rem' },
                            padding: { xs: '4px 8px', md: '6px 16px' },
                            minWidth: { xs: '60px', md: 'auto' },
                            whiteSpace: 'nowrap'
                        }}
                    >
                        ID
                    </Button>
                    <Button
                        variant={sortBy === 'block' ? 'contained' : 'outlined'}
                        size={isXsScreen ? "small" : "medium"}
                        onClick={() => handleSort('block')}
                        startIcon={<HomeWorkIcon />}
                        sx={{
                            background: sortBy === 'block' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'block' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            },
                            fontSize: { xs: '0.7rem', md: '0.875rem' },
                            padding: { xs: '4px 8px', md: '6px 16px' },
                            minWidth: { xs: '60px', md: 'auto' },
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Block
                    </Button>
                    <Button
                        variant={sortBy === 'price' ? 'contained' : 'outlined'}
                        size={isXsScreen ? "small" : "medium"}
                        onClick={() => handleSort('price')}
                        startIcon={<AttachMoneyIcon />}
                        sx={{
                            background: sortBy === 'price' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'price' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            },
                            fontSize: { xs: '0.7rem', md: '0.875rem' },
                            padding: { xs: '4px 8px', md: '6px 16px' },
                            minWidth: { xs: '60px', md: 'auto' },
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Price
                    </Button>
                    <Button
                        variant={sortBy === 'year' ? 'contained' : 'outlined'}
                        size={isXsScreen ? "small" : "medium"}
                        onClick={() => handleSort('year')}
                        startIcon={<HomeWorkIcon />}
                        sx={{
                            background: sortBy === 'year' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'year' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            },
                            fontSize: { xs: '0.7rem', md: '0.875rem' },
                            padding: { xs: '4px 8px', md: '6px 16px' },
                            minWidth: { xs: '60px', md: 'auto' },
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Year
                    </Button>
                    <Button
                        variant={sortBy === 'legal' ? 'contained' : 'outlined'}
                        size={isXsScreen ? "small" : "medium"}
                        onClick={() => handleSort('legal')}
                        startIcon={<GavelIcon />}
                        sx={{
                            background: sortBy === 'legal' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'legal' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            },
                            fontSize: { xs: '0.7rem', md: '0.875rem' },
                            padding: { xs: '4px 8px', md: '6px 16px' },
                            minWidth: { xs: '60px', md: 'auto' },
                            whiteSpace: 'nowrap'
                        }}
                    >
                        Legal
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
                            minWidth: { xs: '60px', md: 'auto' },
                            whiteSpace: 'nowrap'
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
                        placeholder={isXsScreen ? "Search..." : "Search assessments..."}
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
                                        setFilteredAssessments(assessmentDetails);
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
                        {filteredAssessments.length === 0 ? (
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
                                    No assessments found
                                </Typography>
                                <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                                    Assessments will appear here once they are added
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
                                            }}>Block</th>
                                            <th style={{
                                                padding: '12px 16px',
                                                textAlign: 'left',
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                                color: '#495057',
                                                whiteSpace: 'nowrap'
                                            }}>Plot</th>
                                            <th style={{
                                                padding: '12px 16px',
                                                textAlign: 'left',
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                                color: '#495057',
                                                whiteSpace: 'nowrap'
                                            }}>SubPlot</th>
                                            {!isMdScreen && (
                                                <th style={{
                                                    padding: '12px 16px',
                                                    textAlign: 'left',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600,
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>Construction Year</th>
                                            )}
                                            <th style={{
                                                padding: '12px 16px',
                                                textAlign: 'left',
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                                color: '#495057',
                                                whiteSpace: 'nowrap'
                                            }}>Price</th>
                                            {!isMdScreen && (
                                                <th style={{
                                                    padding: '12px 16px',
                                                    textAlign: 'left',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600,
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>Assessment Goal</th>
                                            )}
                                            <th style={{
                                                padding: '12px 16px',
                                                textAlign: 'left',
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                                color: '#495057',
                                                whiteSpace: 'nowrap'
                                            }}>Legal State</th>
                                            {!isMdScreen && (
                                                <>
                                                    <th style={{
                                                        padding: '12px 16px',
                                                        textAlign: 'center',
                                                        fontSize: '0.875rem',
                                                        fontWeight: 600,
                                                        color: '#495057',
                                                        whiteSpace: 'nowrap'
                                                    }}>Building Permit</th>
                                                    <th style={{
                                                        padding: '12px 16px',
                                                        textAlign: 'center',
                                                        fontSize: '0.875rem',
                                                        fontWeight: 600,
                                                        color: '#495057',
                                                        whiteSpace: 'nowrap'
                                                    }}>Irregularities</th>
                                                </>
                                            )}
                                            {/* הסרת עמודת הפעולות הקבועה */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredAssessments.map((assessment, index) => (
                                            <tr
                                                key={assessment.assessmentId}
                                                style={{
                                                    backgroundColor: (selected && selectedAs.assessmentId === assessment.assessmentId)
                                                        ? 'rgba(58, 123, 213, 0.08)'
                                                        : index % 2 === 0 ? 'white' : '#f8f9fa',
                                                    cursor: 'pointer',
                                                    transition: 'background-color 0.2s'
                                                }}
                                                onClick={() => handleRowClick(assessment)}
                                                onMouseOver={(e) => {
                                                    if (!(selected && selectedAs.assessmentId === assessment.assessmentId)) {
                                                        e.currentTarget.style.backgroundColor = 'rgba(58, 123, 213, 0.04)';
                                                    }
                                                }}
                                                onMouseOut={(e) => {
                                                    if (!(selected && selectedAs.assessmentId === assessment.assessmentId)) {
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
                                                }}>{assessment.assessmentId}</td>
                                                <td style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid #e9ecef',
                                                    fontSize: '0.875rem',
                                                    color: '#212529',
                                                    fontWeight: 500,
                                                    whiteSpace: 'nowrap'
                                                }}>{assessment.block}</td>
                                                <td style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid #e9ecef',
                                                    fontSize: '0.875rem',
                                                    color: '#212529',
                                                    whiteSpace: 'nowrap'
                                                }}>{assessment.plot}</td>
                                                <td style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid #e9ecef',
                                                    fontSize: '0.875rem',
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>{assessment.subPlot}</td>
                                                {!isMdScreen && (
                                                    <td style={{
                                                        padding: '12px 16px',
                                                        borderBottom: '1px solid #e9ecef',
                                                        fontSize: '0.875rem',
                                                        color: '#495057',
                                                        whiteSpace: 'nowrap'
                                                    }}>{assessment.constructionYear}</td>
                                                )}
                                                <td style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid #e9ecef',
                                                    fontSize: '0.875rem',
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>${assessment.acquisionPrice?.toLocaleString() || 'N/A'}</td>
                                                {!isMdScreen && (
                                                    <td style={{
                                                        padding: '12px 16px',
                                                        borderBottom: '1px solid #e9ecef',
                                                        fontSize: '0.875rem',
                                                        color: '#495057',
                                                        maxWidth: '200px',
                                                        overflow: 'hidden',
                                                        textOverflow: 'ellipsis',
                                                        whiteSpace: 'nowrap'
                                                    }}>{assessment.assessmentGoal}</td>
                                                )}
                                                <td style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid #e9ecef',
                                                    fontSize: '0.875rem',
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    <Chip
                                                        label={assessment.legalState || 'Unknown'}
                                                        size="small"
                                                        sx={{
                                                            bgcolor: assessment.legalState?.toLowerCase().includes('legal') ? '#e8f5e9' :
                                                                assessment.legalState?.toLowerCase().includes('pending') ? '#fff8e1' : '#ffebee',
                                                            color: assessment.legalState?.toLowerCase().includes('legal') ? '#2e7d32' :
                                                                assessment.legalState?.toLowerCase().includes('pending') ? '#f57f17' : '#c62828',
                                                            fontWeight: 500,
                                                            fontSize: '0.7rem'
                                                        }}
                                                    />
                                                </td>
                                                {!isMdScreen && (
                                                    <>
                                                        <td style={{
                                                            padding: '12px 16px',
                                                            borderBottom: '1px solid #e9ecef',
                                                            fontSize: '0.875rem',
                                                            color: '#495057',
                                                            textAlign: 'center',
                                                            whiteSpace: 'nowrap'
                                                        }}>
                                                            {assessment.buildingPermit ?
                                                                <CheckIcon sx={{ color: '#2e7d32' }} /> :
                                                                <CloseIcon sx={{ color: '#c62828' }} />
                                                            }
                                                        </td>
                                                        <td style={{
                                                            padding: '12px 16px',
                                                            borderBottom: '1px solid #e9ecef',
                                                            fontSize: '0.875rem',
                                                            color: '#495057',
                                                            textAlign: 'center',
                                                            whiteSpace: 'nowrap'
                                                        }}>
                                                            {assessment.irregularitiesBuilding ?
                                                                <CheckIcon sx={{ color: '#c62828' }} /> :
                                                                <CloseIcon sx={{ color: '#2e7d32' }} />
                                                            }
                                                        </td>
                                                    </>
                                                )}
                                                {/* הסרת עמודת הפעולות הקבועה */}
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
            {filteredAssessments.length > 0 && (
                <Box sx={{
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1
                }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                        Showing {filteredAssessments.length} of {assessmentDetails.length} assessments
                    </Typography>
                    {searchTerm && (
                        <Chip
                            label={`Search: "${searchTerm}"`}
                            size="small"
                            onDelete={() => {
                                setSearchTerm('');
                                setFilteredAssessments(assessmentDetails);
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

            {/* כפתורי פעולה כאשר הערכה נבחרה */}
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

                        {/* כפתור עריכה מוצג רק כאשר יש שורה נבחרת ויש הרשאות מתאימות */}
                        {canSeeActions && (
                            <>
                                <Button
                                    variant="outlined"
                                    startIcon={<EditIcon />}
                                    onClick={() => {
                                        dispatch(editAssessment(selectedAs));
                                        navigate('editAssessment');
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
                                    Edit Assessment
                                </Button>

                                {isComplete && (
                                    <Button
                                        variant="contained"
                                        startIcon={<CheckCircleOutlineIcon />}
                                        onClick={() => setConfirmDialog(true)}
                                        sx={{
                                            background: 'linear-gradient(90deg, #43a047 0%, #2e7d32 100%)',
                                            '&:hover': {
                                                background: 'linear-gradient(90deg, #43a047 0%, #2e7d32 90%)'
                                            },
                                            whiteSpace: 'nowrap',
                                            fontSize: { xs: '0.75rem', md: '0.875rem' }
                                        }}
                                    >
                                        Mark as Complete
                                    </Button>
                                )}
                            </>
                        )}

                        <Button
                            variant="outlined"
                            startIcon={<InfoIcon />}
                            onClick={() => {
                                // Navigate to assessment details view
                                // This is a placeholder - implement as needed
                                console.log("View details for assessment:", selectedAs);
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
                            View Details
                        </Button>
                    </Paper>
                </Box>
            )}

            {/* Dialog for confirmation */}
            <Dialog
                open={confirmDialog}
                onClose={() => setConfirmDialog(false)}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Mark Assessment as Complete?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to mark this assessment as complete?
                        This action will update the application status and cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setConfirmDialog(false)} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={setStatus} color="primary" autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Snackbar for notifications */}
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={6000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setSnackbarOpen(false)}
                    severity="success"
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>

            <Outlet></Outlet>
        </Box>
    );
};