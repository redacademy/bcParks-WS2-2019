import React from 'react';
import client from './config/api';
import { ApolloProvider } from '@apollo/react-hooks';
import Navigation from './navigation/Navigation';
import { ThemeProvider } from 'styled-components';
import { theme } from './globalStyles';
import ProgressProvider from './context/ProgressProvider';
import MapProvider from './context/MapProvider';
import AuthProvider from './context/AuthContext';
const App = () => {
  return (
    <>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <AuthProvider>
            <ProgressProvider>
              <MapProvider>
                <Navigation />
              </MapProvider>
            </ProgressProvider>
          </AuthProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
};

export default App;
