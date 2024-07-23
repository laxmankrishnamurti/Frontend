import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const initialValue = {
  _id: 1,
  username: "Unknown",
  class: 12,
  age: 21,
};

const incrementInAge = "incrementInAge";
const decrementInClass = "decrementInClass";
const updateUsername = "updateUsername";

const store = createStore(reducer, applyMiddleware(logger.default));

const history = [];

function reducer(store = initialValue, action) {
  switch (action.type) {
    case incrementInAge:
      return { ...store, age: store.age + action.payload };

    case decrementInClass:
      return { ...store, class: store.class - action.payload };

    case updateUsername:
      return { ...store, username: action.payload };

    default:
      return store;
  }
}

async function handleAgeIncrement(payload) {
  store.dispatch({ type: incrementInAge, payload: payload });
}

function handleClassDecrement(payload) {
  store.dispatch({ type: decrementInClass, payload: payload });
}

async function handleUsername() {
  const { data } = await axios.get("http://localhost:3000/accounts/");
  // for (let i = 0; i < data.length; i++) {
  //   if (data[i].email === String("laxmankrishnamurti@gmail.com")) {
  //     store.dispatch({ type: updateUsername, payload: data[i].username });
  //   }
  // }
  // return store.dispatch({ type: updateUsername, payload: data[0].username });
  return { type: updateUsername, payload: data[0].username };
}

setInterval(() => {
  // store.dispatch({ type: decrementInClass });
  // store.dispatch({ type: updateUsername, payload: "Harshad" });
  // store.dispatch({ type: incrementInAge, payload: 2 });
  // handleAgeIncrement();
  // handleClassDecrement(3);
  // handleUsername("Harshad Mehta");
  // handleUsername();
  store.dispatch(handleUsername());
}, 1000);
