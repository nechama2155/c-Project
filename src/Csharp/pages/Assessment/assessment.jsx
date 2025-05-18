
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
import { assessmentThunk } from "../../redux/slices/get/assessmentThunk";
import { Button } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { editAssessment } from "../../redux/slices/assessmentSlice";
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