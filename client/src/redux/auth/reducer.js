import { actionTypes } from './actions';
import { getCookie } from 'utils/helpers/auth';

const baseState = {
  auth: {
    name: '',
    email: '',
    password: '',
    password1: '',
    password2: '',
    type: 'login',
    open: false,
  },
  user: null,
  token: getCookie('token'),
  isAuth: !!getCookie('token')
}

export const authReducer = (state = baseState, action) => {
  switch (action.type) {
    
    case actionTypes.SET_AUTH_DATA: {
      return {
        ...state,
        auth: action.payload
      }
    }

    case actionTypes.CHNAGE_AUTH_DATA: {
      return {
        ...state,
        auth: {
          ...state.auth,
          ...action.payload
        }
      }
    }

    case actionTypes.CLEAR_AUTH_DATA: {
      return {
        ...state,
        auth: baseState.auth
      }
    }

    case actionTypes.SET_AUTH: {
      if (action.payload.auth) delete action.payload.auth;
      return {
        ...state,
        ...action.payload
      }
    }
  
    default: {
      return state
    }
  }
}