import { createStore } from "redux";

const initialValue = {
  name: "Laxman Krishnamurti",
  class: 12,
  age: 21,
};

const store = createStore(reducer);

const history = [];

function reducer(store = initialValue, action) {
  if (action.type === "incrementInAge") {
    return { ...store, age: store.age + 1 };
  } else if (action.type === "decrementInClass") {
    return { ...store, class: (store.class -= 1) };
  }
  return store;
}

// store.dispatch({ type: "incrementInAge" });
// store.dispatch({ type: "decrementInClass" });

// store.dispatch({ type: "incrementInAge" });
// store.dispatch({ type: "decrementInClass" });
// console.log("store is :: ", store.getState());
// console.log("store : ", store);
// console.log("store type : ", typeof store);

// store.subscribe(() => {
//   console.log(store.getState());
// });

setInterval(() => {
  store.dispatch({ type: "incrementInAge" });
  store.dispatch({ type: "decrementInClass" });
  history.push(store.getState());
  console.log("history :: ", history);
}, 2000);

console.log("history : ", history);
