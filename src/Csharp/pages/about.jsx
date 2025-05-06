
import React, { useEffect,useRef } from 'react';
import {
  Box, Typography, Grid, Card, CardContent,
  CardMedia, Button, Divider, Chip, Container,
  Paper, Avatar, List, ListItem, ListItemIcon,
  ListItemText, Fade, useMediaQuery, useTheme
} from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import StarIcon from '@mui/icons-material/Star';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SpeedIcon from '@mui/icons-material/Speed';
import SecurityIcon from '@mui/icons-material/Security';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import SchoolIcon from '@mui/icons-material/School';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import DescriptionIcon from '@mui/icons-material/Description';

export const About = () => {
  const topRef = useRef(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({
      top: 100,
      behavior: 'smooth'
    });
  };
  // const scrollToTop = () => {

  //   topRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };
useEffect(() => {
  // גלילה לראש הדף כשהקומפוננטה נטענת

  // topRef.current?.scrollIntoView({
  //   top: 80,
  //   behavior: 'smooth'
  // });
  window.scrollTo(0, 0);
}, []);
  const features = [
    {
      title: "Professional Appraisals",
      description: "Our certified appraisers provide accurate and detailed property valuations based on current market trends and comprehensive analysis.",
      icon: <VerifiedUserIcon />
    },
    {
      title: "Detailed Reports",
      description: "Receive comprehensive assessment reports with thorough documentation, market comparisons, and clear valuation justifications.",
      icon: <DescriptionIcon />
    },
    {
      title: "Fast Turnaround",
      description: "We understand time sensitivity in real estate decisions. Our streamlined process ensures quick delivery without compromising quality.",
      icon: <SpeedIcon />
    },
    {
      title: "Experienced Team",
      description: "Our assessors have an average of 15+ years in the field with specialized knowledge across residential, commercial, and industrial properties.",
      icon: <PeopleIcon />
    },
    {
      title: "Secure Handling",
      description: "Your documents and personal information are protected with enterprise-grade security protocols and strict confidentiality standards.",
      icon: <SecurityIcon />
    },
    {
      title: "Transparent Pricing",
      description: "Clear, upfront pricing with no hidden fees. Our competitive rates reflect the quality and thoroughness of our appraisal services.",
      icon: <BusinessIcon />
    }
  ];

  const expertise = [
    "Government-certified appraisers with specialized credentials",
    "Advanced property valuation methodologies and tools",
    "Continuous professional development and market research",
    "Expertise in complex and unique property assessments",
    "Compliance with all regulatory and industry standards",
    "Detailed knowledge of local real estate markets"
  ];

  return (
    // sx={{ p: { xs: 2, md: 4 }, position: 'relative' }}
    <Box sx={{ p: { xs: 2, md: 4 }, position: 'relative' }} ref={topRef}>
      {/* Hero section */}
      <Fade in={true} timeout={1000}>
        <Box
          sx={{
            textAlign: 'center',
            mb: 6
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            fontWeight="700"
            color="#2c3e50"
            sx={{ mb: 2 }}
          >
            Welcome to Our Premier Property Appraisal Service
          </Typography>
          <Typography
            variant="subtitle1"
            color="#7f8c8d"
            sx={{
              maxWidth: 800,
              mx: 'auto',
              mb: 4,
              lineHeight: 1.8
            }}
          >
            Since 2005, we've been providing professional and accurate property appraisals
            to help individuals, businesses, and institutions make informed decisions about
            their real estate investments. Our team of certified appraisers combines industry
            expertise with cutting-edge technology to deliver reliable valuations you can trust.
          </Typography>
          
          <Box
            component="img"
            src="/hero-image.jpg"
            alt="Property Appraisal"
            sx={{
              width: '100%',
              height: 400,
              objectFit: 'cover',
              borderRadius: 2,
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
              mb: 4
            }}
          />
        </Box>
      </Fade>

      {/* Our Mission section */}
      <Fade in={true} timeout={1200}>
        <Box sx={{ mb: 8 }}>
          <Container maxWidth="md">
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '5px',
                  background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
                }}
              />
              <Typography
                variant="h5"
                component="h2"
                fontWeight="600"
                color="#2c3e50"
                sx={{ mb: 3 }}
              >
                Our Mission
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.8 }}>
                We are committed to providing the highest standard of property appraisal services
                with integrity, accuracy, and professionalism. Our mission is to empower our clients
                with reliable property valuations that help them navigate the complex real estate market
                with confidence and clarity.
              </Typography>
              <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                Whether you're buying, selling, refinancing, or making investment decisions,
                our detailed assessments give you the factual foundation needed to make sound
                financial choices in today's dynamic property market.
              </Typography>
            </Paper>
          </Container>
        </Box>
      </Fade>

      {/* Features section */}
      <Fade in={true} timeout={1400}>
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="600"
            color="#2c3e50"
            sx={{ mb: 4 }}
          >
            Our Comprehensive Services
          </Typography>
          
          <Grid container spacing={3}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    border: '1px solid #e0e0e0',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)'
                    }
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar
                        sx={{
                          bgcolor: 'rgba(79, 172, 254, 0.1)',
                          color: '#4facfe',
                          mr: 2
                        }}
                      >
                        {feature.icon}
                      </Avatar>
                      <Typography variant="h6" component="h3" fontWeight="600">
                        {feature.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="#7f8c8d" sx={{ lineHeight: 1.7 }}>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>

      <Divider sx={{ my: 6 }} />

      {/* Our Expertise section
      <Fade in={true} timeout={1600}>
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="600"
            color="#2c3e50"
            sx={{ mb: 4 }}
          >
            What Sets Us Apart
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/expertise.jpg"
                alt="Our Expertise"
                sx={{
                  width: '100%',
                  height: { xs: 250, md: '100%' },
                  objectFit: 'cover',
                  borderRadius: 2,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="body1" paragraph sx={{ mb: 3, lineHeight: 1.8 }}>
                With over 18 years in the industry, our appraisal service has established a reputation
                for excellence and reliability. Our team's unique combination of local market knowledge,
                technical expertise, and commitment to client satisfaction makes us the preferred choice
                for property valuations.
              </Typography>
              
              <List>
                {expertise.map((item, index) => (
                  <ListItem key={index} sx={{ py: 1 }}>
                    <ListItemIcon>
                      <StarIcon sx={{ color: '#4facfe' }} />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItem>
                ))}
              </List>
              
              <Typography variant="body1" sx={{ mt: 2, fontStyle: 'italic', color: '#7f8c8d' }}>
                "Our commitment to accuracy and thoroughness has earned us a 98% client satisfaction rate
                and numerous industry recognitions."
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Fade> */}

      {/* Process section */}
      <Fade in={true} timeout={1800}>
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="600"
            color="#2c3e50"
            sx={{ mb: 4 }}
          >
            Our Streamlined Process
          </Typography>
          
          <Grid container spacing={4}>
            {[
              { 
                step: 1, 
                title: "Submit Application", 
                description: "Complete our user-friendly application form with your property details. Our intuitive interface makes it easy to provide all necessary information for an accurate assessment." 
              },
              { 
                step: 2, 
                title: "Expert Assignment", 
                description: "We'll match you with a specialized assessor based on your property type, location, and specific requirements to ensure the most accurate valuation possible." 
              },
              { 
                step: 3, 
                title: "Comprehensive Assessment", 
                description: "Your dedicated assessor will conduct a thorough evaluation using advanced methodologies, market comparisons, and detailed analysis of all property aspects." 
              },
              { 
                step: 4, 
                title: "Detailed Report Delivery", 
                description: "Receive your comprehensive digital appraisal report with clear valuation, supporting evidence, market analysis, and recommendations for property optimization." 
              }
            ].map((item) => (
              <Grid item xs={12} sm={6} md={3} key={item.step}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                  }}
                >
                  <Box
                    sx={{
                      width: 70,
                      height: 70,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
                      color: '#2c3e50',
                      fontSize: '1.5rem',
                      fontWeight: 'bold',
                      mb: 3,
                      boxShadow: '0 4px 15px rgba(195, 207, 226, 0.4)'
                    }}
                  >
                    {item.step}
                  </Box>
                  <Typography variant="h6" fontWeight="600" sx={{ mb: 2 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="#7f8c8d" sx={{ lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>

      {/* Team section */}
      <Fade in={true} timeout={2000}>
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="600"
            color="#2c3e50"
            sx={{ mb: 4 }}
          >
            Our Expert Team
          </Typography>
          
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 2,
              background: 'linear-gradient(135deg, rgba(245, 247, 250, 0.05) 0%, rgba(195, 207, 226, 0.05) 100%)',
              border: '1px solid rgba(195, 207, 226, 0.1)'
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  Our team consists of certified property appraisers with diverse specializations
                  including residential, commercial, industrial, and agricultural properties. Each
                  team member brings unique expertise and local market knowledge to provide the most
                  accurate and insightful property valuations.
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
                  All our appraisers maintain the highest professional standards and stay current with
                  industry developments through ongoing education and certification. This commitment to
                  excellence ensures that every client receives the most up-to-date and reliable
                  property assessment.
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3 }}>


                  <Chip 
                    icon={<SchoolIcon />} 
                    label="Certified Appraisers" 
                    sx={{ m: 0.5, bgcolor: 'rgba(195, 207, 226, 0.1)' }} 
                  />
                  <Chip 
                    icon={<BusinessIcon />} 
                    label="Industry Experience" 
                    sx={{ m: 0.5, bgcolor: 'rgba(195, 207, 226, 0.1)' }} 
                  />
                  <Chip 
                    icon={<SupportAgentIcon />} 
                    label="Dedicated Support" 
                    sx={{ m: 0.5, bgcolor: 'rgba(195, 207, 226, 0.1)' }} 
                  />
                  <Chip 
                    icon={<VerifiedUserIcon />} 
                    label="Professional Standards" 
                    sx={{ m: 0.5, bgcolor: 'rgba(195, 207, 226, 0.1)' }} 
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box
                  component="img"
                  src="/team.jpg"
                  alt="Our Expert Team"
                  sx={{
                    width: '100%',
                    height: { xs: 250, md: 300 },
                    objectFit: 'cover',
                    borderRadius: 2,
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Fade>

      {/* Testimonials section */}
      <Fade in={true} timeout={2200}>
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="600"
            color="#2c3e50"

            sx={{ mb: 4 }}
          >
            What Our Clients Say
          </Typography>
          
          <Grid container spacing={3}>
            {[
              {
                name: "David Cohen",
                role: "Homeowner",
                quote: "The level of detail in my property assessment was impressive. The team was professional, thorough, and delivered the report ahead of schedule. Their valuation helped me secure a better refinancing rate."
              },
              {
                name: "Sarah Levi",
                role: "Real Estate Investor",
                quote: "As someone who regularly invests in properties, having accurate appraisals is crucial. This team consistently provides reliable valuations that have proven accurate in the market. Their insights have been invaluable."
              },
              {
                name: "Michael Rosen",
                role: "Commercial Property Manager",
                quote: "Managing multiple commercial properties requires precise valuations for insurance and financial planning. The detailed reports and professional service have made them our go-to appraisal service for all our properties."
              }
            ].map((testimonial, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card
                  elevation={0}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2,
                    border: '1px solid #e0e0e0',
                    overflow: 'hidden'
                  }}
                >
                  <Box sx={{ height: 8, bgcolor: '#c3cfe2' }} />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 3,
                        fontStyle: 'italic',
                        color: '#555',
                        lineHeight: 1.8,
                        position: 'relative',
                        '&:before': {
                          content: '"""',
                          fontSize: '3rem',
                          color: 'rgba(195, 207, 226, 0.2)',
                          position: 'absolute',
                          top: -20,
                          left: -10
                        }
                      }}
                    >
                      {testimonial.quote}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar
                        sx={{
                          bgcolor: 'rgba(195, 207, 226, 0.1)',
                          color: '#7f8c8d',
                          mr: 2
                        }}
                      >
                        {testimonial.name.charAt(0)}
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle2" fontWeight="600">
                          {testimonial.name}
                        </Typography>
                        <Typography variant="caption" color="#7f8c8d">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Fade>

      {/* History & Experience section */}
      <Fade in={true} timeout={2400}>
        <Box sx={{ mb: 8 }}>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="600"
            color="#2c3e50"
            sx={{ mb: 4 }}
          >
            Our History & Experience
          </Typography>
          
          <Paper
            elevation={0}
            sx={{
              p: 4,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Founded in 2005, our property appraisal service began with a small team of three certified appraisers
              dedicated to providing accurate valuations for residential properties in the local area. Over the years,
              we've grown to become a leading appraisal service with a team of 25+ specialized assessors covering
              all property types across the country.
            </Typography>
            
            <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
              Our journey has been marked by continuous innovation in appraisal methodologies, investment in
              cutting-edge technology, and a steadfast commitment to client satisfaction. We've successfully
              completed over 50,000 property assessments, ranging from standard residential appraisals to
              complex commercial and industrial valuations.
            </Typography>
            
            <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
              Today, we combine our extensive experience with the latest market data and valuation techniques
              to provide appraisals that our clients can trust for their accuracy, thoroughness, and reliability.
              Our history of excellence continues to guide our work as we help clients navigate the ever-changing
              real estate landscape.
            </Typography>
          </Paper>
        </Box>
      </Fade>

      {/* CTA section */}
      <Fade in={true} timeout={2600}>
        <Box
          sx={{
            textAlign: 'center',
            p: { xs: 3, md: 5 },
            borderRadius: 2,
            background: 'linear-gradient(135deg, rgba(245, 247, 250, 0.1) 0%, rgba(195, 207, 226, 0.1) 100%)',
            border: '1px solid rgba(195, 207, 226, 0.2)',
            mt: 6,
            mb: 4
          }}
        >
          <Typography variant="h5" fontWeight="600" sx={{ mb: 2 }}>
            Ready to get your property professionally appraised?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, maxWidth: 800, mx: 'auto' }}>
            Start your application today and experience our comprehensive, accurate, and professional
            property assessment service. Our team of experts is ready to provide you with the detailed
            valuation you need for your real estate decisions.
          </Typography>
          <Button
            variant="contained"
            size="large"
            onClick={() => {}}
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              px: 4,
              py: 1.5,
              background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
              color: '#2c3e50',
              boxShadow: '0 4px 15px rgba(195, 207, 226, 0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 80%)',
                boxShadow: '0 6px 20px rgba(195, 207, 226, 0.6)',
              }
            }}
          >
            Apply now for a professional appraisal
          </Button>
        </Box>
      </Fade>

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
          zIndex: 1000
        }}
      >
        <KeyboardArrowUpIcon />
      </Button>
    </Box>
  );
};