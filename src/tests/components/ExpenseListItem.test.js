import React from 'react';
import { shallow } from 'enzyme';

import ExpenseListItem from '../../components/ExpenseListItem';
import { expenses } from '../testData/testData';

test('should render ExpenseLitItem with expense', () => {
  const wrapper = shallow(<ExpenseListItem expense={expenses[0]} />);

  expect(wrapper.find('Link')).toHaveLength(1);
  expect(wrapper.find('p')).toHaveLength(1);
});