import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button } from '@mui/material';
import { Folders } from './folders';

export const FoldersDemo = () => {
  const [requestId, setRequestId] = useState('');
  const [activeRequestId, setActiveRequestId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (requestId.trim()) {
      setActiveRequestId(requestId);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Files Management System
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mb: 4, display: 'flex', gap: 2 }}>
          <TextField
            label="Enter Request ID"
            variant="outlined"
            value={requestId}
            onChange={(e) => setRequestId(e.target.value)}
            sx={{ flexGrow: 1 }}
          />
          <Button 
            type="submit" 
            variant="contained"
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
              color: '#2c3e50',
              boxShadow: '0 4px 15px rgba(195, 207, 226, 0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 80%)',
                boxShadow: '0 6px 20px rgba(195, 207, 226, 0.6)',
              }
            }}
          >
            Create/Open Folder
          </Button>
        </Box>
        
        {activeRequestId && <Folders requestId={activeRequestId} />}
      </Box>
    </Container>
  );
};

export default FoldersDemo;
