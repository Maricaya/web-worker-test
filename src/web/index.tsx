import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import 'mobx-react-lite/batchingForReactDom';
import App from '@pages/App';
// import 'mobx-react-lite/batchingForReactDom';
import './index.css';
//hydrate
ReactDOM.render(<App />, document.getElementById('main'));

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/assets/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
}