import { all } from 'redux-saga/effects';
import auth from './auth/saga';
import tests from './tests/saga';

function* rootSaga() {
  yield all([
    auth(),
    tests(),
  ])
}

export default rootSaga;