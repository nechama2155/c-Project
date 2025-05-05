import React, { useState, useEffect } from 'react';
import {
  Box, Typography, Grid, Card, CardContent,
  Button, Divider, Container, Paper, List,
  ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction,
  IconButton, TextField, Dialog, DialogTitle,
  DialogContent, DialogActions, Fade, useTheme
} from '@mui/material';
import FolderIcon from '@mui/icons-material/Folder';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import TableViewIcon from '@mui/icons-material/TableView';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import ArchiveIcon from '@mui/icons-material/Archive';
import './cssPages/folders.css';

export const Folders = ({ requestId }) => {
  const theme = useTheme();
  const [files, setFiles] = useState([]);
  const [folders, setFolders] = useState([]);
  const [selectedFolder, setSelectedFolder] = useState(null);
  const [openUploadDialog, setOpenUploadDialog] = useState(false);
  const [uploadType, setUploadType] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileToUpload, setFileToUpload] = useState(null);

  // Create a folder for the request if it doesn't exist
  useEffect(() => {
    if (requestId) {
      // In a real application, you would check if the folder exists on the server
      // For this example, we'll simulate creating a folder
      const folderExists = folders.some(folder => folder.id === requestId);
      
      if (!folderExists) {
        const newFolder = {
          id: requestId,
          name: `Request-${requestId}`,
          files: [],
          createdAt: new Date().toISOString()
        };
        
        setFolders(prevFolders => [...prevFolders, newFolder]);
      }
    }
  }, [requestId, folders]);

  // Load folders and files from server/localStorage
  useEffect(() => {
    // In a real application, you would fetch folders and files from the server
    // For this example, we'll use localStorage
    const savedFolders = localStorage.getItem('userFolders');
    if (savedFolders) {
      setFolders(JSON.parse(savedFolders));
    }
  }, []);

  // Save folders to localStorage when they change
  useEffect(() => {
    if (folders.length > 0) {
      localStorage.setItem('userFolders', JSON.stringify(folders));
    }
  }, [folders]);

  const handleOpenFolder = (folderId) => {
    const folder = folders.find(f => f.id === folderId);
    if (folder) {
      setSelectedFolder(folder);
      setFiles(folder.files);
    }
  };

  const handleCloseFolder = () => {
    setSelectedFolder(null);
    setFiles([]);
  };

  const handleOpenUploadDialog = (type) => {
    setUploadType(type);
    setOpenUploadDialog(true);
  };

  const handleCloseUploadDialog = () => {
    setOpenUploadDialog(false);
    setFileName('');
    setFileToUpload(null);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileToUpload(file);
      if (!fileName) {
        setFileName(file.name);
      }
    }
  };

  const handleUploadFile = () => {
    if (!fileToUpload || !fileName || !selectedFolder) return;

    // In a real application, you would upload the file to the server
    // For this example, we'll simulate adding the file to the folder
    const newFile = {
      id: Date.now().toString(),
      name: fileName,
      type: fileToUpload.type,
      size: fileToUpload.size,
      uploadedAt: new Date().toISOString(),
      url: URL.createObjectURL(fileToUpload) // This is temporary and will be revoked when the page refreshes
    };

    // Update the folder with the new file
    const updatedFolders = folders.map(folder => {
      if (folder.id === selectedFolder.id) {
        return {
          ...folder,
          files: [...folder.files, newFile]
        };
      }
      return folder;
    });

    setFolders(updatedFolders);
    setFiles(prevFiles => [...prevFiles, newFile]);
    handleCloseUploadDialog();
  };

  const handleDownloadFile = (file) => {
    // In a real application, you would download the file from the server
    // For this example, we'll use the temporary URL
    const link = document.createElement('a');
    link.href = file.url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrintFile = (file) => {
    // In a real application, you would get a printable version of the file
    // For this example, we'll open the file in a new window and print it
    const printWindow = window.open(file.url, '_blank');
    printWindow.onload = () => {
      printWindow.print();
    };
  };

  const handleExportToExcel = (file) => {
    // In a real application, you would convert the file to Excel format
    // For this example, we'll just show an alert
    alert(`Exporting ${file.name} to Excel format`);
  };

  const handleArchiveFolder = (folderId) => {
    // In a real application, you would archive the folder on the server
    // For this example, we'll just show an alert
    alert(`Preparing folder ${folderId} for team meeting`);
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, position: 'relative' }}>
      <Fade in={true} timeout={1000}>
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            component="h2"
            fontWeight="600"
            color="#2c3e50"
            sx={{ mb: 2 }}
          >
            Your Files
          </Typography>
          <Divider sx={{ mb: 3 }} />

          {!selectedFolder ? (
            <Grid container spacing={3}>
              {folders.map((folder) => (
                <Grid item xs={12} sm={6} md={4} key={folder.id}>
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
                      },
                      cursor: 'pointer'
                    }}
                    onClick={() => handleOpenFolder(folder.id)}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <FolderIcon sx={{ color: '#4facfe', mr: 1, fontSize: 40 }} />
                        <Typography variant="h6" component="h3" fontWeight="600">
                          {folder.name}
                        </Typography>
                      </Box>
                      <Typography variant="body2" color="#7f8c8d">
                        {folder.files.length} files
                      </Typography>
                      <Typography variant="caption" color="#7f8c8d">
                        Created: {new Date(folder.createdAt).toLocaleDateString()}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Button
                    variant="outlined"
                    startIcon={<CloseIcon />}
                    onClick={handleCloseFolder}
                    sx={{
                      mr: 2,
                      borderRadius: '8px',
                      textTransform: 'none',
                      borderColor: '#e0e0e0',
                      color: '#2c3e50',
                      '&:hover': {
                        borderColor: '#c3cfe2',
                        backgroundColor: 'rgba(195, 207, 226, 0.1)'
                      }
                    }}
                  >
                    Back
                  </Button>
                  <Typography variant="h6" component="h3" fontWeight="600">
                    {selectedFolder.name}
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    onClick={() => handleOpenUploadDialog('file')}
                    sx={{
                      mr: 2,
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
                    Add File
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<PictureAsPdfIcon />}
                    onClick={() => handleOpenUploadDialog('pdf')}
                    sx={{
                      mr: 2,
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
                    Add PDF
                  </Button>
                  <Button
                    variant="outlined"
                    startIcon={<ArchiveIcon />}
                    onClick={() => handleArchiveFolder(selectedFolder.id)}
                    sx={{
                      borderRadius: '8px',
                      textTransform: 'none',
                      borderColor: '#e0e0e0',
                      color: '#2c3e50',
                      '&:hover': {
                        borderColor: '#c3cfe2',
                        backgroundColor: 'rgba(195, 207, 226, 0.1)'
                      }
                    }}
                  >
                    Prepare for Team Meeting
                  </Button>
                </Box>
              </Box>

              <Paper
                elevation={0}
                sx={{
                  borderRadius: 2,
                  border: '1px solid #e0e0e0',
                  overflow: 'hidden'
                }}
              >
                <List>
                  {files.length === 0 ? (
                    <ListItem>
                      <ListItemText
                        primary="No files in this folder"
                        secondary="Add files using the buttons above"
                      />
                    </ListItem>
                  ) : (
                    files.map((file, index) => (
                      <React.Fragment key={file.id}>
                        <ListItem>
                          <ListItemIcon>
                            {file.type.includes('pdf') ? (
                              <PictureAsPdfIcon sx={{ color: '#e74c3c' }} />
                            ) : (
                              <InsertDriveFileIcon sx={{ color: '#4facfe' }} />
                            )}
                          </ListItemIcon>
                          <ListItemText
                            primary={file.name}
                            secondary={`Uploaded: ${new Date(file.uploadedAt).toLocaleString()} • Size: ${(file.size / 1024).toFixed(2)} KB`}
                          />
                          <ListItemSecondaryAction>
                            <IconButton
                              edge="end"
                              aria-label="download"
                              onClick={() => handleDownloadFile(file)}
                              sx={{ color: '#2c3e50' }}
                            >
                              <DownloadIcon />
                            </IconButton>
                            <IconButton
                              edge="end"
                              aria-label="print"
                              onClick={() => handlePrintFile(file)}
                              sx={{ color: '#2c3e50', ml: 1 }}
                            >
                              <PrintIcon />
                            </IconButton>
                            <IconButton
                              edge="end"
                              aria-label="export to excel"
                              onClick={() => handleExportToExcel(file)}
                              sx={{ color: '#2c3e50', ml: 1 }}
                            >
                              <TableViewIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                        {index < files.length - 1 && <Divider />}
                      </React.Fragment>
                    ))
                  )}
                </List>
              </Paper>
            </Box>
          )}
        </Box>
      </Fade>

      {/* Upload Dialog */}
      <Dialog
        open={openUploadDialog}
        onClose={handleCloseUploadDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          {uploadType === 'pdf' ? 'Upload PDF File' : 'Upload File'}
        </DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="File Name"
            type="text"
            fullWidth
            variant="outlined"
            value={fileName}
            onChange={(e) => setFileName(e.target.value)}
            sx={{ mb: 3 }}
          />
          <Button
            variant="outlined"
            component="label"
            fullWidth
            sx={{
              p: 3,
              borderStyle: 'dashed',
              borderColor: '#c3cfe2',
              borderRadius: 2,
              textTransform: 'none',

              color: '#2c3e50',
              '&:hover': {
                borderColor: '#4facfe',
                backgroundColor: 'rgba(195, 207, 226, 0.1)'
              }
            }}
          >
            {fileToUpload ? fileToUpload.name : 'Click to select a file or drag and drop here'}
            <input
              type="file"
              hidden
              accept={uploadType === 'pdf' ? "application/pdf" : "*/*"}
              onChange={handleFileChange}
            />
          </Button>
          {fileToUpload && (
            <Typography variant="caption" display="block" sx={{ mt: 1, color: '#7f8c8d' }}>
              File size: {(fileToUpload.size / 1024).toFixed(2)} KB
            </Typography>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button 
            onClick={handleCloseUploadDialog}
            sx={{ 
              color: '#7f8c8d',
              textTransform: 'none'
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleUploadFile}
            variant="contained"
            disabled={!fileToUpload || !fileName}
            sx={{
              borderRadius: '8px',
              textTransform: 'none',
              background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
              color: '#2c3e50',
              boxShadow: '0 4px 15px rgba(195, 207, 226, 0.4)',
              '&:hover': {
                background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 80%)',
                boxShadow: '0 6px 20px rgba(195, 207, 226, 0.6)',
              },
              '&.Mui-disabled': {
                background: '#e0e0e0',
                color: '#9e9e9e'
              }
            }}
          >
            Upload
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Folders;
//FOLDERS צור לנו קומפוננטה בשם
//  שמציגה רשימת קבצים של המשתמש
//הקומפוננטה תיצור עבור כל פניה חדשה תיקיית קבצים ששמה כקוד הפנייה בה יאוכסנו כל פרטיו וכל הקבצים שהוספנו להם
// וגם מציגה שדה להוספת קובץ חדש
// וגם מציגה שדה להוספת קבצים חדשים
// pdf וגם מציגה עבור כל קובץ אפשרות להוריד אותו לקובץ 
//וגם מציגה עבור כל קובץ אפשרות להוריד אותו להדפסה
// וגם מציגה עבור כל קובץ אפשרות להוריד אותו לקובץ אקסל
//PDF וגם מציגה עבור כל תיקייה אפשרות לסגור אותה לקבצי 
// מסודרים כתיקייה מוכנה לישיבת צוות השמאים.
//ABOUT כל זאת על פי סגנון וצבעי העיצוב של הקומפוננטה 
//שמצורפת


/* <Label variant="outlined" titleAccess="add file"/>
         <TextField type="file"/>
        <Button variant="outlined">save</Button>   */ 

        

//GRAPH צור לנו קומפוננטה בשם  
//שמציגה גרף של כמות פניות לפי סטטוס
//וגם מציגה גרף של כמות פניות לפי סטטוס ולפי מספר שנים
// וגם מציגה גרף של כמות פניות לפי סטטוס ולפי מספר חודשים
//ןגם מציגה עוגות פילוח של כמות פניות לפי סטטוס
// וגם מציגה עוגות פילוח של כמות פניות לפי סטטוס ולפי מספר שנים
//וגם מציגה צירי נתונים בהתאם לנתונים הנ"ל
//ABOUT כל זאת על פי סגנון וצבעי העיצוב של הקומפוננטה 
//שמצורפת