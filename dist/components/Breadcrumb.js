import React from 'react';
import { breadcrumb, isCentered, isRight, hasArrowSeparator, hasBulletSeparator, hasDotSeparator, hasSucceedsSeparator, isSmall, isMedium, isLarge } from '../classes';
import classNames from "classnames";
var Breadcrumb = function (_a) {
    var _b;
    var children = _a.children, centered = _a.centered, right = _a.right, arrow = _a.arrow, bullet = _a.bullet, dot = _a.dot, succeed = _a.succeed, small = _a.small, medium = _a.medium, large = _a.large;
    var classes = classNames((_b = {},
        _b[breadcrumb] = true,
        _b[isCentered] = centered,
        _b[isRight] = right,
        _b[hasArrowSeparator] = arrow,
        _b[hasBulletSeparator] = bullet,
        _b[hasDotSeparator] = dot,
        _b[hasSucceedsSeparator] = succeed,
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
    arrow: false,
    bullet: false,
    dot: false,
    succeed: false,
    small: false,
    medium: false,
    large: false
};
export default Breadcrumb;
//# sourceMappingURL=Breadcrumb.js.map