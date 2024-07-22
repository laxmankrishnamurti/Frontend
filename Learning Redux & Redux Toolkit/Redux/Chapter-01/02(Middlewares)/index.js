import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const initialValue = {
  name: "Laxman Krishnamurti",
  class: 12,
  age: 21,
};

const store = createStore(reducer, applyMiddleware(logger.default));

const history = [];

function reducer(store = initialValue, action) {
  if (action.type === "incrementInAge") {
    return { ...store, age: store.age + 1 };
  } else if (action.type === "decrementInClass") {
    return { ...store, class: (store.class -= 1) };
  }
  return store;
}

setInterval(() => {
  store.dispatch({ type: "incrementInAge" });
}, 1000);
