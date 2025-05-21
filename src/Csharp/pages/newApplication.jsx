// יש להוסיף את הייבואים הבאים בראש הקובץ (אם אינם קיימים)
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addApplicationThunk } from "../redux/slices/add/addApplicationThunk";
import { assessorThunk } from "../redux/slices/get/assessorThunk";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Checkbox,
  Button,
  Box,
  Typography,
  Paper,
  Container,
  Fade,
  Stepper,
  Step,
  StepLabel,
  Grid,
  FormControlLabel,
  Divider,
  Alert,
  CircularProgress,
  useTheme,
  useMediaQuery,
  InputAdornment,
  FormHelperText,
  FormControl,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Backdrop,
  Modal
} from "@mui/material";
import {
  Home,
  Payment,
  Person,
  Check,
  ArrowForward,
  ArrowBack,
  CreditCard,
  CalendarMonth,
  Security,
  Apartment,
  SquareFoot,
  LocationCity,
  Phone,
  Email,
  House,
  Elevator,
  Explore,
  North,
  South,
  East,
  West,
  DateRange,
  CalendarToday,
  Error,
  ExitToApp,
  Refresh
} from "@mui/icons-material";

export const NewApplication = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  
  const user = useSelector(state => state.user.users);
  const thisAssessor = useSelector(state => state.application.thisAssessor);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State for multi-step form
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Property Details', 'Payment', 'Personal Information', 'Confirmation'];

  // Form data state
  const [newCustomer, setNewCustomer] = useState({
    customerId: "",
    customerFirstName: "",
    customerLastName: "",
    customerAddress: "",
    customerPhone: "",
    customerCity: "",
    customerEmail: ""
  });

  const [directionsArr, setDirectionsArr] = useState({
    north: false,
    south: false,
    east: false,
    west: false
  });

  const [apartmentData, setApartmentData] = useState({
    apartmentId: 0,
    customerId: "",
    apartmentCity: "",
    apartmentAddress: "",
    apartmentSize: "",
    airDirections: "",
    floor: "",
    elevator: false,
    directions: ""
  });

  const [applicationData, setApplicationData] = useState({
    applicationId: 0,
    assessorId: "",
    applicationDate: new Date().toISOString(),
    lastApplicationDate: new Date().toISOString(),
    applicationStatus: 11
  });

  const [paymentData, setPaymentData] = useState({
    size: "",
    year: new Date().getFullYear().toString(),
    sum: 0,
    creditCard: {
      num: "",
      tokef: "",
      cvv: ""
    }
  });

  // UI state
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [allData, setAllData] = useState({});

  // הוספת סטייטים חדשים לטיפול בתהליך הטעינה והודעות
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showResultDialog, setShowResultDialog] = useState(false);
  
  // קבלת נתוני הסטייט מהרדיוסר
  const applicationStatus = useSelector(state => state.application);
  const isSuccess = useSelector(state => state.application.success);
  const isWaiting = useSelector(state => state.application.wait);
  
  // האזנה לשינויים בסטייט של האפליקציה - גרסה משופרת
  useEffect(() => {
    console.log("Application status changed:", { isSuccess, isWaiting, isSubmitting });
    
    // בדיקה מפורשת יותר של מצבי התשובה מהשרת
    if (isSubmitting) {
      if (isSuccess === true || isSuccess === false || isWaiting === true) {
        console.log("Response received, closing loading dialog");
        setIsSubmitting(false);
        setShowResultDialog(true);
      }
    }
  }, [isSuccess, isWaiting, isSubmitting]);
  
  // ניקוי כאשר הקומפוננטה מתפרקת
  useEffect(() => {
    return () => {
      // וידוא שמודל הטעינה נסגר אם הקומפוננטה מתפרקת
      if (isSubmitting) {
        setIsSubmitting(false);
      }
    };
  }, [isSubmitting]);
  
  // Initialize customer ID from user data
  useEffect(() => {
    if (user && user.userId) {
      setNewCustomer({ ...newCustomer, customerId: user.userId });
      setApartmentData({ ...apartmentData, customerId: user.userId });
    }
  }, [user]);

  // Handle successful application submission
  useEffect(() => {
    if (thisAssessor && thisAssessor.length > 0) {
      setSuccess(true);
      setLoading(false);
    }
  }, [thisAssessor]);

  // Update directions string when directionsArr changes
  useEffect(() => {
    const directions = Object.entries(directionsArr)
      .filter(([_, value]) => value)
      .map(([direction, _]) => direction)
      .join(" ");
    
    setApartmentData(prev => ({ ...prev, directions }));
  }, [directionsArr]);

  // Calculate payment amount
  const calculatePayment = () => {
    const currentYear = new Date().getFullYear();
    const sizeNum = parseInt(paymentData.size) || 0;
    const yearNum = parseInt(paymentData.year) || currentYear;
    
    const yearCost = (currentYear - yearNum) * 200;
    const sizeCost = sizeNum * 250;
    
    const sum = yearCost + sizeCost;
    setPaymentData({ ...paymentData, sum });
    return sum;
  };

  // Form validation
  const validateStep = (step) => {
    const newErrors = {};
    
    if (step === 0) { // Property Details
      if (!paymentData.size) newErrors.size = "Property size is required";
      else if (isNaN(paymentData.size) || parseInt(paymentData.size) <= 0) 
        newErrors.size = "Please enter a valid size";
      
      if (!paymentData.year) newErrors.year = "Construction year is required";
      else if (isNaN(paymentData.year) || parseInt(paymentData.year) < 1900 || 
               parseInt(paymentData.year) > new Date().getFullYear()) 
        newErrors.year = "Please enter a valid year";
    }
    
    else if (step === 1) { // Payment
      if (!paymentData.creditCard.num) newErrors.cardNumber = "Card number is required";
      else if (!/^\d{16}$/.test(paymentData.creditCard.num)) 
        newErrors.cardNumber = "Card number must be 16 digits";
      
      if (!paymentData.creditCard.tokef) newErrors.expiry = "Expiry date is required";
      else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(paymentData.creditCard.tokef)) 
        newErrors.expiry = "Format must be MM/YY";
      
      if (!paymentData.creditCard.cvv) newErrors.cvv = "CVV is required";
      else if (!/^\d{3,4}$/.test(paymentData.creditCard.cvv)) 
        newErrors.cvv = "CVV must be 3 or 4 digits";
    }
    
    else if (step === 2) { // Personal Information
      if (!newCustomer.customerFirstName) newErrors.firstName = "First name is required";
      if (!newCustomer.customerLastName) newErrors.lastName = "Last name is required";
      if (!newCustomer.customerAddress) newErrors.address = "Address is required";
      if (!newCustomer.customerCity) newErrors.city = "City is required";
      
      if (!newCustomer.customerPhone) newErrors.phone = "Phone number is required";
      else if (!/^\d{10}$/.test(newCustomer.customerPhone)) 
        newErrors.phone = "Please enter a valid 10-digit phone number";
      
      if (!newCustomer.customerEmail) newErrors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(newCustomer.customerEmail)) 
        newErrors.email = "Please enter a valid email address";
      
      if (!apartmentData.apartmentCity) newErrors.apartmentCity = "Property city is required";
      if (!apartmentData.apartmentAddress) newErrors.apartmentAddress = "Property address is required";
      if (!apartmentData.apartmentSize) newErrors.apartmentSize = "Property size is required";
      else if (isNaN(apartmentData.apartmentSize) || parseInt(apartmentData.apartmentSize) <= 0) 
        newErrors.apartmentSize = "Please enter a valid size";
      
      if (!apartmentData.floor) newErrors.floor = "Floor is required";
      else if (isNaN(apartmentData.floor)) 
        newErrors.floor = "Please enter a valid floor number";
      
      if (Object.values(directionsArr).every(v => !v)) 
        newErrors.directions = "Please select at least one direction";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form navigation
  const handleNext = () => {
    if (validateStep(activeStep)) {
      if (activeStep === 0) {
        calculatePayment();
      }
      setActiveStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  // פונקציה לשליחת הפנייה עם טיפול בטעינה והודעות - גרסה משופרת
  const submitApplicationWithLoading = () => {
    if (validateStep(activeStep)) {
      // הפעלת מצב טעינה
      setIsSubmitting(true);
      
      // הכנת הנתונים הסופיים
      const finalData = {
        customer: newCustomer,
        apartment: {
          ...apartmentData,
          apartmentSize: parseInt(apartmentData.apartmentSize),
          floor: parseInt(apartmentData.floor),
          airDirections: parseInt(apartmentData.airDirections || 0)
        },
        application: applicationData
      };
      
      setAllData(finalData);
      
      // שליחת הפנייה
      dispatch(addApplicationThunk(finalData));
      
      // הגדרת טיימא웃 בטיחותי קצר יותר
      setTimeout(() => {
        if (isSubmitting) {
          console.log("Timeout reached - forcing dialog to show");
          setIsSubmitting(false);
          setShowResultDialog(true);
        }
      }, 8000); // 8 שניות טיימא웃 במקום 15
    }
  };
  
// פונקציה לניתוב לדף התחברות - גרסה משופרת
const navigateToLogin = () => {
  // ניקוי נתוני המשתמש מהסטור
  dispatch({ type: 'user/logout' }); // יש להוסיף פעולה כזו ברדיוסר
  dispatch({ type: 'application/reset' }); // איפוס נתוני האפליקציה
  
  // ניתוב לדף הראשי עם החלפת ההיסטוריה
  navigate("/", { replace: true });
  
  // אופציה נוספת - רענון הדף כדי לוודא איפוס מלא
  setTimeout(() => {
    window.location.href = "/";
  }, 100);
};

  
  // פונקציה לאתחול הטופס והתחלת פנייה חדשה
  const startNewApplication = () => {
    setActiveStep(0);
    setShowResultDialog(false);
    // איפוס נתוני הטופס אך שמירה על פרטי המשתמש
    setApartmentData({
      apartmentId: 0,
      customerId: user.userId,
      apartmentCity: "",
      apartmentAddress: "",
      apartmentSize: "",
      airDirections: "",
      floor: "",
      elevator: false,
      directions: ""
    });
    setPaymentData({
      size: "",
      year: new Date().getFullYear().toString(),
      sum: 0,
      creditCard: {
        num: "",
        tokef: "",
        cvv: ""
      }
    });
    setDirectionsArr({
      north: false,
      south: false,
      east: false,
      west: false
    });
  };
  
  // מודל לתצוגת אייקון טעינה
  const loadingModal = (
<Modal
      open={isSubmitting}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Fade in={isSubmitting}>
        <Paper
          elevation={4}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 3,
            maxWidth: '90%',
            width: 300,
            textAlign: 'center',
            background: 'rgba(255, 255, 255, 0.95)',
          }}
        >
          <CircularProgress size={60} sx={{ mb: 2 }} />
          <Typography variant="h6" sx={{ mb: 1 }}>
            Processing your request...
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Please wait while we process your request
          </Typography>
        </Paper>
      </Fade>
    </Modal>

  );
  
  // דיאלוג תוצאה - יוצג לאחר השלמת הפנייה
  const resultDialog = (
    <Dialog
      open={showResultDialog}
      onClose={() => isSuccess ? navigateToLogin() : setShowResultDialog(false)}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        elevation: 5,
        sx: {
          borderRadius: 3,
          p: 1
        }
      }}
    >
<DialogTitle sx={{ textAlign: 'center', pt: 3 }}>
        {isSuccess || isWaiting ? (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Check sx={{ color: 'success.main', mr: 1, fontSize: 30 }} />
            <Typography variant="h5" component="span" fontWeight="bold">
              Request received successfully
            </Typography>
          </Box>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Error sx={{ color: 'error.main', mr: 1, fontSize: 30 }} />
            <Typography variant="h5" component="span" fontWeight="bold">
              Request not received
            </Typography>
          </Box>
        )}
      </DialogTitle>
      
      <DialogContent>
        <DialogContentText sx={{ textAlign: 'center', mb: 3 }}>
          {isSuccess || isWaiting ? (
            <Typography>
              To login as a customer, please log out and log back into the site.
            </Typography>
          ) : (
            <Typography>
              An error occurred while processing your request. Please try again or contact support.
            </Typography>
          )}
        </DialogContentText>
      </DialogContent>

      
      <DialogActions sx={{ justifyContent: 'center', pb: 3, px: 3, gap: 2 }}>
        {isSuccess || isWaiting ? (
          <Button
            variant="contained"
            color="primary"
            startIcon={<ExitToApp />}
            onClick={navigateToLogin}
            fullWidth
            sx={{
              py: 1.5,
              borderRadius: 2,
              background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
              '&:hover': {
                background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
              },
            }}
          >
            חזרה למסך התחברות
          </Button>
        ) : (
          <>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<Refresh />}
              onClick={startNewApplication}
              sx={{
                py: 1.5,
                borderRadius: 2,
                flex: 1
              }}
            >
              פנייה חדשה
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<ExitToApp />}
              onClick={navigateToLogin}
              sx={{
                py: 1.5,
                borderRadius: 2,
                flex: 1,
                background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                },
              }}
            >
              חזרה להתחברות
            </Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
  
  // Handle form reset and navigation
  const handleReset = () => {
    navigate("/", { replace: true });
  };

  // Render form steps
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <Fade in={true} timeout={8000}>
            <Box>
              <Typography variant="h6" sx={{ mb: 3, color: "#2c3e50" }}>
                Tell us about your property
              </Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    fullWidth
                    label="Property Size (square meters)"
                    variant="outlined"
                    value={paymentData.size}
                    onChange={(e) => setPaymentData({ ...paymentData, size: e.target.value })}
                    error={!!errors.size}
                    helperText={errors.size}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SquareFoot />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  {/* <TextField
                    fullWidth
                    label="Construction Year"
                    variant="outlined"
                    value={paymentData.year}
                    onChange={(e) => setPaymentData({ ...paymentData, year: e.target.value })}
                    error={!!errors.year}
                    helperText={errors.year}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DateRange />
                        </InputAdornment>
                      ),
                    }}
                  /> */}
                  
                  <TextField
  fullWidth
  label="שנת בניה"
  type="number"
  variant="outlined"
  value={paymentData.year}
  onChange={(e) => {
    // הגבלת הערך בין 1900 לשנה הנוכחית
    const value = Math.min(
      Math.max(parseInt(e.target.value) || new Date().getFullYear(), 1900),
      new Date().getFullYear()
    );
    setPaymentData({ ...paymentData, year: value.toString() });
  }}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <CalendarToday />
      </InputAdornment>
    ),
    inputProps: { 
      min: 1900, 
      max: new Date().getFullYear() 
    }
  }}
  error={!!errors.year}
  helperText={errors.year}
/>

                </Grid>
              </Grid>
              
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography variant="body1" sx={{ mb: 2, color: "#7f8c8d" }}>
                  This information helps us calculate your assessment fee.
                </Typography>
                <Typography variant="body2" sx={{ color: "#95a5a6" }}>
                  The fee is based on property size and age.
                </Typography>
              </Box>
            </Box>
          </Fade>
        );
        
      case 1:
        return (
          <Fade in={true} timeout={800}>
            <Box>
              <Typography variant="h6" sx={{ mb: 3, color: "#2c3e50" }}>
                Payment Details
              </Typography>
              
              <Paper 
                elevation={3} 
                sx={{ 
                  p: 3, 
                  mb: 4, 
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
                }}
              >
                <Typography variant="h5" sx={{ fontWeight: 700, color: "#2c3e50", mb: 1 }}>
                  Assessment Fee: ${paymentData.sum}
                </Typography>
                <Typography variant="body2" sx={{ color: "#7f8c8d" }}>
                  Size: {paymentData.size} m² × $250 = ${parseInt(paymentData.size) * 250}
                </Typography>
                <Typography variant="body2" sx={{ color: "#7f8c8d" }}>
                  Age: {new Date().getFullYear() - parseInt(paymentData.year)} years × $200 = ${(new Date().getFullYear() - parseInt(paymentData.year)) * 200}
                </Typography>
              </Paper>
              
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Card Number"
                    variant="outlined"
                    value={paymentData.creditCard.num}
                    onChange={(e) => setPaymentData({
                      ...paymentData,
                      creditCard: { ...paymentData.creditCard, num: e.target.value }
                    })}
                    error={!!errors.cardNumber}
                    helperText={errors.cardNumber}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CreditCard />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="Expiry Date (MM/YY)"
                    variant="outlined"
                    placeholder="MM/YY"
                    value={paymentData.creditCard.tokef}
                    onChange={(e) => setPaymentData({
                      ...paymentData,
                      creditCard: { ...paymentData.creditCard, tokef: e.target.value }
                    })}
                    error={!!errors.expiry}
                    helperText={errors.expiry}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CalendarMonth />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    label="CVV"
                    variant="outlined"
                    value={paymentData.creditCard.cvv}
                    onChange={(e) => setPaymentData({
                      ...paymentData,
                      creditCard: { ...paymentData.creditCard, cvv: e.target.value }
                    })}
                    error={!!errors.cvv}
                    helperText={errors.cvv}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Security />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              
              

              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography variant="body2" sx={{ color: "#95a5a6" }}>
                  Your payment information is secure and encrypted.
                </Typography>
              </Box>
            </Box>
          </Fade>
        );
        
      case 2:
        return (
          <Fade in={true} timeout={800}>
            <Box>
              <Typography variant="h6" sx={{ mb: 3, color: "#2c3e50" }}>
                Personal & Property Information
              </Typography>
              
              <Paper 
                elevation={1} 
                sx={{ 
                  p: 3, 
                  mb: 4, 
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #EBF5FB 0%, #D6EAF8 100%)'
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#2c3e50", mb: 2 }}>
                  Personal Details
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="First Name"
                      variant="outlined"
                      value={newCustomer.customerFirstName}
                      onChange={(e) => setNewCustomer({ ...newCustomer, customerFirstName: e.target.value })}
                      error={!!errors.firstName}
                      helperText={errors.firstName}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Last Name"
                      variant="outlined"
                      value={newCustomer.customerLastName}
                      onChange={(e) => setNewCustomer({ ...newCustomer, customerLastName: e.target.value })}
                      error={!!errors.lastName}
                      helperText={errors.lastName}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Person />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      variant="outlined"
                      value={newCustomer.customerEmail}
                      onChange={(e) => setNewCustomer({ ...newCustomer, customerEmail: e.target.value })}
                      error={!!errors.email}
                      helperText={errors.email}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Phone Number"
                      variant="outlined"
                      value={newCustomer.customerPhone}
                      onChange={(e) => setNewCustomer({ ...newCustomer, customerPhone: e.target.value })}
                      error={!!errors.phone}
                      helperText={errors.phone}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Phone />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="City"
                      variant="outlined"
                      value={newCustomer.customerCity}
                      onChange={(e) => setNewCustomer({ ...newCustomer, customerCity: e.target.value })}
                      error={!!errors.city}
                      helperText={errors.city}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationCity />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Address"
                      variant="outlined"
                      value={newCustomer.customerAddress}
                      onChange={(e) => setNewCustomer({ ...newCustomer, customerAddress: e.target.value })}
                      error={!!errors.address}
                      helperText={errors.address}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Home />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Paper>
              
              <Paper 
                elevation={1} 
                sx={{ 
                  p: 3, 
                  borderRadius: 2,
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#2c3e50", mb: 2 }}>
                  Property Details
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Property City"
                      variant="outlined"
                      value={apartmentData.apartmentCity}
                      onChange={(e) => setApartmentData({ ...apartmentData, apartmentCity: e.target.value })}
                      error={!!errors.apartmentCity}
                      helperText={errors.apartmentCity}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <LocationCity />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Property Address"
                      variant="outlined"
                      value={apartmentData.apartmentAddress}
                      onChange={(e) => setApartmentData({ ...apartmentData, apartmentAddress: e.target.value })}
                      error={!!errors.apartmentAddress}
                      helperText={errors.apartmentAddress}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <House />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Property Size (m²)"
                      variant="outlined"
                      value={apartmentData.apartmentSize}
                      onChange={(e) => setApartmentData({ ...apartmentData, apartmentSize: e.target.value })}
                      error={!!errors.apartmentSize}
                      helperText={errors.apartmentSize}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <SquareFoot />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Floor"
                      variant="outlined"
                      value={apartmentData.floor}
                      onChange={(e) => setApartmentData({ ...apartmentData, floor: e.target.value })}
                      error={!!errors.floor}
                      helperText={errors.floor}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Apartment />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Air Directions"
                      variant="outlined"
                      value={apartmentData.airDirections}
                      onChange={(e) => setApartmentData({ ...apartmentData, airDirections: e.target.value })}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <Explore />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={apartmentData.elevator}
                          onChange={(e) => setApartmentData({ ...apartmentData, elevator: e.target.checked })}
                          color="primary"
                        />
                      }
                      label={
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <Elevator sx={{ mr: 1 }} />
                          <Typography>Elevator Available</Typography>
                        </Box>
                      }
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Typography variant="subtitle2" sx={{ mb: 1, color: "#2c3e50" }}>
                      Property Directions
                    </Typography>
                    <FormControl error={!!errors.directions} component="fieldset">
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={directionsArr.north}
                              onChange={(e) => setDirectionsArr({ ...directionsArr, north: e.target.checked })}
                              color="primary"
                            />
                          }
                          label={
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <North sx={{ mr: 0.5 }} />
                              <Typography>North</Typography>
                            </Box>
                          }
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={directionsArr.south}
                              onChange={(e) => setDirectionsArr({ ...directionsArr, south: e.target.checked })}
                              color="primary"
                            />
                          }
                          label={
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <South sx={{ mr: 0.5 }} />
                              <Typography>South</Typography>
                            </Box>
                          }
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={directionsArr.east}
                              onChange={(e) => setDirectionsArr({ ...directionsArr, east: e.target.checked })}
                              color="primary"
                            />
                          }
                          label={
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <East sx={{ mr: 0.5 }} />
                              <Typography>East</Typography>
                            </Box>
                          }
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={directionsArr.west}
                              onChange={(e) => setDirectionsArr({ ...directionsArr, west: e.target.checked })}
                              color="primary"
                            />
                          }
                          label={
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                              <West sx={{ mr: 0.5 }} />
                              <Typography>West</Typography>
                            </Box>
                          }
                        />
                      </Box>
                      {errors.directions && (
                        <FormHelperText error>{errors.directions}</FormHelperText>
                      )}
                    </FormControl>
                  </Grid>
                </Grid>
              </Paper>
            </Box>
          </Fade>
        );
        
      case 3:
        return (
          <Fade in={true} timeout={800}>
            <Box>
              <Typography variant="h6" sx={{ mb: 3, color: "#2c3e50" }}>
                Review Your Application
              </Typography>
              
              <Alert severity="info" sx={{ mb: 3 }}>
                Please review your information before submitting your application.
              </Alert>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <Card sx={{ mb: 2, height: '100%' }}>
                    <CardContent>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#2c3e50", mb: 2, display: 'flex', alignItems: 'center' }}>
                        <Person sx={{ mr: 1 }} /> Personal Information
                      </Typography>
                      <Divider sx={{ mb: 2 }} />
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Name:</strong> {newCustomer.customerFirstName} {newCustomer.customerLastName}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Email:</strong> {newCustomer.customerEmail}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Phone:</strong> {newCustomer.customerPhone}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Address:</strong> {newCustomer.customerAddress}, {newCustomer.customerCity}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <Card sx={{ mb: 2, height: '100%' }}>
                    <CardContent>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#2c3e50", mb: 2, display: 'flex', alignItems: 'center' }}>
                        <House sx={{ mr: 1 }} /> Property Information
                      </Typography>
                      <Divider sx={{ mb: 2 }} />
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Address:</strong> {apartmentData.apartmentAddress}, {apartmentData.apartmentCity}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Size:</strong> {apartmentData.apartmentSize} m²
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Floor:</strong> {apartmentData.floor}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Elevator:</strong> {apartmentData.elevator ? "Yes" : "No"}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Directions:</strong> {apartmentData.directions || "None selected"}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                
                <Grid item xs={12}>
                  <Card>
                    <CardContent>


                      <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#2c3e50", mb: 2, display: 'flex', alignItems: 'center' }}>
                        <Payment sx={{ mr: 1 }} /> Payment Details
                      </Typography>
                      <Divider sx={{ mb: 2 }} />
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Property Size:</strong> {paymentData.size} m²
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Construction Year:</strong> {paymentData.year}
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 1 }}>
                        <strong>Property Age:</strong> {new Date().getFullYear() - parseInt(paymentData.year)} years
                      </Typography>
                      <Typography variant="h6" sx={{ mt: 2, color: "#2c3e50", fontWeight: 700 }}>
                        Total Payment: ${paymentData.sum}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#7f8c8d", mt: 1 }}>
                        Payment will be processed upon submission
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        );
        
      default:
        return null;
    }
  };

  // Success screen
  const renderSuccess = () => (
    <Fade in={true} timeout={800}>
      <Box sx={{ textAlign: 'center', py: 4 }}>
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: '50%',
            bgcolor: '#4caf50',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mx: 'auto',
            mb: 3,
          }}
        >
          <Check sx={{ fontSize: 40, color: 'white' }} />
        </Box>
        
        <Typography variant="h5" sx={{ fontWeight: 700, color: "#2c3e50", mb: 2 }}>
          Application Submitted Successfully!
        </Typography>
        
        <Typography variant="body1" sx={{ color: "#7f8c8d", mb: 4, maxWidth: 600, mx: 'auto' }}>
          Your application has been received and is being processed. To view your application status, please log out and log back in to your account.
        </Typography>
        
        <Button
          variant="contained"
          size="large"
          onClick={handleReset}
          sx={{
            background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
            '&:hover': {
              background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
            },
            px: 4,
            py: 1.5,
            borderRadius: 2
          }}
        >
          Return to Dashboard
        </Button>
      </Box>
    </Fade>
  );

  // עדכון פונקציית submitApplication הקיימת לשימוש בפונקציה الجديدة
  const submitApplication = submitApplicationWithLoading;

  return (
    <Container maxWidth="md" sx={{ py: { xs: 4, md: 6 } }}>
      <Fade in={true} timeout={600}>
        <Box>
          {!success ? (
            <>
              <Box sx={{ textAlign: 'center', mb: 6 }}>
                <Typography
                  variant="h4"
                  component="h1"
                  fontWeight="700"
                  color="#2c3e50"
                  sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.125rem' } }}
                >
                  New Property Assessment
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
                  Complete the form below to request a professional assessment of your property.
                </Typography>
              </Box>

              <Paper
                elevation={3}
                sx={{
                  p: { xs: 2, sm: 4 },
                  borderRadius: 3,
                  mb: 4,
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                }}
              >
                <Stepper
                  activeStep={activeStep}
                  alternativeLabel={!isMobile}
                  orientation={isMobile ? 'vertical' : 'horizontal'}
                  sx={{ mb: 4 }}
                >
                  {steps.map((label) => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>

                <Box sx={{ mt: 4, mb: 2 }}>
                  {renderStepContent(activeStep)}
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    startIcon={<ArrowBack />}
                    variant="outlined"
                    sx={{
                      borderRadius: 2,
                      px: 3
                    }}
                  >
                    Back
                  </Button>
                  
                  {activeStep === steps.length - 1 ? (
                    <Button
                      variant="contained"
                      onClick={submitApplication}
                      disabled={loading}
                      endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <Check />}
                      sx={{
                        background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                        '&:hover': {
                          background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                        },
                        borderRadius: 2,
                        px: 3
                      }}
                    >
                      {loading ? 'Submitting...' : 'Submit Application'}
                    </Button>
                  ) : (
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      endIcon={<ArrowForward />}
                      sx={{
                        background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                        '&:hover': {
                          background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                        },
                        borderRadius: 2,
                        px: 3
                      }}
                    >
                      {activeStep === steps.length - 2 ? 'Review' : 'Next'}
                    </Button>
                  )}
                </Box>
              </Paper>
              
              <Box sx={{ textAlign: 'center' }}>
                <Chip
                  icon={<Security />}
                  label="Your information is secure and encrypted"
                  variant="outlined"
                  sx={{ mb: 2 }}
                />
              </Box>
              {/* הוספת המודל והדיאלוג */}
              {loadingModal}
              {resultDialog}
            </>
          ) : (
            renderSuccess()
          )}
        </Box>
      </Fade>
    </Container>
  );
};
