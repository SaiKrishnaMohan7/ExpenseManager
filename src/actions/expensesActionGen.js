import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = expense => {
	return {
		type: 'ADD_EXPENSE',
		expense,
	};
};

// TODO: Refactor this to indicate begining and ending of the save and load processes
// since the function gets called with dispatch, because of mapDispatchToProps, it is possible to fire off loadActions
export const startAddExpense = (expenseData = {}) => {
	return (dispatch) => {
		const {
			description = '',
			note = '',
			amount = 0,
			createdAt = 0
		} = expenseData;

		const expense = {
			description,
			note,
			amount,
			createdAt
		}

		database.ref('expenses').push(expense).then((ref) => {
			dispatch(addExpense({
				id: ref.key,
				...expense,
			}));
		});
	};
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

// EDIT_EXPENSE
export const editExpense = (id, updates) => {
	return {
		type: 'EDIT_EXPENSE',
		id,
		updates
	}
};