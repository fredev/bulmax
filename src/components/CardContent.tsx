import React, {ReactElement} from "react";
import {cardContent} from "../classes";

interface CardContentProps {
  children: ReactElement | ReactElement[]
}

const CardContent: React.FC<CardContentProps> =  ({ children })  => (
  <div className={cardContent}>
    { children }
  </div>
);

export default CardContent;
