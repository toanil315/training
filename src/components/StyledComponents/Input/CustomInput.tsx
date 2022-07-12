import { Input as AntInput, InputProps as AntInputProps } from 'antd'
import React from 'react'
import styled from 'styled-components'

interface InputProps extends AntInputProps {
    error?: string;
    touched?: boolean;
}

function CustomInput({touched, error, ...restProps} : InputProps) {
  return (
    <>
      <InputContainer touched={touched} error={error} {...restProps} />
      {
        error && touched ? <ErrorMessage className='error'><span>{error}</span></ErrorMessage> : null
      }
    </>
  )
}

const InputContainer = styled(AntInput)<InputProps>`
  border-color: ${(props) => props.error && props.touched ? '#c62a2a' : 'rgba(0,0,0, 0.3)'};
  padding: 8px 15px;
  border-radius: 5px;
  border-width: 2px;
  &:focus, &:hover {
    border-color: ${(props: InputProps) => props.error && props.touched ? '#c62a2a' : '#40a9ff'};
    box-shadow: ${(props: InputProps) => props.error && props.touched ? '0 0 0 2px rgb(226 86 86 / 20%)' : '0 0 0 2px rgb(24 144 255 / 20%)'};
  }
`;

const ErrorMessage = styled.span`
  span {
    color: #a72828;
    font-size: 12px;
    font-weight: 500;
    margin-top: 8px;
  }
`



export default CustomInput