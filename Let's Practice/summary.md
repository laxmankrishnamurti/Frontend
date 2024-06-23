# Key-Points ::

(1). Before using <code>Link</code> element route should be setup.

- To setting-up route, import these components
  - <code>import { createBrowserRouter, Route, RouterProvider, createRoutesFromElements } from 'react-router-dom'</code>
  - and import the components that is going to be used on the route.

Now, <code>Link</code> element is ready to navigate.

(2). Hooks can only be called inside of the body of a function component.

(3). Whenever we are trying to get data by hitting an end point we should use <code>loader</code> method for smooth fetching and showing user data. Whenever user hover on the navigation link the <code>loader</code> method starts fetching data in the background to give a smooth user experience.

- About <code>loader</code> :: The loader in react-router-dom is neither a library nor a hook. Instead, it is a function used in the context of data fetching for routes in React Router. The loader function allows you to load data before rendering a route, making it possible to ensure that the necessary data is available when a route is accessed.
