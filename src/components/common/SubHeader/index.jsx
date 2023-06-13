import { useState, useContext, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';
import { Button, Typography, IconButton, Container } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { ThemeContext } from '~/context/ThemeContext';
import { focusComponentState } from '~/store/selectors';

import useStyles from './styles';
import { devices } from './data';
import { productTypes } from '~/utils/contants';

import './style.css'

const styles = {
  box: {
    p: '6px 0px',
    bgcolor: 'rgba(255, 255, 255, 1)',
    boxShadow: '0 0 #0000, 0 0 #0000, 0px 0px 12px rgba(0, 0, 0, 0.06)',
    zIndex: 2
  },
  btn_device: {
    padding: '0',
    margin: '0 4px',
    borderRadius: '8px'
  },
  text_btn_device: {
    p: '8px',
    color: 'black',
    fontWeight: '600',
    fontSize: '14px',
    textTransform: 'initial'
  }
};

function SubHeader() {
  const classes = useStyles();
  const [selectedItemSubmenu, setSelectedItemSubmenu] = useState('Laptop');
  const [showSubHeader, setShowSubHeader] = useState(true);
  const [idxSlider, setIdxSlider] = useState(0);
  const { pathname } = useLocation();
  const globalState = useContext(ThemeContext);
  const isFocusComponent = useSelector(focusComponentState);

  useEffect(() => {
    if (globalState.isScrollDown === true && !isFocusComponent) {
      setShowSubHeader(false);
    } else {
      if (productTypes.includes(pathname.split('/').pop())) {
        setSelectedItemSubmenu(pathname.split('/').pop());
      } else setSelectedItemSubmenu('laptops');
      // if (!showSubHeader) return;
      setShowSubHeader(true);
    }
  }, [globalState.isScrollDown, isFocusComponent, showSubHeader, pathname]);

  const elm_slider1 = devices.slice(0, 7);
  const elm_slider2 = devices.slice(6);

  const redirectTypeProductPage = useCallback(
    name => {
      setSelectedItemSubmenu(name);
    },
    [setSelectedItemSubmenu]
  );

  const subheader = (
    <Box sx={styles.box} position="fixed" left="0" right="0" top="80px">
      <Container
        maxWidth="lg"
        sx={{
          '& .carousel-root': {
            width: '92%'
          }
        }}
      >
        <div
          style={{
            display: 'flex',
            position: 'relative'
          }}
        >
          <Carousel
            style={{ justifyContent: 'start' }}
            selectedItem={idxSlider}
            showStatus={false}
            showThumbs={false}
            showArrows={false}
            showIndicators={false}
          >
            <div className={classes.group_btn_devices}>
              {elm_slider1.map((device, index) => {
                return (
                  <Link key={index} to={`/product/${device.url}`} style={{ textDecoration: 'none' }}>
                    <Button
                      sx={{
                        padding: '0',
                        margin: '0 4px',
                        borderRadius: '8px',
                        bgcolor: device.url === selectedItemSubmenu ? '#ECF0F4' : 'transparent',
                        display: 'flex'
                      }}
                      onClick={() => redirectTypeProductPage(device.url)}
                    >
                      <img className={classes.img} src={device.img} alt={device.name} />
                      <Typography sx={styles.text_btn_device} variant="body2">
                        {device.name}
                      </Typography>
                    </Button>
                  </Link>
                );
              })}
            </div>
            <div className={classes.group_btn_devices}>
              {elm_slider2.map((device, index) => {
                return (
                  <Link key={index} to={`/product/${device.url}`} style={{ textDecoration: 'none' }}>
                    <Button
                      sx={{
                        padding: '0',
                        margin: '0 4px',
                        borderRadius: '8px',
                        bgcolor: device.url === selectedItemSubmenu ? '#ECF0F4' : 'transparent'
                      }}
                      onClick={() => redirectTypeProductPage(device.url)}
                    >
                      <img className={classes.img} src={device.img} alt={device.name} />
                      <Typography sx={styles.text_btn_device} variant="body2">
                        {device.name}
                      </Typography>
                    </Button>
                  </Link>
                );
              })}
            </div>
          </Carousel>
          <div style={{ display: 'flex', position: ' absolute', right: '0', top: '4px' }}>
            <IconButton onClick={() => setIdxSlider(0)} sx={{ bgcolor: '#f8fafc' }} disabled={idxSlider === 0}>
              <ArrowBackIosNewIcon />
            </IconButton>
            <IconButton
              onClick={() => setIdxSlider(1)}
              sx={{ bgcolor: '#f8fafc', ml: '6px' }}
              disabled={idxSlider === 1}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>
      </Container>
    </Box>
  );

  return showSubHeader ? subheader : <></>;
}

export default SubHeader;
