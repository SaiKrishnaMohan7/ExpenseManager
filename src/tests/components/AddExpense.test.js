import React from 'react';
import { shallow } from 'enzyme';

import { AddExpense } from '../../components/AddExpense';
import { expenses } from '../testData/testData';

let props, wrapper;
beforeEach(() => {
  props = {
    addExpenseToDb: jest.fn(),
    history: { push: jest.fn() }
  };
  wrapper = shallow(<AddExpense {...props} />);
});

test('should render correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);

  expect(props.history.push).toHaveBeenLastCalledWith('/');
  expect(props.addExpenseToDb).toHaveBeenCalled();
});