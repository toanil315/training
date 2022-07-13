import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup'
import Form from '../components/StyledComponents/Form/Form';
import { useAuth, User } from '../context/authContext';

const LoginSchema = Yup.object().shape({
    userName: Yup.string().required('*User Name is required!'),
    password: Yup.string().required('*Password is required!'),
  });

function Login() {
    const navigate = useNavigate()
    const {loading, login} = useAuth()
    const formik = useFormik<User>({
        initialValues: {
            userName: "",
            password: "",
        },
        validationSchema: LoginSchema,
        onSubmit: async (values, actions) => {
            console.log(values)
            await login(values.userName, values.password)
            navigate(-1)
        }
    })

  return (
    <Form loading={loading} formik={formik} />
  )
}

export default Login