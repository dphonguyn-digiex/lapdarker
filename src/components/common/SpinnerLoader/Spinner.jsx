// import { PuffLoader } from 'react-spinners';
import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

export default function SpinnerLoader(props) {
  const { open } = props;
  return (
    <div>
      {/* <PuffLoader size={120} color="#36d7b7" /> */}
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}