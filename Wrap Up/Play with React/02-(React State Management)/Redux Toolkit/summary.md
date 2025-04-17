# KEY TAKEAWAYS

1. Install Redux-Toolkit

```bash
$ npm install @reduxjs/toolkit
```

2. Install React-Redux to integrate Redux into React

```bash
$ npm install react-redux
```

3. Create a Redux Store

```js
// app/store.js

import { configureStore } from "@reduxjs/toolkit";
export const store = configureStore({
  reducer: {},
});
```

4. Provide the Redux Store to React

```jsx
// main.jsx
import { store } from "./app/store";
import { Provider } from "react-redux";

<Provider store={store}>
  <App />
</Provider>;
```

5. Create as many React State Slices as your need

```js
// src/features/counter/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: 10,
};

// Reducer function
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByValue: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByValue } = counterSlice.actions;
export default counterSlice.reducer;
```

6. Add all Slice Reducers to the store

```js
// src/app/store.js

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
```

7. Use Redux State and actions in React Components

- Two Methods/APIs
  - useSelector
  - useDispatch

```jsx
// src/app.jsx

import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByValue,
} from "./features/counter/counterSlice";
import "./App.css";

function App() {
  const data = useSelector((state) => state.counter.value);
  const dispath = useDispatch();

  function handleInputDispatch(e) {
    e.preventDefault();
    dispath(incrementByValue(Number(e.target[0].value)));
    e.target[0].value = "";
  }

  return (
    <>
      <p>Data : {data}</p>
      <button
        onClick={() => dispath(increment())}
        className="bg-violet-400 px-4 py-2 rounded-md mx-2"
      >
        Increase
      </button>
      <button
        onClick={() => dispath(decrement())}
        className="bg-violet-400 px-4 py-2 rounded-md mx-2"
      >
        Decrease
      </button>
      <form onSubmit={handleInputDispatch}>
        <input
          type="text"
          placeholder="Input value"
          className="border-pink-400 border-2 px-2 py-1 rounded-md"
        />
        <button
          type="submit"
          className="bg-violet-400 px-4 py-2 rounded-md mx-2"
        >
          Increase By Input valule
        </button>
      </form>
    </>
  );
}

export default App;
```
