import React from 'react';
import { shallow } from 'enzyme';
import moment from 'moment';

import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { testFiltersDefault, testFilters } from '../testData/testData';

describe('ExpenseListFilters Component', () => {
  let wrapper, props;
  beforeEach(() => {
    props = {
      setTextFilter : jest.fn(),
      sortByDate : jest.fn(),
      sortByAmount : jest.fn(),
      setStartDate : jest.fn(),
      setEndDate : jest.fn(),
      filters: testFiltersDefault,
    }
    wrapper = shallow(<ExpenseListFilters {...props} />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should match snapshot when other filter object is set', () => {
    wrapper.setProps({
      filters: testFilters,
    });

    expect(wrapper).toMatchSnapshot();
  });

  it('should sort by date', () => {
    const value = 'date';
    wrapper.setProps({
      filters: testFilters
    });
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    expect(props.sortByDate).toHaveBeenCalled();
  });
  
  it('should sort by amount', () => {
    const value = 'amount';
    wrapper.find('select').simulate('change', {
      target: { value }
    });
    expect(props.sortByAmount).toHaveBeenCalled();
  });
  
  it('should handle date changes', () => {
    const startDate = moment(0).add(4, 'years');
    const endDate = moment(0).add(8, 'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
    expect(props.setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(props.setEndDate).toHaveBeenLastCalledWith(endDate);
  });
  
  it('hould handle date focus changes', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
  });
});