import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import 'antd/dist/antd.css';

import Router from 'router';
import { store } from 'store';
import client from 'graphQLClient';

const App = () => {
  return (
    <ApolloProvider client={ client }>
      <Provider store={ store }>
        <Router />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
