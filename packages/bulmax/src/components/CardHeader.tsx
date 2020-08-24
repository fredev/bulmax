import React, {ReactElement} from "react";
import {cardHeader} from "../classes";

interface CardHeaderProps {
  children: ReactElement | ReactElement[]
}

const CardHeader: React.FC<CardHeaderProps> = ({ children }) => (
  <header className={cardHeader}>
    { children }
  </header>
);

export default CardHeader;
