import React, { useState, useRef, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import RefreshIcon from '@mui/icons-material/Refresh';
import { TextField, InputAdornment, IconButton } from '@mui/material';
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
    useTheme,
    Grid
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
import { type } from '@testing-library/user-event/dist/type';

export const LastChats = () => {
    const myChats = useSelector(state => state.chat.lastChats);
    const applications = useSelector(state => state.application.applications);
    const users = useSelector(state => state.user.users);
    const userType = useSelector(state => state.user.t);
    const dispatch = useDispatch();
    const [expandedChats, setExpandedChats] = useState({});
    const topRef = useRef(null);
    const theme = useTheme();
    const [sortBy, setSortBy] = useState('none');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredChats, setFilteredChats] = useState([]);
    // const assessments = useSelector(state => state.assessment.assessments);
    const customers = useSelector(state => state.customer.customers);
    const assessors = useSelector(state => state.assessor.assessors);
    const apartmentDetailsData = useSelector(state => state.apartmentDetails.apartmentsDetails);
    const thisAssessor = useSelector(state => state.assessor.thisAssessor);
    const thisCustomer = useSelector(state => state.customer.thisCustomer);
    const [localReadChats, setLocalReadChats] = useState({});
    useEffect(() => {
        // מניעת גלילה בגוף הדף
        document.body.style.overflow = 'hidden';
        
        // ניקוי בעת הסרת הקומפוננטה
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    useEffect(() => {
        setFilteredChats(myChats);
    }, [myChats]);

    const scrollToTop = () => {
        const scrollableElement = document.querySelector('.scrollable-chats');
        if (scrollableElement) {
            scrollableElement.scrollTo({ top: 0, behavior: 'smooth' });
        }
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
            
            // הוסף את הצ'אט לרשימת הצ'אטים שנקראו מקומית
            setLocalReadChats(prev => ({
                ...prev,
                [chat.chatId]: true
            }));
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
    // const getUserDetails = (userId) => {
    //     const user = users.find(user => user.id === userId);
    //     return user || { id: userId, name: 'Unknown User' };
    // };
    // פונקציה לקבלת פרטי משתמש לפי היררכיית הנתונים - עם תיקון לתמיכה בלקוח
    const getDetailedUserInfo = (chat) => {
        // בדיקה אם מדובר בלקוח או בשמאי
        const isCustomer = chat.from === 'c';
        const isAssessor = chat.from === 'a';

        // מציאת הפנייה הרלוונטית
        const application = applications.find(app => app.applicationId === chat.applicationId);

        if (!application) {
            return { name: 'Unknown' };
        }

        // אם השולח הוא לקוח
        if (isCustomer) {
            try {
                // מציאת פרטי הדירה לפי מזהה הפנייה
                const aptDetails = apartmentDetailsData?.find(apt => apt.apartmentId === application.applicationId);

                if (!aptDetails) {
                    return { name: 'Unknown Customer' };
                }

                // מציאת הלקוח לפי מזהה הלקוח בפרטי הדירה
                const customer = customers?.find(cust => cust.customerId === aptDetails.customerId);

                if (!customer) {
                    if(!thisCustomer)
                       return { name: 'Unknown Customer' };
                    else return { name: `${thisCustomer.customerFirstName} ${thisCustomer.customerLastName}` };
                }

                // החזרת פרטי הלקוח המלאים
                return {
                    name: `${customer.customerFirstName} ${customer.customerLastName}`,
                    type: 'customer'
                };
            } catch (error) {
                console.error('Error getting customer details:', error);
                return { name: 'Unknown Customer' };
            }
        }

        // אם השולח הוא שמאי
        if (isAssessor) {
            try {
                // בדיקה אם המשתמש הוא שמאי מנהל
                if (userType === 'a' && thisAssessor && thisAssessor.isManager) {
                    // מציאת השמאי לפי מזהה השמאי בפנייה
                    const assessor = assessors?.find(assess => assess.assessorId === application.assessorId);
                    if (!assessor) {
                        return { name: 'Unknown Assessor' };
                    }

                    // החזרת פרטי השמאי המלאים
                    return {
                        name: `${assessor.assessorFirstName} ${assessor.assessorLastName}`,
                        type: 'assessor'
                    };
                } else if (userType === 'a' && thisAssessor) {
                    // אם המשתמש הוא שמאי רגיל
                    return {
                        name: `${thisAssessor.assessorFirstName} ${thisAssessor.assessorLastName}`,
                        type: 'assessor'
                    };
                } else {
                    // אם המשתמש הוא לקוח, מצא את השמאי לפי מזהה השמאי בפנייה
                    const assessor = assessors?.find(assess => assess.assessorId === application.assessorId);
                    if (!assessor) {
                        return { name: 'Unknown Assessor' };
                    }

                    return {
                        name: `${assessor.assessorFirstName} ${assessor.assessorLastName}`,
                        type: 'assessor'
                    };
                }
            } catch (error) {
                console.error('Error getting assessor details:', error);
                return { name: 'Unknown Assessor' };
            }
        }

        // אם לא מדובר בלקוח או בשמאי, החזר את המידע הבסיסי
        return { name: `Unknown(${chat.from})` };
    };

    // Function to determine if the chat was sent by the current user
    const isSentByCurrentUser = (chat) => {
        return chat.from === userType;
    };

    // פונקציה לטיפול בממיון - עם תיקון
    const handleSort = (sortType) => {
        setSortBy(sortType);

        let sortedChats = [...myChats];

        if (sortType === 'date') {
            sortedChats.sort((a, b) => new Date(b.sendDate) - new Date(a.sendDate));
        } else if (sortType === 'sender') {
            sortedChats.sort((a, b) => {
                // בדיקה אם users הוא מערך
                const usersArray = Array.isArray(users) ? users : [];
                const senderA = usersArray.find(user => user.id === a.from)?.name || a.from || '';
                const senderB = usersArray.find(user => user.id === b.from)?.name || b.from || '';
                return senderA.localeCompare(senderB);
            });
        } else if (sortType === 'receiver') {
            sortedChats.sort((a, b) => {
                // בדיקה אם users הוא מערך
                const usersArray = Array.isArray(users) ? users : [];
                const receiverA = usersArray.find(user => user.id === a.to)?.name || a.to || '';
                const receiverB = usersArray.find(user => user.id === b.to)?.name || b.to || '';
                return receiverA.localeCompare(receiverB);
            });
        }

        setFilteredChats(sortedChats);
    };

    // פונקציה לטיפול בחיפוש - עם תיקון מלא
    const handleSearch = () => {
        if (!searchTerm.trim()) {
            setFilteredChats([...myChats]);
            return;
        }

        const term = searchTerm.toLowerCase();
        // בדיקה אם users הוא מערך
        const usersArray = Array.isArray(users) ? users : [];

        const results = myChats.filter(chat => {
            // בדיקה שכל השדות קיימים לפני השימוש ב-toLowerCase
            const information = chat.information || '';
            const sender = usersArray.find(user => user?.id === chat.from)?.name || chat.from || '';
            const receiver = usersArray.find(user => user?.id === chat.to)?.name || chat.to || '';

            // בדיקה שהפונקציה getApplicationDetails קיימת ומחזירה אובייקט תקין
            let appSubject = '';
            try {
                const appDetails = getApplicationDetails(chat.applicationId);
                appSubject = appDetails?.subject || '';
            } catch (error) {
                console.error('Error getting application details:', error);
            }

            // בדיקה שהפונקציה formatDate קיימת ומחזירה ערך תקין
            let formattedDate = '';
            try {
                formattedDate = formatDate(chat.sendDate) || '';
            } catch (error) {
                console.error('Error formatting date:', error);
                formattedDate = chat.sendDate || '';
            }

            // עכשיו אפשר להשתמש ב-toLowerCase בבטחה
            return (
                information.toLowerCase().includes(term) ||
                sender.toLowerCase().includes(term) ||
                receiver.toLowerCase().includes(term) ||
                appSubject.toLowerCase().includes(term) ||
                formattedDate.toLowerCase().includes(term)
            );
        });

        setFilteredChats(results);
    };

    return (
        <Box sx={{ 
            height: '90vh', 
            display: 'flex', 
            flexDirection: 'column',
            overflow: 'none' // מניעת גלילה בקונטיינר החיצוני
        }} ref={topRef}>
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

            <Box sx={{ mb: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, justifyContent: 'space-between', alignItems: { xs: 'stretch', md: 'center' } }}>
                {/* Sort buttons */}
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
                    <Typography variant="subtitle1" sx={{ mr: 1, display: 'flex', alignItems: 'center' }}>
                    </Typography>
                    <Button
                        variant={sortBy === 'date' ? 'contained' : 'outlined'}
                        size="small"
                        onClick={() => handleSort('date')}
                        startIcon={<DateRangeIcon />}
                        sx={{
                            background: sortBy === 'date' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'date' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            }
                        }}
                    >
                        Date
                    </Button>
                    <Button
                        variant={sortBy === 'sender' ? 'contained' : 'outlined'}
                        size="small"
                        onClick={() => handleSort('sender')}
                        startIcon={<SendIcon />}
                        sx={{
                            background: sortBy === 'sender' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'sender' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            }
                        }}
                    >
                        Sender
                    </Button>
                    <Button
                        variant={sortBy === 'receiver' ? 'contained' : 'outlined'}
                        size="small"
                        onClick={() => handleSort('receiver')}
                        startIcon={<ReceiveIcon />}
                        sx={{
                            background: sortBy === 'receiver' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' : 'transparent',
                            '&:hover': {
                                background: sortBy === 'receiver' ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)' : 'rgba(58, 123, 213, 0.1)'
                            }
                        }}
                    >
                        Receiver
                    </Button>
                    <Button
                        variant={sortBy === 'none' ? 'contained' : 'outlined'}
                        size="small"
                        onClick={() => handleSort('none')}
                        startIcon={<RefreshIcon />}
                        sx={{
                            background: sortBy === 'none' ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' : 'transparent',
                            color: sortBy === 'none' ? '#2c3e50' : 'inherit',
                            '&:hover': {
                                background: sortBy === 'none' ? 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 90%)' : 'rgba(195, 207, 226, 0.1)'
                            }
                        }}
                    >
                        Default View
                    </Button>
                </Box>

                {/* Search */}
                <Box sx={{ display: 'flex', gap: 1, flexGrow: { xs: 1, md: 0 }, maxWidth: { xs: '100%', md: '300px' }, mt: { xs: 2, md: 0 } }}>
                    <TextField
                        size="small"
                        placeholder="Search messages..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                            endAdornment: searchTerm ? (
                                <InputAdornment position="end">
                                    <IconButton size="small" onClick={() => setSearchTerm('')}>
                                        <ClearIcon fontSize="small" />
                                    </IconButton>
                                </InputAdornment>
                            ) : null
                        }}
                        sx={{ flexGrow: 1 }}
                    />
                    <Button
                        variant="contained"
                        size="small"
                        onClick={handleSearch}
                        sx={{
                            background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
                            '&:hover': {
                                background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 90%)'
                            }
                        }}
                    >
                        Search
                    </Button>
                </Box>
            </Box>

            <Box 
                className="scrollable-chats"
                sx={{ 
                    flexGrow: 1, 
                    overflowY: 'auto',
                    p: { xs: 2, md: 4 },
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    },
                    msOverflowStyle: 'none',
                    scrollbarWidth: 'none',
                }}
            >
                <Container maxWidth="lg">
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
                                (filteredChats.length > 0 || sortBy !== 'none' || searchTerm ? filteredChats : myChats).map((chat, index) => {
                                     const isUnread = chat && chat.read === false && chat.from !== userType && !localReadChats[chat.chatId];
                                    const isSent = isSentByCurrentUser(chat);
                                    const applicationDetails = getApplicationDetails(chat.applicationId);
                                    // const senderDetails = Array.isArray(users)
                                    //     ? users.find(user => user.id === (chat.userId || chat.from)) || { name: 'Unknown', id: 'Unknown' }
                                    //     : { name: 'Unknown', id: 'Unknown' };
                                    const senderDetails = getDetailedUserInfo(chat);
                                    // Updated gradient colors based on requirements
                                    // הקוד המעודכן עם צבע עוד יותר בהיר להודעות שנשלחו
                                    // הקוד המעודכן עם צבע בהיר מאוד מאוד להודעות שנשלחו (דומה להודעות שהתקבלו)
                                    const gradientBackground = isUnread
                                        ? 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)' // כחול כהה להודעות שלא נקראו
                                        : isSent
                                            ? 'linear-gradient(135deg, #EBF5FB 0%, #D6EAF8 100%)' // כחול בהיר מאוד מאוד להודעות שנשלחו
                                            : 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'; // אפור בהיר להודעות שהתקבלו ונקראו

                                    const textColor = isUnread ? '#ffffff' : '#2c3e50';


                                    const borderColor = isUnread ? '#3a7bd5' : '#e0e0e0';
                                    return (
                                        <Fade in={true} timeout={1000 + (index * 200)} key={chat.chatId || index}>
                                            <Paper
                                                sx={{
                                                    mb: 3,
                                                    borderRadius: 2,
                                                    overflow: 'hidden',
                                                    border: `1px solid ${borderColor}`,
                                                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                                    '&:hover': {
                                                        transform: 'translateY(-3px)',
                                                        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.08)'
                                                    },
                                                    ...(isUnread && {
                                                        borderLeft: '8px solid #3a7bd5',
                                                        boxShadow: '0 4px 15px rgba(58, 123, 213, 0.2)'
                                                    }),
                                                    background: gradientBackground,
                                                    color: textColor
                                                }}
                                            >
                                                <Box sx={{ p: 2 }}>
                                                    <Grid container spacing={2} alignItems="center">
                                                        <Grid item xs={12} sm={9} md={10}>
                                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                                <Avatar
                                                                    sx={{
                                                                        bgcolor: 'rgba(255, 255, 255, 0.2)',
                                                                        color: textColor,
                                                                        mr: 2,
                                                                        width: 40,
                                                                        height: 40
                                                                    }}
                                                                >
                                                                    {isSent ? <SendIcon /> : <ReceiveIcon />}
                                                                </Avatar>
                                                                <Box sx={{
                                                                    display: 'flex',
                                                                    alignItems: { xs: 'flex-start', md: 'center' },
                                                                    flexDirection: { xs: 'column', md: 'row' },
                                                                    flexWrap: 'wrap',
                                                                    width: '100%',
                                                                    gap: { xs: 1, md: 0 }
                                                                }}>

                                                                    <Typography
                                                                        variant="subtitle1"
                                                                        fontWeight={isUnread ? "700" : "500"}
                                                                        color="inherit"
                                                                        sx={{ mr: 2 }}
                                                                    >
                                                                        {"Application  " + applicationDetails.applicationId + " | "}
                                                                        {isSent ? "   Sent" : "   Received"}:
                                                                    </Typography>
                                                                    <Box sx={{
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        mr: { xs: 0, md: 2 },
                                                                        mb: { xs: 0.5, md: 0 },
                                                                        '& .MuiSvgIcon-root': {
                                                                            fontSize: 16,
                                                                            mr: 0.5,
                                                                            color: 'inherit',
                                                                            opacity: 0.8
                                                                        },
                                                                        '& .MuiTypography-root': {
                                                                            color: 'inherit',
                                                                            opacity: 0.9
                                                                        }
                                                                    }}>
                                                                        <PersonIcon />
                                                                        <Typography variant="body2">
                                                                            {senderDetails.name || 'Unknown'}
                                                                        </Typography>
                                                                    </Box>

                                                                    <Box sx={{
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        mr: { xs: 0, md: 2 },
                                                                        mb: { xs: 0.5, md: 0 },
                                                                        '& .MuiSvgIcon-root': {
                                                                            fontSize: 16,
                                                                            mr: 0.5,
                                                                            color: 'inherit',
                                                                            opacity: 0.8
                                                                        },
                                                                        '& .MuiTypography-root': {
                                                                            color: 'inherit',
                                                                            opacity: 0.9,
                                                                            maxWidth: { xs: '200px', sm: '300px', md: 'auto' },
                                                                            overflow: 'hidden',
                                                                            textOverflow: 'ellipsis',
                                                                            whiteSpace: 'nowrap'
                                                                        }
                                                                    }}>
                                                                        {/* <AssignmentIcon />
                                                                        <Typography variant="body2">
                                                                            {applicationDetails.subject}
                                                                        </Typography> */}
                                                                    </Box>

                                                                    <Box sx={{
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        '& .MuiSvgIcon-root': {
                                                                            fontSize: 16,
                                                                            mr: 0.5,
                                                                            color: 'inherit',
                                                                            opacity: 0.8
                                                                        },
                                                                        '& .MuiTypography-root': {
                                                                            color: 'inherit',
                                                                            opacity: 0.9
                                                                        }
                                                                    }}>
                                                                        <DateRangeIcon />
                                                                        <Typography variant="body2">
                                                                            {formatDate(chat.sendDate)}
                                                                        </Typography>
                                                                    </Box>

                                                                    {!thisAssessor.isManager && isUnread && (
                                                                        <Chip
                                                                            label="New"
                                                                            size="small"
                                                                            sx={{
                                                                                ml: { xs: 0, md: 2 },
                                                                                mt: { xs: 0.5, md: 0 },
                                                                                bgcolor: 'rgba(255, 255, 255, 0.2)',
                                                                                color: 'inherit',
                                                                                fontWeight: 700,
                                                                                height: 24,
                                                                                border: '1px solid rgba(255, 255, 255, 0.3)'
                                                                            }}
                                                                        />
                                                                    )}
                                                                </Box>
                                                            </Box>
                                                        </Grid>
                                                        <Grid item xs={12} sm={3} md={2} sx={{
                                                            textAlign: { xs: 'left', sm: 'right' },
                                                            mt: { xs: 1, sm: 0 }
                                                        }}>
                                                            <Button
                                                                variant="contained"

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
                                                                    background: 'rgba(255, 255, 255, 0.2)',
                                                                    color: textColor,
                                                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                                                    '&:hover': {
                                                                        background: 'rgba(255, 255, 255, 0.3)',
                                                                    },
                                                                    width: { xs: 'auto', sm: '100%' },
                                                                    maxWidth: { sm: '120px' }
                                                                }}
                                                            >
                                                                {expandedChats[chat.chatId] ? 'Hide' : 'View'}
                                                            </Button>
                                                        </Grid>
                                                    </Grid>
                                                    <Collapse in={expandedChats[chat.chatId]} timeout="auto" unmountOnExit>
                                                        <Divider sx={{ my: 2, bgcolor: 'rgba(255, 255, 255, 0.2)' }} />

                                                        <Paper
                                                            elevation={0}
                                                            sx={{
                                                                p: 2,
                                                                borderRadius: 2,
                                                                background: 'rgba(255, 255, 255, 0.1)',
                                                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                                                color: textColor
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
            </Box>

            {/* Scroll to top button */}
            <Button
                variant="contained"
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
