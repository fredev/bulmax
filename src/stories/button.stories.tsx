import React from "react";
import Button from "../elements/Button";
import { StoryContainer, StoryButtonContainer } from './utils';

export default { title: 'Elements/Button' };

export const Colors = () => (
  <StoryContainer>
    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-primary</h3>
      <Button primary>Primary</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-link</h3>
      <Button link>Link</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-info</h3>
      <Button info>Info</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-success</h3>
      <Button success>Success</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-warning</h3>
      <Button warning>Warning</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-danger</h3>
      <Button danger>Danger</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-primary is-light</h3>
      <Button primary light>Primary</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-link is-light</h3>
      <Button link light>Link</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-info is-light</h3>
      <Button info light>Info</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-success is-light</h3>
      <Button success light>Success</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-warning is-light</h3>
      <Button warning light>Warning</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-danger is-light</h3>
      <Button danger light>Danger</Button>
    </StoryButtonContainer>
  </StoryContainer>
);

export const Sizes = () => (
  <StoryContainer>
    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-small</h3>
      <Button small >Small</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-normal</h3>
      <Button normal >Normal</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-medium</h3>
      <Button medium >Medium</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-large</h3>
      <Button large >Large</Button>
    </StoryButtonContainer>
  </StoryContainer>
);

export const Rounded = () => (
  <StoryContainer>
    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-primary</h3>
      <Button primary rounded>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-link</h3>
      <Button link rounded>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-info</h3>
      <Button info rounded>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-success</h3>
      <Button success rounded>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-warning</h3>
      <Button warning rounded>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-danger</h3>
      <Button danger rounded>Button</Button>
    </StoryButtonContainer>
  </StoryContainer>
);

export const Outlined = () => (
  <StoryContainer>
    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-outlined</h3>
      <Button outlined>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">primary is-outlined</h3>
      <Button primary outlined>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">link is-outlined</h3>
      <Button link outlined>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">info is-outlined</h3>
      <Button info outlined>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">warning is-outlined</h3>
      <Button warning outlined>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">danger is-outlined</h3>
      <Button danger outlined>Button</Button>
    </StoryButtonContainer>
  </StoryContainer>
);

export const Inverted = () => (
  <StoryContainer>
    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-inverted</h3>
      <Button inverted>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">primary is-inverted</h3>
      <Button primary inverted>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">link is-inverted</h3>
      <Button link inverted>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">info is-inverted</h3>
      <Button info inverted>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">success is-inverted</h3>
      <Button success inverted>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">danger is-inverted</h3>
      <Button danger inverted>Button</Button>
    </StoryButtonContainer>
  </StoryContainer>
);

export const Loading = () => (
  <StoryContainer>
    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">is-loading</h3>
      <Button loading>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">primary is-loading</h3>
      <Button primary loading>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">link is-loading</h3>
      <Button link loading>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">info is-loading</h3>
      <Button info loading>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">success is-loading</h3>
      <Button success loading>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">warning is-loading</h3>
      <Button warning loading>Button</Button>
    </StoryButtonContainer>

    <StoryButtonContainer>
      <h3 className="is-size-3 has-text-white">danger is-loading</h3>
      <Button danger loading>Button</Button>
    </StoryButtonContainer>
  </StoryContainer>
)
