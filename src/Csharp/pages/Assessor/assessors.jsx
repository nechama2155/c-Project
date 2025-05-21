  import { useState, useRef, useEffect } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { deleteAssessorThunk } from "../../redux/slices/delete/deleteAssessorThunk";
  import { Outlet, useNavigate } from "react-router-dom";
  import { editAssessor } from "../../redux/slices/assessorsSlice";
  import '../cssPages/Assessment.css';
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
  import PersonIcon from '@mui/icons-material/Person';
  import LocationOnIcon from '@mui/icons-material/LocationOn';
  import PhoneIcon from '@mui/icons-material/Phone';
  import EmailIcon from '@mui/icons-material/Email';
  import EditIcon from '@mui/icons-material/Edit';
  import DeleteIcon from '@mui/icons-material/Delete';
  import AddIcon from '@mui/icons-material/Add';
  import InfoIcon from '@mui/icons-material/Info';
  import WorkIcon from '@mui/icons-material/Work';
  import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
  import CheckIcon from '@mui/icons-material/Check';
  import CloseIcon from '@mui/icons-material/Close';

  export const Assessors = () => {
      const [selected, setSelected] = useState(false);
      const [selectedAs, setSelectedAs] = useState({});
      const dispatch = useDispatch();
      const assessorsDetails = useSelector(state => state.assessor.assessors);
      const wait = useSelector(state => state.application.wait);
      const type = useSelector(state => state.user.t);
      const navigate = useNavigate();
      const topRef = useRef(null);
      const [sortBy, setSortBy] = useState('none');
      const [searchTerm, setSearchTerm] = useState('');
      const [filteredAssessors, setFilteredAssessors] = useState([]);
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
          // בדיקה שהמערך קיים לפני השמה
          setFilteredAssessors(assessorsDetails || []);
      }, [assessorsDetails]);

      const scrollToTop = () => {
          topRef.current?.scrollIntoView({ behavior: 'smooth' });
      };

      const handleSort = (sortType) => {
          setSortBy(sortType);

          // בדיקה שהמערך קיים לפני מיון
          if (!filteredAssessors) {
              return;
          }

          let sortedAssessors = [...filteredAssessors];

          if (sortType === 'id') {
              sortedAssessors.sort((a, b) => a.assessorId - b.assessorId);
          } else if (sortType === 'name') {
              sortedAssessors.sort((a, b) => a.assessorFirstName.localeCompare(b.assessorFirstName));
          } else if (sortType === 'city') {
              sortedAssessors.sort((a, b) => a.assessorCity.localeCompare(b.assessorCity));
          } else if (sortType === 'seniority') {
              sortedAssessors.sort((a, b) => a.seniority - b.seniority);
          }

          setFilteredAssessors(sortedAssessors);
      };

      const handleSearch = () => {
          // בדיקה שהמערך קיים לפני חיפוש
          if (!assessorsDetails) {
              setFilteredAssessors([]);
              return;
          }

          if (!searchTerm.trim()) {
              setFilteredAssessors([...assessorsDetails]);
              return;
          }

          const term = searchTerm.toLowerCase();

          const results = assessorsDetails.filter(assessor => {
              // Convert all fields to strings and check if they include the search term
              return (
                  String(assessor.assessorId).toLowerCase().includes(term) ||
                  String(assessor.assessorFirstName).toLowerCase().includes(term) ||
                  String(assessor.assessorLastName).toLowerCase().includes(term) ||
                  String(assessor.assessorCity).toLowerCase().includes(term) ||
                  String(assessor.assessorAddress).toLowerCase().includes(term) ||
                  String(assessor.assessorPhone).toLowerCase().includes(term) ||
                  String(assessor.assessorEmail).toLowerCase().includes(term) ||
                  String(assessor.seniority).toLowerCase().includes(term)
              );
          });

          setFilteredAssessors(results);
      };

      const handleRowClick = (assessor) => {
          setSelected(true);
          setSelectedAs(assessor);
      };

      const handleDeleteAssessor = () => {
          setConfirmDialog(false);
          dispatch(deleteAssessorThunk(selectedAs.assessorId));
          setSnackbarMessage('Assessor has been successfully deleted!');
          setSnackbarOpen(true);
          setSelected(false);
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
                          <WorkIcon sx={{ mr: 1, fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }, color: '#3a7bd5' }} />
                          Assessors Management
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
                          View and manage assessors. Access detailed information about each assessor and their assignments.
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
                          startIcon={<PersonIcon />}
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
                              minWidth: { xs: '60px', md: 'auto' },
                              whiteSpace: 'nowrap'
                          }}
                      >
                          Name
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
                              minWidth: { xs: '60px', md: 'auto' },
                              whiteSpace: 'nowrap'
                          }}
                      >
                          City
                      </Button>
                      <Button
                          variant={sortBy === 'seniority' ? 'contained' : 'outlined'}
                          size={isXsScreen ? "small" : "medium"}
                          onClick={() => handleSort('seniority')}
                          startIcon={<WorkIcon />}
                          sx={{
                              background: sortBy === 'seniority' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                              '&:hover': {
                                  background: sortBy === 'seniority' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                              },
                              fontSize: { xs: '0.7rem', md: '0.875rem' },
                              padding: { xs: '4px 8px', md: '6px 16px' },
                              minWidth: { xs: '60px', md: 'auto' },
                              whiteSpace: 'nowrap'
                          }}
                      >
                          Seniority
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
                          placeholder={isXsScreen ? "Search..." : "Search assessors..."}
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
                                          setFilteredAssessors(assessorsDetails);
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

              {/* כפתור הוספת מעריך - מוצג רק למנהלים */}
              {type === 'a' && (
                  <Box sx={{ mb: 3, display: 'flex', justifyContent: 'flex-end' }}>
                      <Button
                          variant="contained"
                          startIcon={<AddIcon />}
                          onClick={() => { navigate('addAssessor') }}
                          sx={{
                              background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                              '&:hover': {
                                  background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                              },
                              boxShadow: '0 4px 10px rgba(43, 88, 118, 0.2)',
                              fontSize: { xs: '0.75rem', md: '0.875rem' }
                          }}
                      >
                          Add New Assessor
                      </Button>
                  </Box>
              )}

              <Container maxWidth="lg" sx={{ px: { xs: 0, sm: 2 } }}>
                  <Fade in={true} timeout={1200}>
                      <Box>
                        
                          {(  assessorsDetails === null || assessorsDetails.length === 0) ? (
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
                                      No assessors found
                                  </Typography>
                                  <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                                      Assessors will appear here once they are added
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
                                              {type === 'a' && (
                                                  <th style={{
                                                      padding: '12px 16px',
                                                      textAlign: 'left',
                                                      fontSize: '0.875rem',
                                                      fontWeight: 600,
                                                      color: '#495057',
                                                      whiteSpace: 'nowrap'
                                                  }}>ID</th>
                                              )}
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
                                              {!isXsScreen && (
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
                                              {type === 'a' && (
                                                  <>
                                                      <th style={{
                                                          padding: '12px 16px',
                                                          textAlign: 'left',
                                                          fontSize: '0.875rem',
                                                          fontWeight: 600,
                                                          color: '#495057',
                                                          whiteSpace: 'nowrap'
                                                      }}>Seniority</th>
                                                      {!isXsScreen && (
                                                          <th style={{
                                                              padding: '12px 16px',
                                                              textAlign: 'center',
                                                              fontSize: '0.875rem',
                                                              fontWeight: 600,
                                                              color: '#495057',
                                                              whiteSpace: 'nowrap'
                                                          }}>Available</th>
                                                      )}
                                                      <th style={{
                                                          padding: '12px 16px',
                                                          textAlign: 'center',
                                                          fontSize: '0.875rem',
                                                          fontWeight: 600,
                                                          color: '#495057',
                                                          whiteSpace: 'nowrap'
                                                      }}>Manager</th>
                                                  </>
                                              )}
                                          </tr>
                                      </thead>
                                      <tbody>
                                          {filteredAssessors.map((assessor, index) => (
                                              <tr
                                                  key={assessor.assessorId}
                                                  style={{
                                                      backgroundColor: (selected && selectedAs.assessorId === assessor.assessorId)
                                                          ? 'rgba(58, 123, 213, 0.08)'
                                                          : index % 2 === 0 ? 'white' : '#f8f9fa',
                                                      cursor: 'pointer',
                                                      transition: 'background-color 0.2s'
                                                  }}
                                                  onClick={() => handleRowClick(assessor)}
                                                  onMouseOver={(e) => {
                                                      if (!(selected && selectedAs.assessorId === assessor.assessorId)) {
                                                          e.currentTarget.style.backgroundColor = 'rgba(58, 123, 213, 0.04)';
                                                      }
                                                  }}
                                                  onMouseOut={(e) => {
                                                      if (!(selected && selectedAs.assessorId === assessor.assessorId)) {
                                                          e.currentTarget.style.backgroundColor = index % 2 === 0 ? 'white' : '#f8f9fa';
                                                      }
                                                  }}
                                              >
                                                  {type === 'a' && (
                                                      <td style={{
                                                          padding: '12px 16px',
                                                          borderBottom: '1px solid #e9ecef',
                                                          fontSize: '0.875rem',
                                                          color: '#495057',
                                                          whiteSpace: 'nowrap'
                                                      }}>{assessor.assessorId}</td>
                                                  )}
                                                  <td style={{
                                                      padding: '12px 16px',
                                                      borderBottom: '1px solid #e9ecef',
                                                      fontSize: '0.875rem',
                                                      color: '#212529',
                                                      fontWeight: 500,
                                                      whiteSpace: 'nowrap'
                                                  }}>{assessor.assessorFirstName}</td>
                                                  <td style={{
                                                      padding: '12px 16px',
                                                      borderBottom: '1px solid #e9ecef',
                                                      fontSize: '0.875rem',
                                                      color: '#212529',
                                                      fontWeight: 500,
                                                      whiteSpace: 'nowrap'
                                                  }}>{assessor.assessorLastName}</td>
                                                  <td style={{
                                                      padding: '12px 16px',
                                                      borderBottom: '1px solid #e9ecef',
                                                      fontSize: '0.875rem',
                                                      color: '#495057',
                                                      whiteSpace: 'nowrap'
                                                  }}>{assessor.assessorCity}</td>
                                                  {!isXsScreen && (
                                                      <td style={{
                                                          padding: '12px 16px',
                                                          borderBottom: '1px solid #e9ecef',
                                                          fontSize: '0.875rem',
                                                          color: '#495057',
                                                          whiteSpace: 'nowrap'
                                                      }}>{assessor.assessorAddress}</td>
                                                  )}
                                                  {!isXsScreen && (
                                                      <td style={{
                                                          padding: '12px 16px',
                                                          borderBottom: '1px solid #e9ecef',
                                                          fontSize: '0.875rem',
                                                          color: '#495057',
                                                          whiteSpace: 'nowrap'
                                                      }}>{assessor.assessorPhone}</td>
                                                  )}
                                                  {!isXsScreen && (
                                                      <td style={{
                                                          padding: '12px 16px',
                                                          borderBottom: '1px solid #e9ecef',
                                                          fontSize: '0.875rem',
                                                          color: '#495057',
                                                          whiteSpace: 'nowrap'
                                                      }}>{assessor.assessorEmail}</td>
                                                  )}
                                                  {type === 'a' && (
                                                      <>
                                                          <td style={{
                                                              padding: '12px 16px',
                                                              borderBottom: '1px solid #e9ecef',
                                                              fontSize: '0.875rem',
                                                              color: '#495057',
                                                              whiteSpace: 'nowrap'
                                                          }}>{assessor.seniority}</td>
                                                          {!isXsScreen && (
                                                              <td style={{
                                                                  padding: '12px 16px',
                                                                  borderBottom: '1px solid #e9ecef',
                                                                  fontSize: '0.875rem',
                                                                  color: '#495057',
                                                                  textAlign: 'center',
                                                                  whiteSpace: 'nowrap'
                                                              }}>
                                                                  <Chip
                                                                      label={assessor.available ? "Yes" : "No"}
                                                                      size="small"
                                                                      sx={{
                                                                          bgcolor: assessor.available ? '#e3f2fd' : '#ffebee',
                                                                          color: assessor.available ? '#1565c0' : '#c62828',
                                                                          fontWeight: 500,
                                                                          fontSize: '0.7rem'
                                                                      }}
                                                                  />
                                                              </td>
                                                          )}
                                                          <td style={{
                                                              padding: '12px 16px',
                                                              borderBottom: '1px solid #e9ecef',
                                                              fontSize: '0.875rem',
                                                              color: '#495057',
                                                              textAlign: 'center',
                                                              whiteSpace: 'nowrap'
                                                          }}>
                                                              <Chip
                                                                  label={assessor.isManager ? "Yes" : "No"}
                                                                  size="small"
                                                                  sx={{
                                                                      bgcolor: assessor.isManager ? '#e8f5e9' : '#f5f5f5',
                                                                      color: assessor.isManager ? '#2e7d32' : '#616161',
                                                                      fontWeight: 500,      
                                                                      fontSize: '0.7rem'
                                                                  }}
                                                              />
                                                          </td>
                                                      </>
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
              {filteredAssessors && assessorsDetails && filteredAssessors.length > 0 && (
                  <Box sx={{
                      mt: 2,
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 1
                  }}>
                      <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                          Showing {filteredAssessors.length} of {assessorsDetails.length} assessors
                      </Typography>
                      {searchTerm && (
                          <Chip
                              label={`Search: "${searchTerm}"`}
                              size="small"
                              onDelete={() => {
                                  setSearchTerm('');
                                  setFilteredAssessors(assessorsDetails || []);
                              }}
                              sx={{ fontSize: '0.75rem' }}
                          />
                      )}
                  </Box>
              )}

              {/* כפתורי פעולה כשיש שורה נבחרת */}
              {selected && type === 'a' && (
                  <Box sx={{
                      position: 'fixed',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: { xs: 2, md: 3 },
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      borderTop: '1px solid #e0e0e0',
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 2,
                      zIndex: 10,
                      boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
                  }}>
                      <Button
                          variant="outlined"
                          onClick={() => setSelected(false)}
                          sx={{
                              borderColor: '#3a7bd5',
                              color: '#3a7bd5',
                              '&:hover': {
                                  borderColor: '#2b5876',
                                  backgroundColor: 'rgba(58, 123, 213, 0.1)'
                              }
                          }}
                      >
                          Deselect
                      </Button>
                      <Button
                          variant="contained"
                          startIcon={<EditIcon />}
                          onClick={() => {
                              dispatch(editAssessor(selectedAs));
                              navigate('editAssessor');
                          }}
                          sx={{
                              background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                              '&:hover': {
                                  background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                              }
                          }}
                      >
                          Edit Assessor
                      </Button>
                      <Button
                          variant="contained"
                          startIcon={<DeleteIcon />}
                          onClick={() => setConfirmDialog(true)}
                          sx={{
                              background: 'linear-gradient(90deg, #e53935 0%, #c62828 100%)',
                              '&:hover': {
                                  background: 'linear-gradient(90deg, #e53935 0%, #c62828 90%)'
                              }
                          }}
                      >
                          Delete Assessor
                      </Button>
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

              {/* דיאלוג אישור מחיקה */}
              <Dialog
                  open={confirmDialog}
                  onClose={() => setConfirmDialog(false)}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
              >
                  <DialogTitle id="alert-dialog-title" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <DeleteIcon color="error" />
                      {"Confirm Delete Assessor"}
                  </DialogTitle>
                  <DialogContent>
                      <DialogContentText id="alert-dialog-description">
                          Are you sure you want to delete assessor {selectedAs.assessorFirstName} {selectedAs.assessorLastName}? This action cannot be undone.
                      </DialogContentText>
                  </DialogContent>
                  <DialogActions sx={{ px: 3, pb: 3 }}>
                      <Button
                          onClick={() => setConfirmDialog(false)}
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
                          Cancel
                      </Button>
                      <Button
                          onClick={handleDeleteAssessor}
                          variant="contained"
                          autoFocus
                          sx={{
                              background: 'linear-gradient(90deg, #e53935 0%, #c62828 100%)',
                              '&:hover': {
                                  background: 'linear-gradient(90deg, #e53935 0%, #c62828 90%)'
                              }
                          }}
                      >
                          Delete
                      </Button>
                  </DialogActions>
              </Dialog>

              {/* Snackbar להודעות */}
              <Snackbar
                  open={snackbarOpen}
                  autoHideDuration={6000}
                  onClose={() => setSnackbarOpen(false)}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
              >
                  <Alert
                      onClose={() => setSnackbarOpen(false)}
                      severity="success"
                      variant="filled"
                      sx={{ width: '100%' }}
                  >
                      {snackbarMessage}
                  </Alert>
              </Snackbar>

              <Outlet />
          </Box>
      );
  };

