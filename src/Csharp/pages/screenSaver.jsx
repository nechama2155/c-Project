import { useEffect, useState, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeInOut = keyframes`
  0% { opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { opacity: 0; }
`;

const slideIn = keyframes`
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const ScreenSaver = ({ onClose }) => {
  const [showContent, setShowContent] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  
  const slides = [
    {
      title: "Welcome to Our Platform",
      description: "We provide expert assessment services with unmatched quality and precision"
    },
    {
      title: "Professional Assessment",
      description: "Our team of experts ensures accurate and reliable evaluations for all your needs"
    },
    {
      title: "Customer Satisfaction",
      description: "Join thousands of satisfied customers who trust our assessment services"
    }
  ];

  useEffect(() => {
    // First show only the logo for 3 seconds
    const contentTimer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    // Change slide every 5 seconds after content appears
    let slideInterval;
    if (showContent) {
      slideInterval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
    }

    // Handle any interaction to close the screensaver
    const handleInteraction = () => {
      onClose();
    };

    // Add event listeners for mouse and keyboard
    window.addEventListener('mousemove', handleInteraction);
    window.addEventListener('mousedown', handleInteraction);
    window.addEventListener('keydown', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);

    return () => {
      clearTimeout(contentTimer);
      if (slideInterval) clearInterval(slideInterval);
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('mousedown', handleInteraction);
      window.removeEventListener('keydown', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
    };
  }, [onClose, slides.length, showContent]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'rgb(214, 220, 229)',
        overflow: 'hidden',
        padding: { xs: 2, sm: 4 }
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '8px',
          background: 'linear-gradient(90deg, #3a7bd5 0%, #2b5876 100%)',
        }}
      />
      
      {/* Logo - Larger and centered */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mb: showContent ? 6 : 0,
          animation: `${fadeIn} 1.5s ease-out`,
          transform: 'scale(1)',
          transition: 'transform 0.5s ease, margin-bottom 0.5s ease',
          '&:hover': {
            transform: 'scale(1.05)',
          }
        }}
      >
        <img
          src="/logo2.png"
          alt="Company Logo"
          style={{ 
            maxWidth: showContent ? '350px' : '450px',
            width: '100%',
            height: 'auto',
            // הסרת אפקט הצל מהלוגו
            filter: 'none'

          }}
        />
      </Box>

      {/* Content that appears after logo */}
      {showContent && (
        <>
          <Box 
            sx={{ 
              textAlign: 'center', 
              animation: `${slideIn} 0.8s ease-out`,
              maxWidth: '800px',
              width: '100%',
              mt: 2
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontWeight: 700,
                color: '#2c3e50',
                mb: 2,
                fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3rem' },
                animation: `${fadeInOut} 5s infinite`,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.1)'
              }}
            >
              {slides[currentSlide].title}
            </Typography>
            
            <Typography
              variant="h5"
              sx={{
                color: '#34495e',
                fontWeight: 400,
                maxWidth: '700px',
                mx: 'auto',
                lineHeight: 1.6,
                fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.6rem' },
                animation: `${fadeInOut} 5s infinite`,
                opacity: 0.9
              }}
            >
              {slides[currentSlide].description}
            </Typography>
          </Box>
          
          <Box sx={{ mt: 5, display: 'flex', gap: 1 }}>
            {slides.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  backgroundColor: currentSlide === index ? '#3a7bd5' : 'rgba(203, 213, 224, 0.7)',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </Box>
          
          <Typography
            variant="body2"
            sx={{
              position: 'absolute',
              bottom: '20px',
              color: 'rgba(44, 62, 80, 0.7)',
              fontWeight: 500,
              fontSize: '0.9rem'
            }}
          >
            Click anywhere or press any key to continue
          </Typography>
        </>
      )}
    </Box>
  );
};

export default ScreenSaver;
