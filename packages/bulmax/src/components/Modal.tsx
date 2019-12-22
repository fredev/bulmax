import React, { ReactElement } from "react";
import {
  isActive,
  modal,
} from "../classes";
import classNames from "classnames";

interface ModalProps {
  children: ReactElement | ReactElement[]
  active: boolean
}


const Modal: React.FC<ModalProps> = ({ children, active }) => {
  const classes = classNames({
    [modal]: true,
    [isActive]: active,
  });

  return open
    ? (
      <div className={classes}>
        { children }
      </div>
    )
    : null
};

export default Modal;
