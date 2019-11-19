import React, { ReactElement } from 'react';
import { breadcrumb, isCentered } from '../classes';
import classNames from "classnames";


interface BreadcrumbProps {
  children: ReactElement
  breadcrumb: boolean
  centered?: boolean
  isRight?: boolean
  hasArrowSeparator?: boolean
  hasBulletSeparator?: boolean
  hasDotSeparator?: boolean
  hasSucceedsSeparator?: boolean
  isSmall?: boolean;
  isMedium?: boolean
  isLarge?: boolean
}


const Breadcrumb: React.FC<BreadcrumbProps> = (
  {
    centered,
    children
  }
) => {
  const classes = classNames({
    [breadcrumb]: true,
    [isCentered]: centered,
  });

  return (
    <nav className={classes} aria-label="breadcrumbs"> { children } </nav>
  )
};

Breadcrumb.defaultProps = {
  breadcrumb: true,
  centered: false,
};


export default Breadcrumb;