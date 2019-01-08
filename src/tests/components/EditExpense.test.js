import React from 'react';
import { shallow } from 'enzyme';

import { EditExpense } from '../../components/EditExpense';
import { expenses } from '../testData/testData';


let props, wrapper;
describe('Edit Expense Component', () => {
  beforeEach(() => {
    props = {
      editExpense: jest.fn(),
      removeExpense: jest.fn(),
      history: { push: jest.fn() },
      expense: expenses[0],
    };
    wrapper = shallow(<EditExpense {...props} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle submission ', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')({...expenses[0], note: 'test'});

    expect(props.editExpense).toHaveBeenCalled();
    expect(props.history.push).toHaveBeenLastCalledWith('/');
  });

  it('should handle removing an expense', () => {
    wrapper.find('button').simulate('click');

    expect(props.removeExpense).toHaveBeenCalled();
    expect(props.history.push).toHaveBeenLastCalledWith('/');
  });
});