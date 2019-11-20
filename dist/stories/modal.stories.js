import React from "react";
import Button from "../elements/Button";
import Modal from "../components/Modal";
import ModalContent from "../components/ModalContent";
import ModalClose from "../components/ModalClose";
import ModalBackground from "../components/ModalBackground";
import Box from "../components/Box";
import { StoryContainer } from "./utils";
export default { title: 'Components/Modal' };
export var BaseModal = function () {
    var _a = React.useState(false), active = _a[0], setActive = _a[1];
    React.useEffect(function () {
        console.log('open changed', active);
    }, [active]);
    var onModalOpenClick = function () {
        setActive(true);
    };
    var onModalCloseClick = function () {
        setActive(false);
    };
    return (React.createElement(StoryContainer, null,
        React.createElement("h3", { className: "is-size-3 has-text-white" }, "Base Modal"),
        React.createElement(Button, { primary: true, onClick: onModalOpenClick }, "Open Modal"),
        React.createElement(Modal, { active: active },
            React.createElement(ModalBackground, null),
            React.createElement(ModalContent, null,
                React.createElement(Box, null,
                    React.createElement("article", { className: "media" },
                        React.createElement("div", { className: "media-left" },
                            React.createElement("figure", { className: "image is-64x64" },
                                React.createElement("img", { src: "https://bulma.io/images/placeholders/128x128.png", alt: "Image" }))),
                        React.createElement("div", { className: "media-content" },
                            React.createElement("div", { className: "content" },
                                React.createElement("p", null,
                                    React.createElement("strong", null, "John Smith"),
                                    " ",
                                    React.createElement("small", null, "@johnsmith"),
                                    " ",
                                    React.createElement("small", null, "31m"),
                                    React.createElement("br", null),
                                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.")),
                            React.createElement("nav", { className: "level is-mobile" },
                                React.createElement("div", { className: "level-left" },
                                    React.createElement("a", { className: "level-item", "aria-label": "retweet" },
                                        React.createElement("span", { className: "icon is-small" },
                                            React.createElement("svg", { className: "svg-inline--fa fa-retweet fa-w-20", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "retweet", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", "data-fa-i2svg": "" },
                                                React.createElement("path", { fill: "currentColor", d: "M629.657 343.598L528.971 444.284c-9.373 9.372-24.568 9.372-33.941 0L394.343 343.598c-9.373-9.373-9.373-24.569 0-33.941l10.823-10.823c9.562-9.562 25.133-9.34 34.419.492L480 342.118V160H292.451a24.005 24.005 0 0 1-16.971-7.029l-16-16C244.361 121.851 255.069 96 276.451 96H520c13.255 0 24 10.745 24 24v222.118l40.416-42.792c9.285-9.831 24.856-10.054 34.419-.492l10.823 10.823c9.372 9.372 9.372 24.569-.001 33.941zm-265.138 15.431A23.999 23.999 0 0 0 347.548 352H160V169.881l40.416 42.792c9.286 9.831 24.856 10.054 34.419.491l10.822-10.822c9.373-9.373 9.373-24.569 0-33.941L144.971 67.716c-9.373-9.373-24.569-9.373-33.941 0L10.343 168.402c-9.373 9.373-9.373 24.569 0 33.941l10.822 10.822c9.562 9.562 25.133 9.34 34.419-.491L96 169.881V392c0 13.255 10.745 24 24 24h243.549c21.382 0 32.09-25.851 16.971-40.971l-16.001-16z" })))),
                                    React.createElement("a", { className: "level-item", "aria-label": "like" },
                                        React.createElement("span", { className: "icon is-small" },
                                            React.createElement("svg", { className: "svg-inline--fa fa-heart fa-w-16", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "heart", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
                                                React.createElement("path", { fill: "currentColor", d: "M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" })))))))))),
            React.createElement(ModalClose, { large: true, onClose: onModalCloseClick }, "Close"))));
};
//# sourceMappingURL=modal.stories.js.map