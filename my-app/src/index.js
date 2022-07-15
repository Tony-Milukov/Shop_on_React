import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from "./store"
import {persistor} from "./store/index"
import { PersistGate } from 'redux-persist/es/integration/react'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
          <App />
          </PersistGate>
      </Provider>
  </React.StrictMode>
);


reportWebVitals();
