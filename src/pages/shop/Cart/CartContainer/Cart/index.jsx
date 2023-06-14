import { Alert, Button, Grid, OutlinedInput, Paper, Typography } from '@mui/material';
import React, { useCallback } from 'react';
import { MdOutlineInfo, MdAdd, MdKeyboardArrowRight } from 'react-icons/md';
import { RiCoupon2Line, RiMoneyDollarCircleLine } from 'react-icons/ri';
import { HiMinus, HiOutlineClipboardList } from 'react-icons/hi';
import { CgCloseO } from 'react-icons/cg';
import { useCart } from 'react-use-cart';
import { BiCheck } from 'react-icons/bi';

import { ToastContainer, toast } from 'react-toastify';
import { style } from '@mui/system';
import { Link, useNavigate } from 'react-router-dom';

import promo from '~/assets/img/selections/promo.png';

import { styles } from './styles';
import 'react-toastify/dist/ReactToastify.css';

export function CartItem({ item, index, itemLength, showControl, showDetail, callback }) {
  const { updateItemQuantity, removeItem } = useCart();
  const ToastContent = () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex' }}>
        <BiCheck style={{ fontSize: '24px' }} />
        <Typography> Xóa sản phẩm khỏi giỏ hàng thành công</Typography>
      </div>
    </div>
  );
  const handleReduceItem = useCallback(
    (id, currentQuantity) => {
      updateItemQuantity(id, currentQuantity - 1);
    },
    [updateItemQuantity],
  );
  const handleAddItem = useCallback(
    (id, currentQuantity) => {
      updateItemQuantity(id, currentQuantity + 1);
    },
    [updateItemQuantity],
  );
  const removeItemInCart = id => {
    toast.dismiss();
    toast(<ToastContent />, {
      toastId: id,
      position: 'bottom-left',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { width: 'auto', backgroundColor: 'rgba(2,1,36,.85)' },
    });
    removeItem(id);
  };
  return (
    <Paper key={item.id} sx={Object.assign({ ...styles.paper }, index === itemLength - 1 && { margin: '0' })}>
      <div style={styles.wrap_paper}>
        <div style={styles.part1}>
          <img src={item._img} alt={item.name} style={styles.img} />
        </div>
        <div style={styles.part2}>
          <div style={{ display: 'flex' }}>
            <Link to={`/product/${item.type}s/${item.id}`} style={{ textDecoration: 'none' }} onClick={callback}>
              <Typography sx={styles.text1}>{item.name}</Typography>
            </Link>
          </div>
          {showDetail && (
            <div style={styles.part2_1}>
              <div>
                <MdOutlineInfo style={styles.icon1} />
              </div>
              <div>
                {Object.values(item.configuration).map((config, index) => {
                  return (
                    <Typography key={index} component="span" sx={{ fontSize: '14px' }}>
                      {index < 3 && `• ${config.toString()} `}
                    </Typography>
                  );
                })}
              </div>
            </div>
          )}
          <div style={styles.part2_2}>
            <RiMoneyDollarCircleLine style={styles.icon1} />
            <Typography sx={styles.text2}>
              {parseInt(item.price)
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </Typography>
            {item.sale !== 0 && (
              <Typography>
                <del style={styles.del}>
                  {parseInt(item.original_price)
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </del>
              </Typography>
            )}
            {item.sale !== 0 && <Typography sx={styles.text3}> -{item.sale}%</Typography>}
          </div>
        </div>
        {showControl && (
          <>
            <div style={{ display: 'flex' }}>
              <Button
                disabled={item.quantity === 1}
                disableRipple
                sx={styles.btn}
                onClick={() => handleReduceItem(item.id, item.quantity)}
              >
                <HiMinus />
              </Button>
              <Typography>{item.quantity}</Typography>
              <Button
                disableRipple
                sx={styles.btn}
                onClick={() => {
                  handleAddItem(item.id, item.quantity);
                }}
              >
                <MdAdd />
              </Button>
            </div>
            <div style={styles.part3}>
              <Typography sx={styles.text4}>
                {parseInt(item.price)
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
              </Typography>
              <Button disableRipple sx={styles.btn1} onClick={() => removeItemInCart(item.id)}>
                <Typography sx={styles.text5}>Xoá</Typography>
                <CgCloseO style={{ padding: '4px' }} />
              </Button>
            </div>
          </>
        )}
      </div>
    </Paper>
  );
}

function Cart() {
  const { items, updateItemQuantity, removeItem, cartTotal } = useCart();
  const ToastContent = () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex' }}>
        <BiCheck style={{ fontSize: '24px' }} />
        <Typography> Xóa sản phẩm khỏi giỏ hàng thành công</Typography>
      </div>
    </div>
  );
  const navigate = useNavigate();

  return (
    <Grid columnSpacing={4} container>
      <Grid item md={8}>
        {items.map((item, index) => (
          <CartItem key={index} item={item} index={index} itemLength={items.length} showControl showDetail />
        ))}
      </Grid>
      <Grid item md={4}>
        <div style={styles.wrap_aside}>
          <Paper sx={Object.assign({ ...styles.paper }, { padding: '16px', margin: '0 0 16px 0' })}>
            <dziv>
              <div style={styles.part4}>
                <RiCoupon2Line style={styles.icon2} />
                <Typography sx={styles.text6}>Mã khuyến mại</Typography>
              </div>
              <div style={styles.part5}>
                <img src={promo} alt="" />
                <div style={styles.part5_1}>
                  <OutlinedInput sx={styles.outlined_input} placeholder="Nhập mã khuyến mại" />
                </div>
              </div>
            </dziv>
          </Paper>
          <Paper sx={Object.assign({ ...styles.paper }, { padding: '16px', margin: '0 0 16px 0' })}>
            <div>
              <div style={styles.part4}>
                <HiOutlineClipboardList style={styles.icon2} />
                <Typography sx={styles.text6}>Tóm tắt đơn hàng</Typography>
              </div>
              <div style={styles.part6}>
                <div style={style.part6_1}>
                  <Typography sx={styles.text8}>Tạm tính</Typography>
                  <Typography sx={styles.text8}>Khuyến mại</Typography>
                </div>
                <div style={styles.part6_2}>
                  <Typography sx={styles.text8}>
                    {parseInt(cartTotal)
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  </Typography>
                  <Typography sx={styles.text8}>0</Typography>
                </div>
              </div>
              <div style={{ borderBottom: '1px dashed rgba(218, 221, 224,1)' }} />
              <div style={Object.assign({ ...styles.part6 }, { padding: '12px 0' })}>
                <div style={style.part6_1}>
                  <Typography sx={styles.text8}>Tổng cộng</Typography>
                </div>
                <div style={styles.part6_2}>
                  <Typography sx={Object.assign({ ...styles.text4 }, { padding: '8px 0' })}>
                    {parseInt(cartTotal)
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  </Typography>
                </div>
              </div>
              <div style={{ borderBottom: '1px solid rgba(218, 221, 224,1)' }} />
              <Button sx={styles.btn2} onClick={() => navigate('/checkout/infoOrders')}>
                <Typography sx={styles.text7}>Đặt hàng</Typography>
                <MdKeyboardArrowRight style={styles.icon3} />
              </Button>
            </div>
          </Paper>
          <Alert
            severity="success"
            sx={{ borderRadius: '1rem', border: '1px solid rgba(82, 196, 26,1)', color: '#0b9574' }}
          >
            Đơn hàng đã đủ điều kiện <strong>miễn phí vận chuyển</strong> khi thanh toán trước
          </Alert>
        </div>
      </Grid>
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
        limit={1}
        style={{ width: 'auto' }}
      />
    </Grid>
  );
}

export default Cart;
