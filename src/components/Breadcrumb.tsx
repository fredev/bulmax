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
  centered?: boolean
  right?: boolean
  arrowseparator?: boolean
  bulletseparator?: boolean
  dotseparator?: boolean
  succeedseparator?: boolean
  small?: boolean;
  medium?: boolean
  large?: boolean
}


const Breadcrumb: React.FC<BreadcrumbProps> = (
  {
    children,
    centered,
    right,
    arrowseparator,
    bulletseparator,
    dotseparator,
    succeedseparator,
    small,
    medium,
    large
  }
) => {
  const classes = classNames({
    [breadcrumb]: true,
    [isCentered]: centered,
    [isRight]: right,
    [hasArrowSeparator]: arrowseparator,
    [hasBulletSeparator]: bulletseparator,
    [hasDotSeparator]: dotseparator,
    [hasSucceedsSeparator]: succeedseparator,
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
  arrowseparator: false,
  bulletseparator: false,
  dotseparator: false,
  succeedseparator: false,
  small: false,
  medium: false,
  large: false
};


export default Breadcrumb;