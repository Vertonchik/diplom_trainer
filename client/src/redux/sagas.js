import { all } from 'redux-saga/effects';
import auth from './auth/saga';
import tests from './tests/saga';
import player from './player/saga';

function* rootSaga() {
  yield all([
    auth(),
    tests(),
    player(),
  ])
}

export default rootSaga;