import * as yup from 'yup'

export const loginSchema = yup
  .object()
  .shape({
    email: yup
      .string()
      .email('The email is not valid')
      .required('The email is required'),
    password: yup.string().required('The password is required'),
  })
  .required()
