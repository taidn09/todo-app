import TodoList from "./components/TodoList";
import styles from './App.module.scss'
function App() {
  return (
    <div className={styles['todo-app']}>
      <TodoList />
    </div>
  )
}

export default App;
