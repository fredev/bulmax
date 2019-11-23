import React, { ReactElement } from 'react';
import { cardImage } from '../classes';

interface CardImageProps {
  children?: ReactElement | ReactElement[]
}

const CardImage: React.FC<CardImageProps> = ({ children }) => (
  <div className={cardImage}>
    { children }
  </div>
);

export default CardImage;
