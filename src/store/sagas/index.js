import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as apis from "../../apis/client";

function* fetchDevicesSaga(action) {
  try {
    const devices = yield call(apis.fetchDevices, action.payload);
    console.log("[Devices]:", devices.data);
    yield put(actions.getDevices.getDevicesSuccess(devices.data));
  } catch (error) {
    console.log("error:", error);
    yield put(actions.getDevices.getDevicesFailure(error));
  }
}

function* fetchDetailedDeviceSaga(action) {
  try {
    const device = yield call(apis.fetchDetailedDevice, action.payload);
    console.log("[Detailed device]:", device.data);
    yield put(actions.getDetailedDevice.getDetailedDeviceSuccess(device.data));
  } catch (error) {
    console.log("error", error);
    yield put(actions.getDetailedDevice.getDetailedDeviceFailure(error));
  }
}

function* fetchOrdersFollowTypeSaga(action) {
  try {
    const orders = yield call(
      apis.fetchOrdersFollowType,
      action.payload,
      localStorage.getItem("token")
    );
    console.log(orders);
  } catch (error) {
    console.log(error);
  }
}

function* postOrdersSaga(action) {
  try {
    const _order = yield call(apis.postOrders, action.payload);
    console.log(_order.data);
    yield put(actions.ordersActions.postOrdersSuccess(_order.data));
  } catch (error) {
    console.log("error", error);
    yield put(actions.ordersActions.postOrdersFailure(error));
  }
}

function* updateOrdersSaga(action) {
  try {
    const updatedOrders = yield call(
      apis.updateOrders,
      action.payload,
      localStorage.getItem("token")
    );
    console.log(updatedOrders);
    yield put(actions.ordersActions.updateOrdersSuccess(updatedOrders));
  } catch (error) {
    console.log("error", error);
    yield put(actions.ordersActions.updateOrdersFailure(error));
  }
}

function* postInfoLoginAccountSaga(action) {
  try {
    const key = yield call(apis.postInfoLogin, action.payload);
    yield put(actions.postInfoLogin.postInfoLoginAccountSuccess(key.data));
  } catch (error) {
    console.log("error", error);
    yield put(actions.postInfoLogin.postInfoLoginAccountFailure(error));
  }
}

function* postInfoLoginPasswordSaga(action) {
  try {
    const user = yield call(apis.postInfoLogin, action.payload);
    console.log("user:", user.data.user);
    localStorage.setItem("user", JSON.stringify(user.data.user));
    localStorage.setItem("token", user.data.token);
    yield put(actions.postInfoLogin.postInfoLoginPasswordSuccess(user));
  } catch (error) {
    console.log(error);
    yield put(
      actions.postInfoLogin.postInfoLoginAccountFailure("WRONG_PASSWORD")
    );
  }
}

function* postLogoutSaga() {
  try {
    // const userInfo = yield call(apis.postLogout, localStorage.getItem('token'));
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    yield put(actions.postLogout.postLogoutSuccess("LOGOUT_SUCCESS"));
    // console.log('request logout: ', userInfo);
  } catch (error) {
    yield call(handleErrorSaga, error, "POST_LOGOUT");
  }
}

function* handleErrorSaga(error, type) {
  switch (error.response.data) {
    case "EXPIRED_TOKEN":
      yield call(refreshAccessTokenSaga);
      yield call(postAgainClientRequestSaga, type);
      break;
    default:
      return;
  }
}

function* refreshAccessTokenSaga() {
  const dataUser = JSON.parse(localStorage.getItem("user"));
  try {
    const new_token = yield call(apis.refreshAccessToken, dataUser._id);
    localStorage.setItem("token", new_token);
  } catch (error) {
    console.log(error);
  }
}

function* postAgainClientRequestSaga(type) {
  switch (type) {
    case "POST_LOGOUT":
      console.log("logout again");
      yield call(postLogoutSaga);
      break;
    default:
      break;
  }
}

function* fetchAllOrdersSaga() {
  try {
    const orders = yield call(apis.fetchAllOrders, localStorage.getItem("token"));
    yield put(actions.ordersActions.fetchAllOrdersSuccess(orders.data));
  } catch (error) {
    console.error(error);
    yield put(actions.ordersActions.fetchAllOrdersFailure(error));
  }
}

function* mySaga() {
  yield takeLatest(actions.getDevices.getDevicesRequest, fetchDevicesSaga);
  yield takeLatest(actions.getDetailedDevice.getDetailedDeviceRequest,fetchDetailedDeviceSaga);
  yield takeLatest(actions.postInfoLogin.postInfoLoginAccountRequest,postInfoLoginAccountSaga);
  yield takeLatest(actions.postInfoLogin.postInfoLoginPasswordRequest,postInfoLoginPasswordSaga);
  yield takeLatest(actions.postLogout.postLogoutRequest, postLogoutSaga);
  yield takeLatest(actions.ordersActions.postOrdersRequest, postOrdersSaga);
  yield takeLatest(actions.ordersActions.fetchOrdersFollowTypeRequest,fetchOrdersFollowTypeSaga);
  yield takeLatest(actions.ordersActions.fetchAllOrdersRequest,fetchAllOrdersSaga);
  yield takeLatest(actions.ordersActions.updateOrdersRequest, updateOrdersSaga);
}

export default mySaga;
