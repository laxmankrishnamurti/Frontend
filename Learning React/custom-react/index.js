const root = document.getElementById('root');

function renderCustomElement(customElement, root) {
    const createdElement = document.createElement(customElement.type);

    for (const key in customElement.props) {
        createdElement.setAttribute(key, customElement.props[key]);
    }
    createdElement.innerHTML = customElement.children
    root.appendChild(createdElement);
}

const customElement = {
    type: "a",
    props: {
        href: "https://www.google.com",
        target: "_blank"
    },
    children: "Click me to visit Google"
}

renderCustomElement(customElement, root);