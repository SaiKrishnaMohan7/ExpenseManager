import React, { Component } from 'react';
import {connect} from 'react-redux';
import { DateRangePicker } from 'react-dates';

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../actions/filtersActionGen';


class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState({ calendarFocused });
  };

  onChange = (e) => {
    const { dispatch } = this.props;
    const selected = e.target.value;
    if (selected === 'date')
      dispatch(sortByDate());
    if(selected === 'amount')
      dispatch(sortByAmount());
  }

  render(){
    const { filters, dispatch } = this.props;
    const { text, sortBy, startDate, endDate } = filters;
    const { calendarFocused } = this.state;

    return (
      <div>
        <input type="text" value={text} onChange={(e) => {
          dispatch(setTextFilter(e.target.value));
        }}/>
        <select 
          value={sortBy}
          onChange={this.onChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
          displayFormat="DD/MM/YYYY"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);