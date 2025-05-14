// import { Button, TextareaAutosize } from "@mui/material"
// import { useEffect, useRef, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { addChatThunk } from "../redux/slices/add/addChatThunk";

// export const NewChat = () =>{

//     const navigate = useNavigate();
//     const refdialog = useRef();
//     const customer = useSelector(state=> state.customer.customerChose);
//     const type = useSelector(state=> state.user.t);
//     const [data,setData] = useState({sendDate:new Date().toISOString(),from:type,read:false,information:"",chatId:0,applicationId:0,to:customer.customerId});
//     const [flag,setFlag] = useState(false);
//     const dispatch = useDispatch();
//     const appId = useSelector(state=> state.chat.applicationId);
//     const fullTo = useSelector(state=> state.chat.to);
//     useEffect(() => {
         
//         refdialog.current.showModal();
//     }, [])
//     useEffect(() => {        

// setData({...data,applicationId:appId})

//     }, [appId])
//        const openTimer = () => {
//        setFlag(true);
//             let oo = setInterval(() => {
//             setFlag(false);   
//             navigate('/home/fullApplications');
//             clearInterval(oo);
//             }, 2000)
    
//         }

//     return <div>
//        <dialog ref={refdialog}>
//             {!flag && <><Button onClick={() => { refdialog.current.close(); navigate('/home/fullApplications')}}>✖</Button><br/>
//                 <label>to: {fullTo}</label><br/>
//                 <label>date: {new Date().toLocaleDateString()}</label> <br/>
//                 <TextareaAutosize
//                     aria-label="minimum height"
//                     minRows={20}
//                     placeholder="your massage..."
//                     style={{ width: 250 }}
//                     onChange={(e)=>{setData({...data,information:e.target.value})}}
//                 /><br/>
//                 <Button onClick={() => {dispatch(addChatThunk(data));openTimer()}}>send</Button>
//                 </>}
//             {flag &&<div>your messege sent succssesfully</div> }
//             </dialog>
            
          

//     </div>
// }
//////////////////////////////////////////////////////

// import { useState, useRef, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { addChatThunk } from "../redux/slices/add/addChatThunk";
// import { 
//   Button, 
//   TextareaAutosize, 
//   Dialog, 
//   DialogTitle, 
//   DialogContent, 
//   DialogActions,
//   Typography,
//   Box,
//   Paper,
//   IconButton,
//   TextField,
//   Snackbar,
//   Alert,
//   useMediaQuery,
//   useTheme
// } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
// import SendIcon from '@mui/icons-material/Send';
// import AttachFileIcon from '@mui/icons-material/AttachFile';

// export const NewChat = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
//   // Selectors
//   const customer = useSelector(state => state.customer.customerChose);
//   const type = useSelector(state => state.user.t);
//   const appId = useSelector(state => state.chat.applicationId);
//   const fullTo = useSelector(state => state.chat.to);
  
//   // State
//   const [open, setOpen] = useState(true);
//   const [successMessage, setSuccessMessage] = useState(false);
//   const [data, setData] = useState({
//     sendDate: new Date().toISOString(),
//     from: type,
//     read: false,
//     information: "",
//     chatId: 0,
//     applicationId: 0,
//     to: customer.customerId
//   });
  
//   // Update applicationId when it changes in the store
//   useEffect(() => {
//     setData({ ...data, applicationId: appId });
//   }, [appId]);
  
//   // Handle dialog close
//   const handleClose = () => {
//     setOpen(false);
//     navigate('/home/fullApplications');
//   };
  
//   // Handle message send
//   const handleSend = () => {
//     if (data.information.trim() === "") {
//       return; // Don't send empty messages
//     }
    
//     dispatch(addChatThunk(data));
//     setSuccessMessage(true);
    
//     // Auto close after success message
//     setTimeout(() => {
//       setSuccessMessage(false);
//       handleClose();
//     }, 2000);
//   };
  
//   // Handle text input
//   const handleTextChange = (e) => {
//     setData({ ...data, information: e.target.value });
//   };
  
//   // Handle key press (Ctrl+Enter to send)
//   const handleKeyDown = (e) => {
//     if (e.ctrlKey && e.key === 'Enter') {
//       handleSend();
//     }
//   };

//   return (
//     <Dialog 
//       open={open} 
//       onClose={handleClose}
//       fullScreen={isMobile}
//       maxWidth="md"
//       PaperProps={{
//         sx: {
//           borderRadius: isMobile ? 0 : 2,
//           width: isMobile ? '100%' : '600px',
//           height: isMobile ? '100%' : 'auto',
//           maxHeight: '90vh'
//         }
//       }}
//     >
//       {!successMessage ? (
//         <>
//           <DialogTitle sx={{ 
//             display: 'flex', 
//             justifyContent: 'space-between', 
//             alignItems: 'center',
//             borderBottom: `1px solid ${theme.palette.divider}`,
//             p: 2
//           }}>
//             <Typography variant="h6" component="div">
//               New Message
//             </Typography>
//             <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
//               <CloseIcon />
//             </IconButton>
//           </DialogTitle>
          
//           <DialogContent sx={{ p: 3 }}>
//             <Box sx={{ mb: 3 }}>
//               <Paper elevation={0} sx={{ p: 2, backgroundColor: theme.palette.grey[50], borderRadius: 1 }}>
//                 <Typography variant="subtitle2" color="textSecondary" gutterBottom>
//                   To:
//                 </Typography>
//                 <Typography variant="body1" fontWeight="medium">
//                   {fullTo}
//                 </Typography>
                
//                 <Typography variant="subtitle2" color="textSecondary" sx={{ mt: 2 }} gutterBottom>
//                   Application ID:
//                 </Typography>
//                 <Typography variant="body1" fontWeight="medium">
//                   {appId}
//                 </Typography>
                
//                 <Typography variant="subtitle2" color="textSecondary" sx={{ mt: 2 }} gutterBottom>
//                   Date:
//                 </Typography>
//                 <Typography variant="body1">
//                   {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
//                 </Typography>
//               </Paper>
//             </Box>
            
//             <TextField
//               label="Message"
//               multiline
//               fullWidth
//               minRows={10}
//               maxRows={20}
//               value={data.information}
//               onChange={handleTextChange}
//               onKeyDown={handleKeyDown}
//               placeholder="Type your message here..."
//               variant="outlined"
//               sx={{ mb: 2 }}
//             />
            
//             <Typography variant="caption" color="textSecondary">
//               Press Ctrl+Enter to send
//             </Typography>
//           </DialogContent>
          
//           <DialogActions sx={{ 
//             p: 2, 
//             borderTop: `1px solid ${theme.palette.divider}`,
//             justifyContent: 'space-between'
//           }}>
//             <Button 
//               startIcon={<AttachFileIcon />}
//               variant="outlined"
//               color="primary"
//             >
//               Attach
//             </Button>
            
//             <Button 
//               onClick={handleSend}
//               variant="contained" 
//               color="primary"
//               endIcon={<SendIcon />}
//               disabled={data.information.trim() === ""}
//             >
//               Send
//             </Button>
//           </DialogActions>
//         </>
//       ) : (
//         <Box sx={{ 
//           p: 4, 
//           display: 'flex', 
//           flexDirection: 'column', 
//           alignItems: 'center',
//           justifyContent: 'center',
//           height: '300px'
//         }}>
//           <Alert severity="success" sx={{ mb: 2 }}>
//             Your message was sent successfully!
//           </Alert>
//           <Typography variant="body1">
//             Redirecting back to applications...
//           </Typography>
//         </Box>
//       )}
//     </Dialog>
//   );
// };

//////////////////////////////////////////////////////////////////////
import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addChatThunk } from "../redux/slices/add/addChatThunk";
import { 
  Button, 
  TextareaAutosize, 
  Dialog, 
  DialogTitle, 
  DialogContent, 
  DialogActions,
  Typography,
  Box,
  Paper,
  IconButton,
  TextField,
  Snackbar,
  Alert,
  useMediaQuery,
  useTheme,
  Grid,
  Card,
  CardContent,
  Chip
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';

// צבעים מסרגל הצבעים הקיים באתר
const appColors = {
  primary: "#1976d2",      // צבע ראשי (כחול)
  secondary: "#f50057",    // צבע משני
  border: "gray",          // צבע גבולות (מבוסס על הגבול בקומפוננטת FullApplications)
  background: "#f5f5f5",   // צבע רקע בהיר
  success: "#4caf50",      // צבע להצלחה
  text: "#333333",         // צבע טקסט ראשי
  lightText: "#757575"     // צבע טקסט משני
};

export const NewChat = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  // Selectors
  const customer = useSelector(state => state.customer.customerChose);
  const type = useSelector(state => state.user.t);
  const appId = useSelector(state => state.chat.applicationId);
  const fullTo = useSelector(state => state.chat.to);
  
  // State
  const [open, setOpen] = useState(true);
  const [successMessage, setSuccessMessage] = useState(false);
  const [data, setData] = useState({
    sendDate: new Date().toISOString(),
    from: type,
    read: false,
    information: "",
    chatId: 0,
    applicationId: 0,
    to: customer.customerId
  });
  
  // Update applicationId when it changes in the store
  useEffect(() => {
    setData({ ...data, applicationId: appId });
  }, [appId]);
  
  // Handle dialog close
  const handleClose = () => {
    setOpen(false);
    navigate('/home/fullApplications');
  };
  
  // Handle message send
  const handleSend = () => {
    if (data.information.trim() === "") {
      return; // Don't send empty messages
    }
    
    dispatch(addChatThunk(data));
    setSuccessMessage(true);
    
    // Auto close after success message
    setTimeout(() => {
      setSuccessMessage(false);
      handleClose();
    }, 2000);
  };
  
  // Handle text input
  const handleTextChange = (e) => {
    setData({ ...data, information: e.target.value });
  };
  
  // Handle key press (Ctrl+Enter to send)
  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <Dialog 
      open={open} 
      onClose={handleClose}
      fullScreen={isMobile}
      maxWidth="md"
      PaperProps={{
        sx: {
          borderRadius: isMobile ? 0 : 3,
          width: isMobile ? '100%' : '600px',
          height: isMobile ? '100%' : 'auto',
          maxHeight: '90vh',
          border: `2px solid ${appColors.border}`,
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          background: isMobile ? 'white' : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
        }
      }}
    >
      {!successMessage ? (
        <>
          <DialogTitle sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            borderBottom: `1px solid ${appColors.border}`,
            background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
            color: 'white',
            p: 2
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <MailOutlineIcon sx={{ mr: 1 }} />
              <Typography variant="h6" component="div">
                New Message
              </Typography>
            </Box>
            <IconButton edge="end" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          
          <DialogContent sx={{ p: { xs: 2, sm: 3 }, backgroundColor: 'white' }}>
            <Card elevation={1} sx={{ mb: 3, overflow: 'visible' }}>
              <CardContent sx={{ p: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <PersonIcon sx={{ color: appColors.primary, mr: 1, mt: 0.5 }} />
                      <Box>
                        <Typography variant="subtitle2" color={appColors.lightText} gutterBottom>
                          To:
                        </Typography>
                        <Typography variant="body1" fontWeight="medium" color={appColors.text}>
                          {fullTo}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <AssignmentIcon sx={{ color: appColors.primary, mr: 1, mt: 0.5 }} />
                      <Box>
                        <Typography variant="subtitle2" color={appColors.lightText} gutterBottom>
                          Application ID:
                        </Typography>
                        <Typography variant="body1" fontWeight="medium" color={appColors.text}>
                          {appId}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                      <AccessTimeIcon sx={{ color: appColors.primary, mr: 1, mt: 0.5 }} />
                      <Box>
                        <Typography variant="subtitle2" color={appColors.lightText} gutterBottom>
                          Date:
                        </Typography>
                        <Typography variant="body1" color={appColors.text}>
                          {new Date().toLocaleDateString()} {new Date().toLocaleTimeString()}
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            
            <Typography variant="subtitle1" fontWeight="500" sx={{ mb: 2, color: appColors.text }}>
              Message Content:
            </Typography>
            
            <TextField
              multiline
              fullWidth
              minRows={isMobile ? 8 : 12}
              maxRows={20}
              value={data.information}
              onChange={handleTextChange}
              onKeyDown={handleKeyDown}
              placeholder="Type your message here..."
              variant="outlined"
              sx={{ 
                mb: 2,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: appColors.border,
                  },
                  '&:hover fieldset': {
                    borderColor: appColors.primary,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: appColors.primary,
                  },
                }
              }}
            />
            
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography variant="caption" color={appColors.lightText}>
                Press Ctrl+Enter to send
              </Typography>
              
              <Chip 
                icon={<MailOutlineIcon />} 
                label={`Sending as ${type === 'a' ? 'Assessor' : 'Customer'}`}
                size="small"
                variant="outlined"
                sx={{ 
                  borderColor: appColors.primary,
                  color: appColors.primary
                }}
              />
            </Box>
          </DialogContent>
          
          <DialogActions sx={{ 
            p: { xs: 2, sm: 3 }, 
            borderTop: `1px solid ${appColors.border}`,
            justifyContent: 'space-between',
            backgroundColor: appColors.background
          }}>
            <Button 
              startIcon={<AttachFileIcon />}
              variant="outlined"
              sx={{ 
                borderColor: appColors.primary,
                color: appColors.primary,
                borderRadius: 2,
                '&:hover': {
                  backgroundColor: 'rgba(25, 118, 210, 0.04)',
                  borderColor: appColors.primary
                }
              }}
            >
              Attach
            </Button>
            
            <Button 
              onClick={handleSend}
              variant="contained" 
              sx={{ 
                backgroundColor: appColors.primary,
                borderRadius: 2,
                px: 3,
                '&:hover': {
                  backgroundColor: '#1565c0'
                },
                '&.Mui-disabled': {
                  backgroundColor: 'rgba(25, 118, 210, 0.3)'
                }
              }}
              endIcon={<SendIcon />}
              disabled={data.information.trim() === ""}
            >
              Send
            </Button>
          </DialogActions>
        </>
      ) : (
        <Box sx={{ 
          p: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          justifyContent: 'center',
          height: '300px',
          backgroundColor: 'white'
        }}>
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
            <SendIcon sx={{ fontSize: 40, color: 'white' }} />
          </Box>
          
          <Typography variant="h5" sx={{ fontWeight: 700, color: "#2c3e50", mb: 2 }}>
            Message Sent Successfully!
          </Typography>
          
          <Typography variant="body1" sx={{ color: "#7f8c8d", mb: 4, textAlign: 'center' }}>
            Your message has been sent. Redirecting back to applications...
          </Typography>
        </Box>
      )}
    </Dialog>
  );
};

