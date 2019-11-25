import React from "react";
import {
  subTitle,
  isSpaced,
  isOne,
  isTwo,
  isThree,
  isFour,
  isFive,
  isSix,
} from "../classes";
import classNames from "classnames";


interface SubtitleProps {
  children: string
  spaced?: boolean
  is1?: boolean,
  is2?: boolean
  is3?: boolean
  is4?: boolean
  is5?: boolean
  is6?: boolean
}

const Subtitle: React.FC<SubtitleProps> = (
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
    [subTitle]: true,
    [isSpaced]: spaced, 
    [isOne]: is1,
    [isTwo]: is2,
    [isThree]: is3,
    [isFour]: is4,
    [isFive]: is5,
    [isSix]: is6,
  });

  return (
    <h1 className={classes}> {children} </h1>
  )

  Subtitle.defaultProps = {
    spaced: false,
    is1: false,
    is2: false,
    is3: false,
    is4: false,
    is5: false,
    is6: false,
  }
};

export default Subtitle;