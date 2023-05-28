import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Button, IconButton } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import { brand } from './data';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import useStyles from './styles';

const styles = {
  btn: {
    padding: '0',
    margin: '0 4px',
    borderRadius: '8px',
    width: '120px',
    height: '80px',
    border: '1px solid rgba(236, 240, 244,1)',
    '&:hover': {
      bgcolor: '#ECF0F4'
    }
  }
};

function BrandIntro() {
  const classes = useStyles();
  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 8px)',
    width: 45,
    height: 45,
    cursor: 'pointer'
  };
  return (
    <Carousel
      style={{ justifyContent: 'start' }}
      selectedItem={0}
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      renderArrowNext={(onClickHandler, hasNext, label) =>
        hasNext && (
          <IconButton onClick={onClickHandler} title={label} sx={{ ...arrowStyles, right: 15, bgcolor: '#faf8fc' }}>
            <ArrowForwardIosIcon />
          </IconButton>
        )
      }
      renderArrowPrev={(onClickHandler, hasPrev, label) =>
        hasPrev && (
          <IconButton onClick={onClickHandler} title={label} sx={{ ...arrowStyles, right: 15, bgcolor: '#faf8fc' }}>
            <ArrowBackIosNewIcon />
          </IconButton>
        )
      }
    >
      <div className={classes.group_btn_devices}>
        {brand.map((device, index) => {
          return index > 7 ? null : (
            <div key={device.name} className={classes.wrap_btn}>
              <Button
                sx={styles.btn}
                // onClick={()=>handleOnclickButtonDevice(device.name)}
              >
                <img
                  className={
                    device.name === 'gigabyte' || device.name === 'acer' || device.name === 'lenovo'
                      ? classes.img_other
                      : classes.img
                  }
                  src={device.src}
                  alt={device.name}
                />
              </Button>
            </div>
          );
        })}
      </div>
      <div className={classes.group_btn_devices}>
        {brand.map((device, index) => {
          return index < 3 ? null : (
            <div key={device.name} className={classes.wrap_btn}>
              <div className={classes.wrap_btn}>
                <Button
                  sx={styles.btn}
                  // onClick={()=>handleOnclickButtonDevice(device.name)}
                >
                  <img
                    className={
                      device.name === 'gigabyte' || device.name === 'acer' || device.name === 'lenovo'
                        ? classes.img_other
                        : classes.img
                    }
                    src={device.src}
                    alt={device.name}
                  />
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </Carousel>
  );
}

export default BrandIntro;
