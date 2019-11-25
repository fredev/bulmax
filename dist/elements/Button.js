import React from 'react';
import { button, isDanger, isInfo, isLink, isPrimary, isRounded, isSuccess, isWarning, isLight, isSmall, isNormal, isMedium, isLarge, isOutlined, isInverted, isLoading, } from "../classes";
import classNames from "classnames";
var Button = function (_a) {
    var _b;
    var children = _a.children, disabled = _a.disabled, submit = _a.submit, light = _a.light, primary = _a.primary, success = _a.success, link = _a.link, info = _a.info, warning = _a.warning, danger = _a.danger, small = _a.small, normal = _a.normal, medium = _a.medium, large = _a.large, rounded = _a.rounded, outlined = _a.outlined, inverted = _a.inverted, loading = _a.loading, onClick = _a.onClick;
    var classes = classNames((_b = {},
        _b[button] = true,
        _b[isPrimary] = primary,
        _b[isSuccess] = success,
        _b[isLink] = link,
        _b[isInfo] = info,
        _b[isWarning] = warning,
        _b[isDanger] = danger,
        _b[isRounded] = rounded,
        _b[isLight] = light,
        _b[isSmall] = small,
        _b[isNormal] = normal,
        _b[isMedium] = medium,
        _b[isLarge] = large,
        _b[isOutlined] = outlined,
        _b[isInverted] = inverted,
        _b[isLoading] = loading,
        _b));
    if (submit) {
        return (React.createElement("input", { className: classes, type: "submit", value: children, disabled: disabled }));
    }
    return (React.createElement("button", { className: classes, onClick: onClick, disabled: disabled }, children));
};
Button.defaultProps = {
    children: 'Button',
    disabled: false,
    submit: false,
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
};
export default Button;
//# sourceMappingURL=Button.js.map