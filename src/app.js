import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';

import AppRouter from './routers/AppRouter';
import storeCreator from './store/storeCreator';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = storeCreator();

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
  );

ReactDOM.render(app, document.getElementById('root'));