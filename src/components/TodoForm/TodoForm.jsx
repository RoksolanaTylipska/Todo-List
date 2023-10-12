import React, { useState } from 'react';
import './TodoForm.css'
import { useDispatch } from 'react-redux';
import { addTodo } from '../../Redux/actions'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';

function TodoForm() {
  const [show, setShow] = useState(false);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const dispatch = useDispatch();

  const handleClose = () => {
    setShow(false)
    setError('');
    setName('')
    setDescription('')
  };
  const handleShow = () => {
    setShow(true);
    setError('');
    setName('')
    setDescription('')
  }

  const handleSubmit = (event) => {
    const normalizeTodoName = name.trim()

    if (!normalizeTodoName) {
      setError('Todo can\'t be empty');
      event.preventDefault()
    } else {
      dispatch(addTodo(normalizeTodoName, description))
      handleClose()
    }
  };

  const handleNewTodoName = (event) => {
    setName(event.target.value);
    setError('');
  };

  const handleNewTodoDescription = (event) => {
    setDescription(event.target.value);
  };

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Add TASK
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>
            <form onSubmit={handleSubmit}>
              <InputGroup size="lg" >
                <Form.Control
                  style={{ marginTop: '20px' }}
                  value={name}
                  onChange={handleNewTodoName}
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="What needs to be done?"
                />
              </InputGroup>
            </form>
            {error && (
              <Alert variant='warning' style={{ fontSize: '15px', marginTop: '10px', padding: '8px' }}>
                {error}
              </Alert>
            )}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <InputGroup>
              <Form.Control
                as="textarea"
                aria-label="With textarea"
                placeholder="Here you can describe your task"
                value={description}
                onChange={handleNewTodoDescription}
              />
            </InputGroup>
          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default TodoForm;
