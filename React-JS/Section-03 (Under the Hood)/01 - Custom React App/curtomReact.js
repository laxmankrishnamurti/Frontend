const render = document.getElementById("render");

const myComponents = {
  type: "a",
  attributes: {
    href: "https://google.com",
    target: "_blank",
    title: "Click here to visit Google",
  },
  value: "Visit Google",
};

function createReact(component) {
  let anchor = document.createElement(component.type);
  anchor.innerHTML = component.value;

  for (let key in component.attributes) {
    anchor.setAttribute(key, component.attributes[key]);
  }

  render.appendChild(anchor);
}

createReact(myComponents);

/**
 * Note :: But, we cannot do the same in React. Because React is a Library and it has own methods and a specific way to take arguments while creating new element. We cannot directly render any object in React. In React, all UI design is totally based on Components and Every components are nothing but a Function.
 *
 * You might think that if all components are a function then we render in the same way as we rendered here..........The answer is No..............But, we can but don't do this, and Why? Then the answer is simple, Because of React has it's own methods and specific way to render a components.
 */
