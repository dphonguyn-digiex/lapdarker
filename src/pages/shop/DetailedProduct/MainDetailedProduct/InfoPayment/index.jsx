import { useState } from 'react';
import { Typography, Drawer, Button } from '@mui/material';
import { Scrollbars } from 'react-custom-scrollbars';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import StarIcon from '@mui/icons-material/Star';
import BookIcon from '@mui/icons-material/Book';
import BoltIcon from '@mui/icons-material/Bolt';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { FcApproval } from 'react-icons/fc';
import { styles } from './styles';
import { useCart } from 'react-use-cart';
import { toast, ToastContainer } from 'react-toastify';
import { BiCheck } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function InfoPayment({ data }) {
  const [onHoverDrawer, setOnHoverDrawer] = useState(true);
  const handleOnHoverDrawer = bool => {
    setOnHoverDrawer(bool);
  };
  const { addItem } = useCart();
  const navigate = useNavigate();
  const handleAddToCart = () => {
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
      toastId: data?._id,
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

  return (
    <div style={styles.container_info_payment}>
      <Scrollbars
        style={{
          width: '100%',
          height: '456px',
          overflow: 'hidden'
        }}
        autoHide={onHoverDrawer}
        onMouseOver={() => handleOnHoverDrawer(false)}
        onMouseLeave={() => handleOnHoverDrawer(true)}
        autoHideTimeout={100}
        autoHideDuration={100}
      >
        <Drawer
          sx={{
            '& .MuiDrawer-paper': {
              width: '100%',
              boxSizing: 'border-box',
              bgcolor: 'transparent',
              position: 'static'
            }
          }}
          variant="permanent"
        >
          <div style={styles.detailed_info_payment}>
            <div style={styles.message_box}>
              <FcApproval fill="rgb(0, 230, 64);" style={styles.icon_approval} />
              <div style={styles.message_box_content}>
                <Typography variant="body2" sx={styles.message_box_text}>
                  LapDarker là Nhà bán lẻ chính thức của {data?.brand} tại Việt Nam
                </Typography>
              </div>
            </div>
            <div style={styles.info_part01}>
              <div style={styles.info_part01_1}>
                <StarIcon sx={styles.icon_star} />
                <Button
                  disableRipple
                  sx={{
                    padding: '0',
                    '&:hover': {
                      bgcolor: 'transparent'
                    }
                  }}
                >
                  <Typography sx={styles.text01}>Đánh giá sản phẩm</Typography>
                </Button>
              </div>
              <Button disableRipple sx={{ ml: '8px' }} endIcon={<BookIcon sx={{ color: '#0e0e0e' }} />}>
                <Typography sx={styles.text02}>Lưu</Typography>
              </Button>
            </div>
            <div>
              <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                {data?.name}
              </Typography>
            </div>
            <div style={{ display: 'flex' }}>
              <Typography sx={styles.text03}>SKU: </Typography>
              <Typography sx={styles.text04}>{data?.sku}</Typography>
            </div>
            <div style={styles.info_part02}>
              <Typography sx={styles.text05}>
                {parseInt(data?.sale_price)
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
              </Typography>
              <Typography sx={styles.text06}>
                <del style={{}}>
                  {parseInt(data?.original_price)
                    .toString()
                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
                </del>
              </Typography>
              <Typography sx={styles.text07}>-{data?.sale}%</Typography>
            </div>
            <div style={styles.info_part03}>
              <div style={styles.info_part03_1}>
                <BoltIcon sx={styles.icon_bolt} />
                <Typography sx={styles.text08}>
                  Tặng chuột Gaming TUF M3 khi mua laptop Gaming Asus Chính Hãng tại LapDarker
                </Typography>
              </div>
              <div style={styles.info_part03_2}>
                <BoltIcon sx={styles.icon_bolt} />
                <Typography sx={styles.text08}>Giảm 3.500.000đ - Giá Tốt Nhất Thị Trường Tại LapDarker</Typography>
              </div>
            </div>
            <div style={styles.info_part04}>
              <Typography sx={styles.text09}>Màu</Typography>
              <Typography sx={styles.text10}>{data?.color}</Typography>
              <div style={styles.info_part04_1}>
                <div style={Object.assign({ backgroundColor: data?.color }, styles.box_color)}></div>
                <div
                  style={{
                    width: '24px',
                    height: '2px',
                    backgroundColor: data?.color
                  }}
                ></div>
              </div>
            </div>
            <div>
              <div style={styles.wrap_icon_help}>
                <HelpOutlineIcon sx={styles.icon_help} />
              </div>
            </div>
          </div>
        </Drawer>
      </Scrollbars>
      <div style={styles.options_payment}>
        <div style={{ display: 'flex' }}>
          <Typography variant="body2" sx={styles.text11}>
            <del style={styles.del_tag}>
              {parseInt(data?.original_price)
                .toString()
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
            </del>
            -{data?.sale}%
          </Typography>
        </div>
        <div style={{ paddingTop: '8px' }}>
          <Typography variant="body2" sx={styles.text12}>
            {parseInt(data?.sale_price)
              .toString()
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}
          </Typography>
        </div>
        <div style={{ display: 'flex', paddingTop: '10px' }}>
          <Button sx={styles.btn_cart} onClick={handleAddToCart}>
            <Typography sx={styles.text_btn_cart}>Thêm vào giỏ hàng</Typography>
          </Button>
          <Button sx={styles.btn_compare}>
            <AddCircleOutlineIcon sx={styles.icon_add} />
            <Typography sx={styles.text_btn_compare}>So sánh</Typography>
          </Button>
        </div>
      </div>
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

export default InfoPayment;
