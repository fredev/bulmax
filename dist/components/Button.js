import React from 'react';
import { isPrimary, isSuccess } from "../classes";
import classNames from "classnames";
var Button = function (props) {
    var _a;
    var classes = classNames((_a = {},
        _a[isPrimary] = props.primary,
        _a[isSuccess] = props.success,
        _a));
    return (React.createElement("button", { className: classes }, props.children));
};
Button.defaultProps = {
    children: 'Button',
    primary: true,
    success: false,
};
export default Button;
//# sourceMappingURL=Button.js.map