
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Button, Paper, Typography, Box, useTheme, useMediaQuery, Card, CardContent, Divider } from "@mui/material";
import { Outlet, useNavigate } from "react-router-dom";
import { editAssessment } from "../../redux/slices/assessmentSlice";
import { editApplicationThunk } from "../../redux/slices/edit/editApplicationThunk";
import EditIcon from '@mui/icons-material/Edit';
import "../cssPages/assessment.css";

export const Assessment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

    const assessmentDetails = useSelector(state => state.assessment.assessments);
    const [selected, setSelected] = useState(false);
    const [selectedAs, setSelectedAs] = useState({});
    const type = useSelector(state => state.user.t);
    const thisCustomer = useSelector(state => state.customer.thisCustomer);
    const thisAssessor = useSelector(state => state.assessor.thisAssessor);

    // Uncomment if needed
    // useEffect(() => {
    //     if (assessmentDetails.length === 0) {
    //         if (type === "a") {
    //             if (thisAssessor.isManager)
    //                 dispatch(assessmentThunk());
    //         }
    //         else if (type === "c") {
    //             dispatch(yourAssessmentsThunk(thisCustomer.customerId));
    //         }
    //     }
    // }, [])

    //  פונקציה לבדיקה האם כל הנתונים בשורה מלאים
    const isAssessmentComplete = (assessment) => {
        // בדיקה שכל השדות הנדרשים מלאים
        const requiredFields = [
            'block', 'plot', 'subPlot', 'constructionYear',
            'acquisionPrice', 'assessmentGoal', 'legalState',
            'buildingPermit', 'irregularitiesBuilding'
        ];

        return requiredFields.every(field =>
            assessment[field] !== null &&
            assessment[field] !== undefined &&
            assessment[field] !== '`'
        );
    };

    const handleRowClick = (assessment) => {
        setSelected(true);
        setSelectedAs(assessment);
    };

    const handleEditClick = () => {
        dispatch(editAssessment(selectedAs));
        navigate('editAssessment');
    };

    // Define table headers
    const tableHeaders = [
        { id: 'assessmentId', label: 'Assessment ID' },
        { id: 'block', label: 'Block' },
        { id: 'plot', label: 'Plot' },
        { id: 'subPlot', label: 'SubPlot' },
        { id: 'constructionYear', label: 'Construction Year' },
        { id: 'acquisionPrice', label: 'Acquision Price' },
        { id: 'assessmentGoal', label: 'Assessment Goal' },
        { id: 'legalState', label: 'Legal State' },
        { id: 'buildingPermit', label: 'Building Permit' },
        { id: 'irregularitiesBuilding', label: 'Irregularities Building' }
    ];

    // Responsive design - show fewer columns on smaller screens
    const visibleHeaders = isMobile
        ? tableHeaders.slice(0, 4)
        : isTablet
            ? tableHeaders.slice(0, 6)
            : tableHeaders;

    return (
        <Box className="assessment-container" sx={{ p: 2 }}>
            <Typography variant="h5" component="h1" sx={{ mb: 3 }}>
                Assessments
            </Typography>

            {assessmentDetails.length > 0 ? (
                <>
                    {/* Desktop and Tablet View */}
                    {!isMobile && (
                        <Paper elevation={3} sx={{ overflowX: 'auto', mb: 3 }}>
                            <Box sx={{ minWidth: 650 }}>
                                <table className="assessment-table">
                                    <thead>
                                        <tr>
                                            {visibleHeaders.map((header) => (
                                                <th key={header.id}>{header.label}</th>
                                            ))}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assessmentDetails.map(assessment => (
                                            <tr
                                                key={assessment.assessmentId}
                                                onClick={() => handleRowClick(assessment)}
                                                className={selected && selectedAs === assessment ? "selected-row" : ""}
                                            >
                                                {visibleHeaders.map((header) => (
                                                    <td key={`${assessment.assessmentId}-${header.id}`}>
                                                        {assessment[header.id]}
                                                    </td>
                                                ))}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </Box>
                        </Paper>
                    )}

                    {/* Mobile View - Card Layout */}
                    {isMobile && (
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {assessmentDetails.map(assessment => (
                                <Card
                                    key={assessment.assessmentId}
                                    onClick={() => handleRowClick(assessment)}
                                    sx={{
                                        border: selected && selectedAs === assessment
                                            ? `2px solid ${theme.palette.primary.main}`
                                            : 'none'
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" component="div">
                                            Assessment #{assessment.assessmentId}
                                        </Typography>
                                        <Divider sx={{ my: 1 }} />
                                        <Typography variant="body2">
                                            <strong>Block:</strong> {assessment.block}
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>Plot:</strong> {assessment.plot}
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>SubPlot:</strong> {assessment.subPlot}
                                        </Typography>
                                        <Typography variant="body2">
                                            <strong>Construction Year:</strong> {assessment.constructionYear}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    )}

                    {selected && type === 'a' && !thisAssessor.isManager && (
                        <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
                            <Button
                                variant="contained"
                                startIcon={<EditIcon />}
                                onClick={handleEditClick}
                                color="primary"
                            >
                                Edit Assessment
                            </Button>
                            <Button
                                variant="contained"
                                onClick={() => {
                                    dispatch(editApplicationThunk(selectedAs.applicationId));
                                    console.log("Set status for assessment:", selectedAs);
                                    // לדוגמה: navigate('setStatus');
                                }}
                                color="secondary"
                                disabled={!isAssessmentComplete(selectedAs)}
                            >
                                Set Status
                            </Button>
                        </Box>
                    )}
                </>
            ) : (
                <Paper elevation={3} sx={{ p: 3, textAlign: 'center' }}>
                    <Typography variant="body1">
                        No assessment data available.
                    </Typography>
                </Paper>
            )}

            <Outlet />
        </Box>
    );
};
