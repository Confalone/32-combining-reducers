import uuid from 'uuid/v1';


const defaultState = [];

export default function reducer(state = defaultState, action) {

  const {type, payload} = action;

  switch (type) {
    case 'CATEGORY_CREATE':
      // payload.id = uuid();
    
      return [...state, payload];

    case 'CATEGORY_UPDATE':
      return state.map(category => category.id === payload.id ? payload : category);
    
    case 'CATEGORY_DESTROY':
      return state.filter(category => category.id !== payload.id);

    default: return state;
  }
}