import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './styles/TodoItem.css';
import { FaTrash } from 'react-icons/fa';

export default function TodoItem(props) {
  const [edit, setEdit] = useState(false);

  const {
    handleCheck, todo, deleteTodo, setUpdate,
  } = props;

  const inthandleCheck = () => {
    handleCheck(todo.id);
  };

  const intDeleteTodo = () => {
    deleteTodo(todo.id);
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleEditing = () => {
    setEdit(true);
  };

  const viewMode = {};
  const editMode = {};
  if (edit) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const intSetUpdate = (e) => {
    setUpdate(e.target.value, todo.id);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEdit(false);
    }
  };

  return (

    <li className="item">
      <div onDoubleClick={handleEditing} style={viewMode}>

        <input
          className="checkbox"
          type="checkbox"
          checked={todo.completed}
          onChange={inthandleCheck}
        />
        <button type="button" onClick={intDeleteTodo} className="item button">
          {' '}
          <FaTrash />
        </button>
        <span style={todo.completed ? completedStyle : null}>
          {todo.title}
        </span>
      </div>
      <input
        type="text"
        style={editMode}
        className="textInput"
        value={todo.title}
        onChange={intSetUpdate}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

TodoItem.propTypes = {
  todo: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      completed: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    },
  ).isRequired,
  handleCheck: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
