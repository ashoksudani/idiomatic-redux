/*

//Reducer in use when filtering todos by dispatching set_visibility_filter action

import { ACTN_SET_VISIBILITY_FILTER } from 'constants/actions';

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case ACTN_SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;

*/
