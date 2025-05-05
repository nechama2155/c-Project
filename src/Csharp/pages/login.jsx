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
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../redux/slices/loginThunk";
import { addUser } from "../redux/slices/userSlice";
import { assessorByIdThunk } from "../redux/slices/get/assessorByIdThunk";
import { customerByIdThunk } from "../redux/slices/get/customerByIdThunk";
import { ChatsThunk } from "../redux/slices/get/ChatsThunk";

// Material UI imports
import { Box, TextField, Button, Dialog, DialogContent, 
         DialogTitle, IconButton, Typography, Paper } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import './cssPages/login.css'
export const Login = () => {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const type = useSelector(state => state.user.t);
  const tokena = useSelector(state => state.assessor.token);
  const tokenc = useSelector(state => state.customer.token);
  const navigate = useNavigate();
  const user = useSelector(state => state.user.users);
  const [open, setOpen] = useState(true);

   useEffect(() => {
    if (tokena === 1 || tokenc === 1) {
      // dispatch(ChatsThunk());
     navigate('/home/about');
    }
  }, [tokena, tokenc, dispatch, navigate]);

  useEffect(() => {
    if (type !== null) {
      if (type === 'a') {
        dispatch(assessorByIdThunk(user.userId));
      } else if (type === 'c') {
        dispatch(customerByIdThunk(user.userId));
      } else {
        // dispatch(ChatsThunk());
        navigate('/home/about');
      }
    }
  }, [type, user, dispatch, navigate]);

  const handleLogin = () => {
    if (id.trim()) {
      dispatch(addUser(id));
      dispatch(loginThunk(id));
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
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
        background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)'
      }}
    >
      <Dialog 
        open={open}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: '16px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            overflow: 'visible'
          }
        }}
      >
        <DialogTitle sx={{ p: 0 }}>
          <Box
            sx={{
              height: '8px',
              background: 'linear-gradient(90deg, #1a56db 0%, #0c4da2 100%)',
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
              p: 4
            }}
          >
            <Box sx={{ mb: 4, textAlign: 'center' }}>
              <img 
                src="/logo.png" 
                alt="Company Logo" 
                style={{ width: "280px", marginBottom: '20px' }} 
              />
              <Typography 
                variant="h5" 
                sx={{ 
                  fontWeight: 600, 
                  color: '#2c3e50',
                  mb: 1
                }}
              >
                Welcome
                 {/* Back */}
              </Typography>
              <Typography 
                variant="body2" 
                sx={{ 
                  color: '#7f8c8d',
                  mb: 3
                }}
              >
                Please enter your ID to continue
              </Typography>
            </Box>
            
            <Paper
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                p: 1,
                mb: 3,
                borderRadius: '12px',
                border: '1px solid #e0e0e0',
                backgroundColor: '#f9fafc'
              }}
            >
              <LockOutlinedIcon sx={{ color: '#1a56db', mx: 2 }} />
              <TextField
                fullWidth
                variant="standard"
                placeholder="Enter your ID"
                InputProps={{
                  disableUnderline: true,
                }}
                value={id}
                onChange={(e) => setId(e.target.value)}
                onKeyPress={handleKeyPress}
                sx={{ 
                  '& input': { 
                    py: 1.5,
                    fontSize: '1rem'
                  }
                }}
              />
            </Paper>
            
            <Button
              fullWidth
              variant="contained"
              onClick={handleLogin}
              sx={{
                py: 1.5,
                borderRadius: '12px',
                textTransform: 'none',
                fontSize: '1rem',
                fontWeight: 600,
                background: 'linear-gradient(90deg, #1a56db 0%, #0c4da2 100%)',
                boxShadow: '0 4px 15px rgba(26, 86, 219, 0.4)',
                '&:hover': {
                  background: 'linear-gradient(90deg, #4facfe100 0%, #4facfe100 80%)',
                  boxShadow: '0 6px 20px rgba(26, 86, 219, 0.6)',
                }
              }}
            >
              Sign In
            </Button>
            
            <Typography 
              variant="body2" 
              sx={{ 
                color: '#7f8c8d',
                mt: 3,
                textAlign: 'center'
              }}
            >
              Need assistance? Contact support
            </Typography>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};



