// import { useEffect, useState } from "react";
// import { useDispatch ,useSelector} from "react-redux";
// import { apartmentDetailsThunk } from "../../redux/slices/get/apartmentDetailsThunk";
// import Aod from "@mui/icons-material/Aod";
// import { myApartmentDetailsThunk } from "../../redux/slices/get by assessor/myApartmentDetailsThunk";
// import { yourApartmentDetailsThunk } from "../../redux/slices/get by customer/yourApartmentsDetailsThunk";

// export const ApartmentDetails = () => {

//     const apartmentsDetails = useSelector(state => state.apartmentDetails.apartmentsDetails);
//     const thisAssessor = useSelector(state => state.assessor.thisAssessor);
//     const thisCustomer = useSelector(state => state.customer.thisCustomer);
//     const type = useSelector(state => state.user.t);
//     const dispatch = useDispatch();
//     const [selected,setSelected] = useState(false);
//     const [selectedAs,setSelectedAs] = useState({});
    
//     // useEffect(() => {
//     //     if (apartmentsDetails.length === 0) {
//     //         if (type === "a") {
//     //             if (thisAssessor.isManager)
//     //                 dispatch(apartmentDetailsThunk());
//     //             // else
//     //                 // dispatch(myApartmentDetailsThunk(thisAssessor.assessorId));
//     //         }
//     //         else if (type === "c") {
//     //             dispatch(yourApartmentDetailsThunk(thisCustomer.customerId));
//     //         }
//     //     }
//     // }, [])
//     return <div >
//         <table>
//             <thead>
//                 <tr>
//                     <th>Id</th>
//                     <th>CustomerId</th>
//                     <th>City</th>
//                     <th>Address</th>
//                     <th>Size</th>
//                     <th>Air Directions</th>
//                     <th>Directions</th>
//                     <th>Floor</th>
//                     <th>Elevator</th>
//                 </tr>
//             </thead>
//             <tbody>
               
//                     {apartmentsDetails && apartmentsDetails.map(d => {
//                return  <tr key={d.apartmentId}  onClick={()=>{setSelected(true);setSelectedAs(d)}} className={(selected&& selectedAs === d)?"s":"r"}>
//                     <td>{d.apartmentId}</td>
//                     <td>{d.customerId}</td>
//                     <td>{d.apartmentCity}</td>
//                     <td>{d.apartmentAddress}</td>
//                     <td>{d.apartmentSize}</td>
//                     <td>{d.airDirections}</td>
//                     <td>{d.directions}</td>
//                     <td>{d.floor}</td>
//                     <td>{d.elevator}</td>
//                    </tr>
//                     })}
               
//             </tbody>
//         </table>
//         {/* <input type="file"/> */}
//         {/* <button onClick={()=>(dispatch(apartmentDetailsThunk()))}>o</button> */}
//     </div>
// }
////////////////////////////////////////
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { apartmentDetailsThunk } from "../../redux/slices/get/apartmentDetailsThunk";
// import Aod from "@mui/icons-material/Aod";
// import { myApartmentDetailsThunk } from "../../redux/slices/get by assessor/myApartmentDetailsThunk";
// import { yourApartmentDetailsThunk } from "../../redux/slices/get by customer/yourApartmentsDetailsThunk";
// import "../cssPages/Assessment.css";

// export const ApartmentDetails = () => {
//     const apartmentsDetails = useSelector(state => state.apartmentDetails.apartmentsDetails);
//     const thisAssessor = useSelector(state => state.assessor.thisAssessor);
//     const thisCustomer = useSelector(state => state.customer.thisCustomer);
//     const type = useSelector(state => state.user.t);
//     const dispatch = useDispatch();
//     const [selected, setSelected] = useState(false);
//     const [selectedAs, setSelectedAs] = useState({});
    
//     // useEffect commented out as in original code
    
//     return (
//         <div className="assessment-container ApartmentDetails">
//             <div className="assessment-content">
//                 {apartmentsDetails && apartmentsDetails.length > 0 && (
//                     <div className="grid-table">
//                         <div className="grid-header-container">
//                             <div className="grid-header">
//                                 <div className="grid-cell">ID</div>
//                                 <div className="grid-cell">Customer ID</div>
//                                 <div className="grid-cell">City</div>
//                                 <div className="grid-cell">Address</div>
//                                 <div className="grid-cell">Size</div>
//                                 <div className="grid-cell">Air Directions</div>
//                                 <div className="grid-cell">Directions</div>
//                                 <div className="grid-cell">Floor</div>
//                                 <div className="grid-cell">Elevator</div>
//                             </div>
//                         </div>
                        
//                         <div className="grid-body-container">
//                             {apartmentsDetails.map(d => (
//                                 <div 
//                                     key={d.apartmentId} 
//                                     className={`grid-row ${(selected && selectedAs === d) ? "selected-row" : ""}`}
//                                     onClick={() => { setSelected(true); setSelectedAs(d) }}
//                                 >
//                                     <div className="grid-cell">{d.apartmentId}</div>
//                                     <div className="grid-cell">{d.customerId}</div>
//                                     <div className="grid-cell">{d.apartmentCity}</div>
//                                     <div className="grid-cell">{d.apartmentAddress}</div>
//                                     <div className="grid-cell">{d.apartmentSize}</div>
//                                     <div className="grid-cell">{d.airDirections}</div>
//                                     <div className="grid-cell">{d.directions}</div>
//                                     <div className="grid-cell">{d.floor}</div>
//                                     <div className="grid-cell">{d.elevator ? "Yes" : "No"}</div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}
                
//                 {apartmentsDetails && apartmentsDetails.length === 0 && (
//                     <div className="no-data-message">
//                         <p>No apartment details available</p>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apartmentDetailsThunk } from "../../redux/slices/get/apartmentDetailsThunk";
import Aod from "@mui/icons-material/Aod";
import { myApartmentDetailsThunk } from "../../redux/slices/get by assessor/myApartmentDetailsThunk";
import { yourApartmentDetailsThunk } from "../../redux/slices/get by customer/yourApartmentsDetailsThunk";
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
    Chip
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
import AirIcon from '@mui/icons-material/Air';

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
                        <ApartmentIcon sx={{ mr: 1, fontSize: '2rem', color: '#3a7bd5' }} />
                        Apartment Details
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
                        View and manage apartment information including location, size, and features. Browse through all registered properties.
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
                        variant={sortBy === 'id' ? 'contained' : 'outlined'}
                        size="small"
                        onClick={() => handleSort('id')}
                        startIcon={<HomeIcon />}
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
                        startIcon={<LocationOnIcon />}
                        sx={{
                            background: sortBy === 'city' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'city' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            }
                        }}
                    >
                        City
                    </Button>
                    <Button
                        variant={sortBy === 'size' ? 'contained' : 'outlined'}
                        size="small"
                        onClick={() => handleSort('size')}
                        startIcon={<SquareFootIcon />}
                        sx={{
                            background: sortBy === 'size' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'size' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            }
                        }}
                    >
                        Size
                    </Button>
                    <Button
                        variant={sortBy === 'floor' ? 'contained' : 'outlined'}
                        size="small"
                        onClick={() => handleSort('floor')}
                        startIcon={<ElevatorIcon />}
                        sx={{
                            background: sortBy === 'floor' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'floor' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            }
                        }}
                    >
                        Floor
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
                        placeholder="Search apartments..."
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
                        {apartmentsDetails.length === 0 ? (
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
                                    No apartment details available
                                </Typography>
                                <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1 }}>
                                    Apartment information will appear here once added
                                </Typography>
                            </Paper>
                        ) : (
                            <div className="assessment-container ApartmentDetails">
                                <div className="assessment-content">
                                    <div className="grid-table">
                                        <div className="grid-header-container">
                                            <div className="grid-header">
                                                <div className="grid-cell">ID</div>
                                                <div className="grid-cell">Customer ID</div>
                                                <div className="grid-cell">City</div>
                                                <div className="grid-cell">Address</div>
                                                <div className="grid-cell">Size</div>
                                                <div className="grid-cell">Air Directions</div>
                                                <div className="grid-cell">Directions</div>
                                                <div className="grid-cell">Floor</div>
                                                <div className="grid-cell">Elevator</div>
                                            </div>
                                        </div>
                                        
                                        <div className="grid-body-container">
                                            {filteredApartments.map(d => (
                                                <div 
                                                    key={d.apartmentId} 
                                                    className={`grid-row ${(selected && selectedAs === d) ? "selected-row" : ""}`}
                                                    onClick={() => { setSelected(true); setSelectedAs(d) }}
                                                >
                                                    <div className="grid-cell">{d.apartmentId}</div>
                                                    <div className="grid-cell">{d.customerId}</div>
                                                    <div className="grid-cell">{d.apartmentCity}</div>
                                                    <div className="grid-cell">{d.apartmentAddress}</div>
                                                    <div className="grid-cell">{d.apartmentSize}</div>
                                                    <div className="grid-cell">{d.airDirections}</div>
                                                    <div className="grid-cell">{d.directions}</div>
                                                    <div className="grid-cell">{d.floor}</div>
                                                    <div className="grid-cell">
                                                        <Chip 
                                                            label={d.elevator ? "Yes" : "No"}
                                                            size="small"
                                                            sx={{
                                                                bgcolor: d.elevator ? '#e3f2fd' : '#ffebee',
                                                                color: d.elevator ? '#1565c0' : '#c62828',
                                                                fontWeight: 500
                                                            }}
                                                        />
                                                    </div>
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
                        startIcon={<ApartmentIcon />}
                        onClick={() => {
                            // View apartment details functionality can be added here
                            console.log("View details for apartment:", selectedAs.apartmentId);
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
        </Box>
    );
}
