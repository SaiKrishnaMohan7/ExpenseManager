const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
	return expenses.filter((expense) => {
		const startDateMatch = typeof(startDate) !== 'number' || expense.createdAt >= startDate;
		const endDateMatch = typeof(endDate) !== 'number' || expense.createdAt <= endDate;
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