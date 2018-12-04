import { ACTN_RECEIVE_TODOS } from 'constants/actions';

const createList = filter => {
  return (state = [], action) => {
    if (action.filter !== filter) {
      return state;
    }
    switch (action.type) {
      case ACTN_RECEIVE_TODOS:
        return action.response.map(todo => todo.id);
      default:
        return state;
    }
  };
};

export default createList;
export const getIds = state => state;