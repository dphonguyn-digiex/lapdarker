import {
  Radio,
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  Paper,
  RadioGroup,
  Tab,
  Tabs,
  Typography,
  Alert,
} from '@mui/material';
import React, { useState } from 'react';
import { MdOutlinePayment, MdKeyboardArrowRight } from 'react-icons/md';
import { styles } from './styles';
import { lastestOrder } from '~/store/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { style } from '@mui/system';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { BsCheck } from 'react-icons/bs';
// import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';

import { ordersActions } from '~/store/actions';
import vietcombank from '~/assets/img/selections/vietcombank.png';
import check from '~/assets/img/selections/check.png';
import vnpay from '~/assets/img/selections/vnpay.png';
import momo from '~/assets/img/selections/momo.png';
import creadit from '~/assets/img/selections/credits.png';
function PaymentContainer() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [valueRadio, setValueRadio] = useState('Chuyển khoản');
  const [showInfoBanking, setShowInfoBanking] = useState(true);
  // const { cartTotal } = useCart();
  const totalPrice = localStorage.getItem('total_price');
  const handleChangeIdxPanel = (event, newValue) => {
    setCurrentIdx(newValue);
  };
  const handleCheckedRadio = data => {
    if (data !== 'Chuyển khoản') {
      setShowInfoBanking(false);
    } else setShowInfoBanking(true);
    setValueRadio(data);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _lastestorder = useSelector(lastestOrder);
  const handleClickBtnConfirm = type => {
    if (type === null) {
      navigate('/user/management-orders');
    } else {
      dispatch(
        ordersActions.updateOrdersRequest({
          type: 'UPDATE_STATE_ORDER',
          data: { state: `WAIT_FOR_CONFIRM/${valueRadio}`, id: _lastestorder },
        }),
      );
      navigate('/user/management-orders');
    }
  };
  const TabPanel0 = () => {
    return (
      <div tabIndex={0} style={styles.wrap_panel}>
        <RadioGroup value={valueRadio}>
          <Box sx={styles.box} onClick={() => handleCheckedRadio('Chuyển khoản')}>
            <FormControlLabel value="Chuyển khoản" control={<Radio />} />
            <div style={styles.aside_box}>
              <Typography sx={styles.text4}>Chuyển khoản</Typography>
              {showInfoBanking && (
                <div style={styles.aside_content}>
                  <div>
                    <img src={vietcombank} alt="" style={styles.img} />
                  </div>
                  <Typography sx={styles.text7}>Vietcombank - Ngân Hàng Ngoại Thương Việt Nam</Typography>
                  <Typography sx={styles.text5}>
                    Chủ tài khoản: <strong>NGUYEN BUI DUY PHONG</strong>
                  </Typography>
                  <Typography sx={styles.text5}>
                    Số tài khoản: <strong>0123456789101112</strong>
                  </Typography>
                  <div style={styles.box_info1}>
                    <Typography sx={styles.text6}>
                      <strong>Nội dung chuyển khoản</strong> {"'Tên khách hàng, số điện thoại'"}
                    </Typography>
                    <Typography sx={styles.text6}>
                      <strong>Ví dụ</strong> {"'Nguyen Van A, 0912345678'"}
                    </Typography>
                  </div>
                  <div style={styles.box_info2}>
                    <Typography sx={styles.text6}>
                      Bạn hãy chọn <strong>Dịch vụ chuyển tiền 24/7</strong> để giao dịch được hoàn thành nhanh chóng
                    </Typography>
                  </div>
                </div>
              )}
            </div>
          </Box>
          <Box sx={styles.box} onClick={() => handleCheckedRadio('Thẻ ATM')}>
            <FormControlLabel value="Thẻ ATM" control={<Radio />} />
            <div style={styles.aside_box}>
              <Typography sx={Object.assign({ ...styles.text4 }, { pb: '4px' })}>Thẻ ATM</Typography>
              <Typography sx={styles.text9}>Hỗ trợ tất cả ngân hàng Việt Nam</Typography>
            </div>
          </Box>
          <Box sx={styles.box} onClick={() => handleCheckedRadio('VN Pay')}>
            <FormControlLabel value="VN Pay" control={<Radio />} />
            <div style={Object.assign({ ...styles.aside_box }, { display: 'flex' })}>
              <Typography sx={styles.text4}>Thanh toán qua </Typography>
              <div>
                <img src={vnpay} alt="vnpay" style={styles.img2} />
              </div>
            </div>
          </Box>
          <Box sx={styles.box} onClick={() => handleCheckedRadio('MOMO')}>
            <FormControlLabel value="MOMO" control={<Radio />} />
            <div style={Object.assign({ ...styles.aside_box }, { display: 'flex' })}>
              <Typography sx={styles.text4}>Thanh toán qua </Typography>
              <div>
                <img src={momo} alt="momo" style={styles.img3} />
              </div>
            </div>
          </Box>
          <Box sx={styles.box} onClick={() => handleCheckedRadio('Thẻ Quốc Tế')}>
            <FormControlLabel value="Thẻ Quốc Tế" control={<Radio />} />
            <div style={styles.aside_box}>
              <Typography sx={Object.assign({ ...styles.text4 }, { pb: '4px' })}>Thẻ Quốc Tế</Typography>
              <Typography sx={styles.text10}>Hỗ trợ Visa, Master, JCB</Typography>
              <img src={creadit} alt="credits" style={styles.img4} />
            </div>
          </Box>
        </RadioGroup>
      </div>
    );
  };
  const TabPanel1 = () => {
    <div tabIndex={0} style={{ display: 'flex', padding: '20px 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>Chưa handle kịp :((</div>
    </div>;
  };
  return (
    <div style={styles.wrap_container}>
      <form onSubmit={e => e.preventDefault()}>
        <Container maxWidth="lg" sx={{ p: '16px 0' }}>
          <div style={styles.flex}>
            <Typography sx={styles.text2}>Nhận hàng —</Typography>
            <Typography sx={styles.text1}> Thanh toán</Typography>
          </div>
          <Grid columnSpacing={4} container>
            <Grid item md={8}>
              <Alert
                icon={<img src={check} alt="success icon" style={styles.img1} />}
                severity="success"
                sx={styles.alert}
              >
                <Typography sx={styles.text8}>Đặt hàng thành công!</Typography>
                <Typography sx={styles.text5}>
                  Chuyên viên bán hàng sẽ gọi điện xác nhận trong <strong>10 phút</strong> tới
                </Typography>
              </Alert>
              <Paper sx={Object.assign({ ...styles.paper }, { m: '0' })}>
                <div style={styles.wrap_paper}>
                  <div style={styles.part1}>
                    <MdOutlinePayment style={styles.icon1} />
                    <Typography sx={styles.text3}>Thanh toán</Typography>
                  </div>
                </div>
                <Box sx={{ width: '100%' }}>
                  <Box>
                    <Tabs value={currentIdx} onChange={handleChangeIdxPanel} aria-label="tabs">
                      <Tab
                        disableRipple
                        label="Thanh toán 100%"
                        id="tab-1"
                        aria-controls="tabpanel-1"
                        sx={styles.tab}
                      />
                      <Tab
                        disabled
                        disableRipple
                        label="Trả góp"
                        id="tab-2"
                        aria-controls="tabpanel-2"
                        sx={styles.tab}
                      />
                    </Tabs>
                  </Box>
                  <div id="tabpanel">
                    {currentIdx === 0 && <TabPanel0 />}
                    {currentIdx === 1 && <TabPanel1 />}
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                      <Typography sx={{ fontSize: '17px' }}>Tổng cộng</Typography>
                      <Typography sx={Object.assign({ ...styles.text13 }, { fontSize: '19px', pl: '12px' })}>
                        {parseInt(totalPrice)
                          .toString()
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                      </Typography>
                    </div>
                    <div style={{ display: 'flex', columnGap: '1rem' }}>
                      <Button
                        sx={styles.btn}
                        onClick={() => {
                          handleClickBtnConfirm('WAITING_FOR_CONFIRM');
                        }}
                      >
                        <Typography sx={styles.text14}>Xác nhận đã chuyển</Typography>
                        <BsCheck style={styles.icon2} />
                      </Button>
                      <Button
                        sx={styles.btn1}
                        onClick={() => {
                          handleClickBtnConfirm(null);
                        }}
                      >
                        <Typography sx={styles.text14}>Đặt hàng, thanh toán sau</Typography>
                        <MdKeyboardArrowRight style={styles.icon2} />
                      </Button>
                    </div>
                  </div>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={4}>
              <div style={styles.wrap_aside}>
                <Paper sx={Object.assign({ ...styles.paper }, { padding: '16px', margin: '0 0 16px 0' })}>
                  <div>
                    <div style={styles.part6}>
                      <HiOutlineClipboardList style={styles.icon5} />
                      <Typography sx={styles.text11}>Tóm tắt đơn hàng</Typography>
                    </div>
                    <div style={styles.part7}>
                      <div style={style.part7_1}>
                        <Typography sx={styles.text12}>Tạm tính</Typography>
                        <Typography sx={styles.text12}>Khuyến mại</Typography>
                        <Typography sx={Object.assign({ ...styles.text12 }, { p: '0px' })}>
                          Phí vận chuyển dự kiến
                        </Typography>
                        <Typography sx={styles.text15}>Miễn phí khi thanh toán trước</Typography>
                      </div>
                      <div style={styles.part7_2}>
                        <Typography sx={styles.text12}>
                          {parseInt(totalPrice)
                            .toString()
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                        </Typography>
                        <Typography sx={styles.text12}>0</Typography>
                        <Typography sx={styles.text12}>0</Typography>
                      </div>
                    </div>
                    <div
                      style={{
                        borderBottom: '1px dashed rgba(218, 221, 224,1)',
                      }}
                    />
                    <div style={Object.assign({ ...styles.part7 }, { padding: '12px 0' })}>
                      <div style={style.part7_1}>
                        <Typography sx={styles.text12}>Tổng cộng</Typography>
                      </div>
                      <div style={styles.part7_2}>
                        <Typography sx={Object.assign({ ...styles.text13 }, { padding: '8px 0' })}>
                          {parseInt(totalPrice)
                            .toString()
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                        </Typography>
                      </div>
                    </div>
                    <div
                      style={{
                        borderBottom: '1px solid rgba(218, 221, 224,1)',
                      }}
                    />
                  </div>
                </Paper>
                <Alert
                  severity="success"
                  sx={{
                    borderRadius: '1rem',
                    border: '1px solid rgba(82, 196, 26,1)',
                    color: '#0b9574',
                  }}
                >
                  Đơn hàng đã đủ điều kiện <strong>miễn phí vận chuyển</strong> khi thanh toán trước
                </Alert>
              </div>
            </Grid>
          </Grid>
        </Container>
      </form>
    </div>
  );
}

export default PaymentContainer;
