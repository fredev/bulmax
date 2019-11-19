import React from 'react';
import { breadcrumb, isCentered } from '../classes';
import classNames from "classnames";
var Breadcrumb = function (_a) {
    var _b;
    var centered = _a.centered, children = _a.children;
    var classes = classNames((_b = {},
        _b[breadcrumb] = true,
        _b[isCentered] = centered,
        _b));
    return (React.createElement("nav", { className: classes, "aria-label": "breadcrumbs" },
        " ",
        children,
        " "));
};
Breadcrumb.defaultProps = {
    breadcrumb: true,
    centered: false,
};
export default Breadcrumb;
//# sourceMappingURL=Breadcrumb.js.map