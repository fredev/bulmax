import React, { ReactElement } from 'react';
import { navbarMenu } from '../classes';

interface NavbarMenuProps {
  id: string,
  children: ReactElement | ReactElement[],
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({id, children}) => (
  <div id={id} className={navbarMenu}>{children}</div>
)

export default NavbarMenu;