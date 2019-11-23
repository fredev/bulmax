import React from "react";
import {cardHeaderTitle} from "../classes";

interface CardHeaderTitleProps {
  children: string
}

const CardHeaderTitle: React.FC<CardHeaderTitleProps> = ({ children }) => (
  <p className={cardHeaderTitle}>
    { children }
  </p>
);

export default CardHeaderTitle;
