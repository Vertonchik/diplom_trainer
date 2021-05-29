import { actionTypes } from './actions';
import { v1 as uuid } from 'uuid';

const baseState = {
  open: false,
  question: undefined,
}

export const playerReducer = (state = baseState, action) => {
  switch (action.type) {
    
    case actionTypes.SET_PLAYER_OPEN: {
      return {
        ...state,
        open: action.payload
      }
    }

    case actionTypes.SET_PLAYER_QUESTION: {
      return {
        ...state,
        question: action.payload
      }
    }
    
    default: {
      return state
    }
  }
}