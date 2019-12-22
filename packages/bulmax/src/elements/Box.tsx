import React, { ReactElement } from 'react';
import { box } from '../classes';

interface BoxProps {
  children?: ReactElement | ReactElement[]
}

const Box: React.FC<BoxProps> = ({ children }) => (
    <div className={box}>
      { children }
    </div>
);

export default Box;
