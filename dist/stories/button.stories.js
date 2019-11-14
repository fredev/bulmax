import React from "react";
import Button from "../components/Button";
export default { title: 'Elements/Button' };
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
export var Sizes = function () { return (''); };
export var Rounded = function () { return (React.createElement("div", { style: style.container },
    React.createElement("div", { style: style.buttonContainer },
        React.createElement("h3", { className: "is-size-3 has-text-white" }, "is-primary"),
        React.createElement(Button, { primary: true, rounded: true }, "Button")),
    React.createElement("div", { style: style.buttonContainer },
        React.createElement("h3", { className: "is-size-3 has-text-white" }, "is-link"),
        React.createElement(Button, { link: true, rounded: true }, "Button")),
    React.createElement("div", { style: style.buttonContainer },
        React.createElement("h3", { className: "is-size-3 has-text-white" }, "is-info"),
        React.createElement(Button, { info: true, rounded: true }, "Button")),
    React.createElement("div", { style: style.buttonContainer },
        React.createElement("h3", { className: "is-size-3 has-text-white" }, "is-success"),
        React.createElement(Button, { success: true, rounded: true }, "Button")),
    React.createElement("div", { style: style.buttonContainer },
        React.createElement("h3", { className: "is-size-3 has-text-white" }, "is-warning"),
        React.createElement(Button, { warning: true, rounded: true }, "Button")),
    React.createElement("div", { style: style.buttonContainer },
        React.createElement("h3", { className: "is-size-3 has-text-white" }, "is-danger"),
        React.createElement(Button, { danger: true, rounded: true }, "Button")))); };
//# sourceMappingURL=button.stories.js.map