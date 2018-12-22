// Expenses Reducer
const expensesReducerDefault = [];
const expensesReducer = (state = expensesReducerDefault, action) => {
	switch (action.type) {
		case 'ADD_EXPENSE':
		// ... spread operator works like .concat()
			return [...state, action.expense];

		case 'REMOVE_EXPENSE':
			return state.filter(({ id }) => id !== action.id);

		case 'EDIT_EXPENSE':
			return state.map((expense) => {
				if(expense.id === action.id){
					// update expense obj with a new obj that has attrs updated with attrs from updates obj
					return { ...expense, ...action.updates};
				}else {
					return expense;
				}
			});

		default:
			return state;
	}
};

export default expensesReducer;