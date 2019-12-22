import React from "react";
import { modalCardTitle } from "../classes";

interface ModalCardTitleProps {
  children: string
}

const ModalCardTitle: React.FC<ModalCardTitleProps> = ({ children }) => (
  <p className={modalCardTitle}>
    { children }
  </p>
);

export default ModalCardTitle;
