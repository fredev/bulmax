import React from "react";
import {
  modalClose,
  isLarge,
  isMedium,
  isSmall,
} from "../classes";
import classNames from "classnames";

interface ModalCloseProps {
  large?: boolean
  medium?: boolean
  small?: boolean
  onClose(): void
}

const ModalClose: React.FC<ModalCloseProps> = ({ large, medium, small, onClose }) => {
  const classes = classNames({
    [modalClose]: true,
    [isLarge]: large,
    [isMedium]: medium,
    [isSmall]: small,
  });

  return (
    <button className={classes} aria-label="close" onClick={onClose} />
  )
};

export default ModalClose;