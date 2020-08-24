import React, { ReactElement } from 'react';
import className from 'classnames';
import { hasDropdown, isHoverable, isExpanded, isTab, hasDropdownUp, navbarItem } from '../classes';

interface NavbarItemProps {
  children?: ReactElement | ReactElement[],
  navbarItem?: boolean,
  text?: string,
  dropdown?: boolean,
  hoverable?: boolean,
  expanded?: boolean,
  tab?: boolean,
  dropdownUp?: boolean,
}


const NavbarItem: React.FC<NavbarItemProps> = ({ children, text, dropdown, hoverable, expanded, tab, dropdownUp }) => {

  const classes = className({
    [navbarItem]: true,
    [hasDropdown]: dropdown,
    [isHoverable]: hoverable,
    [isExpanded]: expanded,
    [isTab]: tab,
    [hasDropdownUp]: dropdownUp
  });

  return (
    <a className={classes}>
      {children || text}
    </a>
  );

};

NavbarItem.defaultProps = {
  navbarItem: true,
  dropdown: false,
  hoverable: false,
  expanded: false,
  tab: false,
  dropdownUp: false
};

export default NavbarItem;