import moment from 'moment';

import getVisibleExpenses from '../../selectors/expensesSelector';
import { expenses } from '../testData/testData';

let filters = {
  text: 'e',
  sortBy: 'date',
  starDate: undefined,
  endDate: undefined,
};

test('should filter expenses by text and sort by date', () => {
  const result = getVisibleExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by startDate', () => {
  const result = getVisibleExpenses(expenses, {...filters, starDate: moment(0),});
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by endDate', () => {
  const result = getVisibleExpenses(expenses, {...filters, endDate: moment(0).add(2, 'days')});
  expect(result).toEqual([expenses[1]]);
});

test('should sortBy amount', () => {
  const result = getVisibleExpenses(expenses, {...filters, text: '', sortBy: 'amount'});
  expect(result).toEqual([expenses[0], expenses[2], expenses[1]]);
});