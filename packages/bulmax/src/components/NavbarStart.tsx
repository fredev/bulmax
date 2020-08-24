import React, { ReactElement } from 'react';
import { navbarStart } from '../classes';

interface NavbarStart {
  children: ReactElement | ReactElement[],
}

const NavbarStart: React.FC<NavbarStart> = ({ children }) => (
  <div className={navbarStart}>{children}</div>
)

export default NavbarStart;