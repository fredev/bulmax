import React, { ReactElement } from "react";
import { modalCardHead } from "../classes";

interface ModalCardHeadProps {
  children: ReactElement | ReactElement[]
}

const ModalCardHead: React.FC<ModalCardHeadProps> = ({ children }) => (
  <header className={modalCardHead}>
    { children }
  </header>
);

export default ModalCardHead;
