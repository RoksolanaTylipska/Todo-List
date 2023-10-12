import React from 'react';
import './TodoItem.css'
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../../Redux/actions'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import TodoEditForm from '../TodoEditForm/TodoEditForm';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };


  return (
    <section className='todoItem-container'>
      <Form.Check
        type="checkbox"
        aria-label="option 1"
        checked={todo.completed}
        onChange={handleToggle} />
      <article className='todoItem-info'>
        <span className='todoItem-name'>{todo.name}</span>
        <span className='todoItem-description'>{todo.description}</span>
        <span className='todoItem-status'>
          {todo.completed ? (
            <span>Task status: Completed</span>
          ) : (
            <span>Task status: Not Completed</span>
          )}
        </span>
        <div className='todoItem-buttonContainer'>
          <div className='todoItem-button' >
            <TodoEditForm todo={todo} />
          </div>
          <Button
            className='todoItem-button'
            variant="secondary"
            onClick={handleDelete}>
            Delete
          </Button>
        </div>
      </article>
    </section>
  );
};

export default TodoItem;