import { MdOutlineWavingHand } from 'react-icons/md';
import { Button, Typography } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { CartProvider } from 'react-use-cart';

import Home from './pages/shop/Home/Home';
import SpecifyTypeProduct from './pages/shop/SpecifyTypeProduct/SpecifyTypeProduct';
import DetailedProduct from './pages/shop/DetailedProduct/DetailedProduct';
import Cart from './pages/shop/Cart/Cart';
import InfoOrders from './pages/shop/InfoOrders/InfoOrders';
import Payment from './pages/shop/Payment/Payment';
import User from './pages/shop/User/User';
import InfoContact from './pages/shop/User/UserContainer/RightAsideContainer/InfoContact';
import Saving from './pages/shop/User/UserContainer/RightAsideContainer/Saving';
import Stores from './pages/shop/User/UserContainer/RightAsideContainer/Stores';
import AccountUser from './pages/shop/User/UserContainer/RightAsideContainer/AccountUser';
import ManagementOrders from './pages/shop/User/UserContainer/RightAsideContainer/ManagementOrders';
import Shop from './pages/shop';

import DashboardAdmin from './pages/admin';
import MainOrders from './pages/admin/MainDashboard/MainOrders';
import MainProducts from './pages/admin/MainDashboard/MainProducts';
import MainAssistant from './pages/admin/MainDashboard/MainAssistant';
import MainCustomer from './pages/admin/MainDashboard/MainCustomer';
import MainEvent from './pages/admin/MainDashboard/MainEvent';
import MainBusiness from './pages/admin/MainDashboard/MainBusiness';
import MainStatistical from './pages/admin/MainDashboard/MainStatistical';
import MainAccount from './pages/admin/MainDashboard/MainAccount';
import MainNotification from './pages/admin/MainDashboard/MainNotification';
import MainCooperation from './pages/admin/MainDashboard/MainCooperation';

import Policy from './pages/shop/User/UserContainer/RightAsideContainer/Policy';
import InsurancePolicy from './pages/shop/User/UserContainer/RightAsideContainer/Policy/InsurancePolicy';
import ServiceCost from './pages/shop/User/UserContainer/RightAsideContainer/Policy/ServiceCost';
import DeliverPolicy from './pages/shop/User/UserContainer/RightAsideContainer/Policy/DeliverPolicy';
import PaymentPolicy from './pages/shop/User/UserContainer/RightAsideContainer/Policy/PaymentPolicy';
// import { ThemeContext } from './context/ThemeContext';
// import ErrorBoundary from './pages/ErrorBoundary';
import { stateRequestAuth } from './store/selectors';
import SearchInsurance from './pages/shop/User/UserContainer/RightAsideContainer/SearchInsurance/index';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  typography: {
    fontFamily: 'Nunito Sans, sans-serif'
  }
});

function App() {
  const [path, setPath] = useState('/');
  
  // go to the top of page whenever redirect
  const location = useLocation();
  localStorage.setItem('_pathname', path);
  const state_request = useSelector(stateRequestAuth);
  useEffect(() => {
    window.scrollTo(0, 0);
    // setIsScrollDown(false);
    setPath(location.pathname);
  }, [location.pathname]);
  const navigate = useNavigate();
  const ToastContent = () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div style={{ display: 'flex' }}>
        <MdOutlineWavingHand style={{ fontSize: '24px' }} />
        <Typography> Chào mừng bạn quay lại, </Typography>
      </div>
      <Button sx={{ marginLeft: '24px' }} onClick={() => navigate('/dashboard/orders')}>
        <Typography sx={{ textTransform: 'initial', color: '#66f1ff' }}>Đi đến Dashboard</Typography>
      </Button>
    </div>
  );
  useEffect(() => {
    if (state_request === 'LOGIN_SUCCESS') {
      if (JSON.parse(localStorage.getItem('user')).role === 'admin') {
        toast(<ToastContent />, {
          position: 'bottom-left',
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { width: 'auto', backgroundColor: 'rgba(2,1,36,.85)' }
        });
      }
    }
  }, [state_request]);
  // const { isEmpty } = useCart();
  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Shop />}>
            <Route path="" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout/infoOrders" element={<InfoOrders />} />
            <Route path="checkout/payment" element={<Payment />} />
            <Route path="user" element={<User />}>
              <Route path="account" element={<AccountUser />} />
              <Route path="management-orders" element={<ManagementOrders />} />
              <Route path="contact" element={<InfoContact />} />
              <Route path="saving" element={<Saving />} />
              <Route path="search-insurance" element={<SearchInsurance />} />
              <Route path="stores" element={<Stores />} />
              <Route path="policy" element={<Policy />}>
                <Route path="insurance" element={<InsurancePolicy />} />
                <Route path="payment" element={<PaymentPolicy />} />
                <Route path="service-cost" element={<ServiceCost />} />
                <Route path="deliver" element={<DeliverPolicy />} />
              </Route>
            </Route>
            <Route path="product/:type_product" element={<SpecifyTypeProduct />} />
            <Route path="product/:type/:id_product" element={<DetailedProduct />} />
            <Route path="*" element={<Home />} />
          </Route>
          <Route path="/dashboard" element={<DashboardAdmin />}>
            <Route path="orders" element={<MainOrders />} />
            <Route path="products" element={<MainProducts />} />
            <Route path="assistant" element={<MainAssistant />} />
            <Route path="customer" element={<MainCustomer />} />
            <Route path="event" element={<MainEvent />} />
            <Route path="business" element={<MainBusiness />} />
            <Route path="statistical" element={<MainStatistical />} />
            <Route path="account" element={<MainAccount />} />
            <Route path="notification" element={<MainNotification />} />
            <Route path="cooperation" element={<MainCooperation />} />
          </Route>
        </Routes>
        <ToastContainer
          position="bottom-left"
          // autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="dark"
          pauseOnFocusLoss
          limit={1}
          draggable
          pauseOnHover
          style={{ width: 'auto' }}
        />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
