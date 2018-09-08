import uuid from 'uuid';
import { store } from './store/storeCreator';


store.subscribe(() => {
	const state = store.getState();
	const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
	console.log(visibleExpenses);
});

// .dispatch() returns action obj so it can be assigned
const expOne = store.dispatch(addExpense({description: 'Rent', amount: 10000, createdAt: 1000}));
const expTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}));

// store.dispatch(removeExpense(expOne.expense.id));
// store.dispatch(editExpense(expTwo.expense.id, {amount: 400}));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setEndDate(175));

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