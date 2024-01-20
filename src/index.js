import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from 'App';
import { Provider } from 'react-redux';
import { store } from './store/store'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter  basename="/react-homework-template">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
  
);
