import React from 'react';
import {button, isDanger, isInfo, isLink, isPrimary, isSuccess, isWarning} from "../classes";
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
}

const Button: React.FC<ButtonProps> = props => {
  const classes = classNames({
    [button]: true,
    [isPrimary]: props.primary || props.p,
    [isSuccess]: props.success || props.s,
    [isLink]: props.link || props.l,
    [isInfo]: props.info || props.i,
    [isWarning]: props.warning || props.w,
    [isDanger]: props.danger || props.d,
  });

  return (
      <button className={classes}>{props.children}</button>
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
  p: false,
  l: false,
  i: false,
  s: false,
  w: false,
  d: false,
};

export default Button;
