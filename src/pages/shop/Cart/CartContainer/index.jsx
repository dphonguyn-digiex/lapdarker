import { Container, Typography } from '@mui/material';
import React from 'react';
import { styles } from './styles';
import EmptyCart from './EmptyCart';
import Cart from './Cart';
import { useCart } from 'react-use-cart';

function CartContainer() {
  const { totalItems, isEmpty } = useCart();

  return (
    <div style={styles.wrap_container}>
      <Container maxWidth="lg" sx={{ p: '16px 0' }}>
        <div style={{ padding: '10px 0 16px 0' }}>
          <Typography sx={{ fontSize: '28px', p: '0 0 8px 0' }}>Giỏ hàng ({totalItems})</Typography>
          {isEmpty ? <EmptyCart /> : <Cart />}
        </div>
      </Container>
    </div>
  );
}

export default CartContainer;
