import React from "react";
import { isDelete } from "../classes";

const ModalCardClose: React.FC = () => (
  <button className={isDelete} aria-label="close" />
);

export default ModalCardClose;
