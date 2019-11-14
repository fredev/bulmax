import React from "react";
import Button from "../components/Button";
export default { title: 'Buttons' };
var style = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    buttonContainer: {
        width: '33.333%',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column'
    },
};
export var Colors = function () { return (React.createElement("div", { style: style.container },
    React.createElement("div", { style: style.buttonContainer },
        React.createElement("h3", { className: "is-size-3 has-text-white" }, "is-primary"),
        React.createElement(Button, { primary: true }, "Button")),
    React.createElement("div", { style: style.buttonContainer },
        React.createElement("h3", { className: "is-size-3 has-text-white" }, "is-link"),
        React.createElement(Button, { link: true }, "Button")),
    React.createElement("div", { style: style.buttonContainer },
        React.createElement("h3", { className: "is-size-3 has-text-white" }, "is-info"),
        React.createElement(Button, { info: true }, "Button")),
    React.createElement("div", { style: style.buttonContainer },
        React.createElement("h3", { className: "is-size-3 has-text-white" }, "is-success"),
        React.createElement(Button, { success: true }, "Button")),
    React.createElement("div", { style: style.buttonContainer },
        React.createElement("h3", { className: "is-size-3 has-text-white" }, "is-warning"),
        React.createElement(Button, { warning: true }, "Button")),
    React.createElement("div", { style: style.buttonContainer },
        React.createElement("h3", { className: "is-size-3 has-text-white" }, "is-danger"),
        React.createElement(Button, { danger: true }, "Button")))); };
//# sourceMappingURL=buttons.stories.js.map