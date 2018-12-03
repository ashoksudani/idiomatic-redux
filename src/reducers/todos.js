import { combineReducers } from 'redux';

import { ACTN_ADD_TODO } from 'constants/actions';
import { ACTN_TOGGLE_TODO } from 'constants/actions';
import todo from './todo';

const byId = (state = {}, action = {}) => {
  switch (action.type) {
    case ACTN_ADD_TODO:
    case ACTN_TOGGLE_TODO:
      return {
        ...state,
        [action.id]: todo(state[action.id], action)
      };
    default:
      return state;
  }
};

const allIds = (state = [], action) => {
  switch (action.type) {
    case ACTN_ADD_TODO:
      return [...state, action.id];
    default:
      return state;
  }
};

const todos = combineReducers({
  byId,
  allIds
});

const getAllTodos = state => state.allIds.map(id => state.byId[id]);

const getVisibleTodos = (todos, filter) => {
  const allTodos = getAllTodos(todos);
  switch (filter) {
    case 'all':
      return allTodos;
    case 'completed':
      return allTodos.filter(t => t.completed);
    case 'active':
      return allTodos.filter(t => !t.completed);
    default:
      throw new Error(`Unknown filter: ` + filter);
  }
};

export default todos;
export { getVisibleTodos };
