// Expenses Reducer
const expensesReducerDefault = {
	error: false,
	saving: false,
	expenses: [],
};
const expensesReducer = (state = expensesReducerDefault, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
		// ... spread operator works like .concat()
		const expenses = [...state.expenses, action.expense];
			return {
				...state,
				expenses,
			};

		case 'REMOVE_EXPENSE':
			return state.expenses.filter(({ id }) => id !== action.id);

		case 'EDIT_EXPENSE':
			return state.expenses.map((expense) => {
				if(expense.id === action.id){
					// update expense obj with a new obj that has attrs updated with attrs from updates obj
					return { ...expense, ...action.updates};
				}else {
					return expense;
				}
			});

		case 'START_SAVE_PROCESS':
			return {
				...state,
				saving: true,
			};

		case 'END_SAVE_PROCESS':
			return {
				...state,
				saving: false,
			};

		case 'SAVE_ERROR':
			return {
				...state,
				error: true,
			};

		default:
			return state;
	}
};

export default expensesReducer;