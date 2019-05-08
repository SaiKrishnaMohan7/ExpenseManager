import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';

import getVisibleExpense from '../selectors/expensesSelector';
import totalExpense from '../selectors/totalExpense';

export const ExpensesSummary = ({expenseCount, expenseTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const expenseTotalFormatted = numeral(expenseTotal / 100).format('$0,0.00');
  return (
    <Fragment>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling {expenseTotalFormatted}
      </h1>
    </Fragment>
  );
}

const mapStateToProps = state => {
  const visibleExpenses = getVisibleExpense(state.expenses.expenses, state.filters);

  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: totalExpense(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
