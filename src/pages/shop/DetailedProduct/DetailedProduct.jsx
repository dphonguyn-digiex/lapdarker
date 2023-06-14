import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Grid, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// import MainDetailedProduct from '~/components/MainDetailedProduct';
import SkeletonTable from '~/components/elements/Skeleton/SkeletonTable';
import InfoMediaProduct from './MainDetailedProduct/InfoMediaProduct';
import { getAbsolutePath } from '~/utils';

import InfoDetailedProduct from './MainDetailedProduct/InfoDetailedProduct';
import InfoPayment from './MainDetailedProduct/InfoPayment';
import { fetchDetailedDevice } from '~/apis/client';

function DetailedProduct() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const location = useLocation();

  useEffect(() => {
    getData()
      .then(() => setLoading(false))
      .catch(err => setLoading(false));
  }, []);

  const getData = async () => {
    setLoading(true);
    const rs = await fetchDetailedDevice(getAbsolutePath(location.pathname));
    if (rs) {
      setData(rs || rs?.data);
    }
  };

  return (
    <div style={styles.container_page}>
      <Container maxWidth="lg" sx={{ pt: '16px' }}>
        {loading && <SkeletonTable />}
        {!loading && Object.keys(data).length > 0 && (
          <Grid columnSpacing={4} container>
            <Grid item md={12} sx={{ display: 'flex', alignItems: 'baseline', mb: '16px' }}>
              <Link style={styles.link} to="/">
                <Typography sx={styles.text_redirect}>Trang chủ</Typography>
              </Link>
              <ArrowForwardIosIcon sx={styles.arrow_icon} />
              <Link style={styles.link} to="/">
                <Typography sx={styles.text_redirect}>{data?.configuration?.brand}</Typography>
              </Link>
            </Grid>
            <Grid item md={7}>
              <InfoMediaProduct data={data} />
              <InfoDetailedProduct data={data} />
            </Grid>
            <Grid item md={5}>
              <InfoPayment data={data} />
            </Grid>
          </Grid>
        )}
      </Container>
    </div>
  );
}

export default DetailedProduct;

const styles = {
  container_page: {
    backgroundColor: 'rgba(248, 250, 252, 1)',
    padding: '80px 0 24px 0',
  },
  text_redirect: {
    color: '#0065ee',
    textTransform: 'capitalize',
  },
  arrow_icon: {
    fontSize: '12px',
    paddingRight: '8px',
    color: 'rgba(140, 145, 161, 1)',
  },
  link: {
    textDecoration: 'none',
    paddingRight: '8px',
  },
};
