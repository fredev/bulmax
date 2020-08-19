import React, { ReactElement } from 'react';
import { navbarEnd } from '../classes';


interface NavbarEndProps {
  children: ReactElement | ReactElement[],
}

const NavbarEnd: React.FC<NavbarEndProps> = ({children}) => (
  <div className={navbarEnd}>{children}</div>
)

export default NavbarEnd;