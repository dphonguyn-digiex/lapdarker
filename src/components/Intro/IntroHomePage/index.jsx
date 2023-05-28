import { Container, Grid, Typography } from '@mui/material';
import BrandIntro from './BrandIntro';
import SliderImageIntro from './SliderImageIntro';
import useStyles from './styles';

const styles = {
  container: {
    pt: '16px',
    pb: '24px'
  },
  grid_info: {
    flexGrowl: 1,
    pl: '16px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column'
  },
  wrap_intro_info: {
    background: 'rgba(248, 250, 252, 1)',
    padding: '16px 16px 24px 16px',
    borderRadius: '12px'
  },
  heading_intro_info: {
    fontWeight: '600'
  },
  body_intro_info: {
    lineHeight: '0',
    fontSize: '14px'
  },
  text_intro_heading: {
    fontWeight: '600',
    pt: '24px',
    fontSize: '22px'
  }
};

function IntroHomePage() {
  const classes = useStyles();

  return (
    <div className={classes.container_intro}>
      <Container maxWidth="lg" sx={styles.container}>
        <Grid container>
          <Grid item md={9}>
            <SliderImageIntro />
          </Grid>
          <Grid item md={3} sx={styles.grid_info}>
            <div style={styles.wrap_intro_info}>
              <Typography variant="h6" sx={styles.heading_intro_info}>
                Miễn phí vận chuyển
              </Typography>
              <Typography variant="caption" sx={styles.body_intro_info}>
                100% đơn hàng đều được miễn phí vận chuyển khi thanh toán trước.
              </Typography>
            </div>
            <div style={styles.wrap_intro_info}>
              <Typography variant="h6" sx={styles.heading_intro_info}>
                Bảo hành tận tâm
              </Typography>
              <Typography variant="caption" sx={styles.body_intro_info}>
                Bất kể giấy tờ thế nào, LapDarker luôn cam kết sẽ hỗ trợ khách hàng tới cùng.
              </Typography>
            </div>
            <div style={styles.wrap_intro_info}>
              <Typography variant="h6" sx={styles.heading_intro_info}>
                Đổi trả 1-1 hoặc hoàn tiền
              </Typography>
              <Typography variant="caption" sx={styles.body_intro_info}>
                Nếu phát sinh lỗi hoặc bạn cảm thấy sản phẩm chưa đáp ứng được nhu cầu.
              </Typography>
            </div>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={12}>
            <Typography variant="h5" sx={styles.text_intro_heading}>
              Thương hiệu nổi bật
            </Typography>
          </Grid>
          <Grid item md={12}>
            <BrandIntro />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default IntroHomePage;
