import { TextField, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import { useFormikContext } from 'formik';

const PersonalInformation = () => {
    const formik = useFormikContext();

    return (
        <div>
            <Grid container style={{ marginTop: "10px" }} spacing={2}>
                <Grid item xs={12} sm={12} md={6}>
                    <InputLabel shrink htmlFor="name">
                        Your Name
                    </InputLabel>
                    <TextField
                        id="name"
                        fullWidth
                        name="personalInfo.name"
                        value={formik?.values.personalInfo.name}
                        onChange={formik?.handleChange}
                        onBlur={formik?.handleBlur}
                        error={formik?.touched.personalInfo?.name && Boolean(formik.errors?.personalInfo?.name)}
                        helperText={formik?.touched.personalInfo?.name && formik.errors?.personalInfo?.name}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <InputLabel shrink htmlFor="email">
                        Your Email
                    </InputLabel>
                    <TextField
                        id="email"
                        fullWidth
                        name="personalInfo.email"
                        value={formik?.values.personalInfo.email}
                        onChange={formik?.handleChange}
                        onBlur={formik?.handleBlur}
                        error={formik?.touched.personalInfo?.email && Boolean(formik?.errors.personalInfo?.email)}
                        helperText={formik?.touched.personalInfo?.email && formik?.errors.personalInfo?.email}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <InputLabel shrink htmlFor="phone">
                        Phone no.
                    </InputLabel>
                    <TextField
                        id="phone"
                        fullWidth
                        name="personalInfo.phone"
                        value={formik?.values.personalInfo.phone}
                        onChange={formik?.handleChange}
                        onBlur={formik?.handleBlur}
                        error={formik?.touched.personalInfo?.phone && Boolean(formik?.errors.personalInfo?.phone)}
                        helperText={formik?.touched.personalInfo?.phone && formik?.errors.personalInfo?.phone}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <InputLabel shrink htmlFor="languages">
                        Languages
                    </InputLabel>
                    <Select
                        id="languages"
                        name="personalInfo.languages"
                        fullWidth
                        multiple
                        value={formik?.values?.personalInfo?.languages || []}
                        onChange={formik?.handleChange}
                        onBlur={formik?.handleBlur}
                        error={formik?.touched.personalInfo?.languages && Boolean(formik.errors.personalInfo?.languages)}
                        helperText={formik?.touched.personalInfo?.languages && formik.errors.personalInfo?.languages}
                    >
                        <MenuItem value="english">English</MenuItem>
                        <MenuItem value="spanish">Spanish</MenuItem>
                        <MenuItem value="french">French</MenuItem>
                    </Select>
                </Grid>
            </Grid>
            {/* Add more fields for Personal Information step */}
        </div>
    )
}

export default PersonalInformation