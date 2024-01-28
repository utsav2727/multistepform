import { TextField, Grid, InputLabel, MenuItem, Select, Button, IconButton } from '@mui/material';
import { useFormikContext , FieldArray } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { useSpring, animated } from 'react-spring';

const EducationStep = () => {
  const formik = useFormikContext();

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 300 },
});
  return (
    <animated.div style={props}>
      <FieldArray
        name="education"
        render={(arrayHelpers) => (
          <div>
            {formik.values.education.map((education, index) => (
              <Grid
                container
                style={{
                  marginTop: '10px',
                  width: 'auto',
                  marginLeft: '0px',
                  marginRight: '0px',
                  padding: '24px',
                  border: '1px solid #ccc',
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  borderRadius: '10px',
                }}
                spacing={2}
                key={index}
              >
                {(
                  <Grid item style={{ paddingTop: '0px', marginTop: '0px', paddingBottom: '0px', marginBottom: '0px' }} xs={12} textAlign={'right'}>
                     <IconButton style={{color: "#ff5454", border: "1px solid #ff8f8f" }} onClick={() => arrayHelpers.remove(index)}>
                        <CloseIcon/>
                    </IconButton>
                  </Grid>
                )}
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel shrink htmlFor={`institutionName${index}`}>
                    Institution Name
                  </InputLabel>
                  <TextField
                    id={`institutionName${index}`}
                    fullWidth
                    name={`education[${index}].institutionName`}
                    value={education.institutionName || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.education?.[index]?.institutionName && Boolean(formik.errors.education?.[index]?.institutionName)}
                    helperText={formik.touched.education?.[index]?.institutionName && formik.errors.education?.[index]?.institutionName}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel shrink htmlFor={`degree${index}`}>
                    Degree
                  </InputLabel>
                  <TextField
                    id={`degree${index}`}
                    fullWidth
                    name={`education[${index}].degree`}
                    value={education.degree || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.education?.[index]?.degree && Boolean(formik.errors.education?.[index]?.degree)}
                    helperText={formik.touched.education?.[index]?.degree && formik.errors.education?.[index]?.degree}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel shrink htmlFor={`date${index}`}>
                    Date
                  </InputLabel>
                  <TextField
                    id={`date${index}`}
                    fullWidth
                    type="date"
                    name={`education[${index}].date`}
                    value={education.date || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.education?.[index]?.date && Boolean(formik.errors.education?.[index]?.date)}
                    helperText={formik.touched.education?.[index]?.date && formik.errors.education?.[index]?.date}
                  />
                </Grid>
              </Grid>
            ))}
            <Grid item xs={12} alignContent={'center'} mt={'10px'} textAlign={'left'}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => arrayHelpers.push({ institutionName: '', degree: '', date: '' })}
              >
                Add Education
              </Button>
            </Grid>
          </div>
        )}
      />
    </animated.div>
  );
};

export default EducationStep;
