import React from 'react';
interface ButtonProps {
    children: string;
    disabled?: boolean;
    submit?: boolean;
    primary?: boolean;
    link?: boolean;
    info?: boolean;
    success?: boolean;
    warning?: boolean;
    danger?: boolean;
    light?: boolean;
    small?: boolean;
    normal?: boolean;
    medium?: boolean;
    large?: boolean;
    outlined?: boolean;
    inverted?: boolean;
    loading?: boolean;
    rounded?: boolean;
    onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
