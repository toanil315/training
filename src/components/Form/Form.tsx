import React, { DetailedHTMLProps, FormEventHandler, FormHTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props {
    onSubmit: FormEventHandler<HTMLFormElement>;
    children: React.ReactNode;
}

function Form({children, ...restProps} : Props) {
  return (
    <FormContainer {...restProps}>
        {children}
    </FormContainer>
  )
}

const FormContainer = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    & > button {
        width: 45px;
        height: 45px;
        margin-left: 10px;
        background: linear-gradient(168.44deg, rgba(46, 51, 90, 0.26) 1.62%, rgba(28, 27, 51, 0.26) 95.72%); 
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
        border: 1px solid rgba(255, 255, 255, 0.05);
        border-radius: 5px;
        cursor: pointer;
        &:hover {
            box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
            & > i {
                color: rgba(255, 255, 255, 0.8);
            }
        }
        & > i {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.5);
        }
    }
`

export default Form