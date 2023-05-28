import { useCallback, useState, useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Paper, Tab, Tabs, Typography } from '@mui/material';
import { useNavigate, Outlet, useLocation } from 'react-router-dom';

import { styles } from './styles';

function Policy() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const location = useLocation();

  const handleChangeIdxPanel = useCallback((event, newValue) => {
    setCurrentIdx(newValue);
  }, []);

  useLayoutEffect(() => {
    switch (location.pathname) {
      case '/user/policy/insurance':
        setCurrentIdx(0);
        break;
      case '/user/policy/deliver':
        setCurrentIdx(1);
        break;
      case '/user/policy/payment':
        setCurrentIdx(2);
        break;
      case '/user/policy/service-cost':
        setCurrentIdx(3);
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return (
    <>
      <Paper sx={styles.paper}>
        <div style={styles.wrap_paper}>
          <Typography sx={styles.text1}>Chính sách cửa hàng</Typography>
          <Box sx={{ width: '100%', pt: '16px' }}>
            <Tabs value={currentIdx} onChange={handleChangeIdxPanel} aria-label="tabs">
              <Tab
                onClick={() => navigate('/user/policy/insurance')}
                disableRipple
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography>{'Bảo hành, đổi trả'}</Typography>
                  </div>
                }
                id="tab-0"
                aria-controls="tabpanel-0"
                sx={styles.tab}
              />
              <Tab
                onClick={() => navigate('/user/policy/deliver')}
                disableRipple
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography>{'Vận chuyển'}</Typography>
                  </div>
                }
                id="tab-1"
                aria-controls="tabpanel-1"
                sx={styles.tab}
              />
              <Tab
                onClick={() => navigate('/user/policy/payment')}
                disableRipple
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography>{'Thanh toán'}</Typography>
                  </div>
                }
                id="tab-2"
                aria-controls="tabpanel-2"
                sx={styles.tab}
              />
              <Tab
                onClick={() => navigate('/user/policy/service-cost')}
                disableRipple
                label={
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Typography>{'Bảng giá dịch vụ'}</Typography>
                  </div>
                }
                id="tab-3"
                aria-controls="tabpanel-3"
                sx={styles.tab}
              />
            </Tabs>
            <Outlet />
          </Box>
        </div>
      </Paper>
    </>
  );
}

export default Policy;
