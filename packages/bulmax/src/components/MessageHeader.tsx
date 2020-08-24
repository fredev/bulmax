import React, { ReactElement } from 'react';
import { messageHeader } from '../classes';

interface MessageHeaderProps {
  children: (string | ReactElement)[] | string | ReactElement;
}


const MessageHeader: React.FC<MessageHeaderProps> = ({ children }) => (
  <div className={messageHeader}>
    {children}
  </div>
);

export default MessageHeader;