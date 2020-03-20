import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from './redux/store';
import App from './components/app/app';

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
render(app, document.getElementById('root'));
