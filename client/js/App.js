import React from 'react';
import client from './config/api'
import { ApolloProvider } from '@apollo/react-hooks';
import RootStackNavigator from './navigation/RootStackNavigator';
import { ThemeProvider } from 'styled-components';
import { theme } from './globalStyles';

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <RootStackNavigator />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
