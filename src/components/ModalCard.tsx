import React, { ReactElement } from "react";
import { modalCard } from "../classes";

interface ModalCardProps {
  children: ReactElement | ReactElement[]
};

const ModalCard: React.FC<ModalCardProps> = ({ children }) => (
  <div className={modalCard}>
    {children}
  </div>
);

export default ModalCard;
