import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Button, 
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
  Snackbar,
  InputAdornment
} from "@mui/material";
import { 
  Close, 
  Save,
  Person,
  Email,
  Phone,
  LocationCity,
  Home,
  Stars,
  SupervisorAccount
} from "@mui/icons-material";
import { editAssessorThunk } from "../../redux/slices/edit/editAssessorThunk";

export const EditAssessor = () => {
  const assessor = useSelector(state => state.assessor.assessorEdit);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const refdialog = useRef();
  
  const [details, setDetails] = useState({ 
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

  useEffect(() => {
    if (assessor) {
      // המרה מפורשת של ערכים בוליאניים
      const updatedAssessor = {
        ...assessor,
        isManager: Boolean(assessor.isManager),
        seniority: assessor.seniority !== null && assessor.seniority !== undefined 
          ? Number(assessor.seniority) 
          : 0
      };
      setDetails(updatedAssessor);
    }
    refdialog.current.showModal();
  }, [assessor]);

  // פונקציית ולידציה
  const validateForm = () => {
    const newErrors = {};
    
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

  // טיפול בשינוי ערך ה-Checkbox
  const handleCheckboxChange = (event) => {
    setDetails({ ...details, isManager: event.target.checked });
  };

  // טיפול בשינוי ערך ה-seniority
  const handleSeniorityChange = (e) => {
    const value = e.target.value;
    const seniorityValue = value === '' ? '' : parseInt(value);
    setDetails({ ...details, seniority: seniorityValue });
  };

  const handleClose = () => {
    refdialog.current.close();
    navigate('/home/assessors');
  };

  const handleSave = () => {
    if (validateForm()) {
      dispatch(editAssessorThunk({
        ...details,
        assessorId: assessor.assessorId
      }));
      refdialog.current.close();
      navigate('/home/assessors');
    } else {
      setSnackbarMessage("Please fix the errors in the form");
      setShowSnackbar(true);
    }
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
          maxWidth: '700px',
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
                Edit Assessor
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
                {/* First Name Field */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="First Name *"
                    variant="outlined"
                    size="small"
                    value={details?.assessorFirstName || ''}
                    onChange={(e) => setDetails({ ...details, assessorFirstName: e.target.value })}
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
                    value={details?.assessorLastName || ''}
                    onChange={(e) => setDetails({ ...details, assessorLastName: e.target.value })}
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
                    value={details?.assessorCity || ''}
                    onChange={(e) => setDetails({ ...details, assessorCity: e.target.value })}
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
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Address *"
                    variant="outlined"
                    size="small"
                    value={details?.assessorAddress || ''}
                    onChange={(e) => setDetails({ ...details, assessorAddress: e.target.value })}
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
                    value={details?.assessorPhone || ''}
                    onChange={(e) => setDetails({ ...details, assessorPhone: e.target.value })}
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
                    value={details?.assessorEmail || ''}
                    onChange={(e) => setDetails({ ...details, assessorEmail: e.target.value })}
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
                    value={details?.seniority ?? ''}
                    onChange={handleSeniorityChange}
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
                  <Box sx={{ 
                    border: '1px solid #e0e0e0', 
                    borderRadius: 1, 
                    p: 1,
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={Boolean(details?.isManager)}
                          onChange={handleCheckboxChange}
                          name="isManager"
                          color="primary"
                          size="small"
                        />
                      }
                      label={
                        <Typography variant="body2">Is Manager</Typography>
                      }
                      sx={{ 
                        m: 0,
                        '& .MuiFormControlLabel-label': {
                          fontSize: '0.875rem'
                        }
                      }}
                    />
                  </Box>
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
                  startIcon={<Close />}
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
                  onClick={handleSave}
                  startIcon={<Save />}
                  sx={{
                    background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                    '&:hover': {
                      background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                    }
                  }}
                >
                  Save Changes
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
         


