import { CLEAR, ADD, UPDATE_CURRENT_ITEM } from './actions';

export function todos(state = [], action) {
    switch (action.type) {
      case ADD: {
        const newState = {
            currentItem: '',
            list: state.list.concat([action.data])
        }
        return newState
      }

      case CLEAR: {
        return {
          ...state,
          currentItem:  ''
        }
      }

      case UPDATE_CURRENT_ITEM: {
          return {
            ...state,
            currentItem: action.data
          }
      }

      default:
        return state
    }
}