import { takeLatest, takeLeading, call, put, select } from 'redux-saga/effects';
import { actionTypes, setMoviesList, setCurrentMovie, changeVideo } from './actions';
import {
  getMoviesListRequest, getMovieRequest,
  updateMovieRequest, createMovieRequest, deleteMovieRequest,
  updateVideoRequest, createVideoRequest
} from 'utils/requests/movies';
import { selectCurrentMovie, selectVideoById, selectMoviesList } from './selectors';
import { toast } from 'react-toastify';


function* getMoviesListSaga() {
  try {
    yield put(setMoviesList({ loading: true }));
    const response = yield call(getMoviesListRequest);
    yield put(setMoviesList({ data: response.data.movies }))
    yield put(setMoviesList({ loading: false }));
  } catch (e) {
    console.error('init user error', e);
  }
}

function* getCurrentMovieSaga(action) {
  try {
    const { movieId, userData = false } = action.payload;
    yield put(setCurrentMovie({ loading: true }));
    const response = yield call(getMovieRequest, movieId, userData);
    const movie = response.data.movie;
    const videos = {};
    const videosList = []
    movie.videos.forEach(video => {
      videos[video._id] = video;
      videosList.push(video._id);
    });

    yield put(setCurrentMovie({ data: movie, videos, videosList }));

    yield put(setCurrentMovie({ loading: false }));
  } catch (e) {
    console.error('get current movie error', e);
  }
}

function* updateMovieSaga(action) {
  try {
    const data = yield select(selectCurrentMovie);
    const { cb } = action.payload;
    const response = yield call(updateMovieRequest, data.data);
    if (response.data.success) {
      cb(response.data.movie._id);
      toast.success('Данные фильма изменены');
    } else {
      toast.error('Ошибка');
    }
  } catch (e) {
    console.error('update movie error', e);
  }
}

function* createMovieSaga(action) {
  try {
    const data = yield select(selectCurrentMovie);
    const { cb } = action.payload;
    const response = yield call(createMovieRequest, data.data);
    if (response.data.success) {
      yield call(cb, response.data.movie._id);
      toast.success('Фильм создан');
    } else {
      toast.error('Ошибка');
    }
  } catch (e) {
    console.error('create movie error', e);
  }
}

function* deleteMovieSaga(action) {
  try {
    const response = yield call(deleteMovieRequest, action.payload);
    if (response.data.success) {
      const movies = yield select(selectMoviesList);
      yield put(setMoviesList({ data: movies.data.filter(movie => movie._id !== action.payload) }));
      toast.success('Фильм удалён');
    } else {
      toast.error('Ошибка');
    }
  } catch (e) {
    console.error('delete movie error', e);
  }
}

function* updateVideoSaga(action) {
  try {
    const { videoId } = action.payload;
    const movie = yield select(selectCurrentMovie);
    const video = yield select(selectVideoById(videoId));
    const response = yield call(updateVideoRequest, movie.data._id, video);
    if (response.data.success) {
      toast.success('Данные серии изменены');
    } else {
      toast.error('Ошибка');
    }
  } catch (e) {
    console.error('update video error', e);
  }
}

function* createVideoSaga(action) {
  try {
    const { videoId } = action.payload;
    const movie = yield select(selectCurrentMovie);
    const video = yield select(selectVideoById(videoId));
    const requestVideo = {...video};
    delete requestVideo.isNew;
    const response = yield call(createVideoRequest, movie.data._id, video);
    if (response.data.success) {
      console.log('video created');
      yield put(changeVideo({ videoId, data: { isNew: false } }));
      toast.success('Видео создано');
    } else {
      toast.error('Ошибка');
    }
  } catch (e) {
    console.error('createvideo error', e);
  }
}


const movies = function* () {
  yield takeLatest(actionTypes.GET_MOVIES_LIST, getMoviesListSaga);
  yield takeLeading(actionTypes.GET_CURRENT_MOVIE, getCurrentMovieSaga);
  yield takeLeading(actionTypes.UPDATE_MOVIE, updateMovieSaga);
  yield takeLeading(actionTypes.CREATE_MOVIE, createMovieSaga);
  yield takeLeading(actionTypes.DELETE_MOVIE, deleteMovieSaga);

  yield takeLeading(actionTypes.UPDATE_VIDEO, updateVideoSaga);
  yield takeLeading(actionTypes.CREATE_VIDEO, createVideoSaga);
}

export default movies;