import { TextField, Grid, InputLabel, MenuItem, Select, Button, IconButton } from '@mui/material';
import { useFormikContext , FieldArray } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { useSpring, animated } from 'react-spring';

const WorkExperienceStep = () => {
  const formik = useFormikContext();

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 300 },
});

  return (
    <animated.div style={props}>
      <FieldArray
        name="workExperience"
        render={(arrayHelpers) => (
          <div>
            {formik.values.workExperience.map((experience, index) => (
              <Grid container style={{ width:"auto",marginLeft:'0px', marginRight:'0px', marginTop: '10px',padding:"24px", border:"1px solid #ccc", paddingTop:"20px", paddingBottom:"20px", borderRadius:"10px" }} spacing={2} key={index}>
                {(
                  <Grid item style={{paddingTop:"0px", marginTop:"0px",paddingBottom:"0px", marginBottom:"0px" }} xs={12} textAlign={'right'}>
                    <IconButton style={{color: "#ff5454", border: "1px solid #ff8f8f" }} onClick={() => arrayHelpers.remove(index)}>
                        <CloseIcon/>
                    </IconButton>
                  </Grid>
                )}
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel shrink htmlFor={`companyName${index}`}>
                    Company Name
                  </InputLabel>
                  <TextField
                    id={`companyName${index}`}
                    fullWidth
                    name={`workExperience[${index}].companyName`}
                    value={experience.companyName || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.workExperience?.[index]?.companyName && Boolean(formik.errors.workExperience?.[index]?.companyName)}
                    helperText={formik.touched.workExperience?.[index]?.companyName && formik.errors.workExperience?.[index]?.companyName}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel shrink htmlFor={`startDate${index}`}>
                    Start Date
                  </InputLabel>
                  <TextField
                    id={`startDate${index}`}
                    fullWidth
                    type="date"
                    name={`workExperience[${index}].startDate`}
                    value={experience.startDate || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.workExperience?.[index]?.startDate && Boolean(formik.errors.workExperience?.[index]?.startDate)}
                    helperText={formik.touched.workExperience?.[index]?.startDate && formik.errors.workExperience?.[index]?.startDate}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel shrink htmlFor={`endDate${index}`}>
                    End Date
                  </InputLabel>
                  <TextField
                    id={`endDate${index}`}
                    fullWidth
                    type="date"
                    name={`workExperience[${index}].endDate`}
                    value={experience.endDate || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.workExperience?.[index]?.endDate && Boolean(formik.errors.workExperience?.[index]?.endDate)}
                    helperText={formik.touched.workExperience?.[index]?.endDate && formik.errors.workExperience?.[index]?.endDate}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel shrink htmlFor={`role${index}`}>
                    Role
                  </InputLabel>
                  <TextField
                    id={`role${index}`}
                    fullWidth
                    name={`workExperience[${index}].role`}
                    value={experience.role || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.workExperience?.[index]?.role && Boolean(formik.errors.workExperience?.[index]?.role)}
                    helperText={formik.touched.workExperience?.[index]?.role && formik.errors.workExperience?.[index]?.role}
                  />
                </Grid>
                
              </Grid>
            ))}
            <Grid item xs={12} alignContent={'center'} mt={'10px'} textAlign={'left'}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => arrayHelpers.push({ companyName: '', startDate: '', endDate: '', role: '' })}
              >
                Add Experience
              </Button>
            </Grid>
          </div>
        )}
      />
    </animated.div>
  );
};

export default WorkExperienceStep;
