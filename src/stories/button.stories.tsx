import React from "react";
import Button from "../components/Button";

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
      <Button primary>Button</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-link</h3>
      <Button link>Button</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-info</h3>
      <Button info>Button</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-success</h3>
      <Button success>Button</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-warning</h3>
      <Button warning>Button</Button>
    </div>

    <div style={style.buttonContainer}>
      <h3 className="is-size-3 has-text-white">is-danger</h3>
      <Button danger>Button</Button>
    </div>
  </div>
);

export const Sizes = () => ('');

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
