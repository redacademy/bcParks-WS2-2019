import React from 'react';
import client from './config/api'
import { ApolloProvider } from '@apollo/react-hooks';
import Navigation from './navigation/Navigation';
import { ThemeProvider } from 'styled-components';
import { theme } from './globalStyles';
import ProgressProvider from './context/ProgressProvider';

const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <ProgressProvider>
            <Navigation />
          </ProgressProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
