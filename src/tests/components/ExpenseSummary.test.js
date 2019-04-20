import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary'


test('Should render correctly when single expense', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={1} expenseTotal={234} />);

  expect(wrapper).toMatchSnapshot();
});

test('Should render correctly when multiple expenses', () => {
  const wrapper = shallow(<ExpensesSummary expenseCount={5} expenseTotal={2034} />);

  expect(wrapper).toMatchSnapshot();
});