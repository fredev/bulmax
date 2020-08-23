import React from "react";
import { StoryContainer } from './utils'
import Navbar from "../components/Navbar";
import NavbarBrand from "../components/NavbarBrand";
import NavbarItem from "../components/NavbarItem";
import NavbarMenu from "../components/NavbarMenu";
import NavbarBurger from "../components/NavbarBurger";
import NavbarStart from "../components/NavbarStart";
import NavbarLink from "../components/NavbarLink";
import NavbarDropdown from "../components/NavbarDropdown";
import NavbarDivider from "../components/NavbarDivider";
import NavbarEnd from "../components/NavbarEnd";
import Buttons from "../elements/Buttons";
import Button from "../elements/Button";

export default { title: 'Components/Navbar' };

export const BaseNavbar = () => {
  return (
    <StoryContainer>
      <p style={{color: 'white'}}>Basic Navbar</p>
      <Navbar>
        <NavbarBrand>
          <NavbarItem navbarItem>
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
          </NavbarItem>
        </NavbarBrand>
        <NavbarBurger target="basicNavbar" />
        <NavbarMenu id="basicNavbar">
          <NavbarStart>
            <NavbarItem>
              <p>Home</p>
            </NavbarItem>
            <NavbarItem>
              <p>Documentation</p>
            </NavbarItem>
            <NavbarItem hoverable dropdown>
              <NavbarLink>More</NavbarLink>
              <NavbarDropdown navBarDropdown>
                <NavbarItem><p>About</p></NavbarItem>
                <NavbarItem><p>Jobs</p></NavbarItem>
                <NavbarItem><p>Contact</p></NavbarItem>
                <NavbarDivider />
                <NavbarItem><p>Report an issue</p></NavbarItem>
              </NavbarDropdown>
            </NavbarItem>
          </NavbarStart>
          <NavbarEnd>
            <NavbarItem>
              <Buttons>
                <Button primary>Sign up</Button>
                <Button light>Log in</Button>
              </Buttons>
            </NavbarItem>
          </NavbarEnd>
        </NavbarMenu>
      </Navbar>
    </StoryContainer>
  )
}