import moment from 'moment';

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
	return expenses.filter((expense) => {
		const createdAt = moment(expense.createdAt);
		const startDateMatch = startDate ? startDate.isSameOrBefore(createdAt, 'day') : true;
		const endDateMatch = endDate ? endDate.isSameOrAfter(createdAt, 'day') : true;
		const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

		return startDateMatch && endDateMatch && textMatch;
	}).sort((expenseOne, expenseTwo) => {
		switch (sortBy) {
			case 'date':
				return expenseOne.createdAt < expenseTwo.createdAt ? 1 : -1;
			
			case 'amount':
				return expenseOne.amount < expenseTwo.amount ? 1 : -1;
			
			default:
				break;
		}
	});
};

export default getVisibleExpenses;