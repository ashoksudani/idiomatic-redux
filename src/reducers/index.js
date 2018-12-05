import byId, { getTodo } from './by-id';
import { combineReducers } from 'redux';
import createList, { getIds, getIsFetching } from './create-list';

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

const getFetching = (state, filter) => {
  return getIsFetching(state.idsByFilter[filter]);
};

export default todos;
export { getVisibleTodos, getFetching };
