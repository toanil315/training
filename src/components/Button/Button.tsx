import React from 'react'
import style from './Button.module.css'

interface Props {
    isDisabled?: boolean;
    color: 'red' | 'green';
    content: string;
    eventHandler?: (e: React.MouseEvent) => void;
    type?: 'submit' | 'button'
}

const Button : React.FC<Props> = ({isDisabled, eventHandler, color, content, type}) => {
  return (
    <>
        <button className={`${style['btn']} ${style[color]}`} type={type} disabled={isDisabled} onClick={eventHandler}>{content}</button>
    </>
  )
}

export default Button