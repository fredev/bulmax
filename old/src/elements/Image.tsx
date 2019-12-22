import React from "react";
import {
  image,
  isRounded,
  is16x16,
  is24x24,
  is32x32,
  is48x48,
  is64x64,
  is96x96,
  is128x128,
  isOneByOne,
  isFiveByFour,
  isFourByThree,
  isThreeByTwo,
  isFiveByThree,
  isSixteenByNine,
  isTwoByOne,
  isThreeByOne,
  isFourByFive,
  isThreeByFour,
  isThreeByFive,
  isNineBySixteen,
  isOneByTwo,
  isOneByThree,
  isFullWidth,
  isSquared,
  isTwoByThree
} from "../classes";
import classNames from "classnames";


interface ImageProps {
  source: string
  is16?: boolean
  is24?: boolean
  is32?: boolean
  is48?: boolean
  is64?: boolean
  is96?: boolean
  is128?: boolean
  rounded?: boolean
  square?: boolean
  is1by1?: boolean
  is5by4?: boolean
  is4by3?: boolean
  is3by2?: boolean
  is5by3?: boolean
  is16by9?: boolean
  is2by1?: boolean
  is3by1?: boolean
  is4by5?: boolean
  is3by4?: boolean
  is2by3?: boolean
  is3by5?: boolean
  is9by16?: boolean
  is1by2?: boolean
  is1by3?: boolean
  fullwidth?: boolean
};

const Image: React.FC<ImageProps> = (
  {
    source,
    is16,
    is24,
    is32,
    is48,
    is64,
    is96,
    is128,
    rounded,
    square,
    is1by1,
    is5by4,
    is4by3,
    is3by2,
    is5by3,
    is16by9,
    is2by1,
    is3by1,
    is4by5,
    is3by4,
    is2by3,
    is3by5,
    is9by16,
    is1by2,
    is1by3,
    fullwidth
  }
) => {
  const classes = classNames({
    [image]: true,
    [isRounded]: rounded,
    [is16x16]: is16,
    [is24x24]: is24,
    [is32x32]: is32,
    [is48x48]: is48,
    [is64x64]: is64,
    [is96x96]: is96,
    [is128x128]: is128,
    [isOneByOne]: is1by1,
    [isFiveByFour]: is5by4,
    [isFourByThree]: is4by3,
    [isThreeByTwo]: is3by2,
    [isFiveByThree]: is5by3,
    [isSixteenByNine]: is16by9,
    [isTwoByOne]: is2by1,
    [isThreeByOne]: is3by1,
    [isFourByFive]: is4by5,
    [isThreeByFour]: is3by4,
    [isTwoByThree]: is2by3,
    [isThreeByFive]: is3by5,
    [isNineBySixteen]: is9by16,
    [isOneByTwo]: is1by2,
    [isOneByThree]: is1by3,
    [isFullWidth]: fullwidth,
    [isSquared]: square,
  });

  return (
    <figure className={classes}>
      <img src={source} />
    </figure>
  )
}

Image.defaultProps = {
  is16: false,
  is24: false,
  is32: false,
  is48: false,
  is64: false,
  is96: false,
  is128: false,
  is1by1: false,
  is5by4: false,
  is4by3: false,
  is3by2: false,
  is5by3: false,
  is16by9: false,
  is2by1: false,
  is3by1: false,
  is4by5: false,
  is3by4: false,
  is2by3: false,
  is3by5: false,
  is9by16: false,
  is1by2: false,
  is1by3: false,
  fullwidth: false,
  square: false,
  rounded: false
};

export default Image;