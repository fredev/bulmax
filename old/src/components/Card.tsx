import React, { ReactElement } from 'react';
import { card } from '../classes';

interface CardProps {
  children?: ReactElement | ReactElement[]
}

const Card: React.FC<CardProps> = ({ children }) => (
  <div className={card}>
    { children }
  </div>
);

export default Card;
