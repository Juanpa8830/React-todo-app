import React, { useState, useEffect } from "react";
import './styles/TodoItem.css'
import { FaTrash } from "react-icons/fa"

export default function TodoItem(props) {

  const [edit, setEdit] = useState(false);
 
    const inthandleCheck = () => {
        const { handlecheck, todo } = props;
        handlecheck(todo.id);
    };

    const intDeleteTodo = () => {
        const { deleteTodo, todo, } = props;
        deleteTodo(todo.id);
    };

    const completedStyle = {
      fontStyle: "italic",
      color: "#595959",
      opacity: 0.4,
      textDecoration: "line-through",
    }

    const handleEditing = () => {
      setEdit(true);
    }

    let viewMode = {}
    let editMode = {}
    if (edit) {
      viewMode.display = "none"
    } else {
      editMode.display = "none"
    };
    
const intSetUpdate = (e)=> {
  const { setUpdate, todo } = props;
  setUpdate(e.target.value, todo.id)
}

const handleUpdatedDone = event => {
  if (event.key === "Enter") {
    setEdit(false);
  }
}
 
useEffect(() => {
  return () => {
    console.log("Cleaning up...")
  }
}, [])     

return (

       
        <li className="item">
        <div onDoubleClick={handleEditing} style={viewMode}>

          <input className="checkbox"
            type="checkbox"
            checked={props.todo.completed}
            onChange={inthandleCheck}
          />
          <button onClick={intDeleteTodo} className='item button'> <FaTrash /></button>
          <span style={props.todo.completed ? completedStyle : null}>
            {props.todo.title}
          </span>
          </div>
          <input type="text" 
          style={editMode} 
          className='textInput' 
          value={props.todo.title} 
          onChange={intSetUpdate}
          onKeyDown={handleUpdatedDone} 
          />
        </li>
    );
  
  };

