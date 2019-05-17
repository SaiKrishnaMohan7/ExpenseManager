import database from '../firebase/firebase';

const startSaveProcess = () => ({ type: 'START_SAVE_PROCESS' });

const endSaveProcess = () => ({ type: 'END_SAVE_PROCESS' });

const errorSaving = error => ({ type: 'SAVE_ERROR', error });

// ADD_EXPENSE
export const addExpenseToUi = expense => {
	return {
		type: 'ADD_EXPENSE',
		expense,
	};
};

// since the function gets called with dispatch, because of mapDispatchToProps, it is possible to fire off loadActions
// Without redux thunk you can't return a function
export const addExpenseToDb = (expense = {}) => {
	return dispatch => {
		dispatch(startSaveProcess());

		const {
			description = '',
			note = '',
			amount = 0,
			createdAt = 0
		} = expense;

		const expenseData = {
			description,
			note,
			amount,
			createdAt
		}

		database.ref('expenses').push(expense).then(ref => {
			dispatch(addExpenseToUi({
				id: ref.key,
				...expenseData,
			}));
			dispatch(endSaveProcess());
		}).catch(error => {
			dispatch(errorSaving(error));
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