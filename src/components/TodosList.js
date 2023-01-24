import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

const TodosList = (props) => {
  const {
    todos, handleCheck, deleteTodo, setUpdate,
  } = props;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCheck={handleCheck}
          deleteTodo={deleteTodo}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
};

export default TodosList;

TodosList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      completed: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    },
  )).isRequired,
  handleCheck: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  setUpdate: PropTypes.func.isRequired,
};
