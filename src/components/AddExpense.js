import React, { Component } from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expensesActionGen';

export class AddExpense extends Component {
	onSubmit = (newExpense) => {
		this.props.addExpense(addExpense(newExpense));
		// Route to dashboard page after item is added
		this.props.history.push('/');
	}

	render() {
		return (
			<div>
					<h1>Add Expense</h1>
					<ExpenseForm
						onSubmit={this.onSubmit}
					/>
			</div>        
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addExpense: (expense) => {
			dispatch(addExpense(expense));
		}
	};
};

export default connect(undefined, mapDispatchToProps)(AddExpense);