import React from 'react';
import { styled } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import { Typography, Button } from '@mui/material';

import { CartItem } from '~/pages/shop/Cart/CartContainer/Cart';
import { styles } from './styles';

const ResultWrapper = styled('div')({
  position: 'absolute',
  width: '100%',
  background: 'rgb(255, 255, 255)',
  boxShadow: 'rgb(0 0 0 / 12%) 0px 2px 12px',
  borderRadius: '8px',
  padding: '1rem',
  boxSizing: 'border-box',
  maxHeight: 'min((100vh - 96px) - 60px, 734px)',
  overflow: 'hidden auto',
  minHeight: '180px'
});

const ResultLabel = styled('div')({
  fontSize: '12px',
  lineHeight: '100%',
  textTransform: 'uppercase',
  fontWeight: '800',
  color: '#000',
  marginBottom: '8px'
});

const NoResult = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  textAlign: 'center',
  color: '#000'
});

const DropDown = ({ products, callback }) => {
  if (!products) return;

  if (products.length === 0) {
    return (
      <ResultWrapper>
        <NoResult>
          <SearchIcon style={{ color: '#000', margin: '8px auto' }} />
          <ResultLabel>Không có kết quả</ResultLabel>
          <p>Đừng lo, ThinkPro luôn sẵn sàng tư vấn miễn phí nếu bạn cần hỗ trợ thêm</p>

          <Button sx={styles.btn_cart}>
            <Typography sx={styles.text_btn_cart}>Tư vấn miễn phí</Typography>
          </Button>
        </NoResult>
      </ResultWrapper>
    );
  }

  return (
    <ResultWrapper onFocus={() => {}}>
      <ResultLabel>Sản phẩm ({products.length})</ResultLabel>
      {products.map((item, index) => {
        const product = { ...item, id: item._id, _img: item.img?.[0], price: item.sale_price || 0 };
        return (
          <CartItem key={product.id} item={product} index={index} itemLength={products.length} callback={callback} />
        );
      })}
    </ResultWrapper>
  );
};

export default DropDown;
