import { all } from 'redux-saga/effects';
import auth from './auth/saga';
import movies from './movies/saga';
import player from './player/saga';

function* rootSaga() {
  yield all([
    auth(),
    movies(),
    player(),
  ])
}

export default rootSaga;