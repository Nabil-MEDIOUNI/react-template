import React from 'react';
import ReactDOM from 'react-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import './assets/styles/tailwind.css';

import App from './pages/_app';

ReactDOM.render(<App />, document.getElementById('root'));

window.addEventListener('load', () => {
  navigator.serviceWorker
    .register('./serviceworker.js')
    .then((reg) => console.log('Success: ', reg.scope))
    .catch((err) => console.log('Failure: ', err));
});
