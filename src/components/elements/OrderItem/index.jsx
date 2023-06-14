/* eslint-disable react/display-name */
import { Box, Button, FormControlLabel, Grid, Modal, Paper, Radio, RadioGroup, Typography } from '@mui/material';
import React, { useState } from 'react';
import { BiHome } from 'react-icons/bi';
import { MdKeyboardArrowRight, MdOutlineInfo } from 'react-icons/md';
import { RiMoneyDollarCircleLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineFieldNumber } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import vietcombank from '~/assets/img/selections/vietcombank.png';
import vnpay from '~/assets/img/selections/vnpay.png';
import momo from '~/assets/img/selections/momo.png';
import creadit from '~/assets/img/selections/credits.png';
import { ordersActions } from '~/store/actions';

import { styles } from './styles';

function OrderItem({ data }) {
  const prd = data.products[0];
  const [openModal, setOpenModal] = useState(false);
  const [valueRadio, setValueRadio] = useState('Chuyển khoản');
  const [showInfoBanking, setShowInfoBanking] = useState(true);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleCheckedRadio = data => {
    if (data !== 'Chuyển khoản') {
      setShowInfoBanking(false);
    } else setShowInfoBanking(true);
    setValueRadio(data);
  };
  const handleClickBtnConfirm = type => {
    if (type === null) {
      navigate('/user/management-orders');
    } else {
      dispatch(
        ordersActions.updateOrdersRequest({
          type: 'UPDATE_STATE_ORDER',
          data: { state: `WAIT_FOR_CONFIRM/${valueRadio}`, id: data._id },
        }),
      );
      // window.location.reload();
    }
  };
  const date = moment(data.createdAt).format('D/MM/YYYY HH:mm');
  let Payment;
  switch (data.state) {
    case 'WAIT_FOR_PAY':
      Payment = () => (
        <Typography sx={Object.assign({ ...styles.text13 }, { textTransform: 'initial' })}>Chưa thanh toán</Typography>
      );
      break;
    default:
      break;
  }
  const _address =
    data.address === 'Số 514 Đ. Nguyễn Công Phương, phường Nghĩa Lộ, Thành phố Quảng Ngãi' ||
    data.address === 'Số 112 Đ. Chu Văn An, phường Nghĩa Lộ, Thành phố Quảng Ngãi' ||
    data.address === 'Số 1 Đ. Võ Văn Ngân, Linh Chiểu, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh'
      ? 'cửa hàng'
      : 'địa chỉ';
  return (
    <>
      <Paper sx={Object.assign({ ...styles.paper })}>
        <div style={styles.container}>
          <div style={styles.part1}>
            <Typography sx={styles.text1}>Đơn hàng</Typography>
            <Typography sx={styles.text2}>{data._id}</Typography>
            <MdKeyboardArrowRight style={styles.icon1} />
          </div>
          <div style={styles.part2}>
            <BiHome style={styles.icon2} />
            <Typography sx={styles.text3}>Có sẵn tại cửa hàng</Typography>
          </div>
          <div style={styles.part3}>
            <div style={styles.wrap_part3}>
              <div style={styles.wrap_img}>
                <img src={prd._img} alt="" style={styles.img} />
              </div>
              <div style={styles.part3_main}>
                <div style={{ display: 'flex' }}>
                  <Link to={`/product/${prd.type}s/${prd.id}`} style={{ textDecoration: 'none' }}>
                    <Typography sx={styles.text5}>{prd.name}</Typography>
                  </Link>
                </div>
                <div style={styles.part3_1}>
                  <div>
                    <MdOutlineInfo style={styles.icon3} />
                  </div>
                  <div>
                    {Object.values(prd.configuration).map((config, index) => {
                      return (
                        <Typography key={index} component="span" sx={{ fontSize: '14px' }}>
                          {index < 3 && `• ${config.toString()} `}
                        </Typography>
                      );
                    })}
                  </div>
                </div>
                <div style={styles.part3_2}>
                  <div>
                    <RiMoneyDollarCircleLine style={styles.icon3} />
                  </div>
                  <Typography sx={styles.text6}>
                    {parseInt(prd.price)
                      .toString()
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                  </Typography>
                  {prd.sale !== 0 && (
                    <Typography>
                      <del style={styles.del}>
                        {parseInt(prd.original_price)
                          .toString()
                          .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                      </del>
                    </Typography>
                  )}
                  {prd.sale !== 0 && <Typography sx={styles.text7}> -{prd.sale}%</Typography>}
                </div>
                <div style={styles.part3_3}>
                  <div>
                    <AiOutlineFieldNumber style={styles.icon3} />
                  </div>
                  <div
                    style={{
                      borderRadius: '4px',
                      backgroundColor: 'rgba(236, 240, 241,1)',
                    }}
                  >
                    <div
                      style={{
                        padding: '4px',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Typography component="span" sx={{ fontSize: '13px', fontWeight: 'bold', pr: '4px' }}>
                        {data.totalItems}
                      </Typography>
                      <Typography component="span" sx={{ fontSize: '13px' }}>
                        sản phẩm
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {data.state === 'WAIT_FOR_PAY' && (
            <div style={styles.part_state}>
              <Typography sx={{ fontSize: '13px', color: 'red' }}>* Đơn hàng này chưa được thanh toán</Typography>
            </div>
          )}
          {data.state === 'WAIT_FOR_PAY' && (
            <div style={styles.part4}>
              <Button sx={styles.btn1} onClick={handleOpenModal}>
                <Typography sx={styles.text8}>Thanh Toán</Typography>
              </Button>
              <Button sx={styles.btn2} onClick={handleOpenModal}>
                <Typography sx={styles.text9}>Chi tiết</Typography>
              </Button>
            </div>
          )}
        </div>
      </Paper>
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles.box}>
          <div style={{ backgroundColor: '#fff' }}>
            <div style={styles.wrap_header_box}>
              <Typography sx={styles.text10}>Thanh toán hóa đơn</Typography>
              <GrClose style={styles.icon4} onClick={handleCloseModal} />
            </div>
          </div>
          <div style={styles.main_box}>
            <div style={{ padding: '12px 24px' }}>
              <div style={styles.main_box_content}>
                <Typography sx={styles.text1}>Đơn hàng & Thông tin thanh toán</Typography>
                <Typography sx={styles.text15}>{date}</Typography>
                <div style={styles.main_box_inside}>
                  <Grid container sx={{ p: '0 0 0 8px' }}>
                    <Grid item md={3}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={styles.text12}>Tổng tiền</Typography>
                        <Typography sx={Object.assign({ ...styles.text6 }, { p: 0 })}>
                          {parseInt(data.totalPrice)
                            .toString()
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                        </Typography>
                      </div>
                    </Grid>
                    <Grid item md={3}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={styles.text12}>Phương thức thanh toán</Typography>
                        <Payment />
                      </div>
                    </Grid>
                    <Grid item md={3}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={styles.text12}>Đơn hàng</Typography>
                        <Typography sx={styles.text13}>{data._id}</Typography>
                      </div>
                    </Grid>
                    <Grid item md={3} sx={{ alignSelf: 'end' }}>
                      <div style={{ display: 'flex', justifyContent: 'end' }}>
                        <div
                          style={{
                            backgroundColor: 'rgba(248, 250, 252, 1)',
                            borderRadius: '8px',
                          }}
                        >
                          <Typography sx={styles.text14}>Đang xử lý</Typography>
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div style={styles.container}>
                  <Typography sx={styles.text1}>Thông tin nhận hàng</Typography>
                  <div style={styles.part5}>
                    <div style={styles.wrap_part5}>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <BiHome style={Object.assign({ ...styles.icon2 }, { color: '#14cdc8' })} />
                        <Typography sx={Object.assign({ ...styles.text15 }, { p: 0 })}>Nhận tại {_address}</Typography>
                      </div>
                      <Typography sx={Object.assign({ ...styles.text15 }, { p: 0, fontSize: '16px' })}>
                        {data.fullname}, {data.phone}
                      </Typography>
                      <Typography sx={{ fontSize: '14px' }}>{data.address}</Typography>
                    </div>
                  </div>
                </div>
                <div style={styles.container}>
                  <Typography sx={styles.text1}>Chi tiết đơn hàng</Typography>
                  <div style={Object.assign({ ...styles.part2 }, { marginTop: '4px' })}>
                    <BiHome style={styles.icon2} />
                    <Typography sx={styles.text3}>Có sẵn tại cửa hàng</Typography>
                  </div>
                  {data.products.map((product, index) => {
                    return (
                      <div key={index} style={Object.assign({ ...styles.part3 }, { marginBottom: '8px' })}>
                        <div style={styles.wrap_part3}>
                          <div style={styles.wrap_img}>
                            <img src={product._img} alt="" style={styles.img} />
                          </div>
                          <div style={styles.part3_main}>
                            <div style={{ display: 'flex' }}>
                              <Link to={`/product/${product.type}s/${product.id}`} style={{ textDecoration: 'none' }}>
                                <Typography sx={styles.text5}>{product.name}</Typography>
                              </Link>
                            </div>
                            <div style={styles.part3_2}>
                              <div>
                                <RiMoneyDollarCircleLine style={styles.icon3} />
                              </div>
                              <Typography sx={styles.text6}>
                                {parseInt(product.price)
                                  .toString()
                                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                              </Typography>
                              {product.sale !== 0 && (
                                <Typography>
                                  <del style={styles.del}>
                                    {parseInt(product.original_price)
                                      .toString()
                                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                                  </del>
                                </Typography>
                              )}
                              {product.sale !== 0 && <Typography sx={styles.text7}> -{product.sale}%</Typography>}
                            </div>
                            <div style={styles.part3_3}>
                              <div>
                                <AiOutlineFieldNumber style={styles.icon3} />
                              </div>
                              <div
                                style={{
                                  borderRadius: '4px',
                                  backgroundColor: 'rgba(236, 240, 241,1)',
                                }}
                              >
                                <div
                                  style={{
                                    padding: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                  }}
                                >
                                  <Typography component="span" sx={{ fontSize: '13px' }}>
                                    Số lượng
                                  </Typography>
                                  <Typography
                                    component="span"
                                    sx={{
                                      fontSize: '13px',
                                      fontWeight: 'bold',
                                      pl: '4px',
                                    }}
                                  >
                                    {product.quantity}
                                  </Typography>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div style={styles.container}>
                    <Typography sx={styles.text1}>Thanh toán qua</Typography>
                    <RadioGroup value={valueRadio}>
                      <Box sx={styles.box_payment} onClick={() => handleCheckedRadio('Chuyển khoản')}>
                        <FormControlLabel value="Chuyển khoản" control={<Radio />} />
                        <div style={styles.aside_box_payment}>
                          <Typography sx={styles.text16}>Chuyển khoản</Typography>
                          {showInfoBanking && (
                            <div style={styles.aside_content}>
                              <div>
                                <img src={vietcombank} alt="" style={styles.img1} />
                              </div>
                              <Typography sx={styles.text17}>Vietcombank - Ngân Hàng Ngoại Thương Việt Nam</Typography>
                              <Typography sx={styles.text19}>
                                Chủ tài khoản: <strong>NGUYEN BUI DUY PHONG</strong>
                              </Typography>
                              <Typography sx={styles.text19}>
                                Số tài khoản: <strong>0123456789101112</strong>
                              </Typography>
                              <div style={styles.box_info1}>
                                <Typography sx={styles.text18}>
                                  <strong>Nội dung chuyển khoản</strong> {"'Tên khách hàng, số điện thoại'"}
                                </Typography>
                                <Typography sx={styles.text18}>
                                  <strong>Ví dụ</strong> {"'Nguyen Van A, 0912345678'"}
                                </Typography>
                              </div>
                              <div style={styles.box_info2}>
                                <Typography sx={styles.text18}>
                                  Bạn hãy chọn <strong>Dịch vụ chuyển tiền 24/7</strong> để giao dịch được hoàn thành
                                  nhanh chóng
                                </Typography>
                              </div>
                            </div>
                          )}
                        </div>
                      </Box>
                      <Box sx={styles.box_payment} onClick={() => handleCheckedRadio('Thẻ ATM')}>
                        <FormControlLabel value="Thẻ ATM" control={<Radio />} />
                        <div style={styles.aside_box_payment}>
                          <Typography sx={Object.assign({ ...styles.text16 }, { pb: '4px' })}>Thẻ ATM</Typography>
                          <Typography sx={styles.text20}>Hỗ trợ tất cả ngân hàng Việt Nam</Typography>
                        </div>
                      </Box>
                      <Box sx={styles.box_payment} onClick={() => handleCheckedRadio('VN Pay')}>
                        <FormControlLabel value="VN Pay" control={<Radio />} />
                        <div style={Object.assign({ ...styles.aside_box_payment }, { display: 'flex' })}>
                          <Typography sx={styles.text16}>Thanh toán qua </Typography>
                          <div>
                            <img src={vnpay} alt="vnpay" style={styles.img2} />
                          </div>
                        </div>
                      </Box>
                      <Box sx={styles.box_payment} onClick={() => handleCheckedRadio('MOMO')}>
                        <FormControlLabel value="MOMO" control={<Radio />} />
                        <div style={Object.assign({ ...styles.aside_box_payment }, { display: 'flex' })}>
                          <Typography sx={styles.text16}>Thanh toán qua </Typography>
                          <div>
                            <img src={momo} alt="momo" style={styles.img3} />
                          </div>
                        </div>
                      </Box>
                      <Box sx={styles.box_payment} onClick={() => handleCheckedRadio('Thẻ Quốc Tế')}>
                        <FormControlLabel value="Thẻ Quốc Tế" control={<Radio />} />
                        <div style={styles.aside_box_payment_payment}>
                          <Typography sx={Object.assign({ ...styles.text4 }, { pb: '4px' })}>Thẻ Quốc Tế</Typography>
                          <Typography sx={styles.text21}>Hỗ trợ Visa, Master, JCB</Typography>
                          <img src={creadit} alt="credits" style={{ paddingBottom: '12px' }} />
                        </div>
                      </Box>
                    </RadioGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ backgroundColor: '#fff' }}>
            <div style={{ padding: '12px 24px', display: 'flex' }}>
              <Button
                onClick={() => {
                  handleClickBtnConfirm('WAITING_FOR_CONFIRM');
                }}
                sx={Object.assign({ ...styles.btn1 }, { flex: 1 })}
              >
                <Typography sx={styles.text8}>Xác nhận thanh Toán</Typography>
              </Button>
              <Button onClick={handleCloseModal} sx={Object.assign({ ...styles.btn2 }, { flex: 1 })}>
                <Typography sx={styles.text9}>Đóng</Typography>
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}

export default OrderItem;
