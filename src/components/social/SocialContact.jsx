import React from 'react';
import ChatBox from './chatbox';
import Messenger from './messenger';
import { styles } from './styles';
import Zalo from './zalo';

export default function SocialContact() {
  return (
    <div style={styles.wrapper}>
      <ChatBox />
      <Zalo />
      <Messenger />
      <df-messenger
        intent="WELCOME"
        chat-title="LapDarker xin chào"
        agent-id="e0621a4b-7b11-4e49-a0bb-10cfcef7dadf"
        language-code="vi"
      ></df-messenger>
    </div>
  )
}
