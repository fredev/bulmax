import React, { ReactChild, ReactElement } from "react";
interface ModalContentProps {
    children: ReactChild;
}
interface ModalProps {
    children: ReactElement | ReactElement[];
    open: boolean;
}
export declare const ModalContent: React.FC<ModalContentProps>;
export declare const ModalBackground: React.FC;
export declare const Modal: React.FC<ModalProps>;
export {};
