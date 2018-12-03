import React from 'react';
import Todo from 'components/todo';

const TodoList = ({ todos, togggleTodo }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={e => togggleTodo(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
