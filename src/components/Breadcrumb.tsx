import React, { ReactElement } from 'react';
import { 
  breadcrumb,
  isCentered,
  isRight,
  hasArrowSeparator,
  hasBulletSeparator,
  hasDotSeparator,
  hasSucceedsSeparator,
  isSmall,
  isMedium,
  isLarge
} from '../classes';
import classNames from "classnames";


interface BreadcrumbProps {
  children: ReactElement
  breadcrumb: boolean

  // position
  centered?: boolean
  right?: boolean

  // separators
  arrow?: boolean
  bullet?: boolean
  dot?: boolean
  succeed?: boolean

  // sizes
  small?: boolean;
  medium?: boolean
  large?: boolean
}


const Breadcrumb: React.FC<BreadcrumbProps> = (
  {
    children,
    centered,
    right,
    arrow,
    bullet,
    dot,
    succeed,
    small,
    medium,
    large
  }
) => {
  const classes = classNames({
    [breadcrumb]: true,
    [isCentered]: centered,
    [isRight]: right,
    [hasArrowSeparator]: arrow,
    [hasBulletSeparator]: bullet,
    [hasDotSeparator]: dot,
    [hasSucceedsSeparator]: succeed,
    [isSmall]: small,
    [isMedium]: medium,
    [isLarge]: large
  });

  return (
    <nav className={classes} aria-label="breadcrumbs"> { children } </nav>
  )
};

Breadcrumb.defaultProps = {
  breadcrumb: true,
  centered: false,
  right: false,
  arrow: false,
  bullet: false,
  dot: false,
  succeed: false,
  small: false,
  medium: false,
  large: false
};


export default Breadcrumb;
