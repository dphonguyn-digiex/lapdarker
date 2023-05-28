import { Paper, Popover } from '@mui/material';
import React, { useState } from 'react';
import { TbHeadset } from 'react-icons/tb';
export default function ChatBox() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const idChatbox = open ? 'chatbox-social' : undefined;
  return (<div>
    <div
      onClick={handleClick}
      style={{ width: '56px', height: '56px', backgroundColor: '#ff7d1f', borderRadius: 999, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '6px 0 6px 0', cursor: 'pointer' }}>
      <TbHeadset color='#fff' size={30} />
    </div>
      <Popover
        id={idChatbox}
        disableScrollLock
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
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
            // top: '80px !important',
          }
        }}
      >
        <Paper
          sx={{display: 'flex',flexDirection: 'column', padding: '16px'}}
        >
          {/* <div style={{display: 'flex', flexDirection: 'row-reverse'}}>
            <div style={{display: ''}}></div>
            <div style={{display: ''}}></div>
            
            <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/e0621a4b-7b11-4e49-a0bb-10cfcef7dadf"/>
          </div> 
        */}
            
        
        </Paper>
    </Popover>
    </div>
  )
}
