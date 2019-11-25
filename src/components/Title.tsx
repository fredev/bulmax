import React from "react";
import {
  title,
  isOne,
  isTwo,
  isThree,
  isFour,
  isFive,
  isSix,
  isSpaced
} from "../classes";
import classNames from "classnames";

interface TitleProps {
  children: string
  spaced?: boolean
  is1?: boolean
  is2?: boolean
  is3?: boolean
  is4?: boolean
  is5?: boolean
  is6?: boolean
};

const Title: React.FC<TitleProps> = (
  {
    children,
    spaced,
    is1,
    is2,
    is3,
    is4,
    is5,
    is6
  }
) => {
  const classes = classNames({
    [title]: true,
    [isOne]: is1,
    [isTwo]: is2,
    [isThree]: is3,
    [isFour]: is4,
    [isFive]: is5,
    [isSix]: is6,
    [isSpaced]: spaced
  });

  return ( 
    <h1 className={classes}> {children} </h1>
  )

  Title.defaultProps = {
    spaced: false,
    is1: false,
    is2: false,
    is3: false,
    is4: false,
    is5: false,
    is6: false,
  }
};

export default Title;