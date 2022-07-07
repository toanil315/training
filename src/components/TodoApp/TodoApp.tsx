import React, { useState } from 'react'
import { Todo } from '../../util/type'
import CreateTodo from '../CreateTodo/CreateTodo'
import TodoList from '../TodoList/TodoList'
import style from './TodoApp.module.css'

const TodoApp : React.FC = () => {
    const [todoList, setTodoList] = useState<Todo[]>([
        {
            id: 1,
            name: "todo 1",
            isComplete: false
        },
        {
            id: 2,
            name: "todo 2",
            isComplete: false
        },
        {
            id: 3,
            name: "todo 3",
            isComplete: false
        },
    ])

    const addTodo = (todo: Todo) => {
        setTodoList([...todoList, todo])
    }

  return (
    <div>
        <h1 className={style['title']}>My Todo App</h1>
        <div className={style['content']}>
            <CreateTodo addTodo={addTodo} />
            <TodoList todoList={todoList} setTodoList={setTodoList} />
        </div>
    </div>
  )
}

export default TodoApp
