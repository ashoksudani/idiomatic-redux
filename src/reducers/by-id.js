import * as actnTypes from 'constants/actions';

const byId = (state = {}, action = {}) => {
  switch (action.type) {
    case actnTypes.ACTN_FETCH_TODOS_SUCCESS:
    case actnTypes.ACTN_ADD_TODO_SUCCESS:
    case actnTypes.ACTN_TOGGLE_TODO_SUCCESS:
      return { ...state, ...action.response.entities.todos };
    default:
      return state;
  }
};

/*
//Without normalizr
const byId = (state = {}, action = {}) => {
  switch (action.type) {
    case ACTN_FETCH_TODOS_SUCCESS:
      const nextState = { ...state };
      action.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    case ACTN_ADD_TODO_SUCCESS:
      return {
        ...state,
        [action.response.id]: action.response
      };
    default:
      return state;
  }
};
*/

export default byId;

export const getTodo = (state, id) => state[id];
