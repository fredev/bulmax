import React, { ReactElement } from 'react';
import { navbarBrand } from '../classes';

interface NavbarBrandProps {
  children: ReactElement | ReactElement[];
}

const NavbarBrand: React.FC<NavbarBrandProps> = ({ children }) => (
  <div className={navbarBrand}>{children}</div>
);

export default NavbarBrand;