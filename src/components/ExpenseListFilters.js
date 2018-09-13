import React from 'react';
import {connect} from 'react-redux';
import { setTextFilter, sortByDate, sortByAmount } from '../actions/filtersActionGen';

const ExpenseListFilters =  (props) => {
  return  (
    <div>
      <input type="text" value={props.filters.text} onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }}/>
      <select 
        value={props.filters.sortBy}
        onChange={(e) => {
          let selected = e.target.value;
          
          if (selected === 'date')
            props.dispatch(sortByDate());
          if(selected === 'amount')
            props.dispatch(sortByAmount())
        }}
      >
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);