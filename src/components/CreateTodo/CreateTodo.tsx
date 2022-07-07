import React, { Dispatch, SetStateAction, useState } from 'react'
import { Todo } from '../../util/type';
import style from './CreateTodo.module.css'

interface Props {
    addTodo: (todo: Todo) => void
}

const CreateTodo: React.FC<Props> = ({addTodo}) => {
    const [todoInput, setTodoInput] = useState<string>("")

    //define params to function handleSubmit, if !== React.SyntheticEvent => display Error while compiling time
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault()
        if(!!todoInput) {
            addTodo({
                id: Date.now(),
                name: todoInput,
                isComplete: false
            })
            setTodoInput("")
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoInput(e.target.value)
    }

  return (
    <form className={style['create-todo']} onSubmit={handleSubmit}>
        <h2>Add new todo:</h2>
        <input type="text" value={todoInput} onChange={handleChange} placeholder="Add new todo here" />
        <button className={`${style['btn']} ${style['green']}`} type='submit'>Add</button>
        <button className={`${style['btn']} ${style['red']}`} onClick={() => {setTodoInput("")}}>Clear Input</button>
    </form>
  )
}

export default CreateTodo