const defaultState = [];

export default function reducer(state = defaultState, action) {

  let categoryID, categoryExpenses, updatedExpenses, updatedState;

  const {type, payload} = action;

  switch (type) {
    case 'EXPENSE_CREATE':
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];
      updatedExpenses = [...categoryExpenses, payload];
    
      return {...state, [categoryID]: updatedExpenses };

    case 'EXPENSE_UPDATE':
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];
      updatedExpenses = categoryExpenses.map(expense => expense.id === payload.id ? payload : expense);

      return {...state, [categoryID]: updatedExpenses };
      
    
    case 'EXPENSE_DELETE':
      categoryID = payload.categoryID;
      categoryExpenses = state[categoryID];
      updatedExpenses = categoryExpenses.filter(expense => expense.id !== payload.id);
      
      return {...state, [categoryID]: updatedExpenses };

    default: return state;
    
  }
}