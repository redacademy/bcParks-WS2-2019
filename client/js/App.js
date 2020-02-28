import React from 'react';
import client from './config/api'
import { ApolloProvider } from '@apollo/react-hooks';
import { Text } from 'react-native';
import RootStackNavigator from './navigation/RootStackNavigator';

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <RootStackNavigator />
      </ApolloProvider>
    </>
  );
};

export default App;
