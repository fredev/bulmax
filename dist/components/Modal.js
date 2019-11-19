import React from "react";
import { isActive, modalBackground, modalContent } from "../classes";
export var ModalContent = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { className: modalContent }, children));
};
export var ModalBackground = function () { return (React.createElement("div", { className: modalBackground })); };
export var Modal = function (_a) {
    var children = _a.children, open = _a.open;
    console.log(open);
    return open === true
        ? (React.createElement("div", { className: isActive }, children))
        : null;
};
//# sourceMappingURL=Modal.js.map