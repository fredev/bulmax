import React, { ReactElement } from 'react';
import { messageBody } from '../classes';

interface MessageBodyProps {
  children: (string | ReactElement)[] | string;
}


const MessageBody: React.FC<MessageBodyProps> = ({ children }) => (
  <div className={messageBody}>
    {children}
  </div>
);

export default MessageBody;