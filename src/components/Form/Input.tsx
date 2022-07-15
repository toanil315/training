import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    Icon?: JSX.Element;
}

function Input({Icon, ...restProps} : Props) {
  return (
    <InputContainer>
        {Icon}
        <input {...restProps} />
    </InputContainer>
  )
}

const InputContainer = styled.div`

    padding: 12px 15px;
    display: flex;
    align-items: center;
    color: rgba(255, 255, 255, 0.5);
    background: linear-gradient(168.44deg, rgba(46, 51, 90, 0.26) 1.62%, rgba(28, 27, 51, 0.26) 95.72%);
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border: 1px solid rgba(255, 255, 255, 0.05);
    border-radius: 5px;
    & > i {
        font-size: 14px
    }
    & > input {
        background: transparent;
        border: 0;
        color: rgba(255, 255, 255, 0.8);
        padding-left: 10px;
        &::placeholder {
            color: rgba(255, 255, 255, 0.5)
        }
        &:focus {
            outline: none
        }
    }
`

export default Input