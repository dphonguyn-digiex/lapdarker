import { useCallback, useContext, useState } from 'react';
import { Button, Paper, Typography, Popover, IconButton } from '@mui/material';
import { BiBell } from 'react-icons/bi';
import { GrClose } from 'react-icons/gr';
import { useDispatch, useSelector } from 'react-redux';

import { userState } from '~/store/selectors';
import img_intro from '~/assets/img/selections/user01.png';

import BoxLogin from '../BoxLogin';
import { styles } from './styles';
import { focusOnComponent } from '~/store/actions/index';
function BoxNotification({ style_icon }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openBoxLogin, setOpenBoxLogin] = useState(false);
  const isLogin = localStorage.getItem('user') ? true : false;
  const dispatch = useDispatch();

  const handleOnFocus = useCallback(
    focus => {
      dispatch(
        focusOnComponent.setFocusOnComponent({
          state: focus
        })
      );
    },
    [dispatch]
  );

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    handleOnFocus(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    handleOnFocus(false);
  };

  const open = Boolean(anchorEl);

  const handleOpenBoxLogin = () => {
    setOpenBoxLogin(true);
    setAnchorEl(null);
  };

  const handleCloseBoxLogin = () => {
    setOpenBoxLogin(false);
  };

  const isAuthenticatedUser = (
    <>
      <div style={styles.wrap_part1_paper}>
        <IconButton sx={styles.icon_btn}>
          <BiBell style={styles.icon_bell} />
        </IconButton>
        <Typography style={styles.text01}>Chưa có thông báo</Typography>
        <div style={styles.wrap_part2_paper}>
          <img src={img_intro} alt="img box notify" />
        </div>
      </div>
    </>
  );

  const isUnauthenticatedUser = (
    <>
      <div style={styles.wrap_part1_paper}>
        <IconButton sx={styles.icon_btn}>
          <BiBell style={styles.icon_bell} />
        </IconButton>
        <Typography style={styles.text01}>Chưa có thông báo</Typography>
        <Typography style={styles.text02}>Hãy đăng nhập để tối ưu hóa trải nghiệm trên</Typography>
        <Typography style={styles.text02}>LapDarker.vn bạn nhé</Typography>
        <Button sx={styles.btn_login} onClick={handleOpenBoxLogin}>
          <Typography sx={styles.text_login}>Đăng nhập</Typography>
        </Button>
      </div>
      <div style={styles.wrap_part2_paper}>
        <img src={img_intro} alt="img box notify" />
      </div>
    </>
  );

  return (
    <div>
      <IconButton
        onClick={handleClick}
        sx={{
          margin: '0 6px',
          '&:hover': {
            backgroundColor: '#14cdc8',
            transition: '0.5s ease-in-out'
          }
        }}
      >
        <BiBell style={style_icon} />
      </IconButton>

      <Popover
        disableScrollLock
        id={open ? 'simple-popover' : undefined}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          horizontal: 'right',
          vertical: 'bottom'
        }}
        sx={{
          '& .MuiPaper-root': {
            overflowY: 'hidden',
            borderRadius: '16px'
          },
          '& .MuiPopover-paper': {
            top: '80px !important'
          }
        }}
      >
        <Paper
          sx={styles.paper}
          // onMouseOver={() => handleOnHoverBoxNotification(true)}
          // onMouseLeave={() => handleOnHoverBoxNotification(false)}
        >
          <div style={styles.paper_header}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Thông báo</Typography>
            <IconButton sx={{ fontSize: '18px', fontWeight: '600' }} onClick={handleClose}>
              <GrClose />
            </IconButton>
          </div>
          <div style={styles.wrap_main_paper}>
            {isLogin ? isAuthenticatedUser : <div style={styles.part1_paper}>{isUnauthenticatedUser}</div>}
          </div>
        </Paper>
      </Popover>
      <BoxLogin isShow={openBoxLogin} handleClose={handleCloseBoxLogin} />
    </div>
  );
}

export default BoxNotification;
