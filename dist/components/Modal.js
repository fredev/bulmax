import React from "react";
import { isActive, modal, } from "../classes";
import classNames from "classnames";
var Modal = function (_a) {
    var _b;
    var children = _a.children, active = _a.active;
    var classes = classNames((_b = {},
        _b[modal] = true,
        _b[isActive] = active,
        _b));
    return open
        ? (React.createElement("div", { className: classes }, children))
        : null;
};
export default Modal;
//# sourceMappingURL=Modal.js.map