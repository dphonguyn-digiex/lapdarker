import { createSelector } from 'reselect';
export const detailedDeviceState = state => state.detailedDevice?.data;
export const focusComponentState = state => state.focusComponent?.isFocus;

export const userState = state => state.user?.isLogin;
export const stateRequestAuth = state => state.user?.stateRequest;
export const dataUserState = state => state.user?.data;
export const textSearchState = state => state.filters?.search;
export const priorityState = state => state.filters?.priority;
export const tagState = state => state.filters?.tag;
export const devicesState = state => state.devices?.data;
export const ordersState = state => {
  let ordersTypes = {
    type0: state.orders.data.filter(order => order.state === 'WAIT_FOR_PAY'),
    type1: state.orders.data.filter(order => order.state.includes('WAIT_FOR_CONFIRM')),
    type2: state.orders.data.filter(order => order.state === 'PROCESSING'),
    type3: state.orders.data.filter(order => order.state === 'TRANSPORTING'),
    type4: state.orders.data.filter(order => order.state === 'DELIVERED')
  };
  return ordersTypes;
};
export const lastestOrder = state => state.orders.lastestOrder;
export const devicesFiltersState = createSelector(
  devicesState,
  textSearchState,
  priorityState,
  tagState,
  (listDevices, text, priority, tag) => {
    let filterDevices = listDevices.filter(devices =>
      tag.length > 0
        ? devices.name.toLowerCase().includes(text.toLowerCase()) &&
          devices.suit.filter(device => tag.indexOf(device) !== -1).length === tag.length
        : devices.name.toLowerCase().includes(text.toLowerCase())
    );
    if (priority === 'REMARKABLE') {
      return filterDevices;
    }
    if (priority === 'HIGH_TO_LOW') {
      return filterDevices.sort((a, b) => parseFloat(b.sale_price) - parseFloat(a.sale_price));
    }
    if (priority === 'LOW_TO_HIGH') {
      return filterDevices.sort((a, b) => parseFloat(a.sale_price) - parseFloat(b.sale_price));
    }
  }
);
