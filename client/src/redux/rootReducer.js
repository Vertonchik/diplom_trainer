import { combineReducers } from 'redux';

import { authReducer as auth } from './auth/reducer';
import { testsReducer as tests } from './tests/reducer';
import { playerReducer as player } from './player/reducer';

export const rootReducer = combineReducers({
  auth,
  tests,
  player,
});