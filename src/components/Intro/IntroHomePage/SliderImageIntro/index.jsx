import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import { ToggleButton, Typography } from '@mui/material';
import { data } from './data';
import useStyles from './styles';
import './styles.css';
const styles = {
  btn: {
    overflow: 'hidden',
    color: 'white',
    bgcolor: 'rgba(0,0,0,.4)',
    p: '8px',
    borderRadius: '12px',
    '&:hover': {
      color: 'black',
      bgcolor: 'white'
    },
    '&.Mui-selected': {
      color: 'black',
      bgcolor: 'white'
    }
  },
  text_btn: {
    fontSize: '12px',
    fontWeight: '600',
    textAlign: 'left'
  },
  selected: {
    color: 'black',
    bgcolor: 'white'
  }
};

function SliderImageIntro() {
  const classes = useStyles();
  const [selectedBtn, setSelectedBtn] = useState('msi');
  const [index, setIndex] = useState(0);
  const handleClickToggleBtn = (name, id) => {
    setSelectedBtn(name);
    setIndex(id);
  };
  return (
    <Carousel
      className="carousel-app"
      selectedItem={index}
      showStatus={false}
      showThumbs={false}
      showArrows={false}
      renderIndicator={() => {
        return (
          <div className={classes.group_button}>
            <div className={classes.btn}>
              <ToggleButton
                value="0"
                sx={styles.btn}
                selected={selectedBtn === 'msi' ?? true}
                onClick={() => handleClickToggleBtn('msi', 0)}
              >
                <Typography variant="body1" component="span" sx={styles.text_btn}>
                  LENOVO LEGION 5: Best Choice tầm giá 27 triệu!
                </Typography>
              </ToggleButton>
            </div>
            <div className={classes.btn}>
              <ToggleButton
                value="1"
                sx={styles.btn}
                selected={selectedBtn === 'huewei' ?? true}
                onClick={() => handleClickToggleBtn('huewei', 1)}
              >
                <Typography variant="body1" component="span" sx={styles.text_btn}>
                  Acer Nitro 5 Tiger: laptop gaming bán chạy số 1 tại...
                </Typography>
              </ToggleButton>
            </div>
            <div className={classes.btn}>
              <ToggleButton
                value="2"
                sx={styles.btn}
                selected={selectedBtn === 'asus' ?? true}
                onClick={() => handleClickToggleBtn('asus', 2)}
              >
                <Typography variant="body1" component="span" sx={styles.text_btn}>
                  Asus Zenbook 13 OLED: Tuyệt phẩm trải nghiệm...
                </Typography>
              </ToggleButton>
            </div>
          </div>
        );
      }}
    >
      {data.map(img => {
        return (
          <div key={img.name} className={classes.container}>
            <div className={classes.wrap_img}>
              <img className={classes.img} src={img.src} alt={`introduction img`} />
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}

export default SliderImageIntro;
