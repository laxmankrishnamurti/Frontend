import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

//Action Constants
const updateUsername = "user/updateUsername";
const incUserAge = "user/incrementUserAge";
const loginStatus = "user/changeLoginStatus";

const initialState = {
  _id: 1,
  username: "Laxman Krishnamurti",
  age: 21,
  email: "laxmankrishnamurti@gmail.com",
  github_profile: "https://github.com/laxmankrishnamurti",
  login_status: false,
};

// const store = createStore(UserReducer, applyMiddleware(logger));
const store = createStore(UserReducer);

function UserReducer(state = initialState, action) {
  switch (action.type) {
    case updateUsername:
      return { ...state, username: action.payload };

    case incUserAge:
      if (action.payload == "") {
        window.alert("Payload required");
        return state;
      }
      if (state.age < 2 && Number(action.payload) < 0) {
        window.alert("Age should be less than 1");
        return { ...state, age: 1 };
      }
      return { ...state, age: (state.age += Number(action.payload)) };

    case loginStatus:
      return { ...state, login_status: !state.login_status };

    default:
      return state;
  }
}

//Action Creators

export function handleUpdateUsername(payload) {
  store.dispatch({ type: updateUsername, payload: payload });
}

export function handleIncUserAge(payload) {
  store.dispatch({ type: incUserAge, payload: payload });
}

export function handleLoginStatus() {
  store.dispatch({ type: loginStatus });
}

export default store;
