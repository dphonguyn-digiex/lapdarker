import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { FiInfo, FiPhone } from 'react-icons/fi';
import { MdOutlineWavingHand } from 'react-icons/md';
import { AiOutlineSafety, AiOutlineSwap } from 'react-icons/ai';
import { BsJournalCheck, BsMap } from 'react-icons/bs';
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { RiFacebookCircleLine } from 'react-icons/ri';
import { BiNotepad } from 'react-icons/bi';
import fb_png from '~/assets/img/social/fb.png';
import insta_png from '~/assets/img/social/insta.png';
import ytb_png from '~/assets/img/social/youtube.png';
import tiktok_png from '~/assets/img/social/tiktok.png';
import img_store from '~/assets/img/selections/04.jpg';
import brang_img from '~/assets/img/subheader_item/brand1.png';
import customer_img from '~/assets/img/selections/13.jpg';
import { styles } from './styles';

function Footer() {
  return (
    <div style={styles.footer}>
      <Container maxWidth="lg">
        <Paper sx={styles.paper}>
          <div style={styles.main_footer}>
            <Typography sx={styles.text_header_footer}>Tự tin mua sắm cùng LapDarker</Typography>
            {/*  */}
            <div style={Object.assign({ borderBottom: '1px solid rgba(218, 221, 224,1)' }, styles.body_footer)}>
              <div style={Object.assign({ padding: '12px 28px 12px 0' }, styles.elm_body_footer)}>
                <AiOutlineSafety style={styles.icons} />
                <Typography sx={styles.text_body01}>Chế độ bảo hành tận tâm</Typography>
                <Typography sx={styles.text_body02}>
                  Tất cả các sản phẩm do LapDarker bán ra đều được tuân thủ điều kiện bảo hành của nhà cung cấp, hãng
                  sản xuất. Nếu có vấn đề về chất lượng sản phẩm, LapDarker xin cam kết sẽ hỗ trợ Quý khách tới cùng.
                </Typography>
                <div style={styles.btn_info}>
                  <Typography sx={styles.text_btn_info}>Chi tiết</Typography>
                  <AiOutlineArrowRight style={styles.icon_btn_info} />
                </div>
              </div>
              <div style={Object.assign({ padding: '12px 0 12px 0' }, styles.elm_body_footer)}>
                <AiOutlineSwap style={styles.icons} />
                <Typography sx={styles.text_body01}>Hỗ trợ đổi trả 1-1 hoặc hoàn tiền 100%</Typography>
                <Typography sx={styles.text_body02}>
                  Với thời gian dùng thử lên tới 15 ngày, Quý khách sẽ được hỗ trợ đổi trả 1-1 hoặc hoàn tiền 100% nếu
                  phát sinh lỗi hoặc cảm thấy sản phẩm chưa đáp ứng được nhu cầu.
                </Typography>
                <div style={styles.btn_info}>
                  <Typography sx={styles.text_btn_info}>Chi tiết</Typography>
                  <AiOutlineArrowRight style={styles.icon_btn_info} />
                </div>
              </div>
            </div>
            <div
              style={Object.assign(
                {
                  flexDirection: 'column',
                  borderBottom: '1px solid rgba(218, 221, 224,1)'
                },
                styles.body_footer
              )}
            >
              <FiInfo style={Object.assign({ margin: '12px 0 0 0' }, styles.icons)} />
              <Typography sx={styles.text_body01}>Thông tin hữu ích</Typography>
              <Grid container rowSpacing={1} columnSpacing={2}>
                <Grid item md={6}>
                  <Button sx={styles.btn_contact}>
                    <FiPhone style={styles.icons_btn_ct} />
                    <Typography sx={styles.text_btn_ct}>Hotline: 0947443064</Typography>
                  </Button>
                </Grid>
                <Grid item md={6}>
                  <Button sx={styles.btn_contact}>
                    <AiOutlineCodeSandbox style={styles.icons_btn_ct} />
                    <Typography sx={styles.text_btn_ct}>Vận chuyển thanh toán</Typography>
                  </Button>
                </Grid>
                <Grid item md={6}>
                  <Button sx={styles.btn_contact}>
                    <RiFacebookCircleLine style={styles.icons_btn_ct} />
                    <Typography sx={styles.text_btn_ct}>Group trao đổi và hỗ trợ</Typography>
                  </Button>
                </Grid>
                <Grid item md={6}>
                  <Button sx={styles.btn_contact}>
                    <BsJournalCheck style={styles.icons_btn_ct} />
                    <Typography sx={styles.text_btn_ct}>Tra cứu bảo hành</Typography>
                  </Button>
                </Grid>
                <Grid item md={6}>
                  <Button sx={styles.btn_contact}>
                    <BsMap style={styles.icons_btn_ct} />
                    <Typography sx={styles.text_btn_ct}>Hệ thống cửa hàng</Typography>
                  </Button>
                </Grid>
                <Grid item md={6}>
                  <Button sx={styles.btn_contact}>
                    <BiNotepad style={styles.icons_btn_ct} />
                    <Typography sx={styles.text_btn_ct}>Bảng giá dịch vụ</Typography>
                  </Button>
                </Grid>
              </Grid>
            </div>
            {/*  */}
            <div style={Object.assign({ flexDirection: 'column' }, styles.body_footer)}>
              <MdOutlineWavingHand style={Object.assign({ margin: '12px 0 0 0' }, styles.icons)} />
              <Typography sx={styles.text_body01}>LapDarker trên social networks</Typography>
              <div style={styles.group_btn_social}>
                <Button sx={Object.assign({ ml: '0 !important' }, styles.btn_social)}>
                  <img src={fb_png} alt="facebook" />
                  <Typography sx={styles.text_btn_social}>Facebook</Typography>
                </Button>
                <Button sx={styles.btn_social}>
                  <img src={ytb_png} alt="youtube" />
                  <Typography sx={styles.text_btn_social}>Youtube</Typography>
                </Button>
                <Button sx={styles.btn_social}>
                  <img src={tiktok_png} alt="tiktok" />
                  <Typography sx={styles.text_btn_social}>TikTok</Typography>
                </Button>
                <Button sx={Object.assign({ mr: '0px !important' }, styles.btn_social)}>
                  <img src={insta_png} alt="insta" />
                  <Typography sx={styles.text_btn_social}>Instagram</Typography>
                </Button>
              </div>
            </div>
          </div>
          {/*  */}
          {/*  */}
          <div style={{ flexBasic: '0px', flex: '1 1 0px' }}>
            <img style={styles.img_footer} src={customer_img} alt="img footer" />
          </div>
        </Paper>

        <Paper sx={Object.assign(styles.paper)}>
          <div
            style={Object.assign(
              { ...styles.main_footer },
              {
                flexDirection: 'row',
                flex: '1 1 0px',
                padding: '16px 32px 8px 32px'
              }
            )}
          >
            <div style={Object.assign({ ...styles.body_footer }, { flexDirection: 'column' })}>
              <img style={styles.img_brand} src={brang_img} alt="img brand" />
              <Typography sx={styles.text_body03}>Chân thành phục vụ từ 2022</Typography>
              <Grid container rowSpacing={1} columnSpacing={2}>
                <Grid item md={4}>
                  <Button sx={styles.btn_redirect}>
                    <Typography sx={styles.text_btn_redirect}>Về chúng tôi</Typography>
                  </Button>
                </Grid>
                <Grid item md={4}>
                  <Button sx={styles.btn_redirect}>
                    <Typography sx={styles.text_btn_redirect}>Vì khách hàng</Typography>
                  </Button>
                </Grid>
                <Grid item md={4}>
                  <Button sx={styles.btn_redirect}>
                    <Typography sx={styles.text_btn_redirect}>Đội ngũ</Typography>
                  </Button>
                </Grid>
                <Grid item md={4}>
                  <Button sx={styles.btn_redirect}>
                    <Typography sx={styles.text_btn_redirect}>Tin tức</Typography>
                  </Button>
                </Grid>
                <Grid item md={4}>
                  <Button sx={styles.btn_redirect}>
                    <Typography sx={styles.text_btn_redirect}>Khuyến mại</Typography>
                  </Button>
                </Grid>
              </Grid>
            </div>
          </div>
          <div style={{ flexBasis: '0px', flex: '1 1 0px' }}>
            <img style={styles.img_footer} src={img_store} alt="img store" />
          </div>
        </Paper>
      </Container>
    </div>
  );
}

export default Footer;
