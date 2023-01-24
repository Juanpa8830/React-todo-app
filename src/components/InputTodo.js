import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

const InputTodo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    const { addTodo } = props;
    e.preventDefault();
    addTodo(inputText.title);
    setInputText({
      title: '',
    });
  };

  return (

    <form onSubmit={handleSubmit} className="form-container">

      <input
        type="text"
        required
        placeholder="Add Todo..."
        value={inputText.title}
        onChange={onChange}
        name="title"
        aria-label="title"
      />
      <button type="submit" className="input-submit" aria-label="submit"><FaPlusCircle /></button>
    </form>
  );
};

export default InputTodo;

InputTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};
