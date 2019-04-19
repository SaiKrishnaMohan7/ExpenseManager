const totalExpense = expenses => {
  let total = 0;
  const initialValue = 0
  if (expenses && expenses.length > 0) {
    total = expenses.reduce((acc, curr) => (acc + curr.amount), initialValue);
    return total;
  }
  return total;
}

export default totalExpense;