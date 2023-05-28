export const INIT_STATE = {
  devices: {
    isLoading: false,
    data: []
  },
  detailed_device: {
    isLoading: false,
    data: {}
  },
  focus_component: {
    isFocus: false
  },
  filters: {
    search: '',
    priority: 'REMARKABLE',
    tag: []
  },
  user: {
    // tải lần đầu khi gửi thông tin login lên phía server
    isLoading: false,
    // state qua trinh gui request login/authentication len phia server
    stateRequest: '',
    // state của cả hai post request account và password
    isLogin: localStorage.getItem('user') === null ? false : true,
    data: localStorage.getItem('user')
  },
  orders: {
    idLoading: false,
    lastestOrder: '',
    state: '',
    data: []
  },
  cart: {
    cartItems: JSON.parse(localStorage.getItem('cart')),
    promos: 0,
    totalPrice: () => {
      return this.cart.cartItems.reduce((a, b) => a.sale_price + b.sale_price, 0);
    }
  }
};
