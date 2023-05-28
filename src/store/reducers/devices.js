import { getType, getDevices } from '../actions';
import { INIT_STATE } from '../constants';

export default function devicesReducer(state = INIT_STATE.devices, action) {
  switch (action.type) {
    case getType(getDevices.getDevicesRequest):
      return {
        ...state,
        isLoading: true
      };
    case getType(getDevices.getDevicesSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };
    case getType(getDevices.getDevicesFailure):
      return {
        ...state,
        data: [],
        isLoading: false
      };
    default:
      return state;
  }
}
