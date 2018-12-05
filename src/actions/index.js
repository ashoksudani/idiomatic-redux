import * as actnTypes from 'constants/actions';
import nanoid from 'nanoid';

import * as api from 'api';

export const requestTodos = (filter, response) => {
  return {
    type: actnTypes.ACTN_REQUEST_TODOS,
    filter
  };
};

const receiveTodos = (filter, response) => {
  return {
    type: actnTypes.ACTN_RECEIVE_TODOS,
    filter,
    response
  };
};

export const fetchTodos = filter => {
  return api
    .fetchTodos(filter)
    .then(response => receiveTodos(filter, response));
};

export const addTodo = text => {
  return {
    type: actnTypes.ACTN_ADD_TODO,
    id: nanoid(),
    text
  };
};

export const togggleTodo = id => {
  return {
    type: actnTypes.ACTN_TOGGLE_TODO,
    id
  };
};

// export const setVisibilityFilter = filter => {
//   return {
//     type: actnTypes.ACTN_SET_VISIBILITY_FILTER,
//     filter
//   };
// };
