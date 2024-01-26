import * as yup from 'yup';

export const validationSchema = yup.object({
    personalInfo: yup.object({
      name: yup.string().required('Name is required'),
      email: yup.string().email('Invalid email address').required('Email is required'),
      phone: yup.number().required('Phone is required'),
      languages: yup.array().of(yup.string()).required('At least one language is required'),
    }),
    workExperience: yup.array().of(
      yup.object({
        companyName: yup.string().required('Company Name is required'),
        startDate: yup.date().required('Start Date is required'),
        endDate: yup.date().required('End Date is required'),
        role: yup.string().required('Role is required'),
      })
    ),
    education: yup.array().of(
      yup.object({
        institutionName: yup.string().required('Institution Name is required'),
        degree: yup.string().required('Degree is required'),
        date: yup.date().required('Date is required'),
      })
    ),
    skills: yup.array().of(
      yup.object({
        skill: yup.string().required('Skill is required'),
        skillLevel: yup.string().required('Skill Level is required'),
      })
    ),
  });