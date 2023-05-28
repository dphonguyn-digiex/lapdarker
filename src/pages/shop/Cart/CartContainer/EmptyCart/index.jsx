import { Button, Paper, Typography } from '@mui/material';
import React from 'react';
import img_intro from '~/assets/img/selections/user01.png';
import { styles } from './styles';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

function EmptyCart() {
  const navigate = useNavigate();
  return (
    <Paper sx={styles.paper}>
      <div style={styles.wrap_paper}>
        <div style={styles.paper_part01}>
          <div>
            <AiOutlineShoppingCart style={styles.icon_inside} />
          </div>
          <Typography style={styles.text01}>Giỏ hàng trống</Typography>
          <Typography style={styles.text02}>Hãy thoải mái lựa chọn sản phẩm bạn nhé</Typography>
          <div style={styles.group_btn}>
            <Link to="/product/laptops" style={{ textDecoration: 'none' }}>
              <Button sx={styles.btn} onClick={() => navigate('/product/laptops')}>
                <Typography sx={styles.text_btn}>Laptop</Typography>
              </Button>
            </Link>
            <Link to="/product/monitors" style={{ textDecoration: 'none' }}>
              <Button sx={styles.btn} onClick={() => navigate('/product/monitors')}>
                <Typography sx={styles.text_btn}>Màn hình máy tính</Typography>
              </Button>
            </Link>
            <Link to="/product/keyboards" style={{ textDecoration: 'none' }}>
              <Button sx={styles.btn} onClick={() => navigate('/product/keyboards')}>
                <Typography sx={styles.text_btn}>Bàn phím</Typography>
              </Button>
            </Link>
          </div>
        </div>
        <div style={styles.paper_part02}>
          <img src={img_intro} alt="img box notify" height="100%" />
        </div>
      </div>
    </Paper>
  );
}

export default EmptyCart;

