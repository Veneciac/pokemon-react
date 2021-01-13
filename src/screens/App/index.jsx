import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import Router from 'router';
import { store } from 'store';
import { History } from 'helpers';
import client from 'graphQLClient';

const App = () => {
  return (
    // <ApolloProvider client={ client }>
    <Provider store={ store }>
      <Router />
    </Provider>
  );
};

export default App;
