import React from 'react';

import {connect} from 'react-redux';

const ExpenseList = (props) => {
  return (
    <div>
      <h2>Expense List</h2>
        {props.expenses.length}
        {props.filters.text}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

// connect() returns a fucntion so it has to be invoked!
// Component will re-render as state chnages, no neeed to subscribe, maybe its implicit
export default connect(mapStateToProps)(ExpenseList);