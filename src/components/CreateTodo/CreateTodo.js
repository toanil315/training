import React, { Dispatch, SetStateAction, useState } from 'react'
import style from './CreateTodo.module.css'

const CreateTodo = ({addTodo}) => {
    const [todoInput, setTodoInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!!todoInput) {
            addTodo({
                id: Date.now(),
                name: todoInput,
                isComplete: false
            })
            // code = JS thi khong duoc goi y type of params -> chi bao loi luc runtime
            setTodoInput("")
        }
    }

    const handleChange = (e) => {
        //code = JS thi khong duoc goi y cac attribute cua ChangeEvent nhu e.target, e.target.value...
        setTodoInput(e.target.value)
    }

  return (
    <form className={style['create-todo']} onSubmit={(e) => {handleSubmit(e)}}>
        <h2>Add new todo:</h2>
        <input type="text" value={todoInput} onChange={handleChange} placeholder="Add new todo here" />
        <button className={`${style['btn']} ${style['green']}`} type='submit'>Add</button>
        <button className={`${style['btn']} ${style['red']}`} onClick={() => {setTodoInput("")}}>Clear Input</button>
    </form>
  )
}

export default CreateTodo