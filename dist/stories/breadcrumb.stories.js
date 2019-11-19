import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
export default { title: 'Components/Breadcrumb' };
export var SimpleBreadcrumb = function () { return (React.createElement("div", { style: { display: 'flex', flexDirection: 'column' } },
    React.createElement("div", null,
        React.createElement("h6", null, " Standard Breadcrumb "),
        React.createElement(Breadcrumb, { breadcrumb: true },
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "Bulma")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "Documentation")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "Components")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#", "aria-current": "page" }, "Breadcrumb"))))),
    React.createElement("div", null,
        React.createElement("h6", null, " Centered Breadcrumb "),
        React.createElement(Breadcrumb, { breadcrumb: true, centered: true },
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "Bulma")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "Documentation")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#" }, "Components")),
                React.createElement("li", null,
                    React.createElement("a", { href: "#", "aria-current": "page" }, "Breadcrumb"))))))); };
//# sourceMappingURL=breadcrumb.stories.js.map