import nanoid from 'nanoid';

const fakeDatabase = {
  todos: [
    {
      id: nanoid(),
      text: 'First Todo',
      completed: true
    },
    {
      id: nanoid(),
      text: 'Second Todo',
      completed: false
    },
    {
      id: nanoid(),
      text: 'Third Todo',
      completed: true
    },
    {
      id: nanoid(),
      text: 'Fourth Todo',
      completed: false
    }
  ]
};

const delay = ms =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });

export const fetchTodos = filter => {
  return delay(500).then(() => {
    // if (Math.random() > 0.5) {
    //   throw new Error('Server is not available.');
    // }
    switch (filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed);
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });
};

export const addTodo = text => {
  return delay(500).then(() => {
    const todo = {
      id: nanoid(),
      text: text,
      completed: false
    };
    fakeDatabase.todos.push(todo);
    return todo;
  });
};

export const toggleTodo = id => {
  return delay(500).then(() => {
    const todo = fakeDatabase.todos.find(todoItem => todoItem.id === id);
    todo.completed = !todo.completed;
    return todo;
  });
};
