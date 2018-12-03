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

export const fetchTodos = filter =>
  delay(500).then(() => {
    switch (filter) {
      case 'all':
        return fakeDatabase.todos;
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed);
      case 'inactive':
        return fakeDatabase.todos.filter(t => t.completed);
      default:
        throw new Error(`Unknown filter: ${filter}`);
    }
  });