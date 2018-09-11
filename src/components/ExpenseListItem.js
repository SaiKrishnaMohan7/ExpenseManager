import React, {Fragment} from 'react';
import { connect } from 'react-redux';

import {removeExpense} from '../actions/expensesActionGen';

const ExpenseListItem = ({id, description, amount, createdAt, dispatch}) => {
  return (
    <Fragment>
      <h3>{description}</h3>
      <p>{amount} - {createdAt}</p>
      <button onClick={() => {dispatch(removeExpense(id));}}>
          Remove
      </button>
    </Fragment>
  );
};

// using connect() without args passes dispatch as a prop to the connected component
export default connect()(ExpenseListItem);