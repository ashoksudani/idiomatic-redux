import throttle from 'lodash/throttle';
import { createStore } from 'redux';
import todoApp from 'reducers';
import { loadState, saveState } from 'utils/local-storage';

const configStore = () => {
  const store = createStore(todoApp, loadState());

  if (process.env.NODE_ENV !== -'production') {
    store.dispatch = addLoggintoDispatch(store);
  }

  store.subscribe(
    throttle(() => {
      saveState({ todos: store.getState().todos });
    }),
    3000
  );

  return store;
};

const addLoggintoDispatch = store => {
  const rawDispatch = store.dispatch;

  if (!console.group) {
    return rawDispatch;
  }

  return action => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = rawDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

export default configStore;

/*

//file a.js
export default getVisibleTodos;
export { todos };

//file b.js
import getVisibleTodos from 'reducers/todos';
import todos from 'reducers/todos';
import randomImport from 'reducers/todos';

console.log(getVisibleTodos); // will be default getVisibleTodos
console.log(randomImport); // will be default getVisibleTodos
console.log(todos); // will be default getVisibleTodos

*/
/*

//file a.js
export default getVisibleTodos;
export { todos };

//file b.js
import { getVisibleTodos } from 'reducers/todos';
import { todos } from 'reducers/todos';
import { randomImport } from 'reducers/todos';

console.log(getVisibleTodos); // will be undefined
console.log(randomImport); // will be undefined
console.log(todos);

*/

/*

//file a.js
export default getVisibleTodos;
export { todos };

//file b.js
import * as everyThing from 'reducers/todos';

console.log(everyThing.default); // will be default import - getVisibleTodos
console.log(everyThing.todos); // will be todos

*/
