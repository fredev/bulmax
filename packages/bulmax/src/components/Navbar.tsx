import React, { ReactElement } from 'react';
import classNames from 'classnames';
import {
  navbar,
  isPrimary,
  isLink,
  isInfo,
  isSuccess,
  isWarning,
  isDanger,
  isBlack,
  isDark,
  isLight,
  isWhite,
  isTransparent,
  fixedBottom,
  fixedTop,
  isSpaced
} from '../classes';

interface NavbarProps {
  children: ReactElement | ReactElement[],
  navbar?: boolean,
  primary?: boolean,
  link?: boolean,
  info?: boolean,
  success?: boolean,
  warning?: boolean,
  danger?: boolean,
  black?: boolean,
  dark?: boolean,
  light?: boolean,
  white?: boolean,
  transparent?: boolean,
  isTop?: boolean,
  isBottom?: boolean,
  spaced?: boolean,
}

const Navbar: React.FC<NavbarProps> = (
  {
    children,
    primary,
    light,
    info,
    link,
    success,
    warning,
    danger,
    black,
    dark,
    white,
    transparent,
    isBottom,
    isTop,
    spaced
  }) => {

  const classes = classNames({
    [navbar]: true,
    [isPrimary]: primary,
    [isLink]: link,
    [isInfo]: info,
    [isSuccess]: success,
    [isWarning]: warning,
    [isDanger]: danger,
    [isBlack]: black,
    [isDark]: dark,
    [isLight]: light,
    [isWhite]: white,
    [isTransparent]: transparent,
    [fixedBottom]: isBottom,
    [fixedTop]: isTop,
    [isSpaced]: spaced,
  })
  return (
    <nav className={classes} role="navigation">{children}</nav>
  )
}

Navbar.defaultProps = {
  navbar: true,
  primary: false,
  link: false,
  info: false,
  success: false,
  warning: false,
  danger: false,
  black: false,
  dark: false,
  light: false,
  white: false,
  transparent: false,
  isBottom: false,
  isTop: false,
  spaced: false
}

export default Navbar;