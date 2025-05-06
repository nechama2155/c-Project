// // import { Button } from "@mui/material";
// // // import { useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux"
// // import { editChatThunk } from "../redux/slices/edit/editChatThunk";
// // import { setIsRead } from "../redux/slices/chatSlice";
// // import { useEffect, useState } from "react";

// // export const LastChats = () =>{

// // const myChats = useSelector(state => state.chat.chats);

// // const dispatch = useDispatch();
// // const read = (chat) => {
// //     // chat.Read =  true;
// //     dispatch(setIsRead (chat.chatId));
// //     dispatch(editChatThunk(chat));
// // }
// // //refresh
// //     return <div>


// // <div>
// //     {myChats.map((chat,index) => {
// //         return <div key={index} style={{border:"5px solid gray",margin:"10px",padding:"10px",width:"80%"}}>
// //             <div>{chat.information}</div>
// //             <div>{chat.sendDate}</div>
// //             <Button variant="outlined" onClick={()=>{read(chat)}}>message</Button>
// //         </div>
// //     })}
// // </div>

// //     </div>
// // }




// ////////////////////////////////////////////////////////////////////////////
// import React, { useState, useRef, useEffect } from 'react';
// import {
//     Box,
//     Typography,
//     Button,
//     Paper,
//     Divider,
//     Container,
//     Avatar,
//     Fade,
//     Collapse,
//     Chip,
//     useMediaQuery,
//     useTheme
// } from '@mui/material';
// import { useDispatch, useSelector } from "react-redux";
// import { editChatThunk } from "../redux/slices/edit/editChatThunk";
// import { setIsRead } from "../redux/slices/chatSlice";
// import MailOutlineIcon from '@mui/icons-material/MailOutline';
// import MailIcon from '@mui/icons-material/Mail';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import DateRangeIcon from '@mui/icons-material/DateRange';

// export const LastChats = () => {
//     const myChats = useSelector(state => state.chat.chats);
//     //   const getChats = useSelector(state => state.chat.chats);
//     //   const sendChats = useSelector(state => state.chat.chats);
//     const dispatch = useDispatch();
//     const [expandedChats, setExpandedChats] = useState({});
//     const topRef = useRef(null);
//     const theme = useTheme();
//     const type = useSelector(state => state.user.t);    
//     const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


//     useEffect(() => {
//         // Scroll to top when component mounts
//         window.scrollTo(0, 0);
//     }, []);

//     const scrollToTop = () => {
//         topRef.current?.scrollIntoView({ behavior: 'smooth' });
//     };

//     const toggleChatExpansion = (chatId) => {
//         setExpandedChats(prev => ({
//             ...prev,
//             [chatId]: !prev[chatId]
//         }));
//     };

//     // ובפונקציה markAsRead
// const markAsRead = (chat) => {
//     if (chat && chat.read !== true && chat.from !== type) {
//       dispatch(setIsRead(chat.chatId));

//       const updatedChat = {
//         ...chat,
//         read: true
//       };

//       dispatch(editChatThunk(updatedChat));
//     }
//   };

//     const formatDate = (dateString) => {
//         try {
//             const date = new Date(dateString);
//             return date.toLocaleDateString('en-US', {
//                 year: 'numeric',
//                 month: 'short',
//                 day: 'numeric',
//                 hour: '2-digit',
//                 minute: '2-digit'
//             });
//         } catch (e) {
//             return dateString;
//         }
//     };

//     return (
//         <Box sx={{ p: { xs: 2, md: 4 }, position: 'relative' }} ref={topRef}>
//             <Fade in={true} timeout={1000}>
//                 <Box sx={{ textAlign: 'center', mb: 6 }}>
//                     <Typography
//                         variant="h4"
//                         component="h1"
//                         fontWeight="700"
//                         color="#2c3e50"
//                         sx={{ mb: 2, fontSize: { xs: '1.75rem', md: '2.125rem' } }}
//                     >
//                         Your Recent Messages
//                     </Typography>
//                     <Typography
//                         variant="subtitle1"
//                         color="#7f8c8d"
//                         sx={{
//                             maxWidth: 800,
//                             mx: 'auto',
//                             mb: 4,
//                             lineHeight: 1.8,
//                             px: { xs: 2, md: 0 }
//                         }}
//                     >
//                         Stay updated with your latest conversations. Unread messages are highlighted for your convenience.
//                     </Typography>
//                 </Box>
//             </Fade>

//             <Container maxWidth="md">
//                 <Fade in={true} timeout={1200}>
//                     <Box>
//                         {myChats.length === 0 ? (
//                             <Paper
//                                 elevation={0}
//                                 sx={{
//                                     p: 4,
//                                     borderRadius: 3,
//                                     background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//                                     textAlign: 'center'
//                                 }}
//                             >
//                                 <Typography variant="h6" color="#2c3e50">
//                                     No messages yet
//                                 </Typography>
//                                 <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1 }}>
//                                     Your recent conversations will appear here
//                                 </Typography>
//                             </Paper>
//                         ) : (
//                             myChats.map((chat, index) => {
//                                 const isUnread = chat && chat.read === false && chat.from !== type;


//                                 return (
//                                     <Fade in={true} timeout={1000 + (index * 200)} key={chat.chatId || index}>
//                                         <Paper
//                                             elevation={isUnread ? 3 : 0}
//                                             sx={{
//                                                 mb: 3,
//                                                 borderRadius: 2,
//                                                 overflow: 'hidden',
//                                                 border: isUnread ? '2px solid #4facfe' : '1px solid #e0e0e0',
//                                                 transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                                                 '&:hover': {
//                                                     transform: 'translateY(-3px)',
//                                                     boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)'
//                                                 },
//                                                 ...(isUnread && {
//                                                     borderLeft: '8px solid #4facfe',
//                                                     background: 'linear-gradient(135deg, rgba(79, 172, 254, 0.15) 0%, rgba(195, 207, 226, 0.25) 100%)',
//                                                     boxShadow: '0 4px 15px rgba(79, 172, 254, 0.2)'
//                                                 })
//                                             }}
//                                         >
//                                             <Box sx={{ p: { xs: 2, md: 3 } }}>
//                                                 <Box sx={{
//                                                     display: 'flex',
//                                                     flexDirection: { xs: 'column', sm: 'row' },
//                                                     justifyContent: 'space-between',
//                                                     alignItems: { xs: 'flex-start', sm: 'center' },
//                                                     gap: { xs: 2, sm: 0 }
//                                                 }}>
//                                                     <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                         <Avatar
//                                                             sx={{
//                                                                 bgcolor: isUnread ? 'rgba(79, 172, 254, 0.2)' : 'rgba(195, 207, 226, 0.1)',
//                                                                 color: isUnread ? '#4facfe' : '#7f8c8d',
//                                                                 mr: 2,
//                                                                 width: { xs: 40, md: 48 },
//                                                                 height: { xs: 40, md: 48 },
//                                                                 border: isUnread ? '2px solid #4facfe' : 'none'
//                                                             }}
//                                                         >
//                                                             {isUnread ? <MailIcon /> : <MailOutlineIcon />}
//                                                         </Avatar>
//                                                         <Box>
//                                                             <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5, flexWrap: 'wrap' }}>
//                                                                 <Typography
//                                                                     variant="subtitle1"
//                                                                     fontWeight={isUnread ? "700" : "400"}
//                                                                     color={isUnread ? "#4facfe" : "#2c3e50"}
//                                                                     sx={{ mr: 1 }}
//                                                                 >
//                                                                     Message {index + 1}
//                                                                 </Typography>
//                                                                 {isUnread && (
//                                                                     <Chip
//                                                                         label="New"
//                                                                         size="small"
//                                                                         sx={{
//                                                                             bgcolor: 'rgba(79, 172, 254, 0.2)',
//                                                                             color: '#4facfe',
//                                                                             fontWeight: 700,
//                                                                             height: 24,
//                                                                             border: '1px solid #4facfe'
//                                                                         }}
//                                                                     />
//                                                                 )}
//                                                             </Box>
//                                                             <Box sx={{ display: 'flex', alignItems: 'center' }}>
//                                                                 <DateRangeIcon sx={{ fontSize: 16, color: isUnread ? '#4facfe' : '#7f8c8d', mr: 0.5 }} />
//                                                                 <Typography
//                                                                     variant="caption"
//                                                                     color={isUnread ? '#4facfe' : '#7f8c8d'}
//                                                                     fontWeight={isUnread ? 600 : 400}
//                                                                 >
//                                                                     {formatDate(chat.sendDate)}
//                                                                 </Typography>
//                                                             </Box>
//                                                         </Box>
//                                                     </Box>
//                                                     <Button
//                                                         variant={isUnread ? "contained" : "outlined"}
//                                                         onClick={() => {
//                                                             toggleChatExpansion(chat.chatId);
//                                                             if (isUnread && !expandedChats[chat.chatId]) {
//                                                                 markAsRead(chat);
//                                                             }
//                                                         }}
//                                                         endIcon={expandedChats[chat.chatId] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
//                                                         sx={{
//                                                             borderRadius: '8px',
//                                                             textTransform: 'none',
//                                                             width: { xs: '100%', sm: 'auto' },
//                                                             ...(isUnread ? {
//                                                                 background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
//                                                                 color: 'white',
//                                                                 boxShadow: '0 4px 10px rgba(79, 172, 254, 0.3)',
//                                                                 '&:hover': {
//                                                                     background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 80%)',
//                                                                     boxShadow: '0 6px 15px rgba(79, 172, 254, 0.4)',
//                                                                 }
//                                                             } : {
//                                                                 borderColor: '#c3cfe2',
//                                                                 color: '#2c3e50',
//                                                                 '&:hover': {
//                                                                     borderColor: '#4facfe',
//                                                                     backgroundColor: 'rgba(79, 172, 254, 0.05)',
//                                                                 }
//                                                             })
//                                                         }}
//                                                     >
//                                                         {expandedChats[chat.chatId] ? 'Hide message' : (isUnread ? 'Read new message' : 'View message')}
//                                                     </Button>
//                                                 </Box>

//                                                 <Collapse in={expandedChats[chat.chatId]} timeout="auto" unmountOnExit>
//                                                     <Divider sx={{ my: 2 }} />
//                                                     <Paper
//                                                         elevation={0}
//                                                         sx={{
//                                                             p: { xs: 2, md: 3 },
//                                                             borderRadius: 2,
//                                                             background: 'linear-gradient(135deg, rgba(245, 247, 250, 0.05) 0%, rgba(195, 207, 226, 0.05) 100%)',
//                                                             border: '1px solid rgba(195, 207, 226, 0.1)',
//                                                             mt: 1
//                                                         }}
//                                                     >
//                                                         <Typography variant="body1" sx={{ lineHeight: 1.8, wordBreak: 'break-word' }}>
//                                                             {chat.information}
//                                                         </Typography>
//                                                     </Paper>
//                                                 </Collapse>
//                                             </Box>
//                                         </Paper>
//                                     </Fade>
//                                 )
//                             })
//                         )}
//                     </Box>
//                 </Fade>
//             </Container>

//             {/* Scroll to top button */}
//             <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={scrollToTop}
//                 sx={{
//                     position: 'fixed',
//                     bottom: 20,
//                     right: 20,
//                     minWidth: 0,
//                     width: 50,
//                     height: 50,
//                     borderRadius: '50%',
//                     boxShadow: '0 4px 15px rgba(195, 207, 226, 0.4)',
//                     background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
//                     color: '#2c3e50',
//                     '&:hover': {
//                         background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 80%)',
//                         boxShadow: '0 6px 20px rgba(195, 207, 226, 0.6)',
//                     },
//                     zIndex: 1000,
//                     display: 'flex',
//                     justifyContent: 'center',
//                     alignItems: 'center'
//                 }}
//             >
//                 <KeyboardArrowUpIcon />
//             </Button>
//         </Box>
//     );
// };


////////////////////////////////////////////////



import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Typography,
    Button,
    Paper,
    Divider,
    Container,
    Avatar,
    Fade,
    Collapse,
    Chip,
    useMediaQuery,
    useTheme
} from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { editChatThunk } from "../redux/slices/edit/editChatThunk";
import { setIsRead } from "../redux/slices/chatSlice";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DateRangeIcon from '@mui/icons-material/DateRange';
import PersonIcon from '@mui/icons-material/Person';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SendIcon from '@mui/icons-material/Send';
import ReceiveIcon from '@mui/icons-material/MoveToInbox';

export const LastChats = () => {
    const myChats = useSelector(state => state.chat.chats);
    const applications = useSelector(state => state.application.applications);
    const users = useSelector(state => state.user.users);
    const userType = useSelector(state => state.user.t);

    const dispatch = useDispatch();
    const [expandedChats, setExpandedChats] = useState({});
    const topRef = useRef(null);
    const theme = useTheme();


    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);

    const scrollToTop = () => {
        topRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const toggleChatExpansion = (chatId) => {
        setExpandedChats(prev => ({
            ...prev,
            [chatId]: !prev[chatId]
        }));
    };

    const markAsRead = (chat) => {
        if (chat && chat.read !== true && chat.from !== userType) {
            dispatch(setIsRead(chat.chatId));

            const updatedChat = {
                ...chat,
                read: true
            };

            dispatch(editChatThunk(updatedChat));
        }
    };

    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (e) {
            return dateString;
        }
    };

    // Function to get application details by applicationId
    const getApplicationDetails = (applicationId) => {
        const application = applications.find(app => app.applicationId === applicationId);
        return application || { applicationId: 'Unknown', subject: 'Unknown Application' };
    };

    // Function to get user details by userId
    const getUserDetails = (userId) => {
        const user = users.find(user => user.id === userId);
        return user || { id: userId, name: 'Unknown User' };
    };

    // Function to determine if the chat was sent by the current user
    const isSentByCurrentUser = (chat) => {
        return chat.from === userType;
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
                        Your Recent Messages
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
                        Stay updated with your latest conversations. Unread messages are highlighted for your convenience.
                    </Typography>
                </Box>
            </Fade>
            <Container maxWidth="md">
                <Fade in={true} timeout={1200}>
                    <Box>
                        {myChats.length === 0 ? (
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
                                    No messages yet
                                </Typography>
                                <Typography variant="body2" color="#7f8c8d" sx={{ mt: 1 }}>
                                    Your recent conversations will appear here
                                </Typography>
                            </Paper>
                        ) : (
                            myChats.map((chat, index) => {
                                const isUnread = chat && chat.read === false && chat.from !== userType;
                                const isSent = isSentByCurrentUser(chat);
                                const applicationDetails = getApplicationDetails(chat.applicationId);

                                const senderDetails = Array.isArray(users)
                                    ? users.find(user => user.id === (chat.userId || chat.from)) || { name: 'Unknown', id: 'Unknown' }
                                    : { name: 'Unknown', id: 'Unknown' };


                                // Determine gradient colors based on sent/received
                                const gradientColors = isSent
                                    ? 'linear-gradient(135deg, rgba(129, 236, 236, 0.15) 0%, rgba(162, 222, 208, 0.25) 100%)'
                                    : 'linear-gradient(135deg, rgba(79, 172, 254, 0.15) 0%, rgba(195, 207, 226, 0.25) 100%)';

                                const borderColor = isSent ? '#81ecec' : '#4facfe';
                                const iconColor = isSent ? '#00cec9' : '#4facfe';

                                return (
                                    <Fade in={true} timeout={1000 + (index * 200)} key={chat.chatId || index}>
                                        <Paper
                                            elevation={isUnread ? 3 : 0}
                                            sx={{
                                                mb: 3,
                                                borderRadius: 2,
                                                overflow: 'hidden',
                                                border: isUnread ? `2px solid ${borderColor}` : '1px solid #e0e0e0',
                                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                '&:hover': {
                                                    transform: 'translateY(-3px)',
                                                    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)'
                                                },
                                                ...(isUnread && {
                                                    borderLeft: `8px solid ${borderColor}`,
                                                    background: gradientColors,
                                                    boxShadow: `0 4px 15px rgba(79, 172, 254, 0.2)`
                                                }),
                                                ...(isSent && {
                                                    borderLeft: `8px solid ${borderColor}`,
                                                    background: gradientColors
                                                })
                                            }}
                                        >
                                            <Box sx={{ p: { xs: 2, md: 3 } }}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    flexDirection: { xs: 'column', sm: 'row' },
                                                    justifyContent: 'space-between',
                                                    alignItems: { xs: 'flex-start', sm: 'center' },
                                                    gap: { xs: 2, sm: 0 }
                                                }}>
                                                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                        <Avatar
                                                            sx={{
                                                                bgcolor: isUnread ? `rgba(${isSent ? '0, 206, 201' : '79, 172, 254'}, 0.2)` : 'rgba(195, 207, 226, 0.1)',
                                                                color: isUnread ? iconColor : '#7f8c8d',
                                                                mr: 2,
                                                                width: { xs: 40, md: 48 },
                                                                height: { xs: 40, md: 48 },
                                                                border: isUnread ? `2px solid ${borderColor}` : 'none'
                                                            }}
                                                        >
                                                            {isSent ? <SendIcon /> : <ReceiveIcon />}
                                                        </Avatar>
                                                        <Box>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5, flexWrap: 'wrap' }}>
                                                                <Typography
                                                                    variant="subtitle1"
                                                                    fontWeight={isUnread ? "700" : "400"}
                                                                    color={isUnread ? iconColor : "#2c3e50"}
                                                                    sx={{ mr: 1 }}
                                                                >
                                                                    {isSent ? "Sent" : "Received"} Message
                                                                </Typography>
                                                                {isUnread && (
                                                                    <Chip
                                                                        label="New"
                                                                        size="small"
                                                                        sx={{
                                                                            bgcolor: `rgba(${isSent ? '0, 206, 201' : '79, 172, 254'}, 0.2)`,
                                                                            color: iconColor,
                                                                            fontWeight: 700,
                                                                            height: 24,
                                                                            border: `1px solid ${borderColor}`
                                                                        }}
                                                                    />
                                                                )}
                                                                <Chip
                                                                    icon={isSent ? <SendIcon /> : <ReceiveIcon />}
                                                                    label={isSent ? "Sent by you" : "Received"}
                                                                    size="small"
                                                                    sx={{
                                                                        ml: 1,
                                                                        bgcolor: `rgba(${isSent ? '0, 206, 201' : '79, 172, 254'}, 0.1)`,
                                                                        color: iconColor,
                                                                        border: `1px solid ${borderColor}`
                                                                    }}
                                                                />
                                                            </Box>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                                                <PersonIcon sx={{ fontSize: 16, color: '#7f8c8d', mr: 0.5 }} />
                                                                <Typography
                                                                    variant="caption"
                                                                    color="#7f8c8d"
                                                                >
                                                                    {senderDetails.name || 'Unknown'} (ID: {senderDetails.id || 'Unknown'})
                                                                </Typography>
                                                            </Box>
                                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                                                <AssignmentIcon sx={{ fontSize: 16, color: '#7f8c8d', mr: 0.5 }} />
                                                                <Typography
                                                                    variant="caption"
                                                                    color="#7f8c8d"
                                                                >
                                                                    Application: {applicationDetails.subject} (ID: {applicationDetails.applicationId})
                                                                </Typography>
                                                            </Box>
                                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                <DateRangeIcon sx={{ fontSize: 16, color: isUnread ? iconColor : '#7f8c8d', mr: 0.5 }} />
                                                                <Typography
                                                                    variant="caption"
                                                                    color={isUnread ? iconColor : '#7f8c8d'}
                                                                    fontWeight={isUnread ? 600 : 400}
                                                                >
                                                                    {formatDate(chat.sendDate)}
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                    <Button
                                                        variant={isUnread ? "contained" : "outlined"}
                                                        onClick={() => {
                                                            toggleChatExpansion(chat.chatId);
                                                            if (isUnread && !expandedChats[chat.chatId]) {
                                                                markAsRead(chat);
                                                            }
                                                        }}
                                                        endIcon={expandedChats[chat.chatId] ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                                                        sx={{
                                                            borderRadius: '8px',
                                                            textTransform: 'none',
                                                            width: { xs: '100%', sm: 'auto' },
                                                            ...(isUnread ? {
                                                                background: isSent
                                                                    ? 'linear-gradient(135deg, #81ecec 0%, #00cec9 100%)'
                                                                    : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
                                                                color: 'white',
                                                                boxShadow: `0 4px 10px rgba(${isSent ? '0, 206, 201' : '79, 172, 254'}, 0.3)`,
                                                                '&:hover': {
                                                                    background: isSent
                                                                        ? 'linear-gradient(135deg, #81ecec 0%, #00cec9 80%)'
                                                                        : 'linear-gradient(135deg, #4facfe 0%, #00f2fe 80%)',

                                                                    boxShadow: `0 6px 15px rgba(${isSent ? '0, 206, 201' : '79, 172, 254'}, 0.4)`,
                                                                }
                                                            } : {
                                                                borderColor: isSent ? '#81ecec' : '#c3cfe2',
                                                                color: isSent ? '#00cec9' : '#2c3e50',
                                                                '&:hover': {
                                                                    borderColor: isSent ? '#00cec9' : '#4facfe',
                                                                    backgroundColor: `rgba(${isSent ? '0, 206, 201' : '79, 172, 254'}, 0.05)`,
                                                                }
                                                            })
                                                        }}
                                                    >
                                                        {expandedChats[chat.chatId] ? 'Hide message' : (isUnread ? 'Read new message' : 'View message')}
                                                    </Button>
                                                </Box>
                                                <Collapse in={expandedChats[chat.chatId]} timeout="auto" unmountOnExit>
                                                    <Divider sx={{ my: 2 }} />
                                                    <Paper
                                                        elevation={0}
                                                        sx={{
                                                            p: { xs: 2, md: 3 },
                                                            borderRadius: 2,
                                                            background: isSent
                                                                ? 'linear-gradient(135deg, rgba(129, 236, 236, 0.05) 0%, rgba(0, 206, 201, 0.05) 100%)'
                                                                : 'linear-gradient(135deg, rgba(245, 247, 250, 0.05) 0%, rgba(195, 207, 226, 0.05) 100%)',
                                                            border: `1px solid rgba(${isSent ? '0, 206, 201' : '195, 207, 226'}, 0.1)`,
                                                            mt: 1
                                                        }}
                                                    >
                                                        <Typography variant="body1" sx={{ lineHeight: 1.8, wordBreak: 'break-word' }}>
                                                            {chat.information}
                                                        </Typography>
                                                    </Paper>
                                                </Collapse>
                                            </Box>
                                        </Paper>
                                    </Fade>
                                )
                            })
                        )}
                    </Box>
                </Fade>
            </Container>
            {/* Scroll to top button */}
            <Button
                variant="contained"
                color="primary"
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
        </Box>
    );
};