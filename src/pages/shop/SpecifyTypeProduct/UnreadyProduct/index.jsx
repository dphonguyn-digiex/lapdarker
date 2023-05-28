import { Button, Container, Typography } from '@mui/material';
import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import girl_character from '~/assets/img/characters/girl.jpg';
const styles = {
  btn: {
    border: '1px solid rgba(240, 242, 244,1)',
    backgroundColor: '#fff',
    borderRadius: '0.5rem',
    margin: '4px',
    padding: '8px 12px'
  },
  text_btn: {
    textTransform: 'initial',
    color: '#000'
  }
}

function UnreadyProductPage() {
  const navigate = useNavigate();
  return (
    <div style={{ backgroundColor: 'rgba(255,255,255,2)', padding: '150px 0 8px 0'}}>
      <Container maxWidth="lg" sx={{ pt: '16px', pb: '24px' }}>
        <div style={{ borderRadius: '16px', position: 'relative'}}>
          <img src={girl_character} alt="girl-character" style={{ width: '100%', borderRadius: '16px' }} />
          <div style={{ position: 'absolute', top: 200, left: 600, minWidth: '200px', minHeight:'100px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <Typography style={{fontWeight: 'bold', fontSize: '20px'}}>
                Sản phẩm này chưa được shop kinh doanh 🤧
              </Typography>
              <Typography sx={{ pb: 2 }}>
                Mời bạn tham khảo các sản phẩm khác
              </Typography>
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
          </div>
        </div>
      </Container>
    </div>
  )
}

export default UnreadyProductPage;

