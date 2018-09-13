import uuid from 'uuid';

// ADD_EXPENSE
export const addExpense = (
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
export const removeExpense = (id) => {
	if(!id || typeof(id) !== 'string'){
		throw new Error('id should be defined and should be a string');
	}

	return {
		type: 'REMOVE_EXPENSE',
		id
	}
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => {
	return {
		type: 'EDIT_EXPENSE',
		id,
		updates
	}
};