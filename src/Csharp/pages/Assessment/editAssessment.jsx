
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { 
  Box, 
  Button, 
  TextField, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  Grid,
  Typography,
  FormControlLabel,
  Checkbox,
  IconButton
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SaveIcon from '@mui/icons-material/Save';
import { editAssessmentThunk } from "../../redux/slices/edit/editAssessmentThunk";
import { setIsMy } from "../../redux/slices/assessmentSlice";

export const EditAssessment = () => {
  const assessment = useSelector(state => state.assessment.assessmentsEdit);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(true);
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

  useEffect(() => {
    if (assessment) {
      setDetails(assessment);
    }
  }, [assessment]);

  const handleClose = () => {
    setOpen(false);
    navigate('/home/assessments');
  };

  const handleSave = () => {
    dispatch(setIsMy(details));
    dispatch(editAssessmentThunk({
      ...details,
      assessmentId: assessment.assessmentId
    }));
    setOpen(false);
    navigate('/home/assessments');
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      fullWidth
      maxWidth="md"
    >
      <DialogTitle sx={{ m: 0, p: 2, bgcolor: '#f5f5f5' }}>
        <Typography variant="h6" component="div">
          Edit Assessment
        </Typography>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              id="block"
              label="Block"
              variant="outlined"
              value={details?.block || ''}
              onChange={(e) => setDetails({ ...details, block: e.target.value })}
              margin="normal"
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              id="plot"
              label="Plot"
              variant="outlined"
              value={details?.plot || ''}
              onChange={(e) => setDetails({ ...details, plot: e.target.value })}
              margin="normal"
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              id="subPlot"
              label="Sub Plot"
              variant="outlined"
              value={details?.subPlot || ''}
              onChange={(e) => setDetails({ ...details, subPlot: e.target.value })}
              margin="normal"
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              id="constructionYear"
              label="Construction Year"
              variant="outlined"
              type="number"
              value={details?.constructionYear || ''}
              onChange={(e) => setDetails({ ...details, constructionYear: e.target.value })}
              margin="normal"
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              id="acquisionPrice"
              label="Acquision Price"
              variant="outlined"
              type="number"
              value={details?.acquisionPrice || ''}
              onChange={(e) => setDetails({ ...details, acquisionPrice: e.target.value })}
              margin="normal"
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              id="assessmentGoal"
              label="Assessment Goal"
              variant="outlined"
              value={details?.assessmentGoal || ''}
              onChange={(e) => setDetails({ ...details, assessmentGoal: e.target.value })}
              margin="normal"
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <TextField
              fullWidth
              id="legalState"
              label="Legal State"
              variant="outlined"
              type="number"
              value={details?.legalState || ''}
              onChange={(e) => setDetails({ ...details, legalState: parseInt(e.target.value) || 0 })}
              margin="normal"
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={details?.buildingPermit || false}
                  onChange={(e) => setDetails({ ...details, buildingPermit: e.target.checked })}
                  name="buildingPermit"
                />
              }
              label="Building Permit"
            />
          </Grid>
          
          <Grid item xs={12} sm={6} md={4}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={details?.irregularitiesBuilding || false}
                  onChange={(e) => setDetails({ ...details, irregularitiesBuilding: e.target.checked })}
                  name="irregularitiesBuilding"
                />
              }
              label="Irregularities Building"
            />
          </Grid>
        </Grid>
      </DialogContent>
      
      <DialogActions sx={{ padding: 2, justifyContent: 'space-between' }}>
        <Button 
          variant="outlined" 
          onClick={handleClose}
          startIcon={<CloseIcon />}
        >
          Cancel
        </Button>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleSave}
          startIcon={<SaveIcon />}
        >
          Save Changes
        </Button>
      </DialogActions>
    </Dialog>
  );
};


