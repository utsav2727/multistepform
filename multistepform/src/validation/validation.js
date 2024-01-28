import * as yup from 'yup';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const validationSchema = yup.object({
    personalInfo: yup.object({
      name: yup.string().required('Name is required')
      .min(3, "too short")
      .max(50, "too long"),
      email: yup.string().email('Invalid email address').required('Email is required')
      .min(3, "too short")
      .max(50, "too long"),
      phone: yup.string()
      .required("required")
      .matches(phoneRegExp, 'Phone number is not valid')
      .min(10, "too short")
      .max(10, "too long"),
      languages: yup.array().of(yup.string()).required('At least one language is required'),
    }),
    workExperience: yup.array().of(
      yup.object({
        companyName: yup.string().required('Company Name is required')
        .min(3, "too short")
        .max(50, "too long"),
        startDate: yup.date().required('Start Date is required'),
        endDate: yup.date().required('End Date is required'),
        role: yup.string().required('Role is required')
        .min(3, "too short")
        .max(50, "too long"),
      })
    ),
    education: yup.array().of(
      yup.object({
        institutionName: yup.string().required('Institution Name is required')
        .min(3, "too short")
        .max(50, "too long"),
        degree: yup.string().required('Degree is required')
        .min(3, "too short")
        .max(50, "too long"),
        date: yup.date().required('Date is required'),
      })
    ),
    skills: yup.array().of(
      yup.object({
        skill: yup.string().required('Skill is required')
        .min(3, "too short")
        .max(50, "too long"),
        skillLevel: yup.string().required('Skill Level is required'),
      })
    ),
  });