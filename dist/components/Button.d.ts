import React from 'react';
interface ButtonProps {
    children: string;
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
    p?: boolean;
    l?: boolean;
    i?: boolean;
    s?: boolean;
    w?: boolean;
    d?: boolean;
    r?: boolean;
    li?: boolean;
    rounded?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
