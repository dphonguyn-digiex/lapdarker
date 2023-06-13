import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
// import SubMenu from '../SubMenu';
export default function MenuHeader({ secondState }) {
  const firstState = (
    <Button
      disableRipple
      startIcon={<MenuIcon />}
      sx={{
        '&:hover': {
          '& .MuiTypography-root': {
            color: '#14cdc8'
          }
        }
      }}
    >
      <Typography
        noWrap
        variant="body1"
        component="div"
        sx={{
          flexGrow: 1,
          display: { xs: 'none', sm: 'block' },
          textTransform: 'initial'
        }}
      >
        Danh mục
      </Typography>
    </Button>
  );
  const _secondState = (
    <>
      <Button
        disableRipple
        startIcon={<MenuIcon />}
        sx={{
          '&:hover': {
            '& .MuiTypography-root': {
              color: '#14cdc8'
            }
          }
        }}
      >
        <Typography
          noWrap
          variant="body1"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' },
            textTransform: 'initial'
          }}
        >
          Danh mục
        </Typography>
      </Button>
      <Link to="product/laptops" style={{ textDecoration: 'none' }}>
        <Button
          disableRipple
          sx={{
            '&:hover': {
              '& .MuiTypography-root': {
                color: '#14cdc8'
              }
            }
          }}
        >
          <Typography
            noWrap
            variant="body1"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              textTransform: 'initial'
            }}
          >
            Laptop
          </Typography>
        </Button>
      </Link>
      <Button
        disableRipple
        sx={{
          '&:hover': {
            '& .MuiTypography-root': {
              color: '#14cdc8'
            }
          }
        }}
      >
        <Typography
          noWrap
          variant="body1"
          component="div"
          sx={{
            flexGrow: 1,
            display: { xs: 'none', sm: 'block' },
            textTransform: 'initial'
          }}
        >
          Linh kiện PC
        </Typography>
      </Button>
    </>
  );
  return secondState ? _secondState : firstState;
}
