import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import ThemeProvider from "./hooks/Provider"

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
)
