import React from "react";
import Button from "../elements/Button";
import { Modal, ModalBackground, ModalContent } from "..";
export default { title: 'Components/Modal' };
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
export var BaseModal = function () {
    var _a = React.useState(false), open = _a[0], setOpen = _a[1];
    React.useEffect(function () {
        console.log('open changed', open);
    }, [open]);
    var onModalOpenClick = function () {
        setOpen(true);
    };
    var onModalCloseClick = function () {
        setOpen(false);
    };
    return (React.createElement("div", { style: style.container },
        React.createElement("div", { style: style.buttonContainer },
            React.createElement("h3", { className: "is-size-3 has-text-white" }, "Base Modal"),
            React.createElement(Button, { primary: true, onClick: onModalOpenClick }, "Open Modal"),
            React.createElement(Modal, { open: open },
                React.createElement(ModalBackground, null),
                React.createElement(ModalContent, null,
                    React.createElement("div", { className: "box" },
                        React.createElement("p", null, " Ciao "))),
                React.createElement(Button, { success: true, onClick: onModalCloseClick }, "Close")))));
};
//# sourceMappingURL=modal.stories.js.map