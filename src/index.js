import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom/client';
import '../src/scss/app.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
