import React from 'react';
import { breadcrumb, isCentered, isRight, hasArrowSeparator, hasBulletSeparator, hasDotSeparator, hasSucceedsSeparator, isSmall, isMedium, isLarge } from '../classes';
import classNames from "classnames";
var Breadcrumb = function (_a) {
    var _b;
    var children = _a.children, centered = _a.centered, right = _a.right, arrowseparator = _a.arrowseparator, bulletseparator = _a.bulletseparator, dotseparator = _a.dotseparator, succeedseparator = _a.succeedseparator, small = _a.small, medium = _a.medium, large = _a.large;
    var classes = classNames((_b = {},
        _b[breadcrumb] = true,
        _b[isCentered] = centered,
        _b[isRight] = right,
        _b[hasArrowSeparator] = arrowseparator,
        _b[hasBulletSeparator] = bulletseparator,
        _b[hasDotSeparator] = dotseparator,
        _b[hasSucceedsSeparator] = succeedseparator,
        _b[isSmall] = small,
        _b[isMedium] = medium,
        _b[isLarge] = large,
        _b));
    return (React.createElement("nav", { className: classes, "aria-label": "breadcrumbs" },
        " ",
        children,
        " "));
};
Breadcrumb.defaultProps = {
    breadcrumb: true,
    centered: false,
    right: false,
    arrowseparator: false,
    bulletseparator: false,
    dotseparator: false,
    succeedseparator: false,
    small: false,
    medium: false,
    large: false
};
export default Breadcrumb;
//# sourceMappingURL=Breadcrumb.js.map