import React, { Dispatch, SetStateAction, useState } from 'react'
import { Todo } from '../../util/type';
import Button from '../Button/Button';
import style from './CreateTodo.module.css'

interface Props {
    addTodo: (todo: Todo) => void
}

const CreateTodo: React.FC<Props> = ({addTodo}) => {
    const [todoInput, setTodoInput] = useState<string>("")

    //define params to function handleSubmit, if typeof e !== React.SyntheticEvent => display Error while compiling time
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
        console.log(e.target.value)
        setTodoInput(e.target.value)
    }

  return (
    <form className={style['create-todo']} onSubmit={handleSubmit}>
        <h2>Add new todo:</h2>
        <input type="text" value={todoInput} onChange={handleChange} placeholder="Add new todo here" />
        <div style={{display: 'flex'}}>
            <div style={{marginRight: 15}}>
                <Button type="submit" color="green" content='Add' />
            </div>
            <div>
                <Button eventHandler={() => {setTodoInput("")}} color="red" content='Clear all' />
            </div>
        </div>
    </form>
  )
}

export default CreateTodo