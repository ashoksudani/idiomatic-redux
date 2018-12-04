import { combineReducers } from 'redux';

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

const all = (state = [], action) => {
  if (action.filter !== 'all') {
    return state;
  }
  switch (action.type) {
    case ACTN_RECEIVE_TODOS:
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};

const active = (state = [], action) => {
  if (action.filter !== 'active') {
    return state;
  }
  switch (action.type) {
    case ACTN_RECEIVE_TODOS:
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};

const completed = (state = [], action) => {
  if (action.filter !== 'completed') {
    return state;
  }
  switch (action.type) {
    case ACTN_RECEIVE_TODOS:
      return action.response.map(todo => todo.id);
    default:
      return state;
  }
};

const idsByFilter = combineReducers({
  all,
  active,
  completed
});

const todos = combineReducers({
  byId,
  idsByFilter
});

const getVisibleTodos = (state, filter) => {
  const ids = state.idsByFilter[filter];
  return ids.map(id => state.byId[id]);
};

export default todos;
export { getVisibleTodos };
