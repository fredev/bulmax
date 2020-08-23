import React from 'react';
import { burger, navbarBurger } from '../classes';
import classNames from 'classnames';

interface NavbarBurgerProps {
  target: string;
}

const NavbarBurger: React.FC<NavbarBurgerProps> = ({ target }) => {

  const classes = classNames({
    burger,
    navbarBurger
  })

  return (
    <a role="button" className={classes} aria-label="menu" aria-expanded="false" data-target={target}>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  )
}

export default NavbarBurger;