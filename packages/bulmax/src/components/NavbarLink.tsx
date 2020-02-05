import React from 'react';
import { navLink, isArrowless } from '../classes';
import classNames from "classnames";


interface NavbarLink {
    children: string
    link?: boolean
    arrowless?: boolean
}

const NavbarLink: React.FC<NavbarLink> = ({ children , arrowless, link }) => {
    const classes = classNames({
        [navLink]: link,
        [isArrowless]: arrowless,
    })

    return (
      <a className={classes}>
         { children } 
      </a>
    )
};

NavbarLink.defaultProps = {
  link: true,
  arrowless: false,
}

export default NavbarLink;