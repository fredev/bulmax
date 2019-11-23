import React, { ReactElement } from "react";
import { cardHeaderIcon } from "../classes";

interface CardHeaderIconProps {
  children: ReactElement
}

const CardHeaderIcon: React.FC<CardHeaderIconProps> = ({ children }) => (
  <a href="#" className={cardHeaderIcon} aria-label="more options">
    { children }
  </a>
);

export default CardHeaderIcon;
