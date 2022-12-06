// initial state
const initialState = {
  todos: [],
  todo: {},
};

// action value
const CREATE_TODO = "CREATE_TODO";
const UPDATE_TODO = "UPDATE_TODO";
const DELETE_TODO = "DELETE_TODO";

// action creator
export const createTodo = (payload) => {
  return {
    type: CREATE_TODO,
    payload,
  };
};

export const updateTodo = (payload) => {
  return {
    type: UPDATE_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE_TODO,
    payload,
  };
};

// reducer
const todosReducer = (state = initialState, action) => {
  let todos = [];
  switch (action.type) {
    case CREATE_TODO:
      return { todos: [...state.todos, action.payload] };
    case UPDATE_TODO:
      todos = [...state.todos];
      todos.map((v) => {
        if (v.id === action.payload.id) {
          v.isWorking = !v.isWorking;
        }
        return v;
      });
      return { todos: todos };
    case DELETE_TODO:
      todos = [...state.todos];
      todos = todos.filter((v) => v.id !== action.payload.id);
      return { todos: todos };
    default:
      return state;
  }
};

export default todosReducer;
