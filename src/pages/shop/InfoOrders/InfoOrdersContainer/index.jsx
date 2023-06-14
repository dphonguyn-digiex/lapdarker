import {
  Radio,
  Box,
  Button,
  Container,
  FormControlLabel,
  Grid,
  OutlinedInput,
  Paper,
  RadioGroup,
  Tab,
  Tabs,
  Typography,
  Alert,
  Select,
  MenuItem,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';
import { FaRegUserCircle } from 'react-icons/fa';
import { MdKeyboardArrowRight, MdOutlineLocationOn } from 'react-icons/md';
import { AiOutlineLike } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { style } from '@mui/system';
import { useCart } from 'react-use-cart';
import { HiOutlineClipboardList } from 'react-icons/hi';
import axios from 'axios';

import img_order from '~/assets/img/selections/user02.png';
import { ordersActions } from '~/store/actions';

import { styles } from './styles';
function InfoOrdersContainer() {
  const isLogin = localStorage.getItem('user') ? true : false;
  const [currentIdx, setCurrentIdx] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isFilledAllInput, setIsFilledAllInput] = useState(false);
  const [valueForm, setValueForm] = useState({
    fullname: '',
    phone: '',
    address: {
      store: 'Số 514 Đ. Nguyễn Công Phương, phường Nghĩa Lộ, Thành phố Quảng Ngãi',
      personal: {
        city: '',
        district: '',
        ward: '',
        specifyAdr: '',
      },
    },
  });

  const handleChangeValueOfField = (event, type) => {
    switch (type) {
      case 'FULLNAME': {
        setValueForm(oldState => {
          return {
            ...oldState,
            fullname: event.target.value,
          };
        });
        break;
      }
      case 'PHONE': {
        setValueForm(oldState => {
          return {
            ...oldState,
            phone: event.target.value,
          };
        });
        break;
      }
      case 'ADDRESS_STORE': {
        setValueForm(oldState => {
          return {
            ...oldState,
            address: {
              store: event.target.value,
              personal: oldState.address.personal,
            },
          };
        });
        break;
      }
      case 'ADDRESS_PERSONAL_CITY': {
        setValueForm(oldState => {
          return {
            ...oldState,
            address: {
              personal: {
                ...oldState.address.personal,
                city: event.target.value,
              },
              store: oldState.address.store,
            },
          };
        });
        break;
      }
      case 'ADDRESS_PERSONAL_DISTRICT': {
        setValueForm(oldState => {
          return {
            ...oldState,
            address: {
              personal: {
                ...oldState.address.personal,
                district: event.target.value,
              },
              store: oldState.address.store,
            },
          };
        });
        break;
      }
      case 'ADDRESS_PERSONAL_WARD': {
        setValueForm(oldState => {
          return {
            ...oldState,
            address: {
              store: oldState.address.store,
              personal: {
                ...oldState.address.personal,
                ward: event.target.value,
              },
            },
          };
        });
        break;
      }
      case 'ADDRESS_PERSONAL_SPECIFY': {
        setValueForm(oldState => {
          return {
            ...oldState,
            address: {
              store: oldState.address.store,
              personal: {
                ...oldState.address.personal,
                specifyAdr: event.target.value,
              },
            },
          };
        });
        break;
      }
      default:
        setValueForm(oldState => ({ ...oldState }));
    }
  };

  const { cartTotal, items, emptyCart, totalItems } = useCart();
  // const _items = items.map(item => {
  //   const { id, quantity, ...rest } = item;
  //   return { id, quantity };
  // });

  const handleChangeIdxPanel = (event, newValue) => {
    setCurrentIdx(newValue);
    if (newValue === 0) {
      setValueForm(oldState => {
        return {
          ...oldState,
          address: {
            store: oldState.address.store,
            personal: {
              city: '',
              district: '',
              ward: '',
              specifyAdr: '',
            },
          },
        };
      });
    }
    if (newValue === 1) {
      setValueForm(oldState => {
        return {
          ...oldState,
          address: {
            store: '',
            personal: oldState.address.personal,
          },
        };
      });
    }
  };

  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const fetchLocation = async () => {
    setLoading(false);
    const result = await axios('https://provinces.open-api.vn/api/?depth=3');
    if (result) {
      setCities(result.data);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchLocation()
      .then(() => setLoading(true))
      .catch(() => setLoading(true));
  }, []);

  const handleSetDistricts = data => {
    setDistricts(data);
  };
  const handleSetWards = data => {
    setWards(data);
  };

  useEffect(() => {
    let haveName = false;
    let havePhone = false;
    let haveAddress = false;
    if (valueForm.fullname.length > 0) haveName = true;
    if (valueForm.phone.length > 0) havePhone = true;
    if (currentIdx === 0) {
      valueForm.address.store.length > 0 ? (haveAddress = true) : (haveAddress = false);
    }
    if (currentIdx === 1) {
      valueForm.address.personal.city.length > 0 &&
      valueForm.address.personal.district.length > 0 &&
      valueForm.address.personal.ward.length > 0 &&
      valueForm.address.personal.specifyAdr.length > 0
        ? (haveAddress = true)
        : (haveAddress = false);
    }

    if (haveName && havePhone && haveAddress) setIsFilledAllInput(true);
    else setIsFilledAllInput(false);
  }, [valueForm, isFilledAllInput, currentIdx]);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const handleSubmitForm = () => {
    dispatch(
      ordersActions.postOrdersRequest({
        ...valueForm,
        items,
        cartTotal,
        totalItems,
        payment: null,
        state: 'WAIT_FOR_PAY',
        token: token ? token : '',
      }),
    );
    localStorage.setItem('total_price', cartTotal);
    emptyCart();
    navigate('/checkout/payment');
  };

  const TabPanel1 = () => {
    return (
      <div tabIndex={1} style={{ display: 'flex', padding: '20px 0' }}>
        {!loading && (
          <div style={{ display: 'flex', flexDirection: 'column', width: '50%' }}>
            <div style={styles.part5}>
              <Typography sx={styles.text4}>Tỉnh / Thành phố</Typography>
              <Select
                required
                onChange={e => {
                  handleChangeValueOfField(e, 'ADDRESS_PERSONAL_CITY');
                }}
                value={valueForm.address.personal.city}
                sx={styles.input}
                MenuProps={{
                  style: {
                    maxHeight: 400,
                  },
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                  },
                }}
                displayEmpty
              >
                <MenuItem value="" sx={{ display: 'none' }}>
                  Chọn Tỉnh / Thành phố
                </MenuItem>
                {cities.map(city => {
                  return (
                    <MenuItem onClick={() => handleSetDistricts(city.districts)} key={city.name} value={city.name}>
                      {city.name}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
            <div style={styles.part5}>
              <Typography sx={styles.text4}>Quận / Huyện</Typography>
              <Select
                onChange={e => handleChangeValueOfField(e, 'ADDRESS_PERSONAL_DISTRICT')}
                value={valueForm.address.personal.district}
                required
                sx={styles.input}
                MenuProps={{
                  style: {
                    maxHeight: 400,
                  },
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                  },
                }}
                displayEmpty
              >
                <MenuItem value="" sx={{ display: 'none' }}>
                  Chọn Quận / Huyện
                </MenuItem>
                {districts.length === 0 ? (
                  <MenuItem disabled>Vui lòng chọn Tỉnh / Thành phố</MenuItem>
                ) : (
                  districts.map(district => {
                    return (
                      <MenuItem
                        onClick={() => handleSetWards(district.wards)}
                        key={district.name}
                        value={district.name}
                      >
                        {district.name}
                      </MenuItem>
                    );
                  })
                )}
              </Select>
            </div>
            <div style={styles.part5}>
              <Typography sx={styles.text4}>Phường / Xã</Typography>
              <Select
                required
                onChange={e => handleChangeValueOfField(e, 'ADDRESS_PERSONAL_WARD')}
                value={valueForm.address.personal.ward}
                sx={styles.input}
                MenuProps={{
                  style: {
                    maxHeight: 400,
                  },
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'center',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'center',
                  },
                }}
                displayEmpty
              >
                <MenuItem
                  value=""
                  sx={{
                    display: 'none',
                  }}
                >
                  Chọn Phường / Xã
                </MenuItem>
                {wards.length === 0 ? (
                  <MenuItem disabled>Vui lòng chọn Quận / Huyện</MenuItem>
                ) : (
                  wards.map(ward => {
                    return (
                      <MenuItem key={ward.name} value={ward.name}>
                        {ward.name}
                      </MenuItem>
                    );
                  })
                )}
              </Select>
            </div>
            <div style={styles.part5}>
              <Typography sx={styles.text4}>Địa chỉ cụ thể</Typography>
              <OutlinedInput
                autoFocus
                key="input-text-address"
                onChange={e => handleChangeValueOfField(e, 'ADDRESS_PERSONAL_SPECIFY')}
                value={valueForm.address.personal.specifyAdr}
                sx={styles.input}
                placeholder="Số nhà, tòa nhà, đường, khu vực"
                required
              ></OutlinedInput>
              <Typography component="span" sx={styles.text9}>
                Ví dụ: Số 514 Đ. Nguyễn Công Phương, Quảng Ngãi{' '}
              </Typography>
            </div>
            <div style={{ borderBottom: '1px solid rgba(236, 240, 244,1)', margin: '12px 0' }}></div>
            <div style={styles.part4}>
              <Typography sx={styles.text5}>
                Phí vận chuyển tạm tính: <strong>0</strong>
              </Typography>
              <Typography sx={styles.text5}>
                Thời gian giao hàng dự kiến: <strong>Không có</strong>
              </Typography>
              <div style={styles.part1}>
                <AiOutlineLike style={styles.icon4} />
                <Typography sx={styles.text10}>Miễn phí vận chuyển khi thanh toán trước</Typography>
              </div>
            </div>
          </div>
        )}
        <div style={{ width: '50%' }}>
          <img src={img_order} alt="img order" style={styles.img}></img>
        </div>
      </div>
    );
  };

  const TabPanel0 = () => {
    return (
      <div tabIndex={0}>
        <RadioGroup
          onChange={e => handleChangeValueOfField(e, 'ADDRESS_STORE')}
          value={valueForm.address.store}
          sx={{
            '.MuiFormControlLabel-root': {
              m: '0',
            },
          }}
        >
          <div>
            <Typography sx={styles.text8}>Thành phố Quảng Ngãi</Typography>
            <div style={{ display: 'flex', columnGap: '1rem' }}>
              <Button disableRipple sx={styles.btn1}>
                <FormControlLabel
                  value="Số 514 Đ. Nguyễn Công Phương, phường Nghĩa Lộ, Thành phố Quảng Ngãi"
                  control={<Radio />}
                />
                <div>
                  <Typography sx={styles.text7}>
                    Số 514 Đ. Nguyễn Công Phương, phường Nghĩa Lộ, Thành phố Quảng Ngãi
                  </Typography>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/place/514+Nguy%E1%BB%85n+C%C3%B4ng+Ph%C6%B0%C6%A1ng,+Ngh%C4%A9a+L%E1%BB%99,+Qu%E1%BA%A3ng+Ng%C3%A3i,+Vi%E1%BB%87t+Nam/@15.1081064,108.7878716,17z/data=!3m1!4b1!4m5!3m4!1s0x3169acdbfbca2c9f:0xe2ddd1e898289f9c!8m2!3d15.1081064!4d108.7900603"
                      style={{ textDecoration: 'none', display: 'flex' }}
                      rel="noreferrer"
                    >
                      <MdOutlineLocationOn style={styles.icon3} />
                      <Typography sx={styles.text6}>Chỉ đường</Typography>
                    </a>
                  </div>
                </div>
              </Button>
              <Button disableRipple sx={styles.btn1}>
                <FormControlLabel
                  value="Số 112 Đ. Chu Văn An, phường Nghĩa Lộ, Thành phố Quảng Ngãi"
                  control={<Radio />}
                />
                <div>
                  <Typography sx={styles.text7}>Số 112 Đ. Chu Văn An, phường Nghĩa Lộ, Thành phố Quảng Ngãi</Typography>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+THPT+chuy%C3%AAn+L%C3%AA+Khi%E1%BA%BFt/@15.1162238,108.7904079,17z/data=!3m1!4b1!4m5!3m4!1s0x3169ad270f1d68cf:0xf561058c08fc845f!8m2!3d15.1162398!4d108.7926592"
                      style={{ textDecoration: 'none', display: 'flex' }}
                      rel="noreferrer"
                    >
                      <MdOutlineLocationOn style={styles.icon3} />
                      <Typography sx={styles.text6}>Chỉ đường</Typography>
                    </a>
                  </div>
                </div>
              </Button>
            </div>
          </div>
          <div>
            <Typography sx={styles.text8}>Thành phố Hồ Chí Minh</Typography>
            <div style={{ display: 'flex' }}>
              <Button disableRipple sx={styles.btn1}>
                <FormControlLabel
                  value="Số 1 Đ. Võ Văn Ngân, Linh Chiểu, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh"
                  control={<Radio />}
                />
                <div>
                  <Typography sx={styles.text7}>
                    Số 1 Đ. Võ Văn Ngân, Linh Chiểu, Thành Phố Thủ Đức, Thành phố Hồ Chí Minh
                  </Typography>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <a
                      target="_blank"
                      href="https://www.google.com/maps/place/Tr%C6%B0%E1%BB%9Dng+%C4%90%E1%BA%A1i+h%E1%BB%8Dc+S%C6%B0+ph%E1%BA%A1m+K%E1%BB%B9+thu%E1%BA%ADt+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.8507214,106.7697336,17z/data=!3m1!4b1!4m5!3m4!1s0x31752763f23816ab:0x282f711441b6916f!8m2!3d10.8507214!4d106.7719223"
                      style={{ textDecoration: 'none', display: 'flex' }}
                      rel="noreferrer"
                    >
                      <MdOutlineLocationOn style={styles.icon3} />
                      <Typography sx={styles.text6}>Chỉ đường</Typography>
                    </a>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </RadioGroup>
      </div>
    );
  };

  return (
    <div style={styles.wrap_container}>
      <form onSubmit={e => e.preventDefault()}>
        <Container maxWidth="lg" sx={{ p: '16px 0' }}>
          <div style={styles.flex}>
            <Typography sx={styles.text1}>Nhận hàng</Typography>
            <Typography sx={styles.text2}>— Thanh toán</Typography>
          </div>
          <Grid columnSpacing={4} container>
            <Grid item md={8}>
              <Paper sx={styles.paper}>
                <div style={styles.wrap_paper}>
                  <div style={styles.part1}>
                    <FiPhone style={styles.icon1} />
                    <Typography sx={styles.text3}>1. Thông tin liên hệ</Typography>
                  </div>
                  <div style={styles.part2}>
                    <div style={styles.flex1_1}>
                      <Typography sx={styles.text4}>Họ tên</Typography>
                      <OutlinedInput
                        key="input-text-name"
                        onChange={e => handleChangeValueOfField(e, 'FULLNAME')}
                        value={valueForm.fullname}
                        sx={styles.input}
                        placeholder="Tên người nhận"
                        required
                      ></OutlinedInput>
                    </div>
                    <div style={styles.flex1_1}>
                      <Typography sx={styles.text4}>Số điện thoại</Typography>
                      <OutlinedInput
                        key="input-text-phone"
                        onChange={e => handleChangeValueOfField(e, 'PHONE')}
                        value={valueForm.phone}
                        required
                        sx={styles.input}
                        placeholder="Số điện thoại người nhận"
                      ></OutlinedInput>
                    </div>
                  </div>
                  {!isLogin && (
                    <div style={styles.part3}>
                      <FaRegUserCircle style={styles.icon2} />
                      <Typography sx={styles.text5}>
                        Hãy{' '}
                        <Button disableRipple sx={styles.btn0}>
                          <Typography sx={styles.text6}>đăng nhập</Typography>
                        </Button>{' '}
                        để dễ dàng lưu địa chỉ, theo dõi đơn hàng và bảo hành
                      </Typography>
                    </div>
                  )}
                </div>
              </Paper>
              <Paper sx={Object.assign({ ...styles.paper }, { m: '0' })}>
                <div style={styles.wrap_paper}>
                  <div style={styles.part1}>
                    <MdOutlineLocationOn style={styles.icon1} />
                    <Typography sx={styles.text3}>2. Bạn muốn nhận hàng tại đâu</Typography>
                  </div>
                </div>
                <Box sx={{ width: '100%' }}>
                  <Box>
                    <Tabs value={currentIdx} onChange={handleChangeIdxPanel} aria-label="tabs">
                      <Tab disableRipple label="Tại cửa hàng" id="tab-1" aria-controls="tabpanel-1" sx={styles.tab} />
                      <Tab disableRipple label="Giao tận nơi" id="tab-2" aria-controls="tabpanel-2" sx={styles.tab} />
                    </Tabs>
                  </Box>
                  <div id="tabpanel">
                    {currentIdx === 0 && <TabPanel0 />}
                    {currentIdx === 1 && <TabPanel1 />}
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
                          {parseInt(cartTotal)
                            .toString()
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                        </Typography>
                        <Typography sx={styles.text12}>0</Typography>
                        <Typography sx={styles.text12}>0</Typography>
                      </div>
                    </div>
                    <div style={{ borderBottom: '1px dashed rgba(218, 221, 224,1)' }} />
                    <div style={Object.assign({ ...styles.part7 }, { padding: '12px 0' })}>
                      <div style={style.part7_1}>
                        <Typography sx={styles.text12}>Tổng cộng</Typography>
                      </div>
                      <div style={styles.part7_2}>
                        <Typography sx={Object.assign({ ...styles.text13 }, { padding: '8px 0' })}>
                          {parseInt(cartTotal)
                            .toString()
                            .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                        </Typography>
                      </div>
                    </div>
                    <div style={{ borderBottom: '1px solid rgba(218, 221, 224,1)' }} />
                    <Button sx={styles.btn2} disabled={!isFilledAllInput} onClick={() => handleSubmitForm()}>
                      <Typography sx={styles.text14}>Đặt hàng</Typography>
                      <MdKeyboardArrowRight style={styles.icon6} />
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
          </Grid>
        </Container>
      </form>
    </div>
  );
}

export default InfoOrdersContainer;
