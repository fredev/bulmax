import React from 'react';
import {button, isDanger, isInfo, isLink, isPrimary, isRounded, isSuccess, isWarning} from "../classes";
import classNames from "classnames";

interface ButtonProps {
  children: string
  primary?: boolean
  link?: boolean
  info?: boolean
  success?: boolean
  warning?: boolean
  danger?: boolean

  p?: boolean // primary
  l?: boolean // link
  i?: boolean // info
  s?: boolean // success
  w?: boolean // warning
  d?: boolean // danger
  r?: boolean // rounded

  rounded?: boolean
}


const Button: React.FC<ButtonProps> = (
  {
    children,
    primary,
    success,
    link,
    info,
    warning,
    danger,
    rounded,
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
    [isRounded]: rounded || r
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
  p: false,
  l: false,
  i: false,
  s: false,
  w: false,
  d: false,
  r: false,
};

export default Button;
