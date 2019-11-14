import React from 'react';
interface ButtonProps {
    children: string;
    primary?: boolean;
    link?: boolean;
    info?: boolean;
    success?: boolean;
    warning?: boolean;
    danger?: boolean;
    p?: boolean;
    l?: boolean;
    i?: boolean;
    s?: boolean;
    w?: boolean;
    d?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
