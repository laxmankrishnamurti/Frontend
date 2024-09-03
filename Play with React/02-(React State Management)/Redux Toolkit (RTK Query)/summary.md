# KEY TAKEAWAYS

Redux Toolkit Query is just a way to fetch data from an api-endpoint for our application. Redux Toolkit Query provides an abstraction layer by hiding underlying concept of data fetching as we done previously in Redux by using Redux Thunk.

If we want to get data from an API-endpoint we must have to use "Redux Thunk", without this we cannot fetch data in Redux. So, Redux Toolkit is just like Redux Thunk. It hides the underlying complexities of unnecessary writing actor constants and action creators.

In short, Redux Toolkit Query is an implementation of Redux Thunk.

# How to Use Redux Toolkit Query(RTK Query) with React.

It is included in the <code>@reduxjs/toolkit</code> package an an additional addon.

```bash
# Install redux toolkit and react-redux

$ npm i @reduxjs/toolkit
$ npm i react-redux
```

1. In RTK Query there is a term named "Service" is like a utility task that will fetch data from an API-endpoint for our application. Every RTK Query is known as a Service. Let's create a service for our application.........

Let's create a fake-json server to fetch data.

```bash
$ sudo npm install -g json-server
$ json-server ./users.json -p 3000(default port number)
```

```js
// src/services/users.js

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/",
  }),
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (id) => `users/${id}`,
    }),
  }),
});

export const { useGetUserByIdQuery } = userApi;
```

2. Create a store and pass a reference of the service

```js
// src/store.js

import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { userApi } from "./services/users";

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

setupListeners(store.dispatch);
```

3. Provide the store to React

```jsx
// main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { store } from "./store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
```

4. Use the Query in a Component

```jsx
// src/App.jsx

import { useGetUserByIdQuery } from "./services/users";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [userData, setUserData] = useState({});
  const { data, isError, isFetching } = useGetUserByIdQuery("1");

  useEffect(() => {
    if (!isFetching && data) {
      setUserData(data);
    }
  }, [isFetching, data]);

  return (
    <>
      {isError ? (
        <p>Oops..... Something went wrong</p>
      ) : isFetching ? (
        <p>Fetching</p>
      ) : userData ? (
        <p>Username is : {userData.name}</p>
      ) : null}
    </>
  );
}

export default App;
```

5. Add Multiple end-points

```js
endpoints: (builder) => ({
  getUserById: builder.query({
    query: (id) => `users/${id}`,
  }),
  getAllUsers: builder.query({
    query: () => `users`,
  }),
});

export const { useGetUserByIdQuery, useGetAllUsersQuery } = userApi;
```
