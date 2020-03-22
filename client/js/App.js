import React from 'react';
import client from './config/api';
import {ApolloProvider} from '@apollo/react-hooks';
import Navigation from './navigation/Navigation';
import { ThemeProvider } from 'styled-components';
import { theme } from './globalStyles';
import ProgressProvider from './context/ProgressProvider';
import MapProvider from './context/MapProvider';
const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <ProgressProvider>
            <MapProvider>
              <Navigation />
            </MapProvider>
          </ProgressProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
