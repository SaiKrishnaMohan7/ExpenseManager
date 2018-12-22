import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../components/Header';

test('should render Header component correctly', () => {
  const wrapper = shallow(<Header />);

  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find('h1')).toHaveLength(1);
  expect(wrapper.find('h1').text()).toBe('Expense Manager');
});