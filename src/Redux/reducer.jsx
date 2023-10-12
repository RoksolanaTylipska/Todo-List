const initialState = {
  todos: [],
  filter: 'all',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_Todo':
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), name: action.payload.name, description: action.payload.description, completed: false }],
      };
    case 'DELETE_Todo': {
      if (state === 0) {
        return 0
      }
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      };
    }
    case 'EDIT_Todo':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, name: action.payload.name, description: action.payload.description } : todo
        ),
      };
    case 'TOGGLE_Todo':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    case 'FILTER_Todos':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state
  }
}

export default reducer

