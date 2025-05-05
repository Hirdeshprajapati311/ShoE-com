import React from 'react'
import '../Styles/todoStyles.css'
import { useState } from 'react'

const Todo = () => {


  const [todo, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTodo = () => {
    setTodos((todo) => {
      return todo.concat({
        text: input,
        id: Math.floor(Math.random() * 100),
      })
    }),
    setInput("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todo.filter((t) => t.id !== id))
  }

  return (
    <div className='container'>
      <input type="text" placeholder='New Todo' value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
      

      <ul>
        {
          todo.map(({ text, id }) => (
            <li className='todo' key={id}>
              <span>{text}</span>
              <button className='delete' onClick={()=>handleDeleteTodo(id)}>Delete Todo</button>
            </li>
          ))
        }
      </ul>
      
    </div>
  )
}

export default Todo
