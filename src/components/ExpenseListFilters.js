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


export class ExpenseListFilters extends Component {
  state = {
    calendarFocused: null,
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  };

  onFocusChange = (calendarFocused) => {
    this.setState({ calendarFocused });
  };

  onSortChange = (e) => {
    const { sortByAmount, sortByDate } = this.props;
    const selected = e.target.value;
    if (selected === 'date')
      sortByDate();
    if(selected === 'amount')
      sortByAmount();
  }

  onTextChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }

  render(){
    const { filters } = this.props;
    const { text, sortBy, startDate, endDate } = filters;
    const { calendarFocused } = this.state;

    return (
      <div>
        <input type="text" value={text} onChange={this.onTextChange}/>
        <select 
          value={sortBy}
          onChange={this.onSortChange}
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

const mapDispatchToProps = (dispatch) => {
  return {
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);