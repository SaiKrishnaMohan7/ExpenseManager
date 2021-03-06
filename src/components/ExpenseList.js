import React from 'react';
import {connect} from 'react-redux';

import ExpenseListItem from './ExpenseListItem'
import getVisibleExpenses from '../selectors/expensesSelector';

export const ExpenseList = ({ expenses }) => {

  return (
    <div>
      <h2>Expense List</h2>
        {
          expenses.map((expense) => {
            // By using spread operator here, the component will have access ot properties on props as opposed to props.expense if
            // we did this: expense={expense}
            return (
              <ExpenseListItem key={expense.id} {...expense } />
            );
          })
        }
    </div>
  );
};

const mapStateToProps = state => {
  // To make sure filters get applied when user selects a filter
  return {
    expenses: getVisibleExpenses(state.expenses.expenses, state.filters)
  };
};

// connect() returns a fucntion so it has to be invoked!
// Component will re-render as state chnages, no neeed to subscribe, maybe its implicit
export default connect(mapStateToProps)(ExpenseList);