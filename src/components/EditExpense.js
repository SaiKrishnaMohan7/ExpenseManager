import React, { Component }from 'react';
import { connect } from 'react-redux';

import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expensesActionGen';

export class EditExpense extends Component {
	render() {
		const {
			editExpense,
			removeExpense,
			history,
			expense,
		} = this.props;
		const { id } = expense;
		// url is dynamic and the dynamic part can be accessed via props.match.params and key-value obj
	return (
		<div>
			<ExpenseForm
				expense={expense}
				onSubmit={(updatedExpense) => {
					editExpense(id, updatedExpense);
					history.push('/');
				}}
			/>
			<button onClick={() => {
				removeExpense({id});
				history.push('/');
			}}>
        Remove
      </button>
		</div>
	);
	}
}

const mapStateToProps = (state, props) => {
	const {match: {params: {id}}} = props;
	return {
			expense: state.expenses.find((expense) =>  expense.id === id)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		editExpense: (id, updatedExpense) => (dispatch(editExpense(id, updatedExpense))),
		removeExpense: (data) => (dispatch(removeExpense(data)))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);