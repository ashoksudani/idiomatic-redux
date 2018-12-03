import React from 'react';
import Todo from 'components/todo';

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} onClick={e => onTodoClick(todo.id)} />
    ))}
  </ul>
);

export default TodoList;
