import { useState, Fragment } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Snackbar from '@mui/material/Snackbar';
function MessageBox({ message }) {
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const action = (
    <Fragment>
      <AiOutlineClose onClick={handleClose} />
    </Fragment>
  );

  return (
    <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} message={message} action={action} />
    </div>
  );
}

export default MessageBox;
