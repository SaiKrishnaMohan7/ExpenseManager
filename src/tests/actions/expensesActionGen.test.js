import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import {
  addExpenseToDb,
  addExpenseToUi,
  editExpense,
  removeExpense,
} from './../../actions/expensesActionGen';
import { expenses } from '../testData/testData';

const createMockStore = configureMockStore([thunk]);

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', {amount: 122});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {amount: 122}
  });
});

test('should setup add expense action object when values supplied', () => {
  const action = addExpenseToUi(expenses[0]);

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenses[0]
    }
  });
});

test('Should add expense defaults to db and store', async () => {
  const store = createMockStore({});

  const result = await store.dispatch(addExpenseToDb(expenses[1]));
  const actions = store.getActions();

  expect(actions[0]).toEqual({ type: 'START_SAVE_PROCESS' });
});