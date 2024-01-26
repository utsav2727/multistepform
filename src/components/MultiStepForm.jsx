import React, { useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { TextField, Paper, Grid, createTheme, ThemeProvider, InputLabel } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import './styles.css'; // Add your CSS file for additional styling


const theme = createTheme({
    palette: {
        primary: {
            main: '#000000', // Black color
        },
    },
    shape: {
        borderRadius: 10, // Rounded corners for buttons
    }
});

const MultiStepForm = () => {

    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        personalInfo: { name: '', email: '', phone: '', languages: [] },
        workExperience: [],
        education: [],
        skills: [],
    });
    const [errors, setErrors] = useState({});

    const steps = ['Personal Information', 'Work Experience', 'Education', 'Skills'];

    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 300 },
    });

    

    const handleNext = () => {
        // Validation logic
        if (currentStep === 0 && !formData.personalInfo.name) {
            setErrors({ personalInfo: { name: 'Name is required' } });
            return;
        }

        // Add more validation logic for other steps as needed

        setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        setCurrentStep(currentStep - 1);
    };

    const handleChange = (field, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [currentStepField()]: {
                ...prevData[currentStepField()],
                [field]: value,
            },
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [currentStepField()]: { ...prevErrors[currentStepField()], [field]: '' },
        }));
    };

    const currentStepField = () => {
        switch (currentStep) {
            case 0:
                return 'personalInfo';
            case 1:
                return 'workExperience';
            case 2:
                return 'education';
            case 3:
                return 'skills';
            default:
                return '';
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Grid container justifyContent="center" style={{ marginTop: '30px' }}>
                <Grid item xs={10} sm={8} md={8} lg={8}>
                    <animated.div style={props}>
                        <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px' }}>
                            <Stepper activeStep={currentStep} alternativeLabel>
                                {steps.map((label) => (
                                    <Step key={label}>
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                ))}
                            </Stepper>

                            <div>
                                {currentStep === 0 && (
                                    <div>
                                        <Grid container style={{marginTop:"10px"}} spacing={2}>
                                            <Grid item xs={12}   sm={12} md={6}>
                                                <InputLabel shrink htmlFor="name">
                                                    Your Name
                                                </InputLabel>
                                                <TextField
                                                    id="name"
                                                    fullWidth
                                                    value={formData.personalInfo.name}
                                                    onChange={(e) => handleChange('name', e.target.value)}
                                                    error={!!errors.personalInfo?.name}
                                                    helperText={errors.personalInfo?.name}
                                                    InputProps={{
                                                        style: { padding: '0px' }, // Adjust the padding as needed
                                                      }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={6}>
                                                <InputLabel shrink htmlFor="email">
                                                    Your Email
                                                </InputLabel>
                                                <TextField
                                                    id="email"
                                                    fullWidth
                                                    value={formData.personalInfo.email}
                                                    onChange={(e) => handleChange('email', e.target.value)}
                                                    error={!!errors.personalInfo?.email}
                                                    helperText={errors.personalInfo?.email}
                                                    InputProps={{
                                                        style: { padding: '0px' }, // Adjust the padding as needed
                                                      }}
                                                />
                                            </Grid>
                                        </Grid>
                                        {/* Add more fields for Personal Information step */}
                                    </div>
                                )}
                                {currentStep === 1 && (
                                    <div>
                                        {/* Add fields for Work Experience */}
                                    </div>
                                )}
                                {currentStep === 2 && (
                                    <div>
                                        {/* Add fields for Education */}
                                    </div>
                                )}
                                {currentStep === 3 && (
                                    <div>
                                        {/* Add fields for Skills */}
                                    </div>
                                )}

                                <div style={{ marginTop: '20px' }}>
                                    {currentStep > 0 && (
                                        <Button onClick={handleBack} variant="outlined">
                                            Back
                                        </Button>
                                    )}
                                    {currentStep < 3 && (
                                        <Button onClick={handleNext} variant="contained" color="primary" style={{ marginLeft: '10px' }}>
                                            Next
                                        </Button>
                                    )}
                                    {currentStep === 3 && (
                                        <Button variant="contained" color="primary" style={{ marginLeft: '10px' }}>
                                            Submit
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </Paper>
                    </animated.div>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default MultiStepForm;