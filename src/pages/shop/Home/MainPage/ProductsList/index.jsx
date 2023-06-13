import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import {
  Typography,
  FormControlLabel,
  Grid,
  Card,
  CardContent,
  CardMedia,
  RadioGroup,
  FormControl,
  Radio,
  Button
} from '@mui/material';
import { Search, SearchIconWrapper, StyledInputBase } from '~/components/Custom';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { styles } from './styles';
import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { BiBookmark, BiCart, BiCheck } from 'react-icons/bi';
import { ToastContainer, toast } from 'react-toastify';
import { useCart } from 'react-use-cart';

import { softDevices } from '~/store/actions';
import 'react-toastify/dist/ReactToastify.css';

const TAG_OBJ = {
  REMARKABLE: {
    field: 'name',
    ascSort: 'false',
    name: 'REMARKABLE'
  },
  LOW_TO_HIGH: {
    field: 'original_price',
    ascSort: 'true',
    name: 'LOW_TO_HIGH'
  },
  HIGH_TO_LOW: {
    field: 'original_price',
    ascSort: 'false',
    name: 'HIGH_TO_LOW'
  }
};

function ProductsList({ data, isLoading }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const checkedSoft =
    Object.values(TAG_OBJ).find(i => i.field === searchParams.get('field') && i.ascSort === searchParams.get('ascSort'))
      ?.name || 'REMARKABLE';
  const [textSearch, setTextSearch] = useState('');
  const [showGroupBtnCard, setShowBtnGroupCard] = useState('');
  const dispatch = useDispatch();
  let canRedirect = true;

  const handleCheckedSoftDevices = tag => {
    dispatch(softDevices.priorityFilter(tag));
    setSearchParams(TAG_OBJ[tag] || {});
  };

  const handleSearchDevices = e => {
    setTextSearch(e.target.value);
    dispatch(softDevices.searchFilter(e.target.value));
  };

  const navigate = useNavigate();
  // const location = useLocation();

  const redirectDetailedProductPage = (type, id) => {
    // dispatch(getDetailedDevice.getDetailedDeviceRequest(getAbsolutePath(location.pathname)));
    if (canRedirect) {
      navigate(`/product/${type}s/${id}`);
    }
  };

  const ToastContent = () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <div style={{ display: 'flex' }}>
        <BiCheck style={{ fontSize: '24px' }} />
        <Typography> Thêm thành công</Typography>
      </div>
      <Button sx={{ marginLeft: '24px' }} onClick={() => navigate('/cart')}>
        <Typography sx={{ textTransform: 'initial', color: '#66f1ff' }}>Xem giỏ hàng</Typography>
      </Button>
    </div>
  );

  const { addItem } = useCart();

  const handleClickToBtnCart = data => {
    canRedirect = false;
    const { _id, sale_price, video, img, suit, configuration, ...newData } = data;
    const { detailed_size, ...newConfiguration } = configuration;
    addItem(
      {
        ...newData,
        id: _id,
        price: sale_price,
        _img: img[0],
        configuration: newConfiguration
      },
      1
    );
    toast.dismiss();
    toast(<ToastContent />, {
      toastId: data._id,
      position: 'bottom-left',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { width: 'auto', backgroundColor: 'rgba(2,1,36,.85)' }
    });
  };

  const GroupBtnCard = ({ data }) => (
    <div style={styles.group_btn_card}>
      <Button sx={styles.btn_card}>
        <BiBookmark style={{ fontSize: '24px', color: 'black' }} />
      </Button>
      <Button sx={styles.btn_card} onClick={() => handleClickToBtnCart(data)}>
        <BiCart style={{ fontSize: '24px', color: '#fe3464' }} />
      </Button>
    </div>
  );

  const handleHoverCard = useCallback(id => {
    setShowBtnGroupCard(id);
  }, []);

  return (
    <div>
      <div style={{ paddingLeft: '12px' }}>
        <Search sx={styles.search_bar}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            value={textSearch}
            onChange={handleSearchDevices}
            placeholder="Tìm kiếm…"
            inputProps={{ 'aria-label': 'search' }}
          />
        </Search>
      </div>
      <div style={styles.wrap_main0}>
        <div style={{ display: 'flex' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <SortIcon sx={{ fontSize: '24px', mr: '4px' }} />
            <Typography sx={{ fontWeight: '600', fontSize: '16px' }}>Sắp xếp theo</Typography>
          </div>
          <FormControl>
            <RadioGroup
              sx={{ flexDirection: 'row' }}
              aria-labelledby="demo-radio-buttons-group-label"
              value={checkedSoft}
              name="radio-buttons-group"
            >
              <FormControlLabel
                sx={{
                  paddingLeft: '16px',
                  '&:hover': {
                    color: '#0E86D4'
                  }
                }}
                onClick={() => handleCheckedSoftDevices('REMARKABLE')}
                value="REMARKABLE"
                control={<Radio />}
                label="Nổi bật nhất"
              />
              <FormControlLabel
                sx={{
                  paddingLeft: '10px',
                  '&:hover': {
                    color: '#0E86D4'
                  }
                }}
                onClick={() => handleCheckedSoftDevices('LOW_TO_HIGH')}
                value="LOW_TO_HIGH"
                control={<Radio />}
                label="Giá thấp → cao"
              />
              <FormControlLabel
                sx={{
                  paddingLeft: '10px',
                  '&:hover': {
                    color: '#0E86D4'
                  }
                }}
                onClick={() => handleCheckedSoftDevices('HIGH_TO_LOW')}
                value="HIGH_TO_LOW"
                control={<Radio />}
                label="Giá cao → thấp"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          {data?.length && <Typography>{data?.length} sản phẩm</Typography>}
        </div>
      </div>
      <Grid container sx={{ m: '0', width: '100% !important' }} spacing={1.5}>
        {data?.length > 0 &&
          data.map((device, index) => {
            return (
              <Grid key={device._id} item xs={6} md={4}>
                {/* <Link to={`/product/${device.type}s/${device._id}`} style={{textDecoration: 'none'}}> */}
                <Card
                  sx={styles.card}
                  onClick={() => redirectDetailedProductPage(device.type, device._id)}
                  onMouseOver={() => handleHoverCard(device._id)}
                  onMouseLeave={() => handleHoverCard('')}
                >
                  {showGroupBtnCard === device._id ? <GroupBtnCard data={device} /> : <></>}
                  <div style={{ padding: '16px 40px' }}>
                    <CardMedia sx={styles.card_media} component="img" alt="card media" image={device.img[0]} />
                  </div>
                  <CardContent>
                    <div style={styles.card_content}>
                      <div>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{ fontSize: '17px', fontWeight: '600' }}
                        >
                          {device.name}
                        </Typography>
                        <div style={styles.card_content01}>
                          <Typography variant="subtitle1" sx={styles.subtitle1_font}>
                            Từ
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={styles.body2_font}>
                            {parseInt(device.sale_price)
                              .toString()
                              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                          </Typography>
                        </div>
                        {device.sale > 0 && (
                          <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '6px' }}>
                            <del style={{ color: '#0e0e0e', fontWeight: '600' }}>
                              {parseInt(device.original_price)
                                .toString()
                                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                            </del>
                            -{device.sale}%
                          </Typography>
                        )}
                      </div>
                      <div>
                        <div style={styles.card_content02}>
                          <div style={styles.card_content02_01}>
                            <span style={styles.subtitle2_font}>Màu</span>
                            <div style={Object.assign({ backgroundColor: device.color }, styles.color_info)}></div>
                          </div>
                          <div style={styles.subtitle3_font}>1 phiên bản</div>
                        </div>
                        {device.sale > 0 && (
                          <div style={styles.card_footer}>
                            <CardGiftcardIcon sx={styles.icon_gift} />
                            <Typography sx={styles.subtitle4_font}>Giảm giá</Typography>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {/* </Link> */}
              </Grid>
            );
          })}
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
    </div>
  );
}

export default ProductsList;
