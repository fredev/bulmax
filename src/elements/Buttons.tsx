import React, {ReactElement} from "react";
import classNames from "classnames";
import {areLarge, areMedium, areSmall, buttons, hasAddons, isCentered, isRight} from "../classes";

interface ButtonsProps {
  children: ReactElement | ReactElement[]
  small: boolean
  medium: boolean
  large: boolean
  addons: boolean
  centered: boolean
  right: boolean
}

const Buttons: React.FC<ButtonsProps> = (
  {
    children,
    small,
    medium,
    large,
    addons,
    centered,
    right,
  }) => {
  const classes = classNames({
    [buttons]: true,
    [areSmall]: small,
    [areMedium]: medium,
    [areLarge]: large,
    [hasAddons]: addons,
    [isCentered]: centered,
    [isRight]: right,
  });

  return (
    <div className={classes}>
      { children }
    </div>
  )
};

export default Buttons;
