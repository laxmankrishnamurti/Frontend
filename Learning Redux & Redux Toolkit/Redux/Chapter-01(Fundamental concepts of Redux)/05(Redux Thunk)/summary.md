# KEY TAKEAWAYS

As we know that middlewares are acts like a middleman. If we talk about Redux Thunk, it is a special kind of middleware in Redux. It basically tracks the action creators which is a function. If a function is dispatched in the form of action creators then Redux Thunk will catch it and run the function before sending to the actual reducers that is responsible to modify the state.

Redux Thunk will have access of dispatch and the previous state value so that if there is any need on this stage to modify or add some extra values then it can do so.

Once the execution get done then it is sended to the actual reducers.

Formal Definition :: Redux Thunk is a middleware for Redux that allows you to write action creators that return a function instead of an action object. This function can then be used to dispatch other actions asynchronously, perform side effects, or handle more complex logic that can't be achieved with plain action objects.

```js
store.dispatch({type:increment, payload: data})

Here, {type:increment, payload:data} ----> Action Creators (Plain action objects)

store.dispath(getUserDetails('g2gv4vw7f8rt9490rf'))

Here, getUserDetails('g2gv4vw7f8rt9490rf') -----> Functional action creators
```
