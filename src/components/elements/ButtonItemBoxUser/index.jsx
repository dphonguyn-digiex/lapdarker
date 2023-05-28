import { Button, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { IoIosArrowForward } from 'react-icons/io';

import useStyles from './styles';
import cursor_error from '~/assets/img/cursor/cursor06.png';
import { postLogout } from '~/store/actions';

function ButtonItemMenuBox({ iconButton, text, slice, auth, path, closeBox, useFor }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (localStorage.getItem('_pathname')) {
    var currentBtn = localStorage.getItem('_pathname').includes(path);
  }
  
  const handleClickOnBtn = (e, _auth) => {
    let _path = path;
    if (auth) return e.preventDefault();
    if (_path === 'user/logout') return dispatch(postLogout.postLogoutRequest());
    if (useFor === 'USER_PAGE') {
      _path = path.split('user/')[1];
    }
    navigate(_path);
    if (useFor === 'MENU') {
      closeBox();
    }
    return;
  };

  return (
    // <Link to={`/${path}`} className={classes.a}>
      <Button
        disabled={auth}
        onClick={e => handleClickOnBtn(e, auth)}
        className={classes.btn}
        style={{borderBottom: slice ? '1px solid rgba(240, 242, 244,1)' : '0px'}}
        sx={{
          border: !auth && currentBtn ? '1px solid #0065ee !important' : '0px',
          '&.Mui-disabled': {
            pointerEvents: 'all',
            cursor: `url(${cursor_error}) ,auto`,
            '&:hover': {
              bgcolor: 'rgba(242, 241, 239,1)'
            }
          }
        }}
      >
        <div className={classes.wrap_btn}>
          {iconButton}
          <Typography className={classes.text_btn} style={{
            color: auth ? 'rgba(191, 191, 191,1)' : '#0e0e0e',
            fontWeight: !auth && currentBtn ? 'bold' : 'initial'
          }}>
            {text}
          </Typography>
        </div>
        <div style={{ lineHeight: '0px' }}>
          <IoIosArrowForward className={classes.icon_arrow} />
        </div>
      </Button>
    // </Link>
  );
}

export default ButtonItemMenuBox;
