import React from 'react'
import {FormikProps} from 'formik'
import styled from 'styled-components'
import CustomInput from '../Input/CustomInput'
import { User } from '../../../context/authContext'

interface Props {
    formik: FormikProps<User>;
    loading: boolean;
}

export default function Form({formik, loading}: Props) {

  return (
    <FormContainer>
        <h2>Sign Up Form</h2>
        <form onSubmit={formik.handleSubmit}>
            <div>
                <p>User Name:</p>
                <CustomInput onBlur={formik.handleBlur} touched={formik.touched.userName} value={formik.values.userName} name="userName" onChange={formik.handleChange} error={formik.errors.userName} />
            </div>
            <div>
                <p>Password:</p>
                <CustomInput onBlur={formik.handleBlur} type='password' touched={formik.touched.password} value={formik.values.password} name="password" onChange={formik.handleChange} error={formik.errors.password} />
            </div>
            <button disabled={loading} type='submit'>Login</button>
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
            &:disabled {
                background-color: #7c7cea;
                cursor: no-drop;
            }
        }
    }
`