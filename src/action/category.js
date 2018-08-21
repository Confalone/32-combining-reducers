import uuid from 'uuid/v1';

export const createCategory = ({name, budget}) => ({
  type: 'CATEGORY_CREATE',
  payload: {
    name,
    budget,
    id: uuid(),
    timestamp: new Date(),
  },
});

export const updateCategory = (category) => ({
  type: 'CATEGORY_UPDATE',
  payload: category,
});

export const destroyCategory = (category) => ({
  type: 'CATEGORY_DESTROY',
  payload: category,
});