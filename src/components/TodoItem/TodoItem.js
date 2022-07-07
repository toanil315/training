import React from 'react'
import style from './TodoItem.module.css'

const TodoItem = ({todo, handleCompleteTodo, handleDeleteTodo}) => {
    // code = JS thi se khong duoc nhac cac property cua object todo
    // khong duoc goi y cac props duoc truyen tu TodoList -> TodoItem
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