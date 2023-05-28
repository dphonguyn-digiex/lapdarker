import { INIT_STATE } from '../constants';
import { getType, postInfoLogin, postLogout, postAccessToken } from '../actions';

export default function userReducer(state = INIT_STATE.user, action) {
  switch (action.type) {
    // todo: posted account
    case getType(postInfoLogin.postInfoLoginAccountRequest):
      return {
        ...state,
        isLoading: true
      };
    case getType(postInfoLogin.postInfoLoginAccountSuccess):
      return {
        ...state,
        stateRequest: action.payload
      };
    case getType(postInfoLogin.postInfoLoginAccountFailure):
      return {
        stateRequest: action.payload,
        isLoading: false,
        isLogin: false,
        data: []
      };
    case getType(postInfoLogin.postInfoLoginAccountCancelled):
      return {
        stateRequest: '',
        isLoading: false,
        isLogin: false,
        data: []
      };
    case getType(postInfoLogin.existAccountRequest):
      return {
        ...state,
        stateRequest: action.payload
      };

    // todo: Posted password
    case getType(postInfoLogin.postInfoLoginPasswordRequest):
      return {
        ...state
      };
    case getType(postInfoLogin.postInfoLoginPasswordSuccess):
      return {
        stateRequest: 'LOGIN_SUCCESS',
        isLogin: true,
        isLoading: false,
        data: action.payload
      };
    case getType(postInfoLogin.postInfoLoginPasswordFailure):
      return {
        stateRequest: 'LOGIN_FAILURE',
        isLogin: false,
        isLoading: false,
        data: []
      };

    // todo: logout
    case getType(postLogout.postLogoutRequest):
      return {
        ...state,
        stateRequest: 'REQUEST_LOGOUT'
      };
    case getType(postLogout.postLogoutSuccess):
      return {
        stateRequest: action.payload,
        isLoading: false,
        isLogin: false,
        data: []
      };
    case getType(postLogout.postLogoutFailure):
      return {
        stateRequest: '',
        isLoading: false,
        isLogin: false,
        data: []
      };

    // todo: yeu cau lay access token moi
    case getType(postAccessToken.postAccessTokenRequest):
      return {
        ...state,
        stateRequest: 'GET_NEW_ACCESS_TOKEN'
      };
    default:
      return state;
  }
}
