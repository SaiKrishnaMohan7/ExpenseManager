import filtersReducer from '../../reducers/filtersReducer';
import { filtersReducerDefault } from '../testData/testData';

test('should return default state Object', () => {
  const result = filtersReducer(undefined, {type: '@@INIT'});
  expect(result).toEqual(filtersReducerDefault);
});

test('should return state object with right text filter', () => {
  const result = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: 'abcd'});
  expect(result).toEqual({...filtersReducerDefault, text: 'abcd'});
});

test('should return state object with right sorting criteria', () => {
  const result = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(result).toEqual({...filtersReducerDefault, sortBy: 'amount'});
});

test('should return state object with right sorting criteria', () => {
  const result = filtersReducer(undefined, {type: 'SORT_BY_DATE'});
  expect(result).toEqual({...filtersReducerDefault, sortBy: 'date'});
});

test('should return state object with set start date', () => {
  const result = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: 1234});
  expect(result).toEqual({...filtersReducerDefault, startDate: 1234});
});

test('should return state object with set end date', () => {
  const result = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: 1234});
  expect(result).toEqual({...filtersReducerDefault, endDate: 1234});
});