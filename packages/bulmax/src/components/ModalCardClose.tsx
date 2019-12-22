import React from "react";
import { isDelete } from "../classes";

interface ModalCardCloseProps {
  onClose(): void
}

const ModalCardClose: React.FC<ModalCardCloseProps> = ({ onClose }) => (
  <button className={isDelete} aria-label="close" onClick={onClose} />
);

export default ModalCardClose;
