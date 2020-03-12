import React from 'react';
import client from './config/api'
import { ApolloProvider } from '@apollo/react-hooks';
import Navigation from './navigation/Navigation';
import { ThemeProvider } from 'styled-components';
import { theme } from './globalStyles';
import MoodConverter from './assets/MoodConverter';


const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Navigation />
          <MoodConverter />
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
