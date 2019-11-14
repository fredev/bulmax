import React from 'react';
import { button, isDanger, isInfo, isLink, isPrimary, isSuccess, isWarning } from "../classes";
import classNames from "classnames";
var Button = function (props) {
    var _a;
    var classes = classNames((_a = {},
        _a[button] = true,
        _a[isPrimary] = props.primary || props.p,
        _a[isSuccess] = props.success || props.s,
        _a[isLink] = props.link || props.l,
        _a[isInfo] = props.info || props.i,
        _a[isWarning] = props.warning || props.w,
        _a[isDanger] = props.danger || props.d,
        _a));
    return (React.createElement("button", { className: classes }, props.children));
};
Button.defaultProps = {
    children: 'Button',
    primary: false,
    success: false,
    link: false,
    info: false,
    warning: false,
    danger: false,
    p: false,
    l: false,
    i: false,
    s: false,
    w: false,
    d: false,
};
export default Button;
//# sourceMappingURL=Button.js.map