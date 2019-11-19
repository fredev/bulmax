import React, {ReactChild, ReactElement} from "react";
import { modalBackground, modalContent} from "../classes";

interface ModalContentProps {
  children: ReactChild
}

interface ModalProps {
  children: ReactElement | ReactElement[]
  open: boolean
}

export const ModalContent: React.FC<ModalContentProps> = ({ children }) => (
  <div className={modalContent}>
    { children }
  </div>
);

export const ModalBackground: React.FC = () => (
  <div className={modalBackground} />
);

export const Modal: React.FC<ModalProps> = ({ children, open }) => {
  console.log(open);
  return open === true
    ? (
      <div className={'modal is-active'}>
        { children }
      </div>
    )
    : null
};
