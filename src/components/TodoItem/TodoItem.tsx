import React from 'react'
import { Todo } from '../../util/type'
import style from './TodoItem.module.css'

interface Props {
    todo: Todo;
    handleCompleteTodo: () => void 
    handleDeleteTodo: () => void 
}

const TodoItem : React.FC<Props> = ({todo, handleCompleteTodo, handleDeleteTodo}) => {
  return (
    <div className={style['todo-item']}>
        <p style={{textDecoration: todo.isComplete ? 'line-through' : ""}}>{todo.name}</p>
        <div className={style['user-ctrl']}>
            <button disabled={todo.isComplete} onClick={handleCompleteTodo} className={`${style['btn']} ${style['green']}`}>Done</button>
            <button onClick={handleDeleteTodo} className={`${style['btn']} ${style['red']}`}>Delete</button>
        </div>
    </div>
  )
}

export default TodoItem