// import { useEffect, useRef, useState } from "react"
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loginThunk } from "../redux/slices/loginThunk";
// import Button from '@mui/material/Button';
// import { addUser, setType } from "../redux/slices/userSlice";
// import { Box, TextField } from "@mui/material";
// import * as React from 'react';
// import { assessorByIdThunk } from "../redux/slices/get/assessorByIdThunk";
// import { customerByIdThunk } from "../redux/slices/get/customerByIdThunk";
// import { ChatsThunk } from "../redux/slices/get/ChatsThunk";


// export const Login = () => {

//   const [id, setId] = useState("");
//   const dispatch = useDispatch();
//   const type = useSelector(state => state.user.t);
//   const tokena = useSelector(state => state.assessor.token);
//   const tokenc = useSelector(state => state.customer.token);
//   const navigate = useNavigate();
//   const user = useSelector(state => state.user.users);

//   const refdialog = useRef();

//   useEffect(() => {
//     refdialog.current.showModal();
//   }, [])
//   useEffect(() => {
//     if(tokena===1 || tokenc ===1 ){
//         //  dispatch(ChatsThunk()) ;
//          navigate('/home/about'); 
//     }

//   }, [tokena,tokenc])
//   useEffect(() => {
//     console.log(type);
//     if (type !== null) {
//         if (type === 'a') {
//             dispatch(assessorByIdThunk(user.userId));
//         }
//         else if (type === 'c') {
//             dispatch(customerByIdThunk(user.userId));
//         }
//         else  {
//           dispatch(ChatsThunk()) ;    
//           navigate('/home/about');}
//     }
//   }, [type])

//   return <div>
//     <dialog ref={refdialog} className="dialog">
//       <div>
//         <img src="logo.png" alt="" style={{width:"350px"}} />
//       </div>
//       {/* <div onClick={()=>{}}>x</div> */}
//       <Box>
//       {/* <TextField id="standard-basic" label="first name" variant="standard" onChange={(e) => setDetails({ ...details, userFirstName: e.target.value })}/>
//       <TextField id="standard-basic" label="last name" variant="standard" onChange={(e) => setDetails({ ...details, userLastName: e.target.value })}/> */}
//       <TextField id="standard-basic" label="id" variant="standard" onChange={(e) => setId(e.target.value)}/>
//     </Box>
      
//       <Button variant="outlined" onClick={() => {dispatch(addUser(id));dispatch(loginThunk(id))}}>next</Button>
//       {/* dispatch(ChatsThunk()) ; */}
//     </dialog>
//   </div>
// }







////////////////////////////////////////////////////////////////////
// import { useEffect, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { loginThunk } from "../redux/slices/loginThunk";
// import { addUser } from "../redux/slices/userSlice";
// import { assessorByIdThunk } from "../redux/slices/get/assessorByIdThunk";
// import { customerByIdThunk } from "../redux/slices/get/customerByIdThunk";
// import { ChatsThunk } from "../redux/slices/get/ChatsThunk";

// // Material UI imports
// import { Box, TextField, Button, Dialog, DialogContent, 
//          DialogTitle, IconButton, Typography, Paper } from "@mui/material";
// import CloseIcon from '@mui/icons-material/Close';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// // import './cssPages/login.css'
// export const Login = () => {
//   const [id, setId] = useState("");
//   const dispatch = useDispatch();
//   const type = useSelector(state => state.user.t);
//   const tokena = useSelector(state => state.assessor.token);
//   const tokenc = useSelector(state => state.customer.token);
//   const navigate = useNavigate();
//   const user = useSelector(state => state.user.users);
//   const [open, setOpen] = useState(true);

//    useEffect(() => {
//     if (tokena === 1 || tokenc === 1) {
//       // dispatch(ChatsThunk());
//      navigate('/home/about');
//     }
//   }, [tokena, tokenc, dispatch, navigate]);

//   useEffect(() => {
//     if (type !== null) {
//       if (type === 'a') {
//         dispatch(assessorByIdThunk(user.userId));
//       } else if (type === 'c') {
//         dispatch(customerByIdThunk(user.userId));
//       } else {
//         // dispatch(ChatsThunk());
//         navigate('/home/about');
//       }
//     }
//   }, [type, user, dispatch, navigate]);

//   const handleLogin = () => {
//     if (id.trim()) {
//       dispatch(addUser(id));
//       dispatch(loginThunk(id));
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter') {
//       handleLogin();
//     }
//   };

//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         minHeight: '100vh',
//         background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)'
//       }}
//     >
//       <Dialog 
//         open={open}
//         maxWidth="sm"
//         fullWidth
//         PaperProps={{
//           sx: {
//             borderRadius: '16px',
//             boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
//             overflow: 'visible'
//           }
//         }}
//       >
//         <DialogTitle sx={{ p: 0 }}>
//           <Box
//             sx={{
//               height: '8px',
//               background: 'linear-gradient(90deg, #1a56db 0%, #0c4da2 100%)',
//               borderTopLeftRadius: '16px',
//               borderTopRightRadius: '16px'
//             }}
//           />
//         </DialogTitle>
        
//         <DialogContent>
//           <Box
//             sx={{
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//               p: 4
//             }}
//           >
//             <Box sx={{ mb: 4, textAlign: 'center' }}>
//               <img 
//                 src="/logo.png" 
//                 alt="Company Logo" 
//                 style={{ width: "280px", marginBottom: '20px' }} 
//               />
//               <Typography 
//                 variant="h5" 
//                 sx={{ 
//                   fontWeight: 600, 
//                   color: '#2c3e50',
//                   mb: 1
//                 }}
//               >
//                 Welcome
//                  {/* Back */}
//               </Typography>
//               <Typography 
//                 variant="body2" 
//                 sx={{ 
//                   color: '#7f8c8d',
//                   mb: 3
//                 }}
//               >
//                 Please enter your ID to continue
//               </Typography>
//             </Box>
            
//             <Paper
//               elevation={0}
//               sx={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 width: '100%',
//                 p: 1,
//                 mb: 3,
//                 borderRadius: '12px',
//                 border: '1px solid #e0e0e0',
//                 backgroundColor: '#f9fafc'
//               }}
//             >
//               <LockOutlinedIcon sx={{ color: '#1a56db', mx: 2 }} />
//               <TextField
//                 fullWidth
//                 variant="standard"
//                 placeholder="Enter your ID"
//                 InputProps={{
//                   disableUnderline: true,
//                 }}
//                 value={id}
//                 onChange={(e) => setId(e.target.value)}
//                 onKeyPress={handleKeyPress}
//                 sx={{ 
//                   '& input': { 
//                     py: 1.5,
//                     fontSize: '1rem'
//                   }
//                 }}
//               />
//             </Paper>
            
//             <Button
//               fullWidth
//               variant="contained"
//               onClick={handleLogin}
//               sx={{
//                 py: 1.5,
//                 borderRadius: '12px',
//                 textTransform: 'none',
//                 fontSize: '1rem',
//                 fontWeight: 600,
//                 background: 'linear-gradient(90deg, #1a56db 0%, #0c4da2 100%)',
//                 boxShadow: '0 4px 15px rgba(26, 86, 219, 0.4)',
//                 '&:hover': {
//                   background: 'linear-gradient(90deg, #4facfe100 0%, #4facfe100 80%)',
//                   boxShadow: '0 6px 20px rgba(26, 86, 219, 0.6)',
//                 }
//               }}
//             >
//               Sign In
//             </Button>
            
//             <Typography 
//               variant="body2" 
//               sx={{ 
//                 color: '#7f8c8d',
//                 mt: 3,
//                 textAlign: 'center'
//               }}
//             >
//               Need assistance? Contact support
//             </Typography>
//           </Box>
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// };


import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../redux/slices/loginThunk";
import { addUser } from "../redux/slices/userSlice";
import { assessorByIdThunk } from "../redux/slices/get/assessorByIdThunk";
import { customerByIdThunk } from "../redux/slices/get/customerByIdThunk";

// Material UI imports
import { 
  Box, 
  TextField, 
  Button, 
  Dialog, 
  DialogContent,
  DialogTitle, 
  Typography, 
  Paper,
  InputAdornment,
  FormHelperText,
  CircularProgress
} from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonIcon from '@mui/icons-material/Person';

export const Login = () => {
  const [id, setId] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const dispatch = useDispatch();
  const type = useSelector(state => state.user.t);
  const tokena = useSelector(state => state.assessor.token);
  const tokenc = useSelector(state => state.customer.token);
  const navigate = useNavigate();
  const user = useSelector(state => state.user.users);
  const [open, setOpen] = useState(true);
  
  // בדיקת תקינות תעודת זהות - 9 ספרות בלבד
  const validateId = (value) => {
    const idRegex = /^\d{9}$/;
    return idRegex.test(value);
  };

  const handleIdChange = (e) => {
    const value = e.target.value;
    
    // מאפשר רק ספרות
    if (value === '' || /^\d+$/.test(value)) {
      setId(value);
      
      if (value.length === 0) {
        setError("");
        setIsValid(false);
      } else if (value.length !== 9) {
        setError("ID must be exactly 9 digits");
        setIsValid(false);
      } else {
        setError("");
        setIsValid(true);
      }
    }
  };

  useEffect(() => {
    if (tokena === 1 || tokenc === 1) {
      navigate('/home/about');
    }
  }, [tokena, tokenc, navigate]);

  useEffect(() => {
    if (type !== null) {
      if (type === 'a') {
        dispatch(assessorByIdThunk(user.userId));
      } else if (type === 'c') {
        dispatch(customerByIdThunk(user.userId));
      } else {
        navigate('/home/about');
      }
    }
  }, [type, user, dispatch, navigate]);

  const handleLogin = () => {
    if (isValid) {
      setIsLoading(true);
      dispatch(addUser(id));
      dispatch(loginThunk(id))
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && isValid) {
      handleLogin();
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #e6e9ed 0%, #b0bdcf 100%)', // גוון מעט יותר כהה מהמבוקש
        padding: { xs: 2, sm: 4 }
      }}
    >
      <Dialog
        open={open}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
            overflow: 'visible',
            maxWidth: { xs: '95%', sm: '450px' }
          }
        }}
      >
        <DialogTitle sx={{ p: 0 }}>
          <Box
            sx={{
              height: '8px',
              background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
              borderTopLeftRadius: '16px',
              borderTopRightRadius: '16px'
            }}
          />
        </DialogTitle>
        
        <DialogContent>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              p: { xs: 2, sm: 4 }
            }}
          >
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <Box
                sx={{
                  width: 70,
                  height: 70,
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #e6e9ed 0%, #b0bdcf 100%)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                  margin: '0 auto 20px'
                }}
              >
                <PersonIcon sx={{ fontSize: 40, color: '#3a7bd5' }} />
              </Box>
              
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: '#2c3e50',
                  mb: 1
                }}
              >
                Welcome
              </Typography>
              
              <Typography
                variant="body2"
                sx={{
                  color: '#7f8c8d',
                  mb: 3,
                  fontSize: '0.95rem'
                }}
              >
                Please enter your ID number to continue
              </Typography>
            </Box>
            
            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                p: 1,
                mb: error ? 0.5 : 3,
                borderRadius: '12px',
                border: `1px solid ${error ? '#f44336' : '#e0e0e0'}`,
                backgroundColor: '#f9fafc',
                transition: 'all 0.3s ease'
              }}
            >
              <LockOutlinedIcon sx={{ color: error ? '#f44336' : '#3a7bd5', mx: 2 }} />
              <TextField
                fullWidth
                variant="standard"
                placeholder="Enter your 9-digit ID"
                InputProps={{
                  disableUnderline: true,
                  inputProps: { maxLength: 9 },
                  endAdornment: isValid && (
                    <InputAdornment position="end">
                      <Box
                        sx={{
                          width: 16,
                          height: 16,
                          borderRadius: '50%',
                          backgroundColor: '#4caf50',
                          mr: 1
                        }}
                      />
                    </InputAdornment>
                  )
                }}
                value={id}
                onChange={handleIdChange}
                onKeyPress={handleKeyPress}
                sx={{
                  '& input': {
                    py: 1.5,
                    fontSize: '1rem'
                  }
                }}
              />
            </Paper>
            
            {error && (
              <FormHelperText error sx={{ alignSelf: 'flex-start', mb: 2, ml: 1 }}>
                {error}
              </FormHelperText>
            )}
            
            <Button
              fullWidth
              variant="contained"
              onClick={handleLogin}
              disabled={!isValid || isLoading}
              sx={{
                py: 1.5,
                borderRadius: '12px',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                background: isValid 
                  ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' 
                  : 'linear-gradient(90deg, #bdc3c7 0%, #95a5a6 100%)',
                boxShadow: isValid ? '0 4px 15px rgba(58, 123, 213, 0.4)' : 'none',
                '&:hover': {
                  background: isValid 
                    ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 80%)' 
                    : 'linear-gradient(90deg, #bdc3c7 0%, #95a5a6 100%)',
                  boxShadow: isValid ? '0 6px 20px rgba(58, 123, 213, 0.6)' : 'none',
                },
                transition: 'all 0.3s ease'
              }}
            >
              {isLoading ? (
                <CircularProgress size={24} sx={{ color: 'white' }} />
              ) : (
                "Sign In"
              )}
            </Button>
            
            <Typography
              variant="body2"
              sx={{
                color: '#7f8c8d',
                mt: 3,
                textAlign: 'center',
                fontSize: '0.85rem'
              }}
            >
              Need assistance? <span style={{ color: '#3a7bd5', cursor: 'pointer', fontWeight: 500 }}>Contact support</span>
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};




