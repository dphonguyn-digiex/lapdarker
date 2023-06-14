import Req from '~/utils/request';

export const fetchAllOrdersOfCusomers = async () => {
  const response = await Req.GET('user/admin/orders');
  return response;
};

export const getOrderDetail = async id => {
  return await Req.GET(`/orders/${id}`);
};

export const updateOrderStatus = async data => {
  return await Req.PATCH(`/orders/update`, {
    id: data?.id,
    state: data?.state,
  });
};

export const deleteOrder = async data => {
  return await Req.POST(`orders/delete`, {
    id: data?.id,
  });
};

export const updateProduct = async data => {
  return await Req.PUT(`product/update`, {
    data,
  });
};

export const deleteProduct = async data => {
  return await Req.DELETE(`product/delete`, {
    data,
  });
};
