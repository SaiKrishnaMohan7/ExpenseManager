import { addExpense, editExpense, removeExpense } from './../../actions/expensesActionGen';

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
  const expenseData = {
    description: 'testAmount',
    note: 'test',
    amount: 200,
    createdAt: 1234567890
  };
  const action = addExpense({
    ...expenseData
  });

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      ...expenseData
    }
  });
});

test('should setup add expense action object with default values', () => {
  const expenseData = {};
  const action = addExpense({
    ...expenseData
  });

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});