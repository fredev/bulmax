import React from 'react';
import {
  button,
  isDanger, 
  isInfo, 
  isLink, 
  isPrimary, 
  isRounded, 
  isSuccess, 
  isWarning, 
  isLight, 
  isSmall, 
  isNormal, 
  isMedium, 
  isLarge, 
  isOutlined, 
  isInverted,
  isLoading,
}
  from "../classes";
import classNames from "classnames";

interface ButtonProps {
  children: string
  submit?: boolean
  primary?: boolean
  link?: boolean
  info?: boolean
  success?: boolean
  warning?: boolean
  danger?: boolean
  light?: boolean
  small?: boolean
  normal?: boolean
  medium?: boolean
  large?: boolean
  outlined?: boolean
  inverted?: boolean
  loading?: boolean

  p?: boolean // primary
  l?: boolean // link
  i?: boolean // info
  s?: boolean // success
  w?: boolean // warning
  d?: boolean // danger
  r?: boolean // rounded
  li?: boolean // light

  rounded?: boolean
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

const Button: React.FC<ButtonProps> = (
  {
    children,
    submit,
    light,
    primary,
    success,
    link,
    info,
    warning,
    danger,
    small,
    normal,
    medium,
    large,
    rounded,
    outlined,
    inverted,
    loading,
    li,
    p, s, l,
    i, w, d, r,
    onClick,
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
    [isSmall]: small,
    [isNormal]: normal,
    [isMedium]: medium,
    [isLarge]: large,
    [isOutlined]: outlined,
    [isInverted]: inverted,
    [isLoading]: loading,
  });

  if (submit) {
    return (
      <input className="button" type="submit" value={children} />
    )
  }

  return (
      <button className={classes} onClick={onClick}>{children}</button>
  )
};

Button.defaultProps = {
  children: 'Button',
  submit: false,
  primary: false,
  success: false,
  link: false,
  info: false,
  warning: false,
  danger: false,
  rounded: false,
  light: false,
  small: false,
  normal: false,
  medium: false,
  large: false,
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
