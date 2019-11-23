import React, { ReactElement } from "react";
import {cardFooter} from "../classes";

interface CardFooterProps {
  children: ReactElement | ReactElement[]
}

const CardFooter: React.FC<CardFooterProps> = ({ children }) => (
  <footer className={cardFooter}>
    { children }
  </footer>
);

export default CardFooter;
