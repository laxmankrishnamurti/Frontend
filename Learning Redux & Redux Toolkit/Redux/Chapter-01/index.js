import { createStore } from "redux";

const initialValue = {
  name: "Laxman Krishnamurti",
  class: 12,
  age: 21,
};

const store = createStore(reducer);

function reducer(store = initialValue, action) {
  if (action.type === "incrementInAge") {
    return { ...store, age: store.age + 1 };
  } else if (action.type === "decrementInClass") {
    return { ...store, class: (store.class -= 1) };
  }
  return store;
}

store.dispatch({ type: "incrementInAge" });
store.dispatch({ type: "decrementInClass" });

store.dispatch({ type: "incrementInAge" });
store.dispatch({ type: "decrementInClass" });
console.log("store is :: ", store.getState());
