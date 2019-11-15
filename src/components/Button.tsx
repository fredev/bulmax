import React from 'react';
import {button, isDanger, isInfo, isLink, isPrimary, isRounded, isSuccess, isWarning, isLight} from "../classes";
import classNames from "classnames";

interface ButtonProps {
  children: string
  primary?: boolean
  link?: boolean
  info?: boolean
  success?: boolean
  warning?: boolean
  danger?: boolean
  light?: boolean

  p?: boolean // primary
  l?: boolean // link
  i?: boolean // info
  s?: boolean // success
  w?: boolean // warning
  d?: boolean // danger
  r?: boolean // rounded
  li?: boolean // light

  rounded?: boolean
}


const Button: React.FC<ButtonProps> = (
  {
    children,
    light,
    primary,
    success,
    link,
    info,
    warning,
    danger,
    rounded,
    li,
    p, s, l,
    i, w, d, r
  }
) => {
  const classes = classNames({
    [button]: true,
    [isPrimary]: primary || p,
    [isSuccess]: success || s,
    [isLink]: link || l,
    [isInfo]: info || i,
    [isWarning]: warning || w,
    [isDanger]: danger || d,
    [isRounded]: rounded || r,
    [isLight]: light || li,
  });

  return (
      <button className={classes}>{children}</button>
  )
};

Button.defaultProps = {
  children: 'Button',
  primary: false,
  success: false,
  link: false,
  info: false,
  warning: false,
  danger: false,
  rounded: false,
  light: false,
  p: false,
  l: false,
  i: false,
  s: false,
  w: false,
  d: false,
  r: false,
  li: false,
};

export default Button;
