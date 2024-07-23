import axios from "axios";
import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const initialValue = {
  _id: 1,
  username: "Unknown",
  class: 12,
  age: 21,
};

const incrementInAge = "incrementInAge";
const decrementInClass = "decrementInClass";
const updateUsername = "updateUsername";

const store = createStore(reducer, applyMiddleware(logger.default, thunk));

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

// async function handleUsername(dispatch, getState) {
//   const { data } = await axios.get("http://localhost:3000/accounts/");
//   dispatch({ type: updateUsername, payload: data[0].username });
// }

function handleUsername(id) {
  return async (dispatch, getState) => {
    console.log("id :: ", id);
    const { data } = await axios.get(`http://localhost:3000/accounts/${id}`);
    console.log("data :: ", data);
    dispatch(initUser(data.username));
  };
}

function initUser(value) {
  return { type: updateUsername, payload: value };
}

setTimeout(() => {
  store.dispatch(handleUsername("d839"));
}, 2000);
