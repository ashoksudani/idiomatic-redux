import { ACTN_RECEIVE_TODOS } from 'constants/actions';

const byId = (state = {}, action = {}) => {
  switch (action.type) {
    case ACTN_RECEIVE_TODOS:
      const nextState = { ...state };
      action.response.forEach(todo => {
        nextState[todo.id] = todo;
      });
      return nextState;
    default:
      return state;
  }
};

export default byId;

export const getTodo = (state, id) => state[id];
