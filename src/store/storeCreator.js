import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer'

const storeCreator = () => {
	// Store Creation
	const store = createStore(
		combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer
	}));

	return store;
};

export default storeCreator;