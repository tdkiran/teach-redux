export const ADD = 'ADD';
export const CLEAR = 'CLEAR';
export const UPDATE_CURRENT_ITEM = 'UPDATE_CURRENT_ITEM';

export const createAdd = itemToBeAdded => ({
    type: 'DELAY_ADD',
    data: itemToBeAdded
});

export const createClear = () => ({
    type: CLEAR,
});

export const updateCurrentItem = (text) => ({
    type: UPDATE_CURRENT_ITEM,
    data: text
});