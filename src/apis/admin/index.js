import Req from "~/utils/request";

export const fetchAllOrdersOfCusomers = async token => {
  const response = await Req.GET('user/admin/orders');
  return response;
};

export const getOrderDetail = async (id, token) => {
  return await Req.GET(`/orders/${id}`);
};

export const updateOrderStatus = async (data, token) => {
  return await Req.PATCH(`/orders/update`,{
    id: data?.id,
    state: data?.state
  });
};

export const deleteOrder = async (data, token) => {
  return await Req.POST(`orders/delete`,{
    id: data?.id,
  });
};

export const updateProduct = async (data, token) => {
  return await Req.PUT(`product/update`,{
    data
  });
};

export const deleteProduct = async (data, token) => {
  return await Req.DELETE(`product/delete`,{
    data
  });
};