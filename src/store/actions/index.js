import { createActions } from 'redux-actions';

export const getType = reduxAction => {
  return reduxAction().type;
};

export const getDevices = createActions({
  getDevicesRequest: payload => payload,
  getDevicesSuccess: payload => payload,
  getDevicesFailure: err => err
});

export const getDetailedDevice = createActions({
  getDetailedDeviceRequest: payload => payload,
  getDetailedDeviceSuccess: payload => payload,
  getDetailedDeviceFailure: err => err
});

export const focusOnComponent = createActions({
  setFocusOnComponent: payload => payload
});

export const postInfoLogin = createActions({
  postInfoLoginAccountRequest: payload => payload,
  postInfoLoginAccountSuccess: payload => payload,
  postInfoLoginAccountFailure: err => err,
  postInfoLoginAccountCancelled: payload => payload,
  existAccountRequest: payload => payload,
  postInfoLoginPasswordRequest: payload => payload,
  postInfoLoginPasswordSuccess: payload => payload,
  postInfoLoginPasswordFailure: payload => payload
});

export const postLogout = createActions({
  postLogoutRequest: undefined,
  postLogoutSuccess: payload => payload,
  postLogoutFailure: payload => payload
});

export const postAccessToken = createActions({
  postAccessTokenRequest: undefined
});

export const softDevices = createActions({
  searchFilter: payload => payload,
  priorityFilter: payload => payload,
  tagFilter: payload => payload
});

export const handleErrorResponse = createActions({
  handleErrorRespondRequest: payload => payload
});

export const postRequestAgain = createActions({
  postAgainClientRequest: payload => payload
});

export const ordersActions = createActions({
  postOrdersRequest: undefined,
  postOrdersSuccess: payload => payload,
  postOrdersFailure: payload => payload,
  fetchOrdersFollowTypeRequest: payload => payload,
  fetchOrdersFollowTypeSuccess: payload => payload,
  fetchOrdersFollowTypeFailure: payload => payload,
  fetchAllOrdersRequest: payload => payload,
  fetchAllOrdersSuccess: payload => payload,
  fetchAllOrdersFailure: payload => payload,
  updateOrdersRequest: payload => payload,
  updateOrdersSuccess: payload => payload,
  updateOrdersFailure: payload => payload
});
