// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { applicationThunk } from "../../redux/slices/get/applicatiionThunk";
// import { useNavigate } from "react-router-dom";
// import { myApplicationsThunk } from "../../redux/slices/get by assessor/myApplicationsThunk";
// import { yourApplicationsThunk } from "../../redux/slices/get by customer/yourApplicationsThunk";

// export const Applications = () => {
//     const [selected, setSelected] = useState(false);
//     const [selectedAs, setSelectedAs] = useState({});
//     const dispatch = useDispatch();
//     const applicationsDetails = useSelector(state => state.application.applications);
//     const type = useSelector(state => state.user.t);
//     const thisAssessor = useSelector(state => state.assessor.thisAssessor);
//     const thisCustomer = useSelector(state => state.customer.thisCustomer);


//     // useEffect(() => {
//     //     if (applicationsDetails.length === 0) {
//     //         if (type === "a") {
//     //             if (thisAssessor.isManager)
//     //                 dispatch(applicationThunk());
//     //             // else
//     //                 // dispatch(myApplicationsThunk(thisAssessor.assessorId));
//     //         }
//     //         else if (type == 'c')
//     //             dispatch(yourApplicationsThunk(thisCustomer.customerId));
//     //     }
//     // }, [])
    
//     return <div >
//         {applicationsDetails.length > 0 && <table>
//             <thead>
//                 <tr>
//                     <th>applicationId</th>
//                     <th>assessorId</th>
//                     <td>applicationDate</td>
//                     <td>lastApplicationDate</td>
//                     <td>applicationStatus</td>

//                 </tr>
//             </thead>
//             <tbody>

//                 {applicationsDetails && applicationsDetails.map(d => {
//                     return <tr key={d.applicationId} onClick={() => { setSelected(true); setSelectedAs(d) }} className={(selected && selectedAs === d) ? "s" : "r"}>
//                         <td>{d.applicationId}</td>
//                         <td>{d.assessorId}</td>
//                         <td>{d.applicationDate}</td>
//                         <td>{d.lastApplicationDate}</td>
//                         <td>{d.applicationStatus}</td>

//                     </tr>
//                 })}

//             </tbody>
//         </table>}
//         {/* <Button  variant="text" onClick={()=>{navigate('/addApplication')}}>add application</Button> */}
//         {selected && <>
//             {/* <Button variant="text" onClick={()=>{dispatch(editApplication(selectedAs));navigate('/editAssessor')}}>edit application</Button> */}
//             {/* <button onClick={()=>{dispatch(deleteApplicationThunk(selectedAs.assessorId));setSelected(false)}}>delete assessor</button> */}
//         </>}
//     </div>

// }


//////////////////////////////////////////////////////////////////////
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applicationThunk } from "../../redux/slices/get/applicatiionThunk";
import { useNavigate } from "react-router-dom";
import { myApplicationsThunk } from "../../redux/slices/get by assessor/myApplicationsThunk";
import { yourApplicationsThunk } from "../../redux/slices/get by customer/yourApplicationsThunk";
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
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

export const Applications = () => {
    const [selected, setSelected] = useState(false);
    const [selectedAs, setSelectedAs] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const applicationsDetails = useSelector(state => state.application.applications);
    const type = useSelector(state => state.user.t);
    const thisAssessor = useSelector(state => state.assessor.thisAssessor);
    const thisCustomer = useSelector(state => state.customer.thisCustomer);
    const topRef = useRef(null);
    const [sortBy, setSortBy] = useState('none');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredApplications, setFilteredApplications] = useState([]);
    
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
        
        // Load applications if needed
        if (applicationsDetails.length === 0) {
            if (type === "a") {
                if (thisAssessor.isManager)
                    dispatch(applicationThunk());
                // else
                //     dispatch(myApplicationsThunk(thisAssessor.assessorId));
            }
            else if (type === 'c')
                dispatch(yourApplicationsThunk(thisCustomer.customerId));
        }
    }, []);
    
    useEffect(() => {
        setFilteredApplications(applicationsDetails);
    }, [applicationsDetails]);
    
    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
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
    
    const handleSort = (sortType) => {
        setSortBy(sortType);
        
        let sortedApplications = [...applicationsDetails];
        
        if (sortType === 'date') {
            sortedApplications.sort((a, b) => new Date(b.applicationDate) - new Date(a.applicationDate));
        } else if (sortType === 'id') {
            sortedApplications.sort((a, b) => a.applicationId - b.applicationId);
        } else if (sortType === 'status') {
            sortedApplications.sort((a, b) => a.applicationStatus.localeCompare(b.applicationStatus));
        }
        
        setFilteredApplications(sortedApplications);
    };
    
    const handleSearch = () => {
        if (!searchTerm.trim()) {
            setFilteredApplications([...applicationsDetails]);
            return;
        }
        
        const term = searchTerm.toLowerCase();
        
        const results = applicationsDetails.filter(app => {
            // Convert all fields to strings and check if they include the search term
            return (
                String(app.applicationId).toLowerCase().includes(term) ||
                String(app.assessorId).toLowerCase().includes(term) ||
                formatDate(app.applicationDate).toLowerCase().includes(term) ||
                formatDate(app.lastApplicationDate).toLowerCase().includes(term) ||
                String(app.applicationStatus).toLowerCase().includes(term)
            );
        });
        
        setFilteredApplications(results);
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
                        <AssignmentTurnedInIcon sx={{ mr: 1, fontSize: '2rem', color: '#3a7bd5' }} />
                        Application Management
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
                        View and manage all applications in one place. Track application status, dates, and assigned assessors.
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
            </Box>
            
            <Container maxWidth="lg">
                <Fade in={true} timeout={1200}>
                    <Box>
                        {applicationsDetails.length === 0 ? (
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
                        ) : (
                            <div className="assessment-container Applications">
                                <div className="assessment-content">
                                    <div className="grid-table">
                                        <div className="grid-header-container">
                                            <div className="grid-header">
                                                <div className="grid-cell">Application ID</div>
                                                <div className="grid-cell">Assessor ID</div>
                                                <div className="grid-cell">Application Date</div>
                                                <div className="grid-cell">Last Application Date</div>
                                                <div className="grid-cell">Application Status</div>
                                            </div>
                                        </div>
                                        
                                        <div className="grid-body-container">
                                            {filteredApplications.map(d => (
                                                <div 
                                                    key={d.applicationId} 
                                                    className={`grid-row ${(selected && selectedAs === d) ? "selected-row" : ""}`}
                                                    onClick={() => { setSelected(true); setSelectedAs(d) }}
                                                >
                                                    <div className="grid-cell">{d.applicationId}</div>
                                                    <div className="grid-cell">{d.assessorId}</div>
                                                    <div className="grid-cell">{formatDate(d.applicationDate)}</div>
                                                    <div className="grid-cell">{formatDate(d.lastApplicationDate)}</div>
                                                    <div className="grid-cell">
                                                        <Chip 
                                                            label={d.applicationStatus}
                                                            size="small"
                                                            sx={{
                                                                bgcolor: d.applicationStatus === 'Approved' ? '#e3f2fd' : 
                                                                        d.applicationStatus === 'Pending' ? '#fff8e1' : 
                                                                        d.applicationStatus === 'Rejected' ? '#ffebee' : '#e0e0e0',
                                                                color: d.applicationStatus === 'Approved' ? '#1565c0' : 
                                                                      d.applicationStatus === 'Pending' ? '#ff8f00' : 
                                                                      d.applicationStatus === 'Rejected' ? '#c62828' : '#616161',
                                                                fontWeight: 500
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    {selected && (
                                        <div className="assessment-buttons-fixed">
                                            {/* <Button variant="text" onClick={()=>{dispatch(editApplication(selectedAs));navigate('/editAssessor')}}>Edit Application</Button> */}
                                            {/* <button onClick={()=>{dispatch(deleteApplicationThunk(selectedAs.assessorId));setSelected(false)}}>Delete Application</button> */}
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
                                                variant="outlined"
                                                onClick={() => {
                                                    // View application details functionality can be added here
                                                    console.log("View details for application:", selectedAs.applicationId);
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
                                                View Details
                                            </Button>
                                        </div>
                                    )}
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
        </Box>
    );
}
