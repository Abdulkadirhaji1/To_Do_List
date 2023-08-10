import { useState, useEffect } from "react"
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";
import './App.css';

function App() {
  
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []
    return JSON.parse(localValue)
  })

  useEffect (() => {
    localStorage.setItem("ITEMS",JSON.stringify(todos))
  }, [todos])

  function addTodo (tittle) {
    setTodos((currentToDo) => {
      return [
        ...currentToDo, { id: crypto.randomUUID(), tittle, completed:false}]
    })
  }

  function toggleTodo(id, completed) {
    setTodos(currentToDo => {
      return currentToDo.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed}
        }

        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentToDo => {
      return currentToDo.filter(todo => todo.id !== id)
    })
  }


  return (
    <>
      <TodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App;
