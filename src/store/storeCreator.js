import thunk from 'redux-thunk';
import {
	createStore,
	combineReducers,
	applyMiddleware,
	compose
} from 'redux';

import expensesReducer from '../reducers/expensesReducer';
import filtersReducer from '../reducers/filtersReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const storeCreator = () => {
	// Store Creation
	const store = createStore(
		combineReducers({
		expenses: expensesReducer,
		filters: filtersReducer,
	}),
	composeEnhancers(applyMiddleware(thunk)));

	return store;
};

export default storeCreator;