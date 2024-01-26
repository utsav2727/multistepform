import React from 'react';
import { Formik, useFormik } from 'formik';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { TextField, Paper, Grid, createTheme, ThemeProvider, InputLabel, CssBaseline } from '@mui/material';
import { useTransition, animated } from 'react-spring';
import './styles.css'; // Add your CSS file for additional styling
import { validationSchema } from '../validation/validation';
import PersonalInformation from './PersonalInformation';
import WorkExperienceStep from './WorkExperience';
import EducationStep from './EducationStep';
import SkillsStep from './SkillsStep';

const theme = createTheme({
    typography: {
        fontFamily: 'Red Hat Display, sans-serif',
    },
    palette: {
        primary: {
            main: '#000000', // Black color
        },
    },
    shape: {
        borderRadius: 10, // Rounded corners for buttons
    },
});



const MultiStepFormWithFormik = () => {
    const [currentStep, setCurrentStep] = React.useState(0);

    const steps = ['Personal Information', 'Work Experience', 'Education', 'Skills'];

    // console.log(formik.errors)

    const handleNext = (formik) => {
        const errors = formik.errors;
        if((!errors.personalInfo && currentStep===0)|| (!errors.workExperience && currentStep===1)
         || (!errors.education && currentStep===2)){
            setCurrentStep((prevStep) => (prevStep + 1));
        }
    };
    const handleSubmit = (values) => {
        console.log(values);
      };

    const handleBack = () => {
        setCurrentStep((prevStep) => (prevStep - 1));
    };

    const currentStepField = () => {
        switch (currentStep) {
            case 0:
                return <PersonalInformation />;
            case 1:
                return <WorkExperienceStep/>;
            case 2:
                return <EducationStep/>;
            case 3:
                return <SkillsStep/>;
            default:
                return <div></div>;
        }
    };

    return (
        <Formik 
        initialValues={{
            personalInfo: { name: '', email: '', phone: '', languages: [] },
            workExperience: [{}],
            education: [{}],
            skills: [{}],
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          >
            {(formik) => (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Grid container justifyContent="center" style={{ marginTop: '50px' }}>
                <Grid item xs={10} sm={8} md={8} lg={8}>
                    <h1>Employee Details</h1>
                    <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px' }}>
                        <Stepper activeStep={currentStep} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <div>
                            <div>{currentStepField()}</div>

                            <div style={{ marginTop: '20px' }}>
                                {currentStep > 0 && (
                                    <Button onClick={handleBack} variant="outlined">
                                        Back
                                    </Button>
                                )}
                                {currentStep < 3 && (
                                    <Button
                                        onClick={()=>{handleNext(formik)}}
                                        variant="contained"
                                        color="primary"
                                        style={{ marginLeft: '10px' }}
                                        // disabled={Object.keys(formik.errors).length > 0}
                                    >
                                        Next
                                    </Button>
                                )}
                                {currentStep === 3 && (
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={formik.handleSubmit}
                                        style={{ marginLeft: '10px' }}
                                        disabled={Object.keys(formik.errors).length > 0}
                                    >
                                        Submit
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Paper>
                </Grid>
            </Grid>  
        </ThemeProvider>
        )}
        </Formik>
    );
};

export default MultiStepFormWithFormik;
