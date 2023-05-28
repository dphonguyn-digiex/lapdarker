import { getType, softDevices } from '../actions';
import { INIT_STATE } from '../constants';

export default function filtersReducer(state = INIT_STATE.filters, action) {
  switch (action.type) {
    case getType(softDevices.searchFilter):
      return {
        ...state,
        search: action.payload
      };
    case getType(softDevices.priorityFilter):
      return {
        ...state,
        priority: action.payload
      };
    case getType(softDevices.tagFilter):
      return {
        ...state,
        tag: action.payload
      };
    default:
      return state;
  }
}
