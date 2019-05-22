import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';

import AppRouter from './routers/AppRouter';
import storeCreator from './store/storeCreator';
import { fetchExpenses } from './actions/expensesActionGen';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = storeCreator();

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
  );

// Alternative to Container components and fucntional components
store.dispatch(fetchExpenses()).then(() => {
  ReactDOM.render(app, document.getElementById('root'));
});

