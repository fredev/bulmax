import React from "react";
import { title, isOne, isTwo, isThree, isFour, isFive, isSix, isSpaced } from "../classes";
import classNames from "classnames";
;
var Title = function (_a) {
    var _b;
    var children = _a.children, spaced = _a.spaced, is1 = _a.is1, is2 = _a.is2, is3 = _a.is3, is4 = _a.is4, is5 = _a.is5, is6 = _a.is6;
    var classes = classNames((_b = {},
        _b[title] = true,
        _b[isOne] = is1,
        _b[isTwo] = is2,
        _b[isThree] = is3,
        _b[isFour] = is4,
        _b[isFive] = is5,
        _b[isSix] = is6,
        _b[isSpaced] = spaced,
        _b));
    return (React.createElement("h1", { className: classes },
        " ",
        children,
        " "));
    Title.defaultProps = {
        spaced: false,
        is1: false,
        is2: false,
        is3: false,
        is4: false,
        is5: false,
        is6: false,
    };
};
export default Title;
//# sourceMappingURL=Title.js.map