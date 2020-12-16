import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import Provider from './components/context'

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
