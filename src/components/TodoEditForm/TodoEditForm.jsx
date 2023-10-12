import React, { useState } from 'react';
import './TodoEditForm.css'
import { useDispatch } from 'react-redux';
import { editTodo } from '../../Redux/actions';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import { InputGroup } from 'react-bootstrap';

function TodoEditForm({ todo }) {
  const [show, setShow] = useState(false);
  const [editedTodoName, setEditedTodoName] = useState(todo.name);
  const [editedTodoDescription, setEditedTodoDescription] = useState(todo.description);
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false);
    setError('');
  };

  const handleEdit = (event) => {
    const normalizeEditedTodoName = editedTodoName.trim()

    if (!normalizeEditedTodoName) {
      setError('Todo can\'t be empty');
      event.preventDefault()
    } else {
      dispatch(editTodo(todo.id, editedTodoName, editedTodoDescription));
      handleClose();
    }
  };

  const handleTodoEditName = (event) => {
    setEditedTodoName(event.target.value);
  };

  const handleTodoEditDescription = (event) => {
    setEditedTodoDescription(event.target.value);
  };

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Edit
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header>

          <Modal.Title>Edit YourTask
            <form onSubmit={handleEdit}>
              <Form.Control
                style={{ marginTop: '20px', marginBottom: '10px' }}
                defaultValue={todo.name}
                onChange={handleTodoEditName}
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="What needs to be done?"
              />

            </form>
            {error && (
              <Alert variant='warning' style={{ fontSize: '15px', marginTop: '10px', padding: '8px' }}>
                {error}
              </Alert>
            )}
          </Modal.Title>

        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleEdit}>
            <InputGroup>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                placeholder="Here you can describe your task"
                defaultValue={todo.description}
                onChange={handleTodoEditDescription}
              />
            </InputGroup>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default TodoEditForm;