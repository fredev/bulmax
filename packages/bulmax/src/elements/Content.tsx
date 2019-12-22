import React, { ReactElement } from "react";
import {
  content,
  isSmall,
  isMedium,
  isLarge
} from "../classes";
import classNames from "classnames";

interface ContentProps {
  children: ReactElement | ReactElement[] | string
  small?: boolean
  medium?: boolean
  large?: boolean
}

const Content: React.FC<ContentProps> = (
  {
    children,
    small,
    medium,
    large
  }
) => {
  const classes = classNames({
    [content]: true,
    [isSmall]: small,
    [isMedium]: medium,
    [isLarge]: large
  });

  return (
    <div className={classes}>
      { children }
    </div>
  )
}

Content.defaultProps = {
  small: false,
  medium: false,
  large: false
}


export default Content;