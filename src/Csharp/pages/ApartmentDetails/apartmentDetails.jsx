
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../cssPages/Assessment.css";
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
    useTheme,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import SortIcon from '@mui/icons-material/Sort';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SquareFootIcon from '@mui/icons-material/SquareFoot';
import ApartmentIcon from '@mui/icons-material/Apartment';
import ElevatorIcon from '@mui/icons-material/Elevator';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const ApartmentDetails = () => {
    const apartmentsDetails = useSelector(state => state.apartmentDetails.apartmentsDetails);
    const thisAssessor = useSelector(state => state.assessor.thisAssessor);
    const thisCustomer = useSelector(state => state.customer.thisCustomer);
    const type = useSelector(state => state.user.t);
    const dispatch = useDispatch();
    const [selected, setSelected] = useState(false);
    const [selectedAs, setSelectedAs] = useState({});
    const topRef = useRef(null);
    const [sortBy, setSortBy] = useState('none');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredApartments, setFilteredApartments] = useState([]);
    const [detailsDialog, setDetailsDialog] = useState(false);

    // הוספת שימוש בתמה ובדיקות מדיה לרספונסיביות
    const theme = useTheme();
    const isXsScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const isMdScreen = useMediaQuery(theme.breakpoints.down('md'));

    // useEffect commented out as in original code

    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);

        setFilteredApartments(apartmentsDetails);
    }, [apartmentsDetails]);

    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const handleSort = (sortType) => {
        setSortBy(sortType);

        let sortedApartments = [...apartmentsDetails];

        if (sortType === 'id') {
            sortedApartments.sort((a, b) => a.apartmentId - b.apartmentId);
        } else if (sortType === 'city') {
            sortedApartments.sort((a, b) => a.apartmentCity.localeCompare(b.apartmentCity));
        } else if (sortType === 'size') {
            sortedApartments.sort((a, b) => a.apartmentSize - b.apartmentSize);
        } else if (sortType === 'floor') {
            sortedApartments.sort((a, b) => a.floor - b.floor);
        }

        setFilteredApartments(sortedApartments);
    };

    const handleSearch = () => {
        if (!searchTerm.trim()) {
            setFilteredApartments([...apartmentsDetails]);
            return;
        }

        const term = searchTerm.toLowerCase();

        const results = apartmentsDetails.filter(apartment => {
            // Convert all fields to strings and check if they include the search term
            return (
                String(apartment.apartmentId).toLowerCase().includes(term) ||
                String(apartment.customerId).toLowerCase().includes(term) ||
                String(apartment.apartmentCity).toLowerCase().includes(term) ||
                String(apartment.apartmentAddress).toLowerCase().includes(term) ||
                String(apartment.apartmentSize).toLowerCase().includes(term) ||
                String(apartment.airDirections).toLowerCase().includes(term) ||
                String(apartment.directions).toLowerCase().includes(term) ||
                String(apartment.floor).toLowerCase().includes(term) ||
                String(apartment.elevator).toLowerCase().includes(term)
            );
        });

        setFilteredApartments(results);
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
                        <ApartmentIcon sx={{ mr: 1, fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }, color: '#3a7bd5' }} />
                        Apartment Details
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
                        View and manage apartment information including location, size, and features. Browse through all registered properties.
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
                        startIcon={<HomeIcon />}
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
                        variant={sortBy === 'size' ? 'contained' : 'outlined'}
                        size={isXsScreen ? "small" : "medium"}
                        onClick={() => handleSort('size')}
                        startIcon={<SquareFootIcon />}
                        sx={{
                            background: sortBy === 'size' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'size' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            },
                            fontSize: { xs: '0.7rem', md: '0.875rem' },
                            padding: { xs: '4px 8px', md: '6px 16px' },
                            minWidth: { xs: '60px', md: 'auto' }
                        }}
                    >
                        Size
                    </Button>
                    <Button
                        variant={sortBy === 'floor' ? 'contained' : 'outlined'}
                        size={isXsScreen ? "small" : "medium"}
                        onClick={() => handleSort('floor')}
                        startIcon={<ElevatorIcon />}
                        sx={{
                            background: sortBy === 'floor' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'floor' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            },
                            fontSize: { xs: '0.7rem', md: '0.875rem' },
                            padding: { xs: '4px 8px', md: '6px 16px' },
                            minWidth: { xs: '60px', md: 'auto' }
                        }}
                    >
                        Floor
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
                        placeholder={isXsScreen ? "Search..." : "Search apartments..."}
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
                                        setFilteredApartments(apartmentsDetails);
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
                        {apartmentsDetails.length === 0 ? (
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
                                    No apartment details available
                                </Typography>
                                <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                                    Apartment information will appear here once added
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
                                            {!isXsScreen && (
                                                <th style={{
                                                    padding: '12px 16px',
                                                    textAlign: 'left',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600,
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>Customer ID</th>
                                            )}
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
                                            <th style={{
                                                padding: '12px 16px',
                                                textAlign: 'left',
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                                color: '#495057',
                                                whiteSpace: 'nowrap'
                                            }}>Size</th>
                                            {!isMdScreen && (
                                                <th style={{
                                                    padding: '12px 16px',
                                                    textAlign: 'left',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600,
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>Air Directions</th>
                                            )}
                                            {!isMdScreen && (
                                                <th style={{
                                                    padding: '12px 16px',
                                                    textAlign: 'left',
                                                    fontSize: '0.875rem',
                                                    fontWeight: 600,
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>Directions</th>
                                            )}
                                            <th style={{
                                                padding: '12px 16px',
                                                textAlign: 'left',
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                                color: '#495057',
                                                whiteSpace: 'nowrap'
                                            }}>Floor</th>
                                            <th style={{
                                                padding: '12px 16px',
                                                textAlign: 'center',
                                                fontSize: '0.875rem',
                                                fontWeight: 600,
                                                color: '#495057',
                                                whiteSpace: 'nowrap'
                                            }}>Elevator</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredApartments.map((apartment, index) => (
                                            <tr
                                                key={apartment.apartmentId}
                                                style={{
                                                    backgroundColor: (selected && selectedAs.apartmentId === apartment.apartmentId)
                                                        ? 'rgba(58, 123, 213, 0.08)'
                                                        : index % 2 === 0 ? 'white' : '#f8f9fa',
                                                    cursor: 'pointer',
                                                    transition: 'background-color 0.2s'
                                                }}
                                                onMouseOver={(e) => {
                                                    if (!(selected && selectedAs.apartmentId === apartment.apartmentId)) {
                                                        e.currentTarget.style.backgroundColor = 'rgba(58, 123, 213, 0.04)';
                                                    }
                                                }}
                                                onMouseOut={(e) => {
                                                    if (!(selected && selectedAs.apartmentId === apartment.apartmentId)) {
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
                                                }}>{apartment.apartmentId}</td>
                                                {!isXsScreen && (
                                                    <td style={{
                                                        padding: '12px 16px',
                                                        borderBottom: '1px solid #e9ecef',
                                                        fontSize: '0.875rem',
                                                        color: '#495057',
                                                        whiteSpace: 'nowrap'
                                                    }}>{apartment.customerId}</td>
                                                )}
                                                <td style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid #e9ecef',
                                                    fontSize: '0.875rem',
                                                    color: '#212529',
                                                    fontWeight: 500,
                                                    whiteSpace: 'nowrap'
                                                }}>{apartment.apartmentCity}</td>
                                                {!isXsScreen && (
                                                    <td style={{
                                                        padding: '12px 16px',
                                                        borderBottom: '1px solid #e9ecef',
                                                        fontSize: '0.875rem',
                                                        color: '#495057',
                                                        whiteSpace: 'nowrap'
                                                    }}>{apartment.apartmentAddress}</td>
                                                )}
                                                <td style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid #e9ecef',
                                                    fontSize: '0.875rem',
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>{apartment.apartmentSize}</td>
                                                {!isMdScreen && (
                                                    <td style={{
                                                        padding: '12px 16px',
                                                        borderBottom: '1px solid #e9ecef',
                                                        fontSize: '0.875rem',
                                                        color: '#495057',
                                                        whiteSpace: 'nowrap'
                                                    }}>{apartment.airDirections}</td>
                                                )}
                                                {!isMdScreen && (
                                                    <td style={{
                                                        padding: '12px 16px',
                                                        borderBottom: '1px solid #e9ecef',
                                                        fontSize: '0.875rem',
                                                        color: '#495057',
                                                        whiteSpace: 'nowrap'
                                                    }}>{apartment.directions}</td>
                                                )}
                                                <td style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid #e9ecef',
                                                    fontSize: '0.875rem',
                                                    color: '#495057',
                                                    whiteSpace: 'nowrap'
                                                }}>{apartment.floor}</td>
                                                <td style={{
                                                    padding: '12px 16px',
                                                    borderBottom: '1px solid #e9ecef',
                                                    fontSize: '0.875rem',
                                                    color: '#495057',
                                                    textAlign: 'center',
                                                    whiteSpace: 'nowrap'
                                                }}>
                                                    <Chip
                                                        label={apartment.elevator ? "Yes" : "No"}
                                                        size="small"
                                                        sx={{
                                                            bgcolor: apartment.elevator ? '#e3f2fd' : '#ffebee',
                                                            color: apartment.elevator ? '#1565c0' : '#c62828',
                                                            fontWeight: 500,
                                                            fontSize: '0.7rem'
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
            {filteredApartments.length > 0 && (
                <Box sx={{
                    mt: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 1
                }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                        Showing {filteredApartments.length} of {apartmentsDetails.length} apartments
                    </Typography>
                    {searchTerm && (
                        <Chip
                            label={`Search: "${searchTerm}"`}
                            size="small"
                            onDelete={() => {
                                setSearchTerm('');
                                setFilteredApartments(apartmentsDetails);
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

            {/* דיאלוג פרטי דירה */}
            <Dialog
                open={detailsDialog}
                onClose={() => {
                    setDetailsDialog(false);
                    setSelected(false);
                }}
                maxWidth="sm"
                fullWidth
            >
                <DialogTitle sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderBottom: '1px solid #e0e0e0',
                    pb: 2
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <ApartmentIcon sx={{ mr: 1, color: '#3a7bd5' }} />
                        <Typography variant="h6" component="div">
                            Apartment Details
                        </Typography>
                    </Box>
                    <IconButton size="small" onClick={() => {
                        setDetailsDialog(false);
                        setSelected(false);
                    }}>
                        <ClearIcon fontSize="small" />
                    </IconButton>
                </DialogTitle>
                <DialogContent sx={{ pt: 2 }}>
                    {selected && selectedAs && (
                        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                                    Apartment ID
                                </Typography>
                                <Typography variant="body1" fontWeight="500">
                                    {selectedAs.apartmentId}
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                                    Customer ID
                                </Typography>
                                <Typography variant="body1" fontWeight="500">
                                    {selectedAs.customerId}
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                                    City
                                </Typography>
                                <Typography variant="body1">
                                    {selectedAs.apartmentCity}
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                                    Address
                                </Typography>
                                <Typography variant="body1">
                                    {selectedAs.apartmentAddress}
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                                    Size
                                </Typography>
                                <Typography variant="body1">
                                    {selectedAs.apartmentSize} sqm
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                                    Floor
                                </Typography>
                                <Typography variant="body1">
                                    {selectedAs.floor}
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                                    Air Directions
                                </Typography>
                                <Typography variant="body1">
                                    {selectedAs.airDirections}
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 2 }}>
                                <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                                    Directions
                                </Typography>
                                <Typography variant="body1">
                                    {selectedAs.directions}
                                </Typography>
                            </Box>

                            <Box sx={{ mb: 2, gridColumn: { sm: '1 / span 2' } }}>
                                <Typography variant="body2" color="text.secondary" fontSize="0.75rem">
                                    Elevator
                                </Typography>
                                <Chip
                                    label={selectedAs.elevator ? "Yes" : "No"}
                                    size="small"
                                    icon={selectedAs.elevator ? <CheckCircleOutlineIcon fontSize="small" /> : <ClearIcon fontSize="small" />}
                                    sx={{
                                        bgcolor: selectedAs.elevator ? '#e3f2fd' : '#ffebee',
                                        color: selectedAs.elevator ? '#1565c0' : '#c62828',
                                        fontWeight: 500,
                                        mt: 0.5
                                    }}
                                />
                            </Box>
                        </Box>
                    )}
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 3 }}>
                    <Button
                        onClick={() => {
                            setDetailsDialog(false);
                            setSelected(false);
                        }}
                        variant="outlined"
                        sx={{
                            borderColor: '#3a7bd5',
                            color: '#3a7bd5',
                            '&:hover': {
                                borderColor: '#2b5876',
                                backgroundColor: 'rgba(58, 123, 213, 0.1)'
                            }
                        }}
                    >
                        Close
                    </Button>
                    {type === "a" && thisAssessor.isManager && (
                        <Button
                            variant="contained"
                            startIcon={<EditIcon />}
                            onClick={() => {
                                // Edit apartment functionality
                                setDetailsDialog(false);
                                console.log("Edit apartment:", selectedAs);
                            }}
                            sx={{
                                background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                                '&:hover': {
                                    background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                                }
                            }}
                        >
                            Edit Apartment
                        </Button>
                    )}
                </DialogActions>
            </Dialog>
        </Box>
    );
};
