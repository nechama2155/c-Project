
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applicationThunk } from "../../redux/slices/get/applicatiionThunk";
import { useNavigate } from "react-router-dom";
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
    Chip,
    useMediaQuery,
    useTheme
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
    const applicationsDetails = useSelector(state => state.application.applications);
    const type = useSelector(state => state.user.t);
    const thisAssessor = useSelector(state => state.assessor.thisAssessor);
    const thisCustomer = useSelector(state => state.customer.thisCustomer);
    const topRef = useRef(null);
    const [sortBy, setSortBy] = useState('none');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredApplications, setFilteredApplications] = useState([]);
    
    // הוספת שימוש בתמה ובדיקות מדיה לרספונסיביות
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));
    
    useEffect(() => {
        // גלילה לראש הדף כאשר הקומפוננטה נטענת
        window.scrollTo(0, 0);
        
        // טעינת הבקשות אם צריך
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
            // המרת כל השדות למחרוזות ובדיקה אם הם מכילים את מונח החיפוש
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
                        <AssignmentTurnedInIcon sx={{ mr: 1, fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }, color: '#3a7bd5' }} />
                        Application Management
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
                        View and manage all applications in one place. Track application status, dates, and assigned assessors.
                    </Typography>
                </Box>
            </Fade>
            
            <Box sx={{
                mb: { xs: 2, md: 4 },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                gap: { xs: 1, md: 2 },
                justifyContent: 'space-between',
                alignItems: { xs: 'stretch', md: 'center' }
            }}>
                {/* כפתורי מיון */}
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
                        variant={sortBy === 'date' ? 'contained' : 'outlined'}
                        size={isXsScreen ? "small" : "medium"}
                        onClick={() => handleSort('date')}
                        startIcon={<DateRangeIcon />}
                        sx={{
                            background: sortBy === 'date' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'date' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            },
                            fontSize: { xs: '0.7rem', md: '0.875rem' },
                            padding: { xs: '4px 8px', md: '6px 16px' },
                            minWidth: { xs: '60px', md: 'auto' }
                        }}
                    >
                        Date
                    </Button>
                    <Button
                        variant={sortBy === 'id' ? 'contained' : 'outlined'}
                        size={isXsScreen ? "small" : "medium"}
                        onClick={() => handleSort('id')}
                        startIcon={<AssignmentIcon />}
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
                        variant={sortBy === 'status' ? 'contained' : 'outlined'}
                        size={isXsScreen ? "small" : "medium"}
                        onClick={() => handleSort('status')}
                        startIcon={<PersonIcon />}
                        sx={{
                            background: sortBy === 'status' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'status' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            },
                            fontSize: { xs: '0.7rem', md: '0.875rem' },
                            padding: { xs: '4px 8px', md: '6px 16px' },
                            minWidth: { xs: '60px', md: 'auto' }
                        }}
                    >
                        Status
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
                
                {/* חיפוש */}
                <Box sx={{
                    display: 'flex',
                    gap: 1,
                    flexGrow: { xs: 1, md: 0 },
                    maxWidth: { xs: '100%', md: '300px' },
                    mt: { xs: 2, md: 0 }
                }}>
                    <TextField
                        size="small"
                        placeholder={isXsScreen ? "Search..." : "Search applications..."}
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
                                        setFilteredApplications(applicationsDetails);
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
                        {applicationsDetails.length === 0 ? (
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
                                    No applications found
                                </Typography>

                                <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                                    Applications will appear here once they are created
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
                                            }}>Application ID</th>
                                            <th style={{
                                                padding: '12px 16px',
                                                textAlign: 'left',
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                                color: '#495057',
                                                whiteSpace: 'nowrap'
                                            }}>Assessor ID</th>
                                            {!isXsScreen && (
                                                <th style={{
                                                    padding: '12px 16px',
                                                    textAlign: 'left',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600,
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>Application Date</th>
                                            )}
                                            {!isMdScreen && (
                                                <th style={{
                                                    padding: '12px 16px',
                                                    textAlign: 'left',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600,
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>Last Application Date</th>
                                            )}
                                            <th style={{
                                                padding: '12px 16px',
                                                textAlign: 'left',
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                                color: '#495057',
                                                whiteSpace: 'nowrap'
                                            }}>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredApplications.map((app, index) => (
                                            <tr
                                                key={app.applicationId}
                                                style={{
                                                    backgroundColor: (selected && selectedAs.applicationId === app.applicationId)
                                                        ? 'rgba(58, 123, 213, 0.08)'
                                                        : index % 2 === 0 ? 'white' : '#f8f9fa',
                                                    cursor: 'pointer',
                                                    transition: 'background-color 0.2s'
                                                }}
                                                onClick={() => { setSelected(true); setSelectedAs(app) }}
                                                onMouseOver={(e) => {
                                                    if (!(selected && selectedAs.applicationId === app.applicationId)) {
                                                        e.currentTarget.style.backgroundColor = 'rgba(58, 123, 213, 0.04)';
                                                    }
                                                }}
                                                onMouseOut={(e) => {
                                                    if (!(selected && selectedAs.applicationId === app.applicationId)) {
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
                                                }}>{app.applicationId}</td>
                                                <td style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid #e9ecef',
                                                    fontSize: '0.875rem',
                                                    color: '#212529',
                                                    fontWeight: 500,
                                                    whiteSpace: 'nowrap'
                                                }}>{app.assessorId}</td>
                                                {!isXsScreen && (
                                                    <td style={{
                                                        padding: '12px 16px',
                                                        borderBottom: '1px solid #e9ecef',
                                                        fontSize: '0.875rem',
                                                        color: '#495057',
                                                        whiteSpace: 'nowrap'
                                                    }}>{formatDate(app.applicationDate)}</td>
                                                )}
                                                {!isMdScreen && (
                                                    <td style={{
                                                        padding: '12px 16px',
                                                        borderBottom: '1px solid #e9ecef',
                                                        fontSize: '0.875rem',
                                                        color: '#495057',
                                                        whiteSpace: 'nowrap'
                                                    }}>{formatDate(app.lastApplicationDate)}</td>
                                                )}
                                                <td style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid #e9ecef',
                                                    fontSize: '0.875rem',
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    <Chip 
                                                        label={app.applicationStatus}
                                                        size="small"
                                                        sx={{
                                                            bgcolor: app.applicationStatus === 'Approved' ? '#e3f2fd' : 
                                                                    app.applicationStatus === 'Pending' ? '#fff8e1' : 
                                                                    app.applicationStatus === 'Rejected' ? '#ffebee' : '#e0e0e0',
                                                            color: app.applicationStatus === 'Approved' ? '#1565c0' : 
                                                                  app.applicationStatus === 'Pending' ? '#ff8f00' : 
                                                                  app.applicationStatus === 'Rejected' ? '#c62828' : '#616161',
                                                            fontWeight: 500,
                                                            fontSize: { xs: '0.7rem', md: '0.75rem' }
                                                        }}
                                                    />
                                                </td>
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
            {filteredApplications.length > 0 && (
                <Box sx={{
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1
                }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                        Showing {filteredApplications.length} of {applicationsDetails.length} applications
                    </Typography>
                    {searchTerm && (
                        <Chip
                            label={`Search: "${searchTerm}"`}
                            size="small"
                            onDelete={() => {
                                setSearchTerm('');
                                setFilteredApplications(applicationsDetails);
                            }}
                            sx={{ fontSize: '0.75rem' }}
                        />
                    )}
                </Box>
            )}

            {/* כפתור גלילה למעלה */}
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

            {/* הסרנו את הכפתורים שמוצגים בעת בחירת שורה */}
        </Box>
    );
}

