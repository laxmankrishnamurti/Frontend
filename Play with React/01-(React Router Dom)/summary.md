# Application of React-Router-Dom.

React router dom is used to navigate from one page to another.

```bash
$ npm create vite@latest .
$ npm install
$ npm install react-router-dom
$ npm run dev
```

- First thing to do is create a "Browser Router" and configure our first route. This will enable client side routing for our web app.

- The <code>main.jsx</code> file is the entry point. Open it up and we'll put React Router on the page.

- Create and render a browser router in <code>main.jsx</code>

This first route is what we often call the "root route" since the rest of our routes will render inside of it. It will serve as the root layout of the UI, we'll have nested layouts as we get farther along.

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <div>Hello world! This is React-Router-Dom</div>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

- Create a Root Layout for this app. -> Have a look in Root directory of the project.

- Handling Not Found Errors :: It's always a good idea to know how our app responds to errors early in the project because we all write far more bugs than features when building a new app! Not only will our users get a good experience when this happens, but it helps you during development as well.

## Nested Routing

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);
```

If we want to use nested routing with react-router-dom we need to tell the root route where we want to render the child routes. We do that with <code><Outlet/></code>

- Find the location on which we want to render the child element. Import the <code><Outler/></code> from <code>react-router-dom</code> and paste it into the location.

```jsx
import { Outlet } from "react-router-dom";

<div id="child-route">
  <Outlet />
</div>;
```

## Getting data into a component using React-Router-Dom APIs.

URL Segments, layouts, and data are more often than not coupled(sync) together. To Synchronize all of them, React Router has data conventions to get data into the route component easily.

There are two APIs which we can use to load data, <code>loader</code> and <code>useLoaderData.</code> First we should create and export a loader function in the root route module, then we will hook it up to the route. Finally we'll access and render the data.
