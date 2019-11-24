import React from "react";
import classNames from "classnames";
import { areLarge, areMedium, areSmall, buttons, hasAddons, isCentered, isRight } from "../classes";
var Buttons = function (_a) {
    var _b;
    var children = _a.children, small = _a.small, medium = _a.medium, large = _a.large, addons = _a.addons, centered = _a.centered, right = _a.right;
    var classes = classNames((_b = {},
        _b[buttons] = true,
        _b[areSmall] = small,
        _b[areMedium] = medium,
        _b[areLarge] = large,
        _b[hasAddons] = addons,
        _b[isCentered] = centered,
        _b[isRight] = right,
        _b));
    return (React.createElement("div", { className: classes }, children));
};
export default Buttons;
//# sourceMappingURL=Buttons.js.map