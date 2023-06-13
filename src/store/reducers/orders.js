import { getType, ordersActions } from '../actions';
import { INIT_STATE } from '../constants';
export default function ordersReducer(state = INIT_STATE.orders, action) {
  switch (action.type) {
    case getType(ordersActions.postOrdersRequest):
      return {
        ...state,
        isLoading: true
      };
    case getType(ordersActions.postOrdersSuccess):
      return {
        ...state,
        lastestOrder: action.payload,
        isLoading: false
      };
    case getType(ordersActions.postOrdersFailure):
      return {
        ...state,
        state: action.payload,
        isLoading: false
      };
    case getType(ordersActions.updateOrdersRequest):
      return {
        ...state,
        isLoading: true
      };
    case getType(ordersActions.updateOrdersSuccess):
      return {
        ...state,
        isLoading: false,
        state: action.payload
      };
    case getType(ordersActions.updateOrdersFailure):
      return {
        ...state,
        isLoading: false,
        state: action.payload
      };
    case getType(ordersActions.fetchAllOrdersRequest):
      return {
        ...state,
        isLoading: true,
        state: 'FETCH_ALL_ORDERS'
      };
    case getType(ordersActions.fetchAllOrdersSuccess):
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case getType(ordersActions.fetchAllOrdersFailure):
      return {
        ...state,
        data: []
      };
    default:
      return state;
  }
}
