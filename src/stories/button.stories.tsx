import React from "react";
import Button from "../elements/Button";

export default { title: 'Elements/Button' };

const style = {
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
  } as React.CSSProperties,
  buttonContainer: {
    width: '33.333%',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column'
  }  as React.CSSProperties,
};

export const Colors = () => (
  <div style={style.container}>
    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-primary</h3>
      <Button primary>Primary</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-link</h3>
      <Button link>Link</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-info</h3>
      <Button info>Info</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-success</h3>
      <Button success>Success</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-warning</h3>
      <Button warning>Warning</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-danger</h3>
      <Button danger>Danger</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-primary is-light</h3>
      <Button primary light>Primary</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-link is-light</h3>
      <Button link light>Link</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-info is-light</h3>
      <Button info light>Info</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-success is-light</h3>
      <Button success light>Success</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-warning is-light</h3>
      <Button warning light>Warning</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-danger is-light</h3>
      <Button danger light>Danger</Button>
    </div>
  </div>
);

export const Sizes = () => (
  <div style={style.container}>
    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-small</h3>
      <Button small >Small</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-normal</h3>
      <Button normal >Normal</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-medium</h3>
      <Button medium >Medium</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-large</h3>
      <Button large >Large</Button>
    </div>
  </div>
);

export const Rounded = () => (
  <div style={style.container}>
    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-primary</h3>
      <Button primary rounded>Button</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-link</h3>
      <Button link rounded>Button</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-info</h3>
      <Button info rounded>Button</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-success</h3>
      <Button success rounded>Button</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-warning</h3>
      <Button warning rounded>Button</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-danger</h3>
      <Button danger rounded>Button</Button>
    </div>
  </div>
);
