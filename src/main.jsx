// src/main.jsx
import React from 'react';

//import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from './reducers/store.js';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
