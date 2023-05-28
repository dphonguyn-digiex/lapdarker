import { useState, useCallback, useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Paper, Typography, Popover, IconButton, Avatar, ClickAwayListener } from '@mui/material';
import { AiOutlineUser } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { styles } from './styles';
import { dataButton } from './dataButton';
import BoxLogin from '../BoxLogin';
import ButtonItemMenuBox from '~/components/elements/ButtonItemBoxUser';
import { focusOnComponent } from '~/store/actions';
import { userState } from '~/store/selectors';

function BoxUser({ style_icon }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [openBoxLogin, setOpenBoxLogin] = useState(false);

  const dispatch = useDispatch();
  const open = Boolean(anchorEl);
  const isLogin = localStorage.getItem('user') ? true : false;
  const arrayItemButtonAuth = [0, 1, 10];

  useEffect(() => {
    const dataUser = JSON.parse(localStorage.getItem('user'));
    if (dataUser) {
      setUserInfo(dataUser);
    }
  }, [isLogin]);

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

  const handleOpenBoxLogin = () => {
    setOpenBoxLogin(true);
    handleOnFocus(true);
    setAnchorEl(null);
  };
  const handleCloseBoxLogin = () => {
    setOpenBoxLogin(false);
  };
  const isAuthenticatedUser = (
    <div style={styles.part_avt}>
      <Avatar sx={styles.avt}>{userInfo?.fullname ? userInfo?.fullname.split()[0].upperCase() : 'A'}</Avatar>
      <div style={styles.part_avt_content}>
        {userInfo?.fullname && <Typography sx={styles.text03}>{userInfo?.fullname}</Typography>}
        <Typography sx={styles.text04} style={{ ...(!userInfo?.fullname && { fontSize: '20px', fontWeight: 'bold' }) }}>
          {userInfo?.phone ? userInfo?.phone : '09**-***-***'}
        </Typography>
      </div>
    </div>
  );

  const isUnauthenticatedUser = (
    <>
      <div>
        <img src="https://thinkpro.vn/_nuxt/img/person-laptop.0220751.png" alt="img user" style={styles.img} />
      </div>
      <div style={styles.wrap_part1_paper}>
        <Typography sx={styles.text01}>LapDarker xin chào</Typography>
        <Typography sx={{ fontSize: '14px' }}>Hãy đăng nhập để theo dõi đơn hàng và bảo hành dễ dàng nhé</Typography>
        <Button sx={styles.btn_login} onClick={handleOpenBoxLogin}>
          <Typography sx={styles.text_login}>Đăng nhập</Typography>
        </Button>
        <div
          onClick={handleOpenBoxLogin}
          style={{
            display: 'flex'
          }}
        >
          <Typography sx={styles.text02}>Chưa có tài khoản?</Typography>
          <div style={styles.wrap_register}>
            <p style={styles.text_register}>Đăng ký</p>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div>
      <IconButton
        onClick={handleClick}
        sx={{
          margin: '0 0 0 6px',
          '&:hover': {
            backgroundColor: '#14cdc8',
            transition: '0.5s ease-in-out'
          }
        }}
      >
        <AiOutlineUser style={style_icon} />
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
        <Paper sx={styles.paper}>
          <div style={styles.paper_header}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>Tài khoản</Typography>
            <IconButton sx={{ fontSize: '18px', fontWeight: '600' }} onClick={handleClose}>
              <GrClose />
            </IconButton>
          </div>
          <div style={styles.wrap_main_paper}>
            {isLogin ? isAuthenticatedUser : <div style={styles.part1_paper}>{isUnauthenticatedUser}</div>}
            <div>
              {dataButton.map((data, index) => {
                return (
                  <ButtonItemMenuBox
                    useFor={'MENU'}
                    closeBox={handleClose}
                    path={data.path}
                    key={data.text}
                    iconButton={data.icon}
                    text={data.text}
                    slice={index === 1 || index === 4 || index === 9 ? true : false}
                    auth={isLogin ? false : arrayItemButtonAuth.includes(index)}
                  />
                );
              })}
            </div>
          </div>
        </Paper>
      </Popover>
      <BoxLogin isShow={openBoxLogin} handleClose={handleCloseBoxLogin} />
    </div>
  );
}

export default BoxUser;
