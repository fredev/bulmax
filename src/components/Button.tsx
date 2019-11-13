import React from 'react';
import {isPrimary, isSuccess} from "../classes";
import classNames from "classnames";

interface ButtonProps {
  children: string
  primary?: boolean
  success?: boolean
  link?: boolean
  input?: boolean
  reset?: boolean
}

const Button: React.FC<ButtonProps> = props => {
  const classes = classNames({
    [isPrimary]: props.primary,
    [isSuccess]: props.success,
  });

  return (
      <button className={classes}>{props.children}</button>
  )
};

Button.defaultProps = {
  children: 'Button',
  primary: true,
  success: false,
};

export default Button;
