import { combineReducers } from 'redux';
import byId, { getTodo } from './by-id';
import createList, { getIds } from './create-list';

const idsByFilter = combineReducers({
  all: createList('all'),
  active: createList('active'),
  completed: createList('completed')
});

const todos = combineReducers({
  byId,
  idsByFilter
});

const getVisibleTodos = (state, filter) => {
  const ids = getIds(state.idsByFilter[filter]);
  return ids.map(id => getTodo(state.byId, id));
};

export default todos;
export { getVisibleTodos };
