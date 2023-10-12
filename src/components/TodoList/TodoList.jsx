import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../TodoItem/TodoItem';
import TodoForm from '../TodoForm/TodoForm';
import Form from 'react-bootstrap/Form';
import { filterTodos } from '../../Redux/actions'


const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filter = useSelector((state) => state.filter);

  const getFilteredTodos = () => {
    if (filter === 'completed') {
      return todos.filter((todo) => todo.completed);
    } else if (filter === 'notCompleted') {
      return todos.filter((todo) => !todo.completed);
    }
    return todos;
  };

  return (
    <div>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => dispatch(filterTodos(e.target.value))}
        value={filter}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="notCompleted">Not Completed</option>
      </Form.Select>

      {getFilteredTodos().map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}

      <TodoForm />

    </div>
  );
};

export default TodoList;