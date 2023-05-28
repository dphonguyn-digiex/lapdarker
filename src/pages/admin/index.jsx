import { useState } from 'react';
// import { useTheme } from '@mui/material/styles';
import {
  Box,
  Toolbar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Outlet, useNavigate } from 'react-router-dom';

import { AppBarDashboard, DrawerDashboard, DrawerHeader } from '~/components/Custom/Dashboard';
import { dataDrawerPart1, dataDrawerPart2 } from '~/components/elements/ElementDrawer/data';
const isSelect = {
  bgcolor: '#242A38',
  ':hover': {
    bgcolor: '#242A38'
  },
  '.MuiTypography-root': {
    color: '#10B981',
    fontWeight: 'bold'
  }
};
function DashboardAdmin() {
  // const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('Trang chủ');
  const navigate = useNavigate();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickItemDrawer = (name, path) => {
    setCurrentPage(name);
    navigate(path);
  };
  return (
    <div>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBarDashboard position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' })
              }}
            >
              <MenuIcon sx={{ color: '#fff' }} />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Quản lý cửa hàng
            </Typography>
          </Toolbar>
        </AppBarDashboard>
        <DrawerDashboard
          variant="permanent"
          open={open}
          // onMouseOver={handleDrawerOpen}
          // onMouseLeave={handleDrawerClose}
        >
          <DrawerHeader>
            {open && (
              <>
                <div style={{ display: 'flex', padding: '0 8px' }}>
                  <Typography sx={{ fontSize: '30px', color: '#22CFB3', fontWeight: 'bold' }}>Lap</Typography>
                  <Typography sx={{ fontSize: '30px', color: '#2E7BB2', fontWeight: 'bold' }}>Darker</Typography>
                </div>
                <IconButton onClick={handleDrawerClose}>
                  <ChevronLeftIcon sx={{ color: '#fff' }} />
                </IconButton>
              </>
            )}
          </DrawerHeader>
          <Divider />
          <div>
            <div style={{ padding: '12px' }}>
              <List>
                {dataDrawerPart1.map(item => (
                  <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => handleClickItemDrawer(item.text, item.path)}
                      sx={Object.assign(
                        {
                          borderRadius: '12px',
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5
                        },
                        currentPage === item.text && isSelect
                      )}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center'
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
              <Divider />
              <List>
                {dataDrawerPart2.map(item => (
                  <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                    <ListItemButton
                      onClick={() => handleClickItemDrawer(item.text, item.path)}
                      sx={Object.assign(
                        {
                          borderRadius: '12px',
                          minHeight: 48,
                          justifyContent: open ? 'initial' : 'center',
                          px: 2.5
                        },
                        currentPage === item.text && isSelect
                      )}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 0,
                          mr: open ? 3 : 'auto',
                          justifyContent: 'center'
                        }}
                      >
                        {item.icon}
                      </ListItemIcon>
                      <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </DrawerDashboard>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Outlet />
        </Box>
      </Box>
    </div>
  );
}

export default DashboardAdmin;
