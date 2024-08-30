import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const initialValue = {
  _id: 1,
  username: "Laxman Krishnamurti",
  class: 12,
  age: 21,
};

//Action Creators
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

function handleAgeIncrement(payload) {
  store.dispatch({ type: incrementInAge, payload: payload });
}

function handleClassDecrement(payload) {
  store.dispatch({ type: decrementInClass, payload: payload });
}

function handleUsername(payload) {
  store.dispatch({ type: updateUsername, payload: payload });
}

// handleUsername("Harshad Mehta");

setInterval(() => {
  // store.dispatch({ type: decrementInClass });
  // store.dispatch({ type: updateUsername, payload: "Harshad" });
  // store.dispatch({ type: incrementInAge, payload: 2 });
  handleAgeIncrement(1);
  // handleClassDecrement(1);
  // handleUsername("Harshad Mehta");
}, 1000);
