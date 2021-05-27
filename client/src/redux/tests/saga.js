import { takeLatest, takeLeading, call, put, select } from 'redux-saga/effects';
import { actionTypes, setTestsList, setCurrentTest, changeVideo } from './actions';
import {
  getTestsListRequest, getTestRequest,
  updateTestRequest, createTestRequest, deleteTestRequest,
  updateVideoRequest, createVideoRequest
} from 'utils/requests/tests';
import { selectCurrentTest, selectVideoById, selectTestsList } from './selectors';
import { toast } from 'react-toastify';


function* getTestsListSaga() {
  try {
    yield put(setTestsList({ loading: true }));
    const response = yield call(getTestsListRequest);
    yield put(setTestsList({ data: response.data.tests }))
    yield put(setTestsList({ loading: false }));
  } catch (e) {
    console.error('init user error', e);
  }
}

function* getCurrentTestSaga(action) {
  try {
    const { testId, userData = false } = action.payload;
    yield put(setCurrentTest({ loading: true }));
    const response = yield call(getTestRequest, testId, userData);
    const test = response.data.test;
    const videos = {};
    const videosList = []
    test.videos.forEach(video => {
      videos[video._id] = video;
      videosList.push(video._id);
    });

    yield put(setCurrentTest({ data: test, videos, videosList }));

    yield put(setCurrentTest({ loading: false }));
  } catch (e) {
    console.error('get current test error', e);
  }
}

function* updateTestSaga(action) {
  try {
    const data = yield select(selectCurrentTest);
    const { cb } = action.payload;
    const response = yield call(updateTestRequest, data.data);
    if (response.data.success) {
      cb(response.data.test._id);
      toast.success('Данные фильма изменены');
    } else {
      toast.error('Ошибка');
    }
  } catch (e) {
    console.error('update test error', e);
  }
}

function* createTestSaga(action) {
  try {
    const data = yield select(selectCurrentTest);
    const { cb } = action.payload;
    const response = yield call(createTestRequest, data.data);
    if (response.data.success) {
      yield call(cb, response.data.test._id);
      toast.success('Фильм создан');
    } else {
      toast.error('Ошибка');
    }
  } catch (e) {
    console.error('create test error', e);
  }
}

function* deleteTestSaga(action) {
  try {
    const response = yield call(deleteTestRequest, action.payload);
    if (response.data.success) {
      const tests = yield select(selectTestsList);
      yield put(setTestsList({ data: tests.data.filter(test => test._id !== action.payload) }));
      toast.success('Фильм удалён');
    } else {
      toast.error('Ошибка');
    }
  } catch (e) {
    console.error('delete test error', e);
  }
}

function* updateVideoSaga(action) {
  try {
    const { videoId } = action.payload;
    const test = yield select(selectCurrentTest);
    const video = yield select(selectVideoById(videoId));
    const response = yield call(updateVideoRequest, test.data._id, video);
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
    const test = yield select(selectCurrentTest);
    const video = yield select(selectVideoById(videoId));
    const requestVideo = {...video};
    delete requestVideo.isNew;
    const response = yield call(createVideoRequest, test.data._id, video);
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


const tests = function* () {
  yield takeLatest(actionTypes.GET_TESTS_LIST, getTestsListSaga);
  yield takeLeading(actionTypes.GET_CURRENT_TEST, getCurrentTestSaga);
  yield takeLeading(actionTypes.UPDATE_TEST, updateTestSaga);
  yield takeLeading(actionTypes.CREATE_TEST, createTestSaga);
  yield takeLeading(actionTypes.DELETE_TEST, deleteTestSaga);

  yield takeLeading(actionTypes.UPDATE_VIDEO, updateVideoSaga);
  yield takeLeading(actionTypes.CREATE_VIDEO, createVideoSaga);
}

export default tests;