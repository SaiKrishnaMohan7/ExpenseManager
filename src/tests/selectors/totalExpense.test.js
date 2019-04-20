import totalExpense from './../../selectors/totalExpense';
import { expenses } from '../testData/testData';

test('should return the total of all expenses', () => {
  expect(totalExpense(expenses)).toEqual(2000592);
});

test('should return 0 if expenses arr empty', () => {
  const empty = [];

  expect(totalExpense(empty)).toEqual(0);
});

test('should return 0 if expenses arr undefined', () => {
  const empty = undefined;

  expect(totalExpense(empty)).toEqual(0);
});

test('should return amount of one expense ir arr length is 1', () => {
  expect(totalExpense([expenses[0]])).toEqual(2000000);
});