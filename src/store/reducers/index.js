import { combineReducers } from 'redux';
import devices from './devices';
import detailedDevice from './detailedDevice';
import user from './user';
import focusComponent from './focusComponent';
import filters from './filters';
import orders from './orders';
export default combineReducers({
  devices,
  detailedDevice,
  filters,
  orders,
  focusComponent,
  user
});
