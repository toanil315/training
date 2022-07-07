import React from 'react'
import { Todo } from '../../util/type'
import Button from '../Button/Button';
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
          <div style={{marginRight: 15}}>
            <Button isDisabled={todo.isComplete} eventHandler={handleCompleteTodo} color="green" content='Done' />
          </div>
          <div>
            <Button eventHandler={handleDeleteTodo} color="red" content='Delete' />
          </div>
        </div>
    </div>
  )
}

export default TodoItem