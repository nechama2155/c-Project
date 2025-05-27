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
  HomeWork,
  Terrain,
  Apartment,
  DateRange,
  AttachMoney,
  Assignment,
  Gavel
} from "@mui/icons-material";
import { editAssessmentThunk } from "../../redux/slices/edit/editAssessmentThunk";
import { setIsMy } from "../../redux/slices/assessmentSlice";

export const EditAssessment = () => {
  const assessment = useSelector(state => state.assessment.assessmentsEdit);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
  const refdialog = useRef();
  const [details, setDetails] = useState({
    block: "",
    plot: "",
    subPlot: "",
    constructionYear: "",
    acquisionPrice: "",
    assessmentGoal: "",
    legalState: "",
    buildingPermit: false,
    irregularitiesBuilding: false
  });
  
  // מצב לשגיאות ולידציה
  const [errors, setErrors] = useState({});
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  // עדכון פונקציית setDetails בעת טעינת הנתונים
  useEffect(() => {
    if (assessment) {
      console.log("Loading assessment data:", assessment); // לוג לדיבוג
    
      // המרה נכונה של הנתונים
      const updatedAssessment = {
        block: assessment.block || "",
        plot: assessment.plot || "",
        subPlot: assessment.subPlot || "",
        constructionYear: assessment.constructionYear ? String(assessment.constructionYear) : "",
        acquisionPrice: assessment.acquisionPrice ? String(assessment.acquisionPrice) : "",
        assessmentGoal: assessment.assessmentGoal || "",
        legalState: assessment.legalState || "", // השאר כטקסט
        // המרה נכונה של ערכים בוליאניים
        buildingPermit: Boolean(assessment.buildingPermit),
        irregularitiesBuilding: Boolean(assessment.irregularitiesBuilding)
      };
    
      console.log("Updated assessment data:", updatedAssessment); // לוג לדיבוג
      setDetails(updatedAssessment);
    }
    refdialog.current.showModal();
  }, [assessment]);

  // עדכון הטיפול בשינוי ערך ה-legalState
  const handleLegalStateChange = (e) => {
    const value = e.target.value;
    // אם הערך ריק, שמור כמחרוזת ריקה ולא כ-0
    const legalStateValue = value === '' ? '' : Number(value);
    setDetails({ ...details, legalState: legalStateValue });
  };

  // עדכון הטיפול בשינוי ערכי ה-Checkboxes
  const handleCheckboxChange = (field) => (event) => {
    console.log(`Changing ${field} to:`, event.target.checked); // לוג לדיבוג
    setDetails({ 
      ...details, 
      [field]: event.target.checked 
    });
  };

  // פונקציית ולידציה מעודכנת - בודקת רק שהערכים תקינים אם הם קיימים
  const validateForm = () => {
    const newErrors = {};
    
    // בדיקת שנת בנייה - רק אם הוזן ערך
    if (details.constructionYear) {
      const year = Number(details.constructionYear);
      if (isNaN(year) || year < 1900 || year > new Date().getFullYear()) {
        newErrors.constructionYear = "Enter a valid year";
      }
    }
    
    // בדיקת מחיר רכישה - רק אם הוזן ערך
    if (details.acquisionPrice) {
      const price = Number(details.acquisionPrice);
      if (isNaN(price) || price < 0) {
        newErrors.acquisionPrice = "Enter a valid price";
      }
    }
    
    // בדיקת Legal State - חובה להיות 5 ספרות בדיוק
    if (details.legalState) {
      const legalStateValue = details.legalState.trim();
    
      // בדיקה שהערך מכיל רק ספרות
      if (!/^\d+$/.test(legalStateValue)) {
        newErrors.legalState = "Legal State must contain only digits";
      }
      // בדיקה שהאורך הוא בדיוק 5 תווים
      else if (legalStateValue.length !== 5) {
        newErrors.legalState = "Legal State must be exactly 5 digits";
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClose = () => {
    refdialog.current.close();
    navigate('/home/assessments');
  };

  const handleSave = () => {
    if (validateForm()) {
      // הכנת הנתונים בפורמט הנכון לשרת
      const dataToSend = {
        assessmentId: assessment.assessmentId,
        block: details.block || "",
        plot: details.plot || "",
        subPlot: details.subPlot || "",
        constructionYear: details.constructionYear || "",
        acquisionPrice: details.acquisionPrice ? Number(details.acquisionPrice) : 0,
        assessmentGoal: details.assessmentGoal || "",
        legalState: details.legalState || "", // השאר כטקסט
        buildingPermit: Boolean(details.buildingPermit),
        irregularitiesBuilding: Boolean(details.irregularitiesBuilding)
      };
      
      console.log("Saving data:", dataToSend); // לוג לדיבוג
      console.log("Data types:", {
        assessmentId: typeof dataToSend.assessmentId,
        acquisionPrice: typeof dataToSend.acquisionPrice,
        legalState: typeof dataToSend.legalState, // יהיה string
        buildingPermit: typeof dataToSend.buildingPermit,
        irregularitiesBuilding: typeof dataToSend.irregularitiesBuilding
      });
      
      dispatch(setIsMy(dataToSend));
      dispatch(editAssessmentThunk(dataToSend));
      refdialog.current.close();
      navigate('/home/assessments');
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
                Edit Assessment
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
                {/* Block Field */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    fullWidth
                    label="Block"
                    variant="outlined"
                    size="small"
                    value={details?.block || ''}
                    onChange={(e) => setDetails({ ...details, block: e.target.value })}
                    error={!!errors.block}
                    helperText={errors.block}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <HomeWork color={errors.block ? "error" : "primary"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                
                {/* Plot Field */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    fullWidth
                    label="Plot"
                    variant="outlined"
                    size="small"
                    value={details?.plot || ''}
                    onChange={(e) => setDetails({ ...details, plot: e.target.value })}
                    error={!!errors.plot}
                    helperText={errors.plot}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Terrain color={errors.plot ? "error" : "primary"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                
                {/* Sub Plot Field */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    fullWidth
                    label="Sub Plot"
                    variant="outlined"
                    size="small"
                    value={details?.subPlot || ''}
                    onChange={(e) => setDetails({ ...details, subPlot: e.target.value })}
                    error={!!errors.subPlot}
                    helperText={errors.subPlot}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Apartment color={errors.subPlot ? "error" : "primary"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                
                {/* Construction Year Field */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    fullWidth
                    label="Construction Year"
                    variant="outlined"
                    size="small"
                    type="number"
                    value={details?.constructionYear || ''}
                    onChange={(e) => setDetails({ ...details, constructionYear: e.target.value })}
                    error={!!errors.constructionYear}
                    helperText={errors.constructionYear}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <DateRange color={errors.constructionYear ? "error" : "primary"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                
                {/* Acquision Price Field */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    fullWidth
                    label="Acquision Price"
                    variant="outlined"
                    size="small"
                    type="number"
                    value={details?.acquisionPrice || ''}
                    onChange={(e) => setDetails({ ...details, acquisionPrice: e.target.value })}
                    error={!!errors.acquisionPrice}
                    helperText={errors.acquisionPrice}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AttachMoney color={errors.acquisionPrice ? "error" : "primary"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                
                {/* Assessment Goal Field */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    fullWidth
                    label="Assessment Goal"
                    variant="outlined"
                    size="small"
                    value={details?.assessmentGoal || ''}
                    onChange={(e) => setDetails({ ...details, assessmentGoal: e.target.value })}
                    error={!!errors.assessmentGoal}
                    helperText={errors.assessmentGoal}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Assignment color={errors.assessmentGoal ? "error" : "primary"} />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                
                {/* Legal State Field */}
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    fullWidth
                    label={`Legal State (${details?.legalState?.length || 0}/5)`}
                    variant="outlined"
                    size="small"
                    type="text"
                    value={details?.legalState || ''}
                    onChange={(e) => {
                      // הגבל רק לספרות ומקסימום 5 תווים
                      const value = e.target.value.replace(/\D/g, '').slice(0, 5);
                      setDetails({ ...details, legalState: value });
                    }}
                    error={!!errors.legalState}
                    helperText={errors.legalState || "Enter exactly 5 digits"}
                    inputProps={{
                      maxLength: 5,
                      pattern: "[0-9]{5}",
                      placeholder: "12345"
                    }}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Gavel color={errors.legalState ? "error" : "primary"} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                          borderColor: details?.legalState?.length === 5 ? 'green' : 
                                      details?.legalState?.length > 0 ? 'orange' : '#e0e0e0'
                        }
                      }
                    }}
                  />
                </Grid>
                
                {/* Building Permit Field */}
                <Grid item xs={12} sm={6} md={4}>
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
                          checked={Boolean(details?.buildingPermit)}
                          onChange={(e) => setDetails({ ...details, buildingPermit: e.target.checked })}
                          name="buildingPermit"
                          color="primary"
                          size="small"
                        />
                      }
                      label={
                        <Typography variant="body2">Building Permit</Typography>
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
                
                {/* Irregularities Building Field */}
                <Grid item xs={12} sm={6} md={4}>
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
                          checked={Boolean(details?.irregularitiesBuilding)}
                          onChange={(e) => setDetails({ ...details, irregularitiesBuilding: e.target.checked })}
                          name="irregularitiesBuilding"
                          color="primary"
                          size="small"
                        />
                      }
                      label={
                        <Typography variant="body2">Irregularities Building</Typography>
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


