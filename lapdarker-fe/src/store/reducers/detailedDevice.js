import { getType, getDetailedDevice } from '../actions';
import { INIT_STATE } from '../constants';

export default function detailedDeviceReducer(state = INIT_STATE.detailed_device, action) {
  switch (action.type) {
    case getType(getDetailedDevice.getDetailedDeviceRequest):
      return {
        ...state,
        isLoading: true
      };
    case getType(getDetailedDevice.getDetailedDeviceSuccess):
      return {
        ...state,
        isLoading: false,
        data: action.payload
      };

    case getType(getDetailedDevice.getDetailedDeviceFailure):
      return {
        ...state,
        data: {},
        isLoading: false
      };
    default:
      return state;
  }
}
