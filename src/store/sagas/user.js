import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from '../actions';
import * as apis from '../../apis';

function* postInfoLoginAccountSaga(action) {
  try {
    const key = yield call(apis.postInfoLogin, action.payload);
    yield put(actions.postInfoLogin.postInfoLoginAccountSuccess(key.data));
  } catch (error) {
    console.log('error', error);
    yield put(actions.postInfoLogin.postInfoLoginAccountFailure(error));
  }
}

function* postInfoLoginPasswordSaga(action) {
  try {
    const user = yield call(apis.postInfoLogin, action.payload);
    console.log('user:', user.data.user);
    localStorage.setItem('user', JSON.stringify(user.data.user));
    localStorage.setItem('token', 'Bearer ' + user.data.token);
    yield put(actions.postInfoLogin.postInfoLoginPasswordSuccess(user));
  } catch (error) {
    console.log(error);
    yield put(actions.postInfoLogin.postInfoLoginAccountFailure('WRONG_PASSWORD'));
  }
}

function* postLogoutSaga() {
  try {
    const userInfo = yield call(apis.postLogout, localStorage.getItem('token'));
    console.log('request logout: ', userInfo);
  } catch (error) {
    yield call(handleErrorSaga, error, 'POST_LOGOUT');
  }
}

function* handleErrorSaga(error, type) {
  switch (error.response.data) {
    case 'EXPIRED_TOKEN':
      yield call(refreshAccessTokenSaga);
      yield call(postAgainClientRequestSaga, type);
      break;
    default:
      return;
  }
}

function* refreshAccessTokenSaga() {
  const dataUser = JSON.parse(localStorage.getItem('user'));
  try {
    const new_token = yield call(apis.refreshAccessToken, dataUser._id);
    localStorage.setItem('token', new_token);
  } catch (error) {
    console.log(error);
  }
}

function* postAgainClientRequestSaga(type) {
  switch (type) {
    case 'POST_LOGOUT':
      console.log('logout again');
      yield call(postLogoutSaga);
      break;
    default:
      break;
  }
}

export default function* userSaga() {
  yield all([
    takeLatest(actions.postInfoLogin.postInfoLoginAccountRequest, postInfoLoginAccountSaga),
    takeLatest(actions.postInfoLogin.postInfoLoginPasswordRequest, postInfoLoginPasswordSaga),
    takeLatest(actions.postLogout.postLogoutRequest, postLogoutSaga)
  ]);
}
