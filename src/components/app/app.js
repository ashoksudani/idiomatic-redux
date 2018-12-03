import React from 'react';

import AddTodo from 'components/add-todo';
import VisibleTodos from 'components/visible-todos';
import Footer from 'components/footer';

const App = () => {
  return (
    <>
      <AddTodo />
      <VisibleTodos />
      <Footer />
    </>
  );
};

export default App;
