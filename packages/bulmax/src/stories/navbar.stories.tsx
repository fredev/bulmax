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
      <p style={{ color: 'white' }}>Basic Navbar</p>
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

export const colouredNavbar = () => (
  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
      <p style={{ color: 'white' }}>Primary Navbar</p>
      <Navbar primary>
        <NavbarBrand>
          <NavbarItem navbarItem>
            <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28" />
          </NavbarItem>
        </NavbarBrand>
        <NavbarBurger target="basicNavbar" />
        <NavbarMenu id="basicNavbar">
          <NavbarStart>
          <NavbarItem>
              <p>Home</p>
            </NavbarItem>
            <NavbarItem hoverable dropdown>
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown navBarDropdown>
                <NavbarItem><p>Overview</p></NavbarItem>
                <NavbarItem><p>Modifiers</p></NavbarItem>
                <NavbarItem><p>Columns</p></NavbarItem>
                <NavbarItem><p>Layout</p></NavbarItem>
                <NavbarItem><p>Form</p></NavbarItem>
                <NavbarDivider />
                <NavbarItem><p>Elements</p></NavbarItem>
                <NavbarItem><p>Components</p></NavbarItem>
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
    </div>
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
      <p style={{ color: 'white' }}>Link Navbar</p>
      <Navbar link>
        <NavbarBrand>
          <NavbarItem navbarItem>
            <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28" />
          </NavbarItem>
        </NavbarBrand>
        <NavbarBurger target="basicNavbar" />
        <NavbarMenu id="basicNavbar">
          <NavbarStart>
          <NavbarItem>
              <p>Home</p>
            </NavbarItem>
            <NavbarItem hoverable dropdown>
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown navBarDropdown>
                <NavbarItem><p>Overview</p></NavbarItem>
                <NavbarItem><p>Modifiers</p></NavbarItem>
                <NavbarItem><p>Columns</p></NavbarItem>
                <NavbarItem><p>Layout</p></NavbarItem>
                <NavbarItem><p>Form</p></NavbarItem>
                <NavbarDivider />
                <NavbarItem><p>Elements</p></NavbarItem>
                <NavbarItem><p>Components</p></NavbarItem>
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
    </div>
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
      <p style={{ color: 'white' }}>Info Navbar</p>
      <Navbar info>
        <NavbarBrand>
          <NavbarItem navbarItem>
            <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28" />
          </NavbarItem>
        </NavbarBrand>
        <NavbarBurger target="basicNavbar" />
        <NavbarMenu id="basicNavbar">
          <NavbarStart>
          <NavbarItem>
              <p>Home</p>
            </NavbarItem>
            <NavbarItem hoverable dropdown>
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown navBarDropdown>
                <NavbarItem><p>Overview</p></NavbarItem>
                <NavbarItem><p>Modifiers</p></NavbarItem>
                <NavbarItem><p>Columns</p></NavbarItem>
                <NavbarItem><p>Layout</p></NavbarItem>
                <NavbarItem><p>Form</p></NavbarItem>
                <NavbarDivider />
                <NavbarItem><p>Elements</p></NavbarItem>
                <NavbarItem><p>Components</p></NavbarItem>
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
    </div>
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
      <p style={{ color: 'white' }}>Success Navbar</p>
      <Navbar success>
        <NavbarBrand>
          <NavbarItem navbarItem>
            <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28" />
          </NavbarItem>
        </NavbarBrand>
        <NavbarBurger target="basicNavbar" />
        <NavbarMenu id="basicNavbar">
          <NavbarStart>
            <NavbarItem>
              <p>Home</p>
            </NavbarItem>
            <NavbarItem hoverable dropdown>
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown navBarDropdown>
                <NavbarItem><p>Overview</p></NavbarItem>
                <NavbarItem><p>Modifiers</p></NavbarItem>
                <NavbarItem><p>Columns</p></NavbarItem>
                <NavbarItem><p>Layout</p></NavbarItem>
                <NavbarItem><p>Form</p></NavbarItem>
                <NavbarDivider />
                <NavbarItem><p>Elements</p></NavbarItem>
                <NavbarItem><p>Components</p></NavbarItem>
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
    </div>
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
      <p style={{ color: 'white' }}>Warning Navbar</p>
      <Navbar warning>
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
            <NavbarItem hoverable dropdown>
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown navBarDropdown>
                <NavbarItem><p>Overview</p></NavbarItem>
                <NavbarItem><p>Modifiers</p></NavbarItem>
                <NavbarItem><p>Columns</p></NavbarItem>
                <NavbarItem><p>Layout</p></NavbarItem>
                <NavbarItem><p>Form</p></NavbarItem>
                <NavbarDivider />
                <NavbarItem><p>Elements</p></NavbarItem>
                <NavbarItem><p>Components</p></NavbarItem>
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
    </div>
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
      <p style={{ color: 'white' }}>Danger Navbar</p>
      <Navbar danger>
        <NavbarBrand>
          <NavbarItem navbarItem>
            <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28" />
          </NavbarItem>
        </NavbarBrand>
        <NavbarBurger target="basicNavbar" />
        <NavbarMenu id="basicNavbar">
          <NavbarStart>
          <NavbarItem>
              <p>Home</p>
            </NavbarItem>
            <NavbarItem hoverable dropdown>
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown navBarDropdown>
                <NavbarItem><p>Overview</p></NavbarItem>
                <NavbarItem><p>Modifiers</p></NavbarItem>
                <NavbarItem><p>Columns</p></NavbarItem>
                <NavbarItem><p>Layout</p></NavbarItem>
                <NavbarItem><p>Form</p></NavbarItem>
                <NavbarDivider />
                <NavbarItem><p>Elements</p></NavbarItem>
                <NavbarItem><p>Components</p></NavbarItem>
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
    </div>
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
      <p style={{ color: 'white' }}>Black Navbar</p>
      <Navbar black>
        <NavbarBrand>
          <NavbarItem navbarItem>
            <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28" />
          </NavbarItem>
        </NavbarBrand>
        <NavbarBurger target="basicNavbar" />
        <NavbarMenu id="basicNavbar">
          <NavbarStart>
            <NavbarItem>
              <p>Home</p>
            </NavbarItem>
            <NavbarItem hoverable dropdown>
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown navBarDropdown>
                <NavbarItem><p>Overview</p></NavbarItem>
                <NavbarItem><p>Modifiers</p></NavbarItem>
                <NavbarItem><p>Columns</p></NavbarItem>
                <NavbarItem><p>Layout</p></NavbarItem>
                <NavbarItem><p>Form</p></NavbarItem>
                <NavbarDivider />
                <NavbarItem><p>Elements</p></NavbarItem>
                <NavbarItem><p>Components</p></NavbarItem>
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
    </div>
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
      <p style={{ color: 'white' }}>Dark Navbar</p>
      <Navbar dark>
        <NavbarBrand>
          <NavbarItem navbarItem>
            <img src="https://bulma.io/images/bulma-logo-white.png" width="112" height="28" />
          </NavbarItem>
        </NavbarBrand>
        <NavbarBurger target="basicNavbar" />
        <NavbarMenu id="basicNavbar">
          <NavbarStart>
          <NavbarItem>
              <p>Home</p>
            </NavbarItem>
            <NavbarItem hoverable dropdown>
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown navBarDropdown>
                <NavbarItem><p>Overview</p></NavbarItem>
                <NavbarItem><p>Modifiers</p></NavbarItem>
                <NavbarItem><p>Columns</p></NavbarItem>
                <NavbarItem><p>Layout</p></NavbarItem>
                <NavbarItem><p>Form</p></NavbarItem>
                <NavbarDivider />
                <NavbarItem><p>Elements</p></NavbarItem>
                <NavbarItem><p>Components</p></NavbarItem>
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
    </div>
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
      <p style={{ color: 'white' }}>Light Navbar</p>
      <Navbar light>
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
            <NavbarItem hoverable dropdown>
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown navBarDropdown>
                <NavbarItem><p>Overview</p></NavbarItem>
                <NavbarItem><p>Modifiers</p></NavbarItem>
                <NavbarItem><p>Columns</p></NavbarItem>
                <NavbarItem><p>Layout</p></NavbarItem>
                <NavbarItem><p>Form</p></NavbarItem>
                <NavbarDivider />
                <NavbarItem><p>Elements</p></NavbarItem>
                <NavbarItem><p>Components</p></NavbarItem>
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
    </div>
    <div style={{ paddingTop: 20, paddingBottom: 20 }}>
      <p style={{ color: 'white' }}>White Navbar</p>
      <Navbar white>
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
            <NavbarItem hoverable dropdown>
              <NavbarLink>Docs</NavbarLink>
              <NavbarDropdown navBarDropdown>
                <NavbarItem><p>Overview</p></NavbarItem>
                <NavbarItem><p>Modifiers</p></NavbarItem>
                <NavbarItem><p>Columns</p></NavbarItem>
                <NavbarItem><p>Layout</p></NavbarItem>
                <NavbarItem><p>Form</p></NavbarItem>
                <NavbarDivider />
                <NavbarItem><p>Elements</p></NavbarItem>
                <NavbarItem><p>Components</p></NavbarItem>
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
    </div>
  </div>
)