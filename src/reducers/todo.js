import { ACTN_ADD_TODO } from 'constants/actions';
import { ACTN_TOGGLE_TODO } from 'constants/actions';

const todo = (state, action) => {
  switch (action.type) {
    case ACTN_ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case ACTN_TOGGLE_TODO:
      if (state.id !== action.id) {
        return state;
      }
      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state;
  }
};

export default todo;
