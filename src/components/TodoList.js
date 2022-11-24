import React, { Fragment, useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'
function TodoList() {
  const [todos,setTodos] = useState([{
    id: '03949efgq',
    value: 'Make Dinner'
  }])
  const addTodo =  todo => {
    if(!todo.value || /^\s*$/.test(todo.value)) return
    const newTodos = [todo,...todos]
    setTodos(newTodos)
  }
  const completeTodo = (id)=>{
    let updateTodos = todos.map(todo=>{
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updateTodos)
  }
  const deleteTodo = (id)=>{
    const newTodos = [...todos].filter(todo=>todo.id !== id)
    setTodos(newTodos)
  }
  const editTodo = (todoId, newValue)=>{
    if (!newValue.value || /^\s*$/.test(newValue.value)) return 
    let newTodos = todos.map(todo=>{
      if (todo.id === todoId) {
        todo = {
          ...newValue
        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  return (
    <Fragment>
      <h1 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 500 , marginBottom : 30}}>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo 
        todos={todos} 
        completeTodo={completeTodo} 
        deleteTodo={deleteTodo} 
        editTodo={editTodo}/>
    </Fragment>
  )
}

export default TodoList