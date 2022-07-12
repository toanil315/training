import React from 'react'
import {FormikConfig, FormikProps, useFormik} from 'formik'
import * as Yup from 'yup'
import styled from 'styled-components'
import CustomInput from '../Input/CustomInput'

interface UserProps {
    userName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const SignupSchema = Yup.object().shape({
    userName: Yup.string().required('*User Name is required!'),
    email: Yup.string().email('*Email is invalid').required('*Email is required'),
    password: Yup.string().required('*Password is required!'),
    confirmPassword: Yup.string().required('*Confirm password is required!').oneOf([Yup.ref('password'), null], '*Confirm passwords must match with password!'),
  });

export default function Form() {
    const formik = useFormik<UserProps>({
        initialValues: {
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: SignupSchema,
        onSubmit: (values, actions) => {
            console.log(values)
        }
    })

    const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        formik.setFieldValue('confirmPassword', e.target.value, false)
        if(e.target.value !== formik.values.password) {
            formik.setFieldError('confirmPassword', '*Confirm passwords must match with password!')
        }
        else {
            formik.setFieldError('confirmPassword', undefined)
        }
    }

  return (
    <FormContainer>
        <h2>Sign Up Form</h2>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <p>User Name:</p>
                <CustomInput onBlur={formik.handleBlur} touched={formik.touched.userName} value={formik.values.userName} name="userName" onChange={formik.handleChange} error={formik.errors.userName} />
            </div>
            <div>
                <p>Email:</p>
                <CustomInput onBlur={formik.handleBlur} touched={formik.touched.email} value={formik.values.email} name="email" onChange={formik.handleChange} error={formik.errors.email} />
            </div>
            <div>
                <p>Password:</p>
                <CustomInput onBlur={formik.handleBlur} type='password' touched={formik.touched.password} value={formik.values.password} name="password" onChange={formik.handleChange} error={formik.errors.password} />
            </div>
            <div>
                <p>Confirm Password:</p>
                <CustomInput onBlur={formik.handleBlur} type='password' touched={formik.touched.confirmPassword} value={formik.values.confirmPassword} name="confirmPassword" onChange={handleConfirmPasswordChange} error={formik.errors.confirmPassword} />
            </div>
            <button type='submit'>Sign Up</button>
        </form>
    </FormContainer>
  )
}


const FormContainer = styled.div`
    width: 450px;
    margin: 50px auto;
    padding: 20px 20px 40px;
    border: 1px solid rgba(0,0,0, 0.2);
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0, 0.2);
    h2 {
        text-align: center
    }
    form {
        margin-top: 20px;
        width: 100%;
        div {
            margin-bottom: 22px;
            p {
                font-size: 16px;
                font-weight: 700;
                margin-bottom: 10px;
            }
        }
        button {
            display: block;
            width: 100%;
            margin-top: 30px;
            padding: 8px 15px;
            color: white;
            background-color: #4b4bca;
            border-radius: 5px;
            border-color: transparent;
            transition: background-color 0.2s ease-out;
            cursor: pointer;
            &:hover {
                background-color: #30309c;
            }
        }
    }
`