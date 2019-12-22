import React, { ReactElement } from "react";
import { modalContent } from "../classes";

interface ModalContentProps {
  children: ReactElement | ReactElement[]
}


const ModalContent: React.FC<ModalContentProps> = ({ children }) => (
  <div className={modalContent}>
    {children}
  </div>
);

export default ModalContent;