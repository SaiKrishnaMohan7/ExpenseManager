import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

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

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  // snapshot with no error
  expect(wrapper).toMatchSnapshot();
  // simulate form submission
  wrapper.find('form').simulate('submit', {
    preventDefault: jest.fn(),
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description in state on change', () => {
  const value = 'This should trigger descriptipon chnage';
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);

  wrapper.find('input').at(0).simulate('change', {
    target: { value }
  });

  expect(wrapper.state('description')).toBe(value);
});

test('should set note in state on chnage', () => {
  const value = 'This is new value of note';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('textarea').simulate('change', {target: { value }});
  expect(wrapper.state('note')).toBe(value);
});

test('should set valid amount in state on chnage', () => {
  const value = '20.05';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate('change', {target: { value }});
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set invalid amount in state on chnage', () => {
  const value = '20.054566';
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('input').at(1).simulate('change', {target: { value }});
  expect(wrapper.state('amount')).toBe('');
});

test('should call onSubmit for valid from submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]}  onSubmit={onSubmitSpy} />);

  wrapper.find('form').simulate('submit', {
    preventDefault: jest.fn(),
  });

  expect(onSubmitSpy).toHaveBeenCalledWith({
    description: expenses[0].description,
    note: expenses[0].note,
    amount: expenses[0].amount,
    createdAt: expenses[0].createdAt,
  });
});

test('should set the correct date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should flip focus state', () => {
  const wrapper = shallow(<ExpenseForm />);

  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: true});
  expect(wrapper.state('focused')).toBe(true);
});