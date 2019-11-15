import React from 'react';
import { button, isDanger, isInfo, isLink, isPrimary, isRounded, isSuccess, isWarning, isLight, isSmall, isNormal, isMedium, isLarge } from "../classes";
import classNames from "classnames";
var Button = function (_a) {
    var _b;
    var children = _a.children, light = _a.light, primary = _a.primary, success = _a.success, link = _a.link, info = _a.info, warning = _a.warning, danger = _a.danger, small = _a.small, normal = _a.normal, medium = _a.medium, large = _a.large, rounded = _a.rounded, li = _a.li, p = _a.p, s = _a.s, l = _a.l, i = _a.i, w = _a.w, d = _a.d, r = _a.r, onClick = _a.onClick;
    var classes = classNames((_b = {},
        _b[button] = true,
        _b[isPrimary] = primary || p,
        _b[isSuccess] = success || s,
        _b[isLink] = link || l,
        _b[isInfo] = info || i,
        _b[isWarning] = warning || w,
        _b[isDanger] = danger || d,
        _b[isRounded] = rounded || r,
        _b[isLight] = light || li,
        _b[isSmall] = small,
        _b[isNormal] = normal,
        _b[isMedium] = medium,
        _b[isLarge] = large,
        _b));
    return (React.createElement("button", { className: classes, onClick: onClick }, children));
};
Button.defaultProps = {
    children: 'Button',
    primary: false,
    success: false,
    link: false,
    info: false,
    warning: false,
    danger: false,
    rounded: false,
    light: false,
    small: false,
    normal: false,
    medium: false,
    large: false,
    p: false,
    l: false,
    i: false,
    s: false,
    w: false,
    d: false,
    r: false,
    li: false,
};
export default Button;
//# sourceMappingURL=Button.js.map