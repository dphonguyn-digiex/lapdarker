import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';
import MenuSearchProducts from './MenuSearchProducts';
import ProductsList from './ProductsList';
import { useSelector } from 'react-redux';
import { devicesFiltersState } from '~/store/selectors';
function MainPage(props) {
  const { data, isLoading } = props;
  const location = useLocation();
  // const data = useSelector(devicesFiltersState);
  return (
    <div style={{ backgroundColor: 'rgba(248, 250, 252, 1)', padding: '24px 0 24px 0' }}>
      <Container maxWidth="lg">
        <Grid container>
          {location.pathname === '/' && (
            <Grid item md={12}>
              <Typography variant="h4" sx={{ fontWeight: '600', fontSize: '32px' }}>
                Tất cả Laptop
              </Typography>
            </Grid>
          )}
          <Grid item md={12}>
            <div style={{ display: 'flex', padding: location.pathname === '/' ? '24px 0' : '0' }}>
              <Grid item md={3}>
                <MenuSearchProducts />
              </Grid>
              <Grid item md={9} sx={{ pl: '16px' }}>
                <ProductsList data={data} isLoading={isLoading} />
              </Grid>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default MainPage;
