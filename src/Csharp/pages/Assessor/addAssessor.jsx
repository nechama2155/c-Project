import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAssessorThunk } from "../../redux/slices/add/addAssessorThunk";
import { 
  Box, 
  Button, 
  InputAdornment, 
  TextField, 
  Typography, 
  Paper, 
  Grid, 
  Container, 
  Fade, 
  FormControlLabel, 
  Checkbox, 
  IconButton,
  Alert,
  Snackbar
} from "@mui/material";
import { 
  AccountCircle, 
  Email, 
  Phone, 
  LocationCity, 
  Home, 
  Person, 
  Stars, 
  SupervisorAccount, 
  Close 
} from "@mui/icons-material";

export const AddAssessor = () => {
  const [details, setDetails] = useState({
    assessorId: "", 
    assessorFirstName: "", 
    assessorLastName: "", 
    assessorCity: "", 
    assessorAddress: "", 
    assessorPhone: "", 
    assessorEmail: "", 
    seniority: "",
    isManager: false
  });
  
  // מצב לשגיאות ולידציה
  const [errors, setErrors] = useState({});
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const refdialog = useRef();

  useEffect(() => {
    refdialog.current.showModal();
  }, []);

  // פונקציית ולידציה
  const validateForm = () => {
    const newErrors = {};
    
    // בדיקת תעודת זהות - חייבת להיות מספר בן 9 ספרות
    if (!details.assessorId) {
      newErrors.assessorId = "ID is required";
    } else if (!/^\d{9}$/.test(details.assessorId)) {
      newErrors.assessorId = "ID must be 9 digits";
    }
    
    // בדיקת שם פרטי
    if (!details.assessorFirstName) {
      newErrors.assessorFirstName = "First name is required";
    } else if (details.assessorFirstName.length < 2) {
      newErrors.assessorFirstName = "First name must be at least 2 characters";
    }
    
    // בדיקת שם משפחה
    if (!details.assessorLastName) {
      newErrors.assessorLastName = "Last name is required";
    } else if (details.assessorLastName.length < 2) {
      newErrors.assessorLastName = "Last name must be at least 2 characters";
    }
    
    // בדיקת עיר
    if (!details.assessorCity) {
      newErrors.assessorCity = "City is required";
    }
    
    // בדיקת כתובת
    if (!details.assessorAddress) {
      newErrors.assessorAddress = "Address is required";
    }
    
    // בדיקת טלפון - חייב להיות מספר תקין
    if (!details.assessorPhone) {
      newErrors.assessorPhone = "Phone is required";
    } else if (!/^\d{9,10}$/.test(details.assessorPhone)) {
      newErrors.assessorPhone = "Phone must be 9-10 digits";
    }
    
    // בדיקת אימייל
    if (!details.assessorEmail) {
      newErrors.assessorEmail = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.assessorEmail)) {
      newErrors.assessorEmail = "Invalid email format";
    }
    
    // בדיקת ותק - חייב להיות מספר חיובי
    if (details.seniority === "") {
      newErrors.seniority = "Seniority is required";
    } else if (isNaN(details.seniority) || details.seniority < 0) {
      newErrors.seniority = "Seniority must be a positive number";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      dispatch(addAssessorThunk({...details, available: true}));
      navigate('/home/assessors');
    } else {
      setSnackbarMessage("Please fix the errors in the form");
      setShowSnackbar(true);
    }
  };

  const handleClose = () => {
    refdialog.current.close();
    navigate('/home/assessors');
  };

  return (
    <div>
      <dialog 
        ref={refdialog} 
        style={{ 
          border: 'none', 
          borderRadius: '8px', 
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
          padding: 0,
          maxWidth: '450px',
          width: '100%'
        }}
      >
        <Fade in={true} timeout={800}>
          <Paper 
            elevation={0} 
            sx={{ 
              borderRadius: 2,
              overflow: 'hidden',
              width: '100%',
              position: 'relative',
              p: 0
            }}
          >
            {/* Header */}
            <Box 
              sx={{ 
                p: 2, 
                background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <Typography variant="h6" sx={{ color: 'white', fontWeight: 600 }}>
                Add New Assessor
              </Typography>
              <IconButton 
                onClick={handleClose} 
                sx={{ color: 'white' }}
              >
                <Close />
              </IconButton>
            </Box>

            <Container sx={{ p: { xs: 2, sm: 3 } }}>
              <Grid container spacing={2}>
                {/* ID Field */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="ID *"
                    variant="outlined"
                    size="small"
                    value={details.assessorId}
                    onChange={(e) => setDetails({...details, assessorId: e.target.value})}
                    error={!!errors.assessorId}
                    helperText={errors.assessorId}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AccountCircle color={errors.assessorId ? "error" : "primary"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* First Name Field */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name *"
                    variant="outlined"
                    size="small"
                    value={details.assessorFirstName}
                    onChange={(e) => setDetails({...details, assessorFirstName: e.target.value})}
                    error={!!errors.assessorFirstName}
                    helperText={errors.assessorFirstName}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person color={errors.assessorFirstName ? "error" : "primary"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Last Name Field */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Last Name *"
                    variant="outlined"
                    size="small"
                    value={details.assessorLastName}
                    onChange={(e) => setDetails({...details, assessorLastName: e.target.value})}
                    error={!!errors.assessorLastName}
                    helperText={errors.assessorLastName}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Person color={errors.assessorLastName ? "error" : "primary"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* City Field */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="City *"
                    variant="outlined"
                    size="small"
                    value={details.assessorCity}
                    onChange={(e) => setDetails({...details, assessorCity: e.target.value})}
                    error={!!errors.assessorCity}
                    helperText={errors.assessorCity}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <LocationCity color={errors.assessorCity ? "error" : "primary"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Address Field */}
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Address *"
                    variant="outlined"
                    size="small"
                    value={details.assessorAddress}
                    onChange={(e) => setDetails({...details, assessorAddress: e.target.value})}
                    error={!!errors.assessorAddress}
                    helperText={errors.assessorAddress}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Home color={errors.assessorAddress ? "error" : "primary"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Phone Field */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Phone *"
                    variant="outlined"
                    size="small"
                    value={details.assessorPhone}
                    onChange={(e) => setDetails({...details, assessorPhone: e.target.value})}
                    error={!!errors.assessorPhone}
                    helperText={errors.assessorPhone}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Phone color={errors.assessorPhone ? "error" : "primary"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Email Field */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Email *"
                    variant="outlined"
                    size="small"
                    type="email"
                    value={details.assessorEmail}
                    onChange={(e) => setDetails({...details, assessorEmail: e.target.value})}
                    error={!!errors.assessorEmail}
                    helperText={errors.assessorEmail}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Email color={errors.assessorEmail ? "error" : "primary"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Seniority Field */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Seniority *"
                    variant="outlined"
                    size="small"
                    type="number"
                    value={details.seniority}
                    onChange={(e) => setDetails({...details, seniority: e.target.value === "" ? "" : parseInt(e.target.value) || 0})}
                    error={!!errors.seniority}
                    helperText={errors.seniority}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Stars color={errors.seniority ? "error" : "primary"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                {/* Is Manager Field */}
                <Grid item xs={12} sm={6}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={details.isManager}
                        onChange={(e) => setDetails({...details, isManager: e.target.checked})}
                        color="primary"
                        icon={<SupervisorAccount />}
                        checkedIcon={<SupervisorAccount />}
                      />
                    }
                    label="Is Manager"
                    sx={{ 
                      height: '100%', 
                      display: 'flex', 
                      alignItems: 'center',
                      border: '1px solid #e0e0e0',
                      borderRadius: 1,
                      pl: 2,
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.04)'
                      }
                    }}
                  />
                </Grid>
              </Grid>

              {/* Action Buttons */}
              <Box sx={{ 
                mt: 3, 
                display: 'flex', 
                justifyContent: 'flex-end',
                gap: 2
              }}>
                <Button 
                  variant="outlined" 
                  onClick={handleClose}
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
                  variant="contained" 
                  onClick={handleSubmit}
                  sx={{
                    background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                    }
                  }}
                >
                  Add Assessor
                </Button>
              </Box>
            </Container>
          </Paper>
        </Fade>
        
        {/* Snackbar להצגת הודעות שגיאה */}
        <Snackbar
          open={showSnackbar}
          autoHideDuration={6000}
          onClose={() => setShowSnackbar(false)}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert 
                       onClose={() => setShowSnackbar(false)} 
                       severity="error" 
                       sx={{ width: '100%' }}
                     >
                       {snackbarMessage}
                     </Alert>
                   </Snackbar>
                 </dialog>
               </div>
             );
           };
           


