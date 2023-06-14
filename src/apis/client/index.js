import Req from '~/utils/request';

export const fetchLaptops = async (search, field, ascSort) => {
  const queryObj = new URLSearchParams({
    search,
    field,
    ascSort,
  });

  const response = await Req.GET('/products', { params: queryObj });
  if (response) {
    return response;
  } else return false;
};

export const fetchDevices = async (type, search = '', field = '', ascSort = '') => {
  const queryObj = new URLSearchParams({
    search,
    field,
    ascSort,
  });
  const response = await Req.GET(`/product/${type}`, { params: queryObj });
  if (response) {
    return response;
  } else return false;
};

export const fetchDeviceDetail = async (type, id) => {
  const response = await Req.GET(`/product/${type}/${id}`);
  if (response) {
    return response;
  } else return false;
};

export const fetchDetailedDevice = async path => {
  const response = await Req.GET(`/${path}`);
  if (response) {
    return response;
  } else return false;
};

export const fetchOrdersFollowType = async (order, token) => {
  const response = await Req.GET(`/orders/get?type=${order}`);
  if (response) {
    return response;
  } else return false;
};

export const fetchAllOrders = async token => {
  const response = await Req.GET('/orders/get-all');
  if (response) {
    return response;
  } else return false;
};

export const postOrders = async data => await Req.POST('/orders/post', data);

export const updateOrders = async (data, token) => {
  const response = await Req.PATCH('/orders/update', data);
  if (response) {
    return response;
  } else return false;
};

export const postInfoLogin = async info => await Req.POST('/user/post-login', info);

export const postLogout = async token => {
  return await Req.POST('/user/logout');
};

export const refreshAccessToken = async id => {
  return await Req.POST('/user/refresh-access-token', { id: id });
};
