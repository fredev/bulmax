import React from 'react';
var style = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '10px 0'
    },
    buttonContainer: {
        width: '33.333%',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column'
    },
};
;
;
var StoryContainer = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { style: style.container }, children));
};
var StoryButtonContainer = function (_a) {
    var children = _a.children;
    return (React.createElement("div", { style: style.buttonContainer }, children));
};
export { StoryContainer, StoryButtonContainer };
//# sourceMappingURL=utils.js.map