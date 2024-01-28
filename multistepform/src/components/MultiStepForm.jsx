import React from 'react';
import { Formik, useFormik } from 'formik';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { TextField, Paper, Grid } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import { validationSchema } from '../validation/validation';
import PersonalInformation from './PersonalInformation';
import WorkExperienceStep from './WorkExperience';
import EducationStep from './EducationStep';
import SkillsStep from './SkillsStep';
import Swal from 'sweetalert2';
import { formikDefaultValues } from '../context/formikContext';





const MultiStepForm = () => {
    const [currentStep, setCurrentStep] = React.useState(0);

    const steps = ['Personal Information', 'Work Experience', 'Education', 'Skills'];

    const handleNext = (formik) => {
        const errors = formik.errors;
        if((!errors.personalInfo && currentStep===0) || (!errors.workExperience && currentStep===1)
         || (!errors.education && currentStep===2)){
            setCurrentStep((prevStep) => (prevStep + 1));
        }
    };

    const buttonState= (formik)=>{
        const errors = formik.errors;
        if(
            
            ((errors.personalInfo || formik.values.personalInfo.name==='') && currentStep === 0 ) 
            || ((errors.workExperience || formik.values.workExperience.length === 0 || formik.values.workExperience[0] == formik.initialValues.workExperience[0]) && currentStep === 1)
            || ((errors.education || formik.values.education.length === 0 || formik.values.education[0] == formik.initialValues.education[0]) && currentStep === 2)
            || ((Object.keys(formik.errors).length > 0 || formik.values.skills.length === 0 || (formik.values.skills[0] === formik.initialValues.skills[0])) && currentStep === 3)
        ){
            return true
        }
        return false
    }

    const stepperClick = (step, formik,currentStep)=>{
        const errors = formik.errors;
        console.log(errors);
        console.log(step);
        console.log(currentStep);
        if(currentStep>step){
            setCurrentStep(step)
        }
        else if(
            (((errors.personalInfo || formik.values.personalInfo.name==='') && currentStep === 0 ) 
            || ((errors.workExperience || formik.values.workExperience.length === 0 || formik.values.workExperience[0] == formik.initialValues.workExperience[0]) && currentStep === 1)
            || ((errors.education || formik.values.education.length === 0 || formik.values.education[0] == formik.initialValues.education[0]) && currentStep === 2)
            || ((Object.keys(formik.errors).length > 0 || formik.values.skills.length === 0 || (formik.values.skills[0] === formik.initialValues.skills[0])) && currentStep === 3)
            )
            ){
            console.log('disabled move!')
        }else{
            setCurrentStep(step);
        }
    }
    const handleSubmit = async (values,actions) => {
            // you have an API endpoint to post data
            console.log(values);
            const response = await fetch('/api-end-point', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
            });
        
            if (response) {
                console.log('submitted');
                Swal.fire({
                    title: "Success",
                    text: "Your application submitted successfully!",
                    icon: "success",
                    confirmButtonColor: "rgb(123, 31, 162)"
                  }).then(()=>{
                    actions.resetForm();
                    setCurrentStep(0);
                  })
            }

      };

    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 300 },
    });

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
        //Formik provider with context
        <Formik 
        initialValues={formikDefaultValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          >
            {(formik) => (
            <Grid container justifyContent="center">
                <Grid item xs={10} sm={8} md={8} lg={8}>
                    <animated.div style={props}>
                    <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px' }}>
                        <Stepper activeStep={currentStep} alternativeLabel>
                            {steps.map((label, index) => (
                                <Step key={label} onClick={()=>{stepperClick(index,formik,currentStep) }}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <div>
                            <div>{currentStepField()}</div>

                            <div style={{ marginTop: '20px' }}>
                                
                                {currentStep < 3 && (
                                    <div style={{textAlign:"right"}}>
                                    <Button
                                        onClick={()=>{handleNext(formik)}}
                                        variant="contained"
                                        color="primary"
                                        style={{ marginLeft: '10px' }}
                                        disabled={buttonState(formik)}
                                    >
                                        Next
                                    </Button>
                                    </div>
                                )}
                                {currentStep === 3 && (
                                    <div style={{textAlign:"right"}}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={formik.handleSubmit}
                                        style={{ marginLeft: '10px' }}
                                        disabled={buttonState(formik) }
                                    >
                                        Submit
                                    </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Paper>
                    </animated.div>
                </Grid>
            </Grid> 
        )}
        </Formik>
    );
};

export default MultiStepForm;
