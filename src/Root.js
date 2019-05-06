import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle``;

const Root = () => (
  <BrowserRouter>
    <GlobalStyle />
    <App />
  </BrowserRouter>
);

export default Root;
