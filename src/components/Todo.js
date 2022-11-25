import React, { useState } from 'react'
import { SlPencil, SlClose, SlCheck } from 'react-icons/sl'
import TodoForm from './TodoForm';
import styles from './Todo.module.scss'
function Todo({todos, completeTodo, deleteTodo, editTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })
  const submitUpdate = value =>{
    editTodo(edit.id,value)
    setEdit({
      id: null,
      value : ''
    })
  }
  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />
  }
  return (
    todos.map(todo =>( 
      <div key={todo.id} className={todo.isComplete ? `${styles['todo-row']} ${styles['complete']}` : styles['todo-row']} >
        <div className={styles['content']}>
          {todo.value}
        </div>
        <div className={styles['icons']}>
          <span data-tooltip='complete'>
            <SlCheck onClick={() => completeTodo(todo.id)} />
          </span>
          <span data-tooltip='edit'>
            <SlPencil onClick={()=>setEdit({id:todo.id, value:todo.value})} />
          </span>
          <span data-tooltip='delete'>
            <SlClose onClick={()=>deleteTodo(todo.id)} />
          </span>    
        </div>
      </div>
    ))
  )
}

export default Todo