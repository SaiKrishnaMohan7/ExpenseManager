import expensesReducer from '../../reducers/expensesReducer';
import { expenses } from '../testData/testData';

const expensesReducerDefault = [];

test('should return default state', () => {
  const result = expensesReducer(undefined, {type: '@@INIT'});

  expect(result).toEqual(expensesReducerDefault);
});

test('should return state with new expense object', () => {
  const result = expensesReducer(undefined, {type: 'ADD_EXPENSE', expense: expenses[0]});

  expect(result).toEqual([expenses[0]]);
});

test('should return state with removed expense object', () => {
  const result = expensesReducer([expenses[0]], {type: 'REMOVE_EXPENSE', id: '1'});

  expect(result).toEqual(expensesReducerDefault);
});

test('should return state with updated expense object', () => {
  const action = {type: 'EDIT_EXPENSE', id: expenses[0].id, updates: {note: 'boom'}};
  const result = expensesReducer([expenses[0]], action);

  expect(result[0].note).toEqual('boom');
});