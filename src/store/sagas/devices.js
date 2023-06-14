import { takeLatest, call, put, all } from 'redux-saga/effects';
import * as actions from '../actions';
import * as apis from '../../apis/client';
function* fetchDevicesSaga(action) {
  try {
    const devices = yield call(apis.fetchDevices, action.payload);
    console.log('[Devices]:', devices.data);
    yield put(actions.getDevices.getDevicesSuccess(devices.data));
  } catch (error) {
    console.log('error:', error);
    yield put(actions.getDevices.getDevicesFailure(error));
  }
}

function* fetchDetailedDeviceSaga(action) {
  try {
    const device = yield call(apis.fetchDetailedDevice, action.payload);
    console.log('[Detailed device]:', device.data);
    yield put(actions.getDetailedDevice.getDetailedDeviceSuccess(device.data));
  } catch (error) {
    console.log('error', error);
    yield put(actions.getDetailedDevice.getDetailedDeviceFailure(error));
  }
}

export default function* devicesSaga() {
  yield all([
    takeLatest(actions.getDevices.getDevicesRequest, fetchDevicesSaga),
    takeLatest(actions.getDetailedDevice.getDetailedDeviceRequest, fetchDetailedDeviceSaga)
  ]);
}
