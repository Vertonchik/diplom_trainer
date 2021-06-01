import { takeLatest, takeLeading, call, put, select } from 'redux-saga/effects';
import { actionTypes, setTestsList, setCurrentTest, changeQuestion } from './actions';
import {
  getTestsListRequest, getTestRequest,
  updateTestRequest, createTestRequest, deleteTestRequest,
  updateQuestionRequest, createQuestionRequest
} from 'utils/requests/tests';
import { selectCurrentTest, selectQuestionById, selectTestsList } from './selectors';
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
    const questions = {};
    const questionsList = []
    test.questions.forEach(question => {
      questions[question._id] = question;
      questionsList.push(question._id);
    });

    yield put(setCurrentTest({ data: test, questions, adminQuestions: questions, questionsList }));

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
      toast.success('Данные теста изменены');
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
      toast.success('Тест создан');
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
      toast.success('Тест удалён');
    } else {
      toast.error('Ошибка');
    }
  } catch (e) {
    console.error('delete test error', e);
  }
}

function* updateQuestionSaga(action) {
  try {
    const { questionId } = action.payload;
    const test = yield select(selectCurrentTest);
    const question = yield select(selectQuestionById(questionId));
    const response = yield call(updateQuestionRequest, test.data._id, question);
    if (response.data.success) {
      toast.success('Данные серии изменены');
    } else {
      toast.error('Ошибка');
    }
  } catch (e) {
    console.error('update question error', e);
  }
}

function* createQuestionSaga(action) {
  try {
    const { questionId } = action.payload;
    const test = yield select(selectCurrentTest);
    const question = yield select(selectQuestionById(questionId));
    const requestQuestion = {...question};
    delete requestQuestion.isNew;
    const response = yield call(createQuestionRequest, test.data._id, question);
    if (response.data.success) {
      console.log('question created');
      yield put(changeQuestion({ questionId, data: { _id: response.data.question._id, isNew: false } }));
      toast.success('Вопрос создан');
    } else {
      toast.error('Ошибка');
    }
  } catch (e) {
    console.error('createquestion error', e);
  }
}


const tests = function* () {
  yield takeLatest(actionTypes.GET_TESTS_LIST, getTestsListSaga);
  yield takeLeading(actionTypes.GET_CURRENT_TEST, getCurrentTestSaga);
  yield takeLeading(actionTypes.UPDATE_TEST, updateTestSaga);
  yield takeLeading(actionTypes.CREATE_TEST, createTestSaga);
  yield takeLeading(actionTypes.DELETE_TEST, deleteTestSaga);

  yield takeLeading(actionTypes.UPDATE_QUESTION, updateQuestionSaga);
  yield takeLeading(actionTypes.CREATE_QUESTION, createQuestionSaga);
}

export default tests;