import { TextField, Grid, InputLabel, MenuItem, Select, Button, IconButton } from '@mui/material';
import { useFormikContext , FieldArray } from 'formik';
import CloseIcon from '@mui/icons-material/Close';
import { useSpring, animated } from 'react-spring';

const SkillsStep = () => {
  const formik = useFormikContext();

  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 300 },
});

  return (
    <animated.div style={props}>
      <FieldArray
        name="skills"
        render={(arrayHelpers) => (
          <div>
            {formik.values.skills.map((skill, index) => (
              
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
                  <InputLabel shrink htmlFor={`skill${index}`}>
                    Skill
                  </InputLabel>
                  <TextField
                    id={`skill${index}`}
                    fullWidth
                    name={`skills[${index}].skill`}
                    value={skill.skill || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.skills?.[index]?.skill && Boolean(formik.errors.skills?.[index]?.skill)}
                    helperText={formik.touched.skills?.[index]?.skill && formik.errors.skills?.[index]?.skill}
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <InputLabel shrink htmlFor={`skillLevel${index}`}>
                    Skill Level
                  </InputLabel>
                  <Select
                    id={`skillLevel${index}`}
                    name={`skills[${index}].skillLevel`}
                    fullWidth
                    value={formik?.values.skills[index]?.skillLevel || ''}
                    onChange={formik?.handleChange}
                    onBlur={formik?.handleBlur}
                    error={formik?.touched.skills?.[index]?.skillLevel && Boolean(formik?.errors.skills?.[index]?.skillLevel)}
                    helperText={formik?.touched.skills?.[index]?.skillLevel && formik?.errors.skills?.[index]?.skillLevel}
                  >
                    <MenuItem value="beginner">Beginner</MenuItem>
                    <MenuItem value="intermediate">Intermediate</MenuItem>
                    <MenuItem value="advanced">Advanced</MenuItem>
                  </Select>
                </Grid>
              </Grid>
            ))}
            <Grid item xs={12} alignContent={'center'} mt={'10px'} textAlign={'left'}>
              <Button
                variant="outlined"
                color="primary"
                onClick={() => arrayHelpers.push({ skill: '', skillLevel: '' })}
              >
                Add Skill
              </Button>
            </Grid>
          </div>
        )}
      />
    </animated.div>
  );
};

export default SkillsStep;
