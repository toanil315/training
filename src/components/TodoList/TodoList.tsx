import React, { Dispatch, SetStateAction } from 'react'
import { Todo } from '../../util/type'
import TodoItem from '../TodoItem/TodoItem';
import style from './TodoList.module.css'

interface Props {
    todoList: Todo[];
    setTodoList: Dispatch<SetStateAction<Todo[]>>;
}

const TodoList : React.FC<Props> = ({todoList, setTodoList}) => {

    const handleCompleteTodo = (id: number) => {
        return () => {
            const todoListClone = [...todoList]
            const index = todoListClone.findIndex(todo => todo.id === id)
            todoListClone[index].isComplete = true
            setTodoList(todoListClone)
        }
    }

    const handleDeleteTodo = (id: number) => {
        return () => {
            const todoListClone = [...todoList]
            setTodoList(todoListClone.filter(todo => todo.id !== id))
        }
    }

    const renderTodoList = () => {
        return todoList.map((todo, index) => {
            return <TodoItem key={todo.id} todo={todo} handleCompleteTodo={handleCompleteTodo(todo.id)} handleDeleteTodo={handleDeleteTodo(todo.id)} />
        })
    }

  return (
    <div className={style['todo-list']}>
        <h2>My Todo List</h2>
        <div className={style['content']}>
            {renderTodoList()}
        </div>
    </div>
  )
}

export default TodoList