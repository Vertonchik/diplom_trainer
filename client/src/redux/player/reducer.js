import { actionTypes } from './actions';
import { v1 as uuid } from 'uuid';

const baseState = {
  open: false,
  video: undefined,
}

export const playerReducer = (state = baseState, action) => {
  switch (action.type) {
    
    case actionTypes.SET_PLAYER_OPEN: {
      return {
        ...state,
        open: action.payload
      }
    }

    case actionTypes.SET_PLAYER_VIDEO: {
      return {
        ...state,
        video: action.payload
      }
    }
    
    default: {
      return state
    }
  }
}