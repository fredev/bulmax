import React, { ReactElement } from "react";
interface ModalProps {
    children: ReactElement | ReactElement[];
    active: boolean;
}
declare const Modal: React.FC<ModalProps>;
export default Modal;
