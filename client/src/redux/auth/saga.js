import { takeLatest, takeLeading, call, put, select } from 'redux-saga/effects';
import { actionTypes, changeAuthData, setAuth } from './actions';
import { selectAuthData } from './selectors';
import { loginRequest, googleAuthRequest, facebookAuthRequest, registrationRequest, activationRequest } from 'utils/requests/auth';
import { authenticate, getCookie, getLocalStorage, logout } from 'utils/helpers/auth';
import { toast } from 'react-toastify';


function* initUserSaga() {
  try {
    const token = getCookie('token')
    const user = getLocalStorage('user');

    if (token && user) {
      yield put(setAuth({ token, user: {...user, isAdmin: user.roles.includes('ADMIN')}, isAuth: true }));
    } else {
      yield put(setAuth({ isAuth: false }));
    }

  } catch (e) {
    console.error('init user error', e);
  }
}

function* loginSaga() {
  try {
    const { email, password } = yield select(selectAuthData);
    if (email && password) {
      const res = yield call(loginRequest, { email, password });
      if (res.data.success && res.data.user.verified) {
        yield call(authenticate, res);
        const user = res.data.user
        yield put(setAuth({ token: res.data.token, user: {...user, isAdmin: user.roles.includes('ADMIN')}, isAuth: true }));
      } else if (res.data.success && !res.data.user.verified) { // если пользователь не подтвердил почту
        yield put(changeAuthData({ type: 'activation' }));
      }
      else {
        yield put(changeAuthData({ password: '' }));
        toast.error(res.err);
      }
  } else {
    toast.error('Заполните все поля');
  }
  } catch (e) {
    console.error('login error', e);
  }
}

function* registartionSaga() {
  try {
    const { name, email, password1, password2 } = yield select(selectAuthData);
    if (name && email && password1 && password2 ) {
      if (password1 === password2) {
        const res = yield call(registrationRequest, {name, email, password1, password: password1});
        if (res.data.success) {
          // yield put(changeAuthData({ type: 'activation' }));
          yield call(authenticate, res);
          yield put(setAuth({ token: res.data.token, user: res.data.user, isAuth: true }));
        } else {
          toast.error(res.err);
        }

      } else {
        toast.error('Пароли не совпадают')
      }
    } else {
      toast.error('Заполните все поля');
    }
  } catch (e) {
    console.error('registration error', e);
  }
}

function* activationSaga() {
  try {
    const { email, code } = yield select(selectAuthData);
    console.log(email, code);
    if (code) {
      if (code.length === 4) {
        const res = yield call(activationRequest, email, code);
        if (res.data.success) {
          // yield call(authenticate, res);
          // yield put(setAuth({ token: res.data.token, user: res.data.user, isAuth: true }));
        } else {
          toast.error(res.err);
        }
      } else {
        toast.error('Введите правильный код');
      }
    } else {
      toast.error('Введите код подтверждения');
    }
  } catch(e) {
    console.error('activation error', e);
  }
}

function* logoutSaga() {
  try {
    yield call(logout);
    yield put(setAuth({ token: '', user: null, isAuth: false }));
  } catch (e) {
    console.error('logout error', e);
  }
}

const auth = function*() {
  yield takeLeading(actionTypes.INIT_USER, initUserSaga);
  yield takeLeading(actionTypes.LOGIN, loginSaga);
  yield takeLeading(actionTypes.REGISTRATION, registartionSaga);
  yield takeLeading(actionTypes.LOGOUT, logoutSaga)
}

export default auth;