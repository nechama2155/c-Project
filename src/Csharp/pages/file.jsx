import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import TableViewIcon from '@mui/icons-material/TableView';

export const FilePreview = ({ open, file, onClose, onDownload, onPrint, onExportToExcel }) => {
  if (!file) return null;

  const isPdf = file.type.includes('pdf');
  const isImage = file.type.includes('image');

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          height: '90vh'
        }
      }}
    >
      <DialogTitle sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" component="div">
          {file.name}
        </Typography>
        <Box>
          <IconButton
            aria-label="download"
            onClick={() => onDownload(file)}
            sx={{ color: '#2c3e50' }}
          >
            <DownloadIcon />
          </IconButton>
          <IconButton
            aria-label="print"
            onClick={() => onPrint(file)}
            sx={{ color: '#2c3e50' }}
          >
            <PrintIcon />
          </IconButton>
          <IconButton
            aria-label="export to excel"
            onClick={() => onExportToExcel(file)}
            sx={{ color: '#2c3e50' }}
          >
            <TableViewIcon />
          </IconButton>
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ color: '#2c3e50' }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent dividers sx={{ p: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {isPdf && (
          <iframe
            src={`${file.url}#toolbar=0`}
            width="100%"
            height="100%"
            title={file.name}
            style={{ border: 'none' }}
          />
        )}
        {isImage && (
          <img
            src={file.url}
            alt={file.name}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          />
        )}
        {!isPdf && !isImage && (
          <Box sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="body1" color="#7f8c8d">
              Preview not available for this file type.
            </Typography>
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              onClick={() => onDownload(file)}
              sx={{
                mt: 2,
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
              Download to view
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default FilePreview;