import './App.css';
import React, { useState, useEffect } from "react";
import TodosList from './components/TodosList'
import Header from "./components/Header"
import InputTodo from './components/InputTodo'
import { v4 as uuidv4 } from "uuid";

const App = ()=> {

  const [todos, setTodos] = useState(getInitialTodos())

  const handleCheck = id => {
    setTodos(prevState =>
      prevState.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo
      })
    )
  }

 const deleteTodo = id => {
  setTodos([
    ...todos.filter(todo => {
      return todo.id !== id
    }),
  ])
}

const addTodoItem = title => {
  const newTodo = {
    id: uuidv4(),
    title: title,
    completed: false,
  }
  setTodos([...todos, newTodo])
}


const setUpdate = (updatedTitle, id) => {
  setTodos(
    todos.map(todo => {
      if (todo.id === id) {
        todo.title = updatedTitle
      }
      return todo
    })
  )
}

useEffect(() => {
  // storing todos items
  const temp = JSON.stringify(todos)
  localStorage.setItem("todos", temp)
}, [todos])

// uso del useEffect

// useEffect(() => {
//   console.log("test run")

//   // getting stored items
//   const temp = localStorage.getItem("todos")
//   const loadedTodos = JSON.parse(temp)

//   if (loadedTodos) {
//     setTodos(loadedTodos)
//   }
// }, [])

function getInitialTodos() {
  // getting stored items
  const temp = localStorage.getItem("todos")
  const savedTodos = JSON.parse(temp)
  return savedTodos || []
}


    return (
      <div className='container'>
        <div className='inner' >
          <Header />
          <InputTodo addTodo={addTodoItem} />
          <TodosList
            todos={todos}
            handleCheck={handleCheck}
            deleteTodo={deleteTodo} 
            setUpdate={setUpdate} />
        </div>
      </div>
    );
  }

export default App;
