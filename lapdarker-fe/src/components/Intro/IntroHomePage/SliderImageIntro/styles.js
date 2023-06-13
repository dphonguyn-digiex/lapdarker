import { makeStyles } from '@mui/styles';

export default makeStyles({
  container: {
    position: 'relative',
    height: '375px',
    width: '100%'
  },
  wrap_img: {
    position: 'absolute',
    width: '100%',
    height: '380px'
  },
  img: {
    // objectFit: 'cover',
    height: '100%',
    width: '100%',
    borderRadius: '20px !important'
  },
  group_button: {
    position: 'absolute',
    display: 'flex',
    width: '100%',
    bottom: '12px',
    left: '12px'
  },
  btn: {
    width: '208px',
    padding: '4px'
    // backdropFilter: 'blur(4px)'
  }
});
