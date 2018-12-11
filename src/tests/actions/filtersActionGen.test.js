import moment from 'moment';

import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate
} from './../../actions/filtersActionGen';

test('should set text filter with supplied value', () => {
  const action = setTextFilter('test');

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test'
  });
});

test('should set text filter with default value', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

test('should set start date with supplied value', () => {
  const action = setStartDate(moment(0));

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should set start date with default value', () => {
  const action = setStartDate();

  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: expect().toBeUndefined()
  });
});

test('should set end date with supplied value', () => {
  const action = setEndDate(moment(0));

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should set end date with default value', () => {
  const action = setEndDate();

  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: expect().toBeUndefined()
  });
});

test('should setup action object for sorting by amount', () => {
  const action = sortByAmount();

  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should setup action object for sorting by date', () => {
  const action = sortByDate();

  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});