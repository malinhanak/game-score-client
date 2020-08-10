import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { ThemeProvider } from 'styled-components';

import App from './App';
import { GlobalStyle, theme } from './styles';
import { AuthProvider } from './shared';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <CookiesProvider>
    <AuthProvider>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <GlobalStyle />
            <App />
          </BrowserRouter>
        </ThemeProvider>
      </React.StrictMode>
    </AuthProvider>
  </CookiesProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
