import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css';

import AppRouter from './routers/AppRouter';
import {addExpense, removeExpense, editExpense} from './actions/expensesActionGen';
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from './actions/filtersActionGen'
import getVisibleExpenses from './selectors/expensesSelector';
import storeCreator from './store/storeCreator';
import './styles/styles.scss'

const store = storeCreator();

store.dispatch(addExpense({description: 'Water Bill', amount: 20000, createdAt: 11000}));
store.dispatch(addExpense({description: 'Gas Bill', amount: 25000, createdAt: 31000}));

store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log(`this is the default state ${state}`);
console.log(store.getState());
console.log(visibleExpenses);

const app = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
  );

ReactDOM.render(app, document.getElementById('root'));