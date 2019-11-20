import React from "react";
import { modalClose, isLarge, isMedium, isSmall, } from "../classes";
import classNames from "classnames";
var ModalClose = function (_a) {
    var _b;
    var large = _a.large, medium = _a.medium, small = _a.small, onClose = _a.onClose;
    var classes = classNames((_b = {},
        _b[modalClose] = true,
        _b[isLarge] = large,
        _b[isMedium] = medium,
        _b[isSmall] = small,
        _b));
    return (React.createElement("button", { className: classes, "aria-label": "close", onClick: onClose }));
};
export default ModalClose;
//# sourceMappingURL=ModalClose.js.map