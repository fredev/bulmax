import React from 'react';
import { StoryContainer } from './utils';
import Box from '../components/Box';
export default { title: 'Elements/Box' };
export var BaseBox = function () { return (React.createElement(StoryContainer, null,
    React.createElement("p", { style: { color: '#777' } }, " Base Box "),
    React.createElement(Box, null,
        React.createElement("ol", null,
            React.createElement("li", null, " Bulma "),
            React.createElement("li", null, " Box "),
            React.createElement("li", null, " Component "))))); };
//# sourceMappingURL=box.stories.js.map