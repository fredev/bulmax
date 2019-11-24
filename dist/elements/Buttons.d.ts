import React, { ReactElement } from "react";
interface ButtonsProps {
    children: ReactElement | ReactElement[];
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    addons?: boolean;
    centered?: boolean;
    right?: boolean;
}
declare const Buttons: React.FC<ButtonsProps>;
export default Buttons;
