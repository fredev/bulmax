import React, { ReactElement } from "react";
import { modalCardBody } from "../classes";

interface ModalCardBodyProps {
  children: ReactElement | ReactElement[]
}

const ModalCardBody: React.FC<ModalCardBodyProps> = ({ children }) => (
  <section className={modalCardBody}>
    { children }
  </section>
);

export default ModalCardBody;
