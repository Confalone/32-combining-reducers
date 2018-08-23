import uuid from 'uuid/v1';

export const expenseCreate = ({name, price, categoryID}) => ({
  type: 'EXPENSE_CREATE',
  payload: {
    name,
    price,
    categoryID,
    id: uuid(),
    timestamp: new Date(),
  },
});

export const updateExpense = (expense) => ({
  type: 'EXPENSE_UPDATE',
  payload: expense,
});

export const deleteExpense = (expense) => ({
  type: 'EXPENSE_DELETE',
  payload: expense,
});