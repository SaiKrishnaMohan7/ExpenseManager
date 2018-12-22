import React from 'react';
import { shallow } from 'enzyme';

import { ExpenseList } from '../../components/ExpenseList';
import { expenses } from '../testData/testData';

test('should render ExpenseList with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses} />);

  expect(wrapper).toMatchSnapshot();
});