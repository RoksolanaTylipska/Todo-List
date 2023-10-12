export const addTodo = (name, description = '') => ({
  type: 'ADD_Todo',
  payload: { name, description },
});

export const editTodo = (id, name, description) => ({
  type: 'EDIT_Todo',
  payload: { id, name, description },
});

export const deleteTodo = (id) => ({
  type: 'DELETE_Todo',
  payload: { id },
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_Todo',
  payload: { id },
});

export const filterTodos = (filter) => ({
  type: 'FILTER_Todos',
  payload: filter,
});
