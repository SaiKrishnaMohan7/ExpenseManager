import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// ADD_EXPENSE Action
const addExpense = (
	{
	description = '',
	note = '',
	amount = 0,
	createdAt = 0
} = {}
) => {
	return {
		type: 'ADD_EXPENSE',
		expense: {
			id: uuid(),
			description,
			note,
			amount,
			createdAt
		}
	}
};

// REMOVE_EXPENSE
const removeExpense = (id) => {
	if(!id || typeof(id) !== 'string'){
		throw new Error('id should be defined and should be a string');
	}

	return {
		type: 'REMOVE_EXPENSE',
		id
	}
};

// Expenses Reducer
const expensesReducerDefault = [];
const expensesReducer = (state = expensesReducerDefault, action) => {
    switch (action.type) {
				case 'ADD_EXPENSE':
				// ... spread operator works like .concat()
					return [...state, action.expense];

				case 'REMOVE_EXPENSE':
					return state.filter((expenseObj) => {
						return expenseObj.id !== action.id;
					});

        default: return state;
    }
};

// Filters Reducer
const filtersReducerDefault = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};
const filtersReducer = (state = filtersReducerDefault, action) => {
    switch (action.type) {
        // case value:

        //     break;

        default: return state;
    }
};

// Store Creation
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);

store.subscribe(() => {
	console.log('Subscribed');
	console.log(store.getState());
});

// .dispatch() returns action obj so it can be assigned
const expOne = store.dispatch(addExpense({description: 'Rent', amount: 10000}));
const expTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300}));

store.dispatch(removeExpense(expOne.expense.id));

const demoState = {
    expenses: [{
        id: 'test',
        description: 'January Rent',
        note: 'Final Payment',
        amount: 58700,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};