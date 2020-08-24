import React, { ReactElement } from 'react';
import classNames from 'classnames';
import { isBoxed, navBarDropdown, isRight } from '../classes';

interface NavbarDropdown {
  children: ReactElement | ReactElement[],
  navBarDropdown: boolean,
  boxed?: boolean,
  right?: boolean,
}


const NavbarDropdown: React.FC<NavbarDropdown> = ({ children, boxed, right }) => {

  const classes = classNames({
    [navBarDropdown]: true,
    [isBoxed]: boxed,
    [isRight]: right,
  });

  return (
  <div className={classes}>
    {children}
  </div>
  )
};

NavbarDropdown.defaultProps = {
  navBarDropdown: true,
  boxed: false,
  right: false,
};

export default NavbarDropdown;