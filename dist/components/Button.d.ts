import React from 'react';
interface ButtonProps {
    children: string;
    primary?: boolean;
    success?: boolean;
    link?: boolean;
    input?: boolean;
    reset?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
