import React from 'react';
import configSotre from 'utils/store-configure';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from 'components/app';

import { fetchTodos } from 'api';
fetchTodos('all').then(console.log);

const root = () => {
  return (
    <Provider store={configSotre()}>
      <BrowserRouter>
        <Route path="/:filter?" component={App} />
      </BrowserRouter>
    </Provider>
  );
};

export default root;
