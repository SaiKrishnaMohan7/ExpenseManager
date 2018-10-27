import React from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expensesActionGen';

const EditExpense = ({dispatch, history, expense}) => {
	const { id } = expense;
	// url is dynamic and the dynamic part can be accessed via props.match.params and key-value obj
	return (
		<div>
			<ExpenseForm
				expense={expense}
				onSubmit={(updatedExpense) => {
					dispatch(editExpense(id, updatedExpense));
					history.push('/');
				}}
			/>
			<button onClick={() => {
				dispatch(removeExpense({id}));
				history.push('/');
			}}>
        Remove
      </button>
		</div>
	);
};

const mapStateToProps = (state, props) => {
	const {match: {params: {id}}} = props;
	return {
			expense: state.expenses.find((expense) =>  expense.id === id)
	};
};

export default connect(mapStateToProps)(EditExpense);