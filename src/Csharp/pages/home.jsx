
import {
  Box, Button, Drawer, Divider, List, ListItem, TextField,
  Typography, AppBar, Toolbar, IconButton, Badge, Avatar,
  Container, Paper, ListItemIcon, ListItemText, Tooltip
} from "@mui/material";
import { useEffect, useState,useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate, NavLink } from "react-router-dom";
import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssessmentOutlinedIcon from '@mui/icons-material/AssessmentOutlined';
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import PeopleOutlineOutlinedIcon from '@mui/icons-material/PeopleOutlineOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import AnalyticsOutlinedIcon from '@mui/icons-material/AnalyticsOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import ArchiveIcon from '@mui/icons-material/Archive';
// Redux actions
import {setLastChats } from "../redux/slices/chatSlice";


// CSS import
import './cssPages/h.css';
import { fullAssessorThunk } from "../redux/slices/get/fullAssessorThunk";
import { fullAssessorManagerThunk } from "../redux/slices/get/fullAssessorManagerThunk";
import { fullCustomerThunk } from "../redux/slices/get/fullCustomerThunk";
import { setFull } from "../redux/slices/userSlice";

import ScreenSaver from './screenSaver';

const INACTIVITY_TIMEOUT = 30000;
export const Home = () => {
  const type = useSelector(state => state.user.t);
  const thisAssessor = useSelector(state => state.assessor.thisAssessor);
  const thisApplications = useSelector(state => state.application.applications);
  const getChats = useSelector(state => state.chat.getChats);
  const sendChats = useSelector(state => state.chat.sendChats);
  const thisCustomer = useSelector(state => state.customer.thisCustomer);
  const chats = useSelector(state => state.chat.chats);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  const [thisChats, setThisChats] = useState([]);
  const [ready, setReady] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [userDetailsOpen, setUserDetailsOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  ///////////////////////////////////

  const [showScreenSaver, setShowScreenSaver] = useState(false);
  const inactivityTimerRef = useRef(null);

  // פונקציה לאיפוס הטיימר
  const resetInactivityTimer = () => {
    // מנקה את הטיימר הקודם אם קיים
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    
    // מגדיר טיימר חדש
    inactivityTimerRef.current = setTimeout(() => {
      setShowScreenSaver(true);
    }, INACTIVITY_TIMEOUT);
  };

  // פונקציה לטיפול בפעילות משתמש
  const handleUserActivity = () => {
    // אם שומר המסך מוצג, סוגר אותו
    if (showScreenSaver) {
      setShowScreenSaver(false);
    }
    
    // מאפס את הטיימר בכל פעילות
    resetInactivityTimer();
  };

  useEffect(() => {
    // מגדיר את הטיימר הראשוני
    resetInactivityTimer();
    
    // מוסיף מאזינים לפעילות משתמש
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('mousedown', handleUserActivity);
    window.addEventListener('keydown', handleUserActivity);
    window.addEventListener('touchstart', handleUserActivity);
    window.addEventListener('scroll', handleUserActivity);
    
    // ניקוי בעת פירוק הקומפוננטה
    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
      
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('mousedown', handleUserActivity);
      window.removeEventListener('keydown', handleUserActivity);
      window.removeEventListener('touchstart', handleUserActivity);
      window.removeEventListener('scroll', handleUserActivity);
    };
  }, []);

  // פונקציה לסגירת שומר המסך
  const handleCloseScreenSaver = () => {
    setShowScreenSaver(false);
    resetInactivityTimer();
  };
  useEffect(() => {
    if (type === 'a') {
      setDetails(thisAssessor);
      if (!thisAssessor.isManager) {
        dispatch(fullAssessorThunk(thisAssessor.assessorId));
        // dispatch(myApplicationsThunk(thisAssessor.assessorId));
      } else {
        dispatch(fullAssessorManagerThunk());
        // dispatch(applicationThunk());
      }
    }
    if (type === 'c') {
      setDetails(thisCustomer);
      dispatch(fullCustomerThunk(thisCustomer.customerId));
      // dispatch(yourApplicationsThunk(thisCustomer.customerId));
    }
  }, [type, thisAssessor, thisCustomer, dispatch]);

  useEffect(()=>{dispatch(setFull(true));}, [dispatch]);
  // Calculate unread messages
  // useEffect(() => {
  //   debugger
  //   let numRead = 0;
  //   if (getChats && getChats.length > 0) {
  //     getChats.forEach(c => {
  //       if (c.read===false) numRead++;
  //     });
  //     setReady(numRead);
  //     // dispatch(setIsRead()); 

  //   }
  // }, [getChats]);

  // בתוך useEffect שבודק הודעות שלא נקראו
useEffect(() => {

  let numRead = 0;
  if (!thisAssessor.isManager && getChats && Array.isArray(getChats) && getChats.length > 0) {
    getChats.forEach(c => {
      if (c && (c.read === false || c.read === undefined)) numRead++;
    });
    setReady(numRead);
  }
}, [getChats]);

  const toggleUserDetails = () => {
    setUserDetailsOpen(!userDetailsOpen);
  };

  const toggleMobileDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleSaveDetails = () => {
    // Implement save functionality here
    setUserDetailsOpen(false);
  };

  // Navigation items based on user type
  const getNavigationItems = () => {
    const baseItems = [
      {
        text: 'About',
        icon: <HomeOutlinedIcon />,
        path: 'about'
      }
    ];

    if (type === 'a') {
      if (!thisAssessor.isManager) {
        return [
          ...baseItems,
          { text: 'My Assessments', icon: <AssessmentOutlinedIcon />, path: 'assessments' },
          { text: 'My Applications', icon: <AppsOutlinedIcon />, path: 'applications' },
          { text: 'My Customers', icon: <PeopleOutlineOutlinedIcon />, path: 'customers' },
          { text: 'My Apartment Details', icon: <ApartmentOutlinedIcon />, path: 'apartmentDetails' },
          { text: 'My Folders', icon: <FolderOutlinedIcon />, path: 'folders' },
          { text: 'FolderDemo', icon: <CreateNewFolderOutlinedIcon />, path: 'folderDemo' },
          { text: 'FullApplications', icon: <AnalyticsOutlinedIcon />, path: 'fullApplications' },
        ];
      } else {
        return [
          ...baseItems,
          { text: 'Customers', icon: <PeopleOutlineOutlinedIcon />, path: 'customers' },
          { text: 'Assessors', icon: <PersonOutlineOutlinedIcon />, path: 'assessors' },
          { text: 'Assessments', icon: <AssessmentOutlinedIcon />, path: 'assessments' },
          { text: 'Applications', icon: <AppsOutlinedIcon />, path: 'applications' },
          { text: 'Apartment Details', icon: <ApartmentOutlinedIcon />, path: 'apartmentDetails' },
          { text: 'Folders', icon: <FolderOutlinedIcon />, path: 'folders' },
          { text: 'FullApplications', icon: <AnalyticsOutlinedIcon />, path: 'fullApplications' },
          { text: 'Archive', icon: <ArchiveIcon />, path: 'archive' },
        ];
      }
    } else if (type === 'c') {
      return [
        ...baseItems,
        { text: 'My Applications', icon: <AppsOutlinedIcon />, path: 'applications' },
        { text: 'My Assessments', icon: <AssessmentOutlinedIcon />, path: 'assessments' },
        { text: 'My Apartment Details', icon: <ApartmentOutlinedIcon />, path: 'apartmentDetails' },
        { text: 'New Application', icon: <AddCircleOutlineOutlinedIcon />, path: 'newApplication' },
        { text: 'My Assessor', icon: <PersonOutlineOutlinedIcon />, path: 'assessors' },
        { text: 'Full Applications', icon: <AnalyticsOutlinedIcon />, path: 'fullApplications' },
        { text: 'My Folders', icon: <FolderOutlinedIcon />, path: 'folders' },
      ];
    } else {
      return [
        ...baseItems,
        { text: 'New Application', icon: <AddCircleOutlineOutlinedIcon />, path: 'newApplication' }
      ];
    }
  };

  const renderUserDetailsForm = () => {
    if (type === 'a') {
      return (
        <>
          <TextField label="First Name" variant="outlined" fullWidth margin="normal"
            value={details?.assessorFirstName || ''}
            onChange={(e) => setDetails({ ...details, assessorFirstName: e.target.value })}
          />
          <TextField label="Last Name" variant="outlined" fullWidth margin="normal"
            value={details?.assessorLastName || ''}
            onChange={(e) => setDetails({ ...details, assessorLastName: e.target.value })}
          />
          <TextField label="Phone" variant="outlined" fullWidth margin="normal"
            value={details?.assessorPhone || ''}
            onChange={(e) => setDetails({ ...details, assessorPhone: e.target.value })}
          />
          <TextField label="Email" variant="outlined" fullWidth margin="normal"
            value={details?.assessorEmail || ''}
            onChange={(e) => setDetails({ ...details, assessorEmail: e.target.value })}
          />
          <TextField label="City" variant="outlined" fullWidth margin="normal"
            value={details?.assessorCity || ''}
            onChange={(e) => setDetails({ ...details, assessorCity: e.target.value })}
          />
          <TextField label="Address" variant="outlined" fullWidth margin="normal"
            value={details?.assessorAddress || ''}
            onChange={(e) => setDetails({ ...details, assessorAddress: e.target.value })}
          />
        </>
      );
    } else if (type === 'c') {
      return (
        <>
          <TextField label="First Name" variant="outlined" fullWidth margin="normal"
            value={details?.customerFirstName || ''}
            onChange={(e) => setDetails({ ...details, customerFirstName: e.target.value })}
          />
          <TextField label="Last Name" variant="outlined" fullWidth margin="normal"
            value={details?.customerLastName || ''}
            onChange={(e) => setDetails({ ...details, customerLastName: e.target.value })}
          />
          <TextField label="Phone" variant="outlined" fullWidth margin="normal"
            value={details?.customerPhone || ''}
            onChange={(e) => setDetails({ ...details, customerPhone: e.target.value })}
          />
          <TextField label="City" variant="outlined" fullWidth margin="normal"
            value={details?.customerCity || ''}
            onChange={(e) => setDetails({ ...details, customerCity: e.target.value })}
          />
          <TextField label="Email" variant="outlined" fullWidth margin="normal"
            value={details?.customerEmail || ''}
            onChange={(e) => setDetails({ ...details, customerEmail: e.target.value })}
          />
          <TextField label="Address" variant="outlined" fullWidth margin="normal"
            value={details?.customerAddress || ''}
            onChange={(e) => setDetails({ ...details, customerAddress: e.target.value })}
          />
        </>
      );
    }
    return null;
  };

  return (
    <>
      {/* שומר המסך */}
      {showScreenSaver && <ScreenSaver onClose={handleCloseScreenSaver} />}
    <Box className="home-container" sx={{ height: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Header - Fixed position */}
      <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'white', color: '#2c3e50', zIndex: 1200 }}>
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleMobileDrawer}
            sx={{ mr: 2, display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Logo" style={{ height: '40px' }} />
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Tooltip title="Messages">
              <IconButton
                color="inherit"
                onClick={() => {dispatch(setLastChats(chats));navigate('/home/lastChats')}}
                sx={{ position: 'relative' }}
              >
                <Badge badgeContent={ready} color="primary">
                  <MoveToInboxIcon />
                </Badge>
              </IconButton>
            </Tooltip>
            <Tooltip title="My Details">
              <IconButton
                color="inherit"
                onClick={toggleUserDetails}
                sx={{
                  ml: 1,
                  bgcolor: 'rgba(26, 86, 219, 0.1)',
                  '&:hover': { bgcolor: 'rgba(26, 86, 219, 0.2)' }
                }}
              >
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Toolbar placeholder to push content below AppBar */}
      <Toolbar />

      {/* Main content */}
      <Box className="content-wrapper" sx={{
        display: 'flex',
        flexGrow: 1,
        overflow: 'hidden',
        height: 'calc(100vh - 64px)' // Subtract AppBar height
      }}>
        {/* Sidebar for desktop - Fixed position */}
        <Box
          component="nav"
          className="sidebar hide-scrollbar"
          sx={{
            display: { xs: 'none', md: 'block' },
            width: 250,
            flexShrink: 0,
            position: 'fixed',
            top: 64, // AppBar height
            left: 0,
            bottom: 0,
            overflowY: 'auto',
            bgcolor: 'white',
            borderRight: '1px solid rgba(0, 0, 0, 0.08)'
          }}
        >
          <List className="sidebar-nav">
            {getNavigationItems().map((item, index) => (
              <ListItem key={index} disablePadding>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                  style={{ width: '100%', textDecoration: 'none' }}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={toggleMobileDrawer}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { width: 250 },
            zIndex: 1300
          }}
        >
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <img src="/logo.png" alt="Logo" style={{ height: '30px' }} />
            <IconButton onClick={toggleMobileDrawer}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <List>
            {getNavigationItems().map((item, index) => (
              <ListItem key={index} disablePadding>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "nav-item active" : "nav-item"
                  }
                  style={{ width: '100%', textDecoration: 'none' }}

                  onClick={toggleMobileDrawer}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} />
                </NavLink>
              </ListItem>
            ))}
          </List>
        </Drawer>

        {/* Main content area - With scrollable outlet */}
        <Box className="main-content" sx={{
          flexGrow: 1,
          ml: { xs: 0, md: '250px' }, // Margin to account for fixed sidebar
          height: '100%',
          overflow: 'hidden',
          paddingTop: '64px' // Add padding to prevent content from being hidden behind the header
        }}>
          <Container maxWidth="xl" sx={{ height: '100%' }}>
            <Paper
              elevation={0}
              className="content-card fade-in"
              sx={{
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* This is where the Outlet is rendered - it will have its own scroll */}
              <Box sx={{
                flexGrow: 1,
                overflow: 'auto', // This enables scrolling just for the outlet content
                height: '100%',
                scrollPaddingTop: '64px' // Add scroll padding to ensure content isn't hidden
              }}>
                <Outlet />
              </Box>
            </Paper>
          </Container>
        </Box>
      </Box>
      {/* User details drawer */}
      <Drawer
        anchor="right"
        open={userDetailsOpen}
        onClose={toggleUserDetails}
        PaperProps={{
          sx: {
            width: { xs: '100%', sm: 400 },
            p: 3,
            boxShadow: '-4px 0 20px rgba(0, 0, 0, 0.05)'
          }
        }}
      >
        <Box className="user-details-drawer">
          <Box className="user-details-header">
            <Typography variant="h6" fontWeight="600" color="#2c3e50">
              My Profile
            </Typography>
            <IconButton onClick={toggleUserDetails}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider sx={{ mb: 3 }} />
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
            <Avatar
              sx={{
                width: 100,
                height: 100,
                bgcolor: 'rgba(26, 86, 219, 0.1)',
                color: '#1a56db',
                fontSize: '2.5rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)'
              }}
            >
              {type === 'a'
                ? details?.assessorFirstName?.charAt(0) || 'A'
                : details?.customerFirstName?.charAt(0) || 'C'
              }
            </Avatar>
          </Box>
          <Box className="user-details-form">
            {renderUserDetailsForm()}
          </Box>
          <Box className="form-actions">
            <Button
              variant="outlined"
              onClick={toggleUserDetails}
              sx={{
                borderRadius: '8px',
                textTransform: 'none',
                borderColor: '#e0e0e0',
                color: '#7f8c8d',
                px: 3
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              startIcon={<SaveIcon />}
              onClick={handleSaveDetails}
              sx={{
                borderRadius: '8px',
                textTransform: 'none',
                background: 'linear-gradient(90deg, #1a56db 0%, #0c4da2 100%)',
                boxShadow: '0 4px 15px rgba(26, 86, 219, 0.4)',

                px: 3,
                '&:hover': {
                  background: 'linear-gradient(90deg, #1a56db 0%, #0c4da2 80%)',
                  boxShadow: '0 6px 20px rgba(26, 86, 219, 0.6)',
                }
              }}
            >
              Save Changes
            </Button>
          </Box>
        </Box>
      </Drawer>
    </Box>
    </>
  );
  
};

export default Home;



