import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { applicationThunk } from "../redux/slices/get/applicatiionThunk";
import { myApplicationsThunk } from "../redux/slices/get by assessor/myApplicationsThunk";
import { assessmentThunk } from "../redux/slices/get/assessmentThunk";
import { myAssessmentsThunk } from "../redux/slices/get by assessor/myAssessmentsThunk";
import {
  Button,
  Box,
  Typography,
  Paper,
  Divider,
  Container,
  Fade,
  Collapse,
  Chip,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import * as React from 'react';
import BookmarkAddedOutlinedIcon from '@mui/icons-material/BookmarkAddedOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import { Outlet, useNavigate } from "react-router-dom";
import { apartmentDetailsThunk } from "../redux/slices/get/apartmentDetailsThunk";
import { myApartmentDetailsThunk } from "../redux/slices/get by assessor/myApartmentDetailsThunk";
import { yourApplicationsThunk } from "../redux/slices/get by customer/yourApplicationsThunk";
import { yourAssessmentsThunk } from "../redux/slices/get by customer/yourAssessmentsThunk";
import { yourApartmentDetailsThunk } from "../redux/slices/get by customer/yourApartmentsDetailsThunk";
import { yourAssessorsThunk } from "../redux/slices/get by customer/yourAssessorsThunk";
import { setApplicationId, setLastChats, setTo } from "../redux/slices/chatSlice";
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

export const FullApplications = () => {
  const thisAssessor = useSelector(state => state.assessor.thisAssessor);
  const customerChose = useSelector(state => state.customer.customerChose);
  const thisCustomer = useSelector(state => state.customer.thisCustomer);
  const theApplication = useSelector(state => state.application.applications);
  const myApplication = useSelector(state => state.application.myApplication);
  const assessmentsDetails = useSelector(state => state.assessment.assessments);
  const apartmentsDetails = useSelector(state => state.apartmentDetails.apartmentsDetails);
  const customersDetails = useSelector(state => state.customer.customers);
  const assessorsDetails = useSelector(state => state.assessor.assessors);
  const full = useSelector(state => state.user.full);
  const chatDetails = useSelector(state => state.chat.chats);
  const type = useSelector(state => state.user.t);
  const dispatch = useDispatch();
  const [sent, setSent] = useState(false);
  const [fullDetails, setFullDetails] = useState([]);
  const [finalAssessor, setFinalAssessor] = useState([]);
  const [applicationsDetails, setApplicationDetails] = useState([...theApplication]);
  const navigate = useNavigate();

  // חדש - עבור העיצוב החדש
  const topRef = useRef(null);
  const [expandedItems, setExpandedItems] = useState({});
  const [expandAll, setExpandAll] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [sortBy, setSortBy] = useState('none');

  // 4. וידוא שפונקציית getData מעדכנת את הפניות גם אם אין להן מעריך
  const getData = async () => {
    const res = await dispatch(yourApplicationsThunk(customerChose.customerId));
    if (res.payload != null) {
      console.log("Applications received:", res.payload); // הוספת לוג לבדיקה
      setApplicationDetails(res.payload);
    } else {
      console.log("No applications received or payload is null"); // הוספת לוג לבדיקה
    }
  }

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    if (type === "a") {
      if (thisAssessor.isManager && assessorsDetails) {
        setFinalAssessor(assessorsDetails);
      } else {
        const a = [];
        a.push(thisAssessor);
        setFinalAssessor(a);
      }
    }
    else if (type === "c" && assessorsDetails) {
      setFinalAssessor(assessorsDetails);
    }
    if (!full) {
      getData();
    }
  }, []);

  useEffect(() => {
    if (fullDetails.length === 0 && 
        applicationsDetails && applicationsDetails.length !== 0 && 
        apartmentsDetails && apartmentsDetails.length !== 0 && 
        assessmentsDetails && assessmentsDetails.length !== 0) {
      // הסרנו את התנאי על finalAssessor כדי לאפשר הצגת פניות גם ללא מעריך
      const s = [];
      applicationsDetails.forEach(element => {
        s.push(element.applicationId);
      });
      setFullDetails(s);
      setFilteredApplications(s); // עבור החיפוש והמיון
    }
  }, [applicationsDetails, assessmentsDetails, apartmentsDetails]);

  // const assess = (a, applicationId) => {
  //   if (!applicationsDetails) return false;
  //   const aa = applicationsDetails.find(c => c.assessorId === a.assessorId);
  //   if (aa && aa.applicationId === applicationId)
  //     return true;
  //   return false;
  //   return false;
  // }

  const assess = (a, applicationId) => {
    if (!applicationsDetails) return false;
    // בדיקה אם יש פניה עם מזהה זה
    const application = applicationsDetails.find(app => app.applicationId === applicationId);
    // אם אין מעריך לפניה זו, נחזיר false
    if (!application || !application.assessorId) return false;
    // בדיקה אם המעריך הנוכחי הוא המעריך של הפניה
    return application.assessorId === a.assessorId;
  }
  

  const cust = (y, applicationId) => {
    if (!apartmentsDetails) return false;
    const cc = apartmentsDetails.find(c => c.customerId === y);
    if (cc && cc.apartmentId === applicationId)
      return true;
    return false;
  }

  const chatMe = (element) => {
    if (!chatDetails) return;
    let arr = [];
    chatDetails.forEach(e => {
      if (element === e.applicationId) {
        arr.push(e);
      }
    });
    dispatch(setLastChats(arr));
  }

  // פונקציות חדשות עבור העיצוב החדש
  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleItemExpansion = (itemId) => {
    // פשוט להחליף את מצב ההרחבה של הפריט הנוכחי
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };
  

  const toggleExpandAll = () => {
    const newExpandAll = !expandAll;
    setExpandAll(newExpandAll);

    // עדכון כל הפריטים להיות מורחבים או מכווצים
    const newExpandedItems = {};
    fullDetails.forEach(id => {
      newExpandedItems[id] = newExpandAll;
    });
    setExpandedItems(newExpandedItems);
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setFilteredApplications([...fullDetails]);
      return;
    }

    const term = searchTerm.toLowerCase();

    // חיפוש בכל הנתונים
    const results = fullDetails.filter(appId => {
      // בדיקה באפליקציות
      const app = applicationsDetails.find(a => a.applicationId === appId);
      if (app && Object.values(app).some(val =>
        val && typeof val === 'string' && val.toLowerCase().includes(term)
      )) {
        return true;
      }

      // בדיקה בהערכות
      const assessment = assessmentsDetails.find(a => a.assessmentId === appId);
      if (assessment && Object.values(assessment).some(val =>
        val && typeof val === 'string' && val.toLowerCase().includes(term)
      )) {
        return true;
      }

      // בדיקה בפרטי דירה
      const apartment = apartmentsDetails.find(a => a.apartmentId === appId);
      if (apartment && Object.values(apartment).some(val =>
        val && typeof val === 'string' && val.toLowerCase().includes(term)
      )) {
        return true;
      }

      return false;
    });

    setFilteredApplications(results);
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);

    let sortedApplications = [...fullDetails];

    if (sortType === 'date') {
      // מיון לפי תאריך אפליקציה
      sortedApplications.sort((a, b) => {
        const appA = applicationsDetails.find(app => app.applicationId === a);
        const appB = applicationsDetails.find(app => app.applicationId === b);
        if (!appA || !appB) return 0;
        return new Date(appB.applicationDate) - new Date(appA.applicationDate);
      });
    } else if (sortType === 'id') {
      // מיון לפי מזהה אפליקציה
      sortedApplications.sort((a, b) => a - b);
    } else if (sortType === 'status') {
      // מיון לפי סטטוס
      sortedApplications.sort((a, b) => {
        const appA = applicationsDetails.find(app => app.applicationId === a);
        const appB = applicationsDetails.find(app => app.applicationId === b);
        if (!appA || !appB) return 0;
        return appA.applicationStatus.localeCompare(appB.applicationStatus);
      });
    }

    setFilteredApplications(sortedApplications);
  };

  // פונקציה לקבלת צבע לפי סטטוס - עם בדיקת תקינות
  const getStatusColor = (status) => {
    // בדיקה שהסטטוס הוא מחרוזת תקינה
    if (!status || typeof status !== 'string') {
      return '#9e9e9e'; // צבע ברירת מחדל אם הסטטוס אינו תקין
    }

    switch (status.toLowerCase()) {
      case 'approved':
        return '#4caf50'; // Green
      case 'pending':
        return '#ff9800'; // Orange
      case 'rejected':
        return '#f44336'; // Red
      default:
        return '#9e9e9e'; // Grey
    }
  };

  // פונקציה לפורמט תאריך
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

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, position: 'relative' }} ref={topRef}>
      <Fade in={true} timeout={1000}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography
            variant="h4"
            component="h1"
            fontWeight="700"
            color="#2c3e50"
            sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.125rem' } }}
          >
            Full Applications
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
            View complete details for all applications including assessor information, property details, and assessment data.
          </Typography>
        </Box>
      </Fade>

      {/* Customer details for assessor view */}
      {type === "a" && !full && (
        <Paper
          elevation={1}
          sx={{
            p: 3,
            mb: 4,
            borderRadius: 2,
            background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
          }}
        >
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600, color: '#2c3e50' }}>
            Customer Details
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 2 }}>
            <Box>
              <Typography variant="body2" color="text.secondary">ID</Typography>
              <Typography variant="body1">{customerChose.customerId}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">First Name</Typography>
              <Typography variant="body1">{customerChose.customerFirstName}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">Last Name</Typography>
              <Typography variant="body1">{customerChose.customerLastName}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">City</Typography>
              <Typography variant="body1">{customerChose.customerCity}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">Address</Typography>
              <Typography variant="body1">{customerChose.customerAddress}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">Phone</Typography>
              <Typography variant="body1">{customerChose.customerPhone}</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="text.secondary">Email</Typography>
              <Typography variant="body1">{customerChose.customerEmail}</Typography>
            </Box>
          </Box>
        </Paper>
      )}

      {/* Search and filter controls */}
      <Box sx={{ mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'space-between', alignItems: { xs: 'stretch', md: 'center' } }}>
        {/* Sort buttons */}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
          <Typography variant="subtitle1" sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
            <UnfoldMoreIcon sx={{ mr: 0.5, fontSize: '1rem' }} /> Sort by:
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

        {/* Expand All Button */}
        <Button
          variant="outlined"
          size="small"
          onClick={toggleExpandAll}
          startIcon={expandAll ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          sx={{
            borderColor: '#3a7bd5',
            color: '#3a7bd5',
            '&:hover': {
              borderColor: '#2b5876',
              backgroundColor: 'rgba(58, 123, 213, 0.1)'
            }
          }}
        >
          {expandAll ? "Collapse All" : "Expand All"}
        </Button>
      </Box>

      <Container maxWidth="lg">
        <Fade in={true} timeout={1200}>
          <Box>
            {(assessmentsDetails && applicationsDetails && fullDetails.length > 0) ? (
              (filteredApplications.length > 0 ? filteredApplications : fullDetails).map((element, index) => {
                // מצא את האפליקציה הנוכחית
                const currentApplication = applicationsDetails.find(a => a.applicationId === element);
                // קבע צבע רקע לפי סטטוס
                const gradientBackground = currentApplication ?
                  `linear-gradient(135deg, ${getStatusColor(currentApplication.applicationStatus)}10 0%, ${getStatusColor(currentApplication.applicationStatus)}20 100%)` :
                  'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';

                return (
                  <Fade in={true} timeout={1000 + (index * 200)} key={element}>
                    <Paper
                      elevation={1}
                      sx={{
                        mb: 3,
                        borderRadius: 2,
                        overflow: 'hidden',
                        border: `1px solid #e0e0e0`,
                        borderLeft: currentApplication ?
                          `5px solid ${getStatusColor(currentApplication.applicationStatus)}` :
                          '5px solid #9e9e9e',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-3px)',
                          boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)'
                        }
                      }}
                    >
                      {/* Header with application ID and expand button */}
                      <Box
                        sx={{
                          p: 2,
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          background: gradientBackground,
                          cursor: 'pointer'
                        }}
                        onClick={() => toggleItemExpansion(element)}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Typography variant="h6" sx={{ fontWeight: 600, color: '#2c3e50' }}>
                            Application #{element}
                          </Typography>
                          {currentApplication && currentApplication.applicationStatus && (
                            <Chip
                              label={currentApplication.applicationStatus}
                              size="small"
                              sx={{
                                ml: 2,
                                bgcolor: `${getStatusColor(currentApplication.applicationStatus)}20`,
                                color: getStatusColor(currentApplication.applicationStatus),
                                fontWeight: 500
                              }}
                            />
                          )}
                        </Box>
                        <Button
                          variant="text"
                          size="small"
                          endIcon={expandedItems[element] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                          sx={{ color: '#3a7bd5' }}
                        >
                          {expandedItems[element] ? "Hide Details" : "Show Details"}
                        </Button>
                      </Box>

                      {/* Collapsible content with all tables */}
                      <Collapse in={expandedItems[element] || expandAll} timeout="auto" unmountOnExit>
                        <Box sx={{ p: 2 }}>
                          {/* Customer table for assessor in full mode */}
                          {type === "a" && full && (
                            <Box sx={{ mb: 3 }}>
                              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
                                Customer Details
                              </Typography>
                              <TableContainer component={Paper} sx={{ boxShadow: 'none', mb: 3, overflowX: 'auto' }}>
                                <Table size="small" aria-label="customer details table">
                                  <TableHead>
                                    <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
                                      <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>First Name</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>Last Name</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>City</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>Address</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>Phone</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {customersDetails && customersDetails.map(d => {
                                      if (cust(d.customerId, element)) {
                                        return (
                                          <TableRow key={d.customerId}>
                                            <TableCell>{d.customerId}</TableCell>
                                            <TableCell>{d.customerFirstName}</TableCell>
                                            <TableCell>{d.customerLastName}</TableCell>
                                            <TableCell>{d.customerCity}</TableCell>
                                            <TableCell>{d.customerAddress}</TableCell>
                                            <TableCell>{d.customerPhone}</TableCell>
                                            <TableCell>{d.customerEmail}</TableCell>
                                          </TableRow>
                                        );
                                      }
                                      return null;
                                    })}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </Box>
                          )}

                          {/* Assessor table
                          {(type === "c" || (type === "a" && thisAssessor.isManager === true)) && finalAssessor && (
                            <Box sx={{ mb: 3 }}>
                              <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
                                Assessor Details
                              </Typography>
                              <TableContainer component={Paper} sx={{ boxShadow: 'none', mb: 3, overflowX: 'auto' }}>
                                <Table size="small" aria-label="assessor details table">
                                  <TableHead>
                                    <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
                                      <TableCell sx={{ fontWeight: 'bold' }}>First Name</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>Last Name</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>City</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>Address</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>Phone</TableCell>
                                      <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
                                    </TableRow>
                                  </TableHead>
                                  <TableBody>
                                    {finalAssessor && finalAssessor.map(d => {
                                      if (assess(d, element)) {
                                        return (
                                          <TableRow key={d.assessorId}>
                                            <TableCell>{d.assessorFirstName}</TableCell>
                                            <TableCell>{d.assessorLastName}</TableCell>
                                            <TableCell>{d.assessorCity}</TableCell>
                                            <TableCell>{d.assessorAddress}</TableCell>
                                            <TableCell>{d.assessorPhone}</TableCell>
                                            <TableCell>{d.assessorEmail}</TableCell>
                                          </TableRow>
                                        );
                                      }
                                      return null;
                                    })}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                            </Box>
                          )} */}

{/* Assessor table */}
{(type === "c" || (type === "a" && thisAssessor.isManager === true)) && (
<Box sx={{ mb: 3 }}>
<Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
Assessor Details
</Typography>

{/* בדיקה אם יש מעריך לפניה הנוכחית */}
{applicationsDetails && applicationsDetails.find(app => app.applicationId === element && app.assessorId) ? (
<TableContainer component={Paper} sx={{ boxShadow: 'none', mb: 3, overflowX: 'auto' }}>
  <Table size="small" aria-label="assessor details table">
    <TableHead>
      <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
        <TableCell sx={{ fontWeight: 'bold' }}>First Name</TableCell>
        <TableCell sx={{ fontWeight: 'bold' }}>Last Name</TableCell>
        <TableCell sx={{ fontWeight: 'bold' }}>City</TableCell>
        <TableCell sx={{ fontWeight: 'bold' }}>Address</TableCell>
        <TableCell sx={{ fontWeight: 'bold' }}>Phone</TableCell>
        <TableCell sx={{ fontWeight: 'bold' }}>Email</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {finalAssessor && finalAssessor.map(d => {
        if (assess(d, element)) {
          return (
            <TableRow key={d.assessorId}>
              <TableCell>{d.assessorFirstName}</TableCell>
              <TableCell>{d.assessorLastName}</TableCell>
              <TableCell>{d.assessorCity}</TableCell>
              <TableCell>{d.assessorAddress}</TableCell>
              <TableCell>{d.assessorPhone}</TableCell>
              <TableCell>{d.assessorEmail}</TableCell>
            </TableRow>
          );
        }
        return null;
      })}
    </TableBody>
  </Table>
</TableContainer>
) : (
<Paper sx={{ p: 2, mb: 3, bgcolor: '#f5f7fa', textAlign: 'center' }}>
  <Typography variant="body1" color="text.secondary">
  There is no evaluator assigned to this page yet.
  </Typography>
  
</Paper>
)}
</Box>
)}

                          {/* Application table */}
                          <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
                              Application Details
                            </Typography>
                            <TableContainer component={Paper} sx={{ boxShadow: 'none', mb: 3, overflowX: 'auto' }}>
                              <Table size="small" aria-label="application details table">
                                <TableHead>
                                  <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Application ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Application Date</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Last Application Date</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Application Status</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {applicationsDetails && applicationsDetails.map(a => {
                                    if (a.applicationId === element) {
                                      return (
                                        <TableRow key={a.applicationId}>
                                          <TableCell>{a.applicationId}</TableCell>
                                          <TableCell>{formatDate(a.applicationDate)}</TableCell>
                                          <TableCell>{formatDate(a.lastApplicationDate)}</TableCell>
                                          <TableCell>
                                            <Chip
                                              label={a.applicationStatus}
                                              size="small"
                                              sx={{
                                                bgcolor: a.applicationStatus === 'Approved' ? '#e3f2fd' :
                                                  a.applicationStatus === 'Pending' ? '#fff8e1' :
                                                    a.applicationStatus === 'Rejected' ? '#ffebee' : '#e0e0e0',
                                                color: a.applicationStatus === 'Approved' ? '#1565c0' :
                                                  a.applicationStatus === 'Pending' ? '#ff8f00' :
                                                    a.applicationStatus === 'Rejected' ? '#c62828' : '#616161',
                                                fontWeight: 500
                                              }}
                                            />
                                          </TableCell>
                                        </TableRow>
                                      );
                                    }
                                    return null;
                                  })}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Box>

                          {/* Assessment table */}
                          <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
                              Assessment Details
                            </Typography>
                            <TableContainer component={Paper} sx={{ boxShadow: 'none', mb: 3, overflowX: 'auto' }}>
                              <Table size="small" aria-label="assessment details table">
                                <TableHead>
                                  <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Assessment ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Block</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Plot</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Sub Plot</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Construction Year</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Acquision Price</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Assessment Goal</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Legal State</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Building Permit</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Irregularities Building</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {assessmentsDetails.map(s => {
                                    if (s.assessmentId === element) {
                                      return (
                                        <TableRow key={s.assessmentId}>
                                          <TableCell>{s.assessmentId}</TableCell>
                                          <TableCell>{s.block}</TableCell>
                                          <TableCell>{s.plot}</TableCell>
                                          <TableCell>{s.subPlot}</TableCell>
                                          <TableCell>{s.constructionYear}</TableCell>
                                          <TableCell>{s.acquisionPrice}</TableCell>
                                          <TableCell>{s.assessmentGoal}</TableCell>
                                          <TableCell>{s.legalState}</TableCell>
                                          <TableCell>{s.buildingPermit}</TableCell>
                                          <TableCell>{s.irregularitiesBuilding}</TableCell>
                                        </TableRow>
                                      );
                                    }
                                    return null;
                                  })}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Box>

                          {/* Apartment details table */}
                          <Box sx={{ mb: 3 }}>
                            <Typography variant="h6" sx={{ mb: 1, fontWeight: 600, color: '#2c3e50' }}>
                              Apartment Details
                            </Typography>
                            <TableContainer component={Paper} sx={{ boxShadow: 'none', mb: 3, overflowX: 'auto' }}>
                              <Table size="small" aria-label="apartment details table">
                                <TableHead>
                                  <TableRow sx={{ backgroundColor: '#f5f7fa' }}>
                                    <TableCell sx={{ fontWeight: 'bold' }}>ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Customer ID</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>City</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Address</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Size</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Air Directions</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Directions</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Floor</TableCell>
                                    <TableCell sx={{ fontWeight: 'bold' }}>Elevator</TableCell>
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {apartmentsDetails.map(g => {
                                    if (g.apartmentId === element) {
                                      return (
                                        <TableRow key={g.apartmentId}>
                                          <TableCell>{g.apartmentId}</TableCell>
                                          <TableCell>{g.customerId}</TableCell>
                                          <TableCell>{g.apartmentCity}</TableCell>
                                          <TableCell>{g.apartmentAddress}</TableCell>
                                          <TableCell>{g.apartmentSize}</TableCell>
                                          <TableCell>{g.airDirections}</TableCell>
                                          <TableCell>{g.directions}</TableCell>
                                          <TableCell>{g.floor}</TableCell>
                                          <TableCell>{g.elevator}</TableCell>
                                        </TableRow>
                                      );
                                    }
                                    return null;
                                  })}
                                </TableBody>
                              </Table>
                            </TableContainer>
                          </Box>

                          {/* Chat buttons */}
                          {!thisAssessor.isManager && (
                            <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
                              {!sent ? (
                                <Button
                                  variant="contained"
                                  startIcon={<MailOutlineOutlinedIcon />}
                                  onClick={() => { setSent(true) }}
                                  sx={{
                                    background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                                    '&:hover': {
                                      background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                                    }
                                  }}
                                >
                                  Message Options
                                </Button>
                              ) : (
                                <>
                                  <Button
                                    variant="contained"
                                    startIcon={<BookmarkAddOutlinedIcon />}
                                    onClick={() => {
                                      dispatch(setApplicationId(element));
                                      dispatch(setTo(customerChose.customerFirstName + " " + customerChose.customerLastName));
                                      navigate('newChat');
                                    }}
                                    sx={{
                                      background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                                      '&:hover': {
                                        background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                                      }
                                    }}
                                  >
                                    New Chat
                                  </Button>
                                  <Button
                                    variant="outlined"
                                    startIcon={<BookmarkAddedOutlinedIcon />}
                                    onClick={() => {
                                      chatMe(element);
                                      navigate('/home/lastChats');
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
                                    View Past Chats
                                  </Button>
                                </>
                              )}
                            </Box>
                          )}
                        </Box>
                      </Collapse>
                    </Paper>
                  </Fade>
                );
              })
            ) : (
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

      <Outlet />
    </Box>
  );
}








