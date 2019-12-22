import React, { ReactElement} from "react";
import {
  tag,
  isPrimary,
  isLink,
  isInfo,
  isSuccess,
  isWarning,
  isDanger,
  isLight,
  isDark,
  isBlack,
  isWhite,
  isNormal,
  isMedium,
  isLarge,
  isRounded,
  isDelete
} from "../classes";
import classNames from "classnames";


interface TagProps {
  children: string  | ReactElement
  primary?: boolean
  link?: boolean
  info?: boolean
  success?: boolean
  warning?: boolean
  danger?: boolean
  light?: boolean
  dark?: boolean
  black?: boolean
  white?: boolean
  normal?: boolean
  medium?: boolean
  large?: boolean
  rounded?: boolean
  hasdelete?: boolean
};

const Tag: React.FC<TagProps> = (
  {
    children,
    primary,
    link,
    info,
    success,
    warning,
    danger,
    light,
    dark,
    black,
    white,
    normal,
    medium,
    large,
    rounded,
    hasdelete
  }
) => {
  const classes = classNames({
    [tag]: true,
    [isPrimary]: primary,
    [isLink]: link,
    [isInfo]: info,
    [isSuccess]: success,
    [isWarning]: warning,
    [isDanger]: danger,
    [isLight]: light,
    [isDark]: dark,
    [isBlack]: black,
    [isWhite]: white,
    [isNormal]: normal,
    [isMedium]: medium,
    [isLarge]: large,
    [isRounded]: rounded,
    [isDelete]: hasdelete
  });

  return (
    <span className={classes}> {children} </span>
  )
}

Tag.defaultProps = {
  primary: false,
  link: false,
  info: false,
  success: false,
  warning: false,
  danger: false,
  light: false,
  dark: false,
  black: false,
  white: false,
  normal: false,
  medium: false,
  large: false,
  rounded: false,
  hasdelete: false
};


export default Tag;