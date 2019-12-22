import React, { ReactElement } from "react";
import { modalCardFoot } from "../classes";

interface ModalCardFootProps {
  children: ReactElement | ReactElement[]
}

const ModalCardFoot: React.FC<ModalCardFootProps> = ({ children }) => (
  <footer className={modalCardFoot}>
    { children }
  </footer>
);

export default ModalCardFoot;
