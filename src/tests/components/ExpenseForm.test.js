import React from 'react';
import { shallow } from 'enzyme';

import ExpenseForm from '../../components/ExpenseForm';
import { expenses } from '../testData/testData';

test('should render Component correctly', () => {
  const wrapper = shallow(<ExpenseForm />);

  expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseForm component correctly expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)

  expect(wrapper).toMatchSnapshot();
});