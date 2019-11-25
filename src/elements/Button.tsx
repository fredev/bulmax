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
  disabled?: boolean
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
  rounded?: boolean

  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
}

const Button: React.FC<ButtonProps> = (
  {
    children,
    disabled,
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
    onClick,
  }
) => {
  const classes = classNames({
    [button]: true,
    [isPrimary]: primary,
    [isSuccess]: success,
    [isLink]: link,
    [isInfo]: info,
    [isWarning]: warning,
    [isDanger]: danger,
    [isRounded]: rounded,
    [isLight]: light,
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
      <input
        className={classes}
        type="submit"
        value={children}
        disabled={disabled}
      />
    )
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
};

Button.defaultProps = {
  children: 'Button',
  disabled: false,
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
};

export default Button;
