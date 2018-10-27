import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expensesActionGen';

// props get passed in, destructure dispatch, history
const AddExpense = ({ dispatch, history }) => {
	return (
		<div>
				<h1>Add Expense</h1>
				<ExpenseForm
					onSubmit={(newExpense) => {
							dispatch(addExpense(newExpense));
							// Route to dashboard page after item is added
							history.push('/');
						}
					}
				/>
		</div>        
	);
};

export default connect()(AddExpense);