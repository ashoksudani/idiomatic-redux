import * as actnTypes from 'constants/actions';
import nanoid from 'nanoid';

export const receiveTodos = (filter, response) => {
  return {
    type: actnTypes.ACTN_RECEIVE_TODOS,
    filter,
    response
  };
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
