import React, { useState, useEffect, useRef } from 'react'
import { v4 as uuid } from 'uuid';
import styles from './TodoForm.module.scss';
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '')
  const inputRef = useRef()
  useEffect(()=>{
    inputRef.current.focus()
  })
  function handleSubmit(e) {
    e.preventDefault()
    props.onSubmit({
      id: uuid(),
      value: input
    })
    setInput('')
  }
  return (
    <form className={styles['todo-form']} onSubmit={handleSubmit}>
        <input
        autoFocus
        autoComplete='off'
        spellCheck='false'
        type="text"
        placeholder='Enter some words...'
        value={input}
        name='todo'
        className={styles['todo-input']}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />
      <button className={styles['todo-button']}>{props.edit ? 'Update todo' : 'Add todo'}</button>
    </form>
  )
}

export default TodoForm