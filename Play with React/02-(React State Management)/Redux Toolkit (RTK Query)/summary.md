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
