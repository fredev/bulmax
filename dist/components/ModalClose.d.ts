import React from "react";
interface ModalCloseProps {
    large?: boolean;
    medium?: boolean;
    small?: boolean;
    onClose(): void;
}
declare const ModalClose: React.FC<ModalCloseProps>;
export default ModalClose;
