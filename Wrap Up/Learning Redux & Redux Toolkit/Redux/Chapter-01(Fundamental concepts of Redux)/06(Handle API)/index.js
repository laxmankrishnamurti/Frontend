import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import axios from "axios";

const initialState = {
  id: 1,
  username: "Laxman Krishnamurti",
  email: "laxmankrishnamurti@gmail.com",
  age: 21,
};

const getAccUserPending = "accoutn/getUser/Pending";
const getAccUserFulFilled = "accoutn/getUser/FulFilled";
const getAccUserRejected = "accoutn/getUser/Rejected";

const store = createStore(userReducer, applyMiddleware(logger.default, thunk));

function userReducer(state = initialState, action) {
  switch (action.type) {
    case getAccUserPending:
      return { ...state, pending: true };

    case getAccUserFulFilled:
      return {
        ...state,
        username: action.payload.username,
        age: action.payload.age,
        email: action.payload.email,
        pending: false,
      };

    case getAccUserRejected:
      return { ...state, pending: false, error: action.error };

    default:
      return state;
  }
}

function getUserAccount(id) {
  return async (dispatch, getState) => {
    try {
      dispatch(getUserAccountPending());
      const { data } = await axios.get(`http://localhost:3000/accounts/`);
      dispatch(getUserAccountFulFilled(data[4]));
    } catch (error) {
      getUserAccountRejected(error.message);
    }
  };
}

function getUserAccountPending() {
  return { type: getAccUserPending };
}

function getUserAccountFulFilled(data) {
  return {
    type: getAccUserFulFilled,
    payload: {
      username: data.username,
      email: data.email,
      age: data.age,
    },
  };
}

function getUserAccountRejected(error) {
  return { type: getAccUserRejected, error: error };
}

setTimeout(() => {
  store.dispatch(getUserAccount());
}, 2000);
