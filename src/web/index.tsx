import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
// import 'mobx-react-lite/batchingForReactDom';
import App from '@pages/App';
// import 'mobx-react-lite/batchingForReactDom';
import './index.css';

ReactDOM.hydrate(
<BrowserRouter>
    <App />
</BrowserRouter>
, document.getElementById('main'));