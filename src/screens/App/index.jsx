import React from 'react';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';
import { PersistGate } from 'redux-persist/integration/react';

import 'antd/dist/antd.css';

import Router from 'router';
import { store, persistor } from '../../store';
import client from 'graphQLClient';

const App = () => {
  return (
    <ApolloProvider client={ client }>
      <Provider store={ store }>
        <PersistGate loading={ null } persistor={ persistor }>
          <Router />
        </PersistGate>
      </Provider>
    </ApolloProvider>
  );
};

export default App;
