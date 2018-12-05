import { createStore, applyMiddleware } from 'redux';
import reduxLogger from 'redux-logger';
// import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import todoApp from 'reducers';

const configStore = () => {
  const middleware = [thunk];

  if (process.env.NODE_ENV !== -'production') {
    middleware.push(reduxLogger);
  }

  return createStore(todoApp, applyMiddleware(...middleware));
};

export default configStore;

/* will be called e.g. 
  store.dipsatch = thunk(store)(store.dispatch);
  store.dispatch(action);
*/
/*
const thunk = store => next => action =>
  typeof action === 'function'
    ? action(store.dispatch, store.getState)
    : next(action);
*/

/*

const logDispatch = store => nextDispatch => {
  if (!console.group) {
    return nextDispatch;
  }

  return action => {
    console.group(action.type);
    console.log('%c prev state', 'color: gray', store.getState());
    console.log('%c action', 'color: blue', action);
    const returnValue = nextDispatch(action);
    console.log('%c next state', 'color: green', store.getState());
    console.groupEnd(action.type);
    return returnValue;
  };
};

const promiseDispatch = store => nextDispatch => action => {
  if (typeof action.then === 'function') {
    return action.then(nextDispatch);
  }
  return nextDispatch(action);
};

*/

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
