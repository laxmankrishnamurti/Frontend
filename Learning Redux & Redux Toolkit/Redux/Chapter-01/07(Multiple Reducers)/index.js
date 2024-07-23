import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";

const initialAccountValue = { amount: 1000 };
const initialBonusPoint = { points: 0 };

const incAmount = "amount/increase";
const incAmountByValue = "amount/increaseByValue";

const incBonus = "bonus/increase";

const store = createStore(
  combineReducers({
    account: accountReducer,
    bonus: bonusReducer,
  }),
  applyMiddleware(logger.default)
);

function accountReducer(state = initialAccountValue, action) {
  switch (action.type) {
    case incAmount:
      return { ...state, amount: state.amount + state.amount * 0.07 };

    case incAmountByValue:
      return { ...state, amount: state.amount + action.payload };

    default:
      return state;
  }
}

function bonusReducer(state = initialBonusPoint, action) {
  switch (action.type) {
    case incBonus:
      return { ...state, points: state.points + 1 };

    case incAmountByValue:
      if (action.payload >= 500) {
        return { ...state, points: state.points + 5 };
      } else {
        return { ...state, points: state.points + 2 };
      }

    default:
      return state;
  }
}

function handleAmount() {
  return { type: incAmount };
}

function handleAmountByValue(payload) {
  return { type: incAmountByValue, payload: payload };
}

function handleBonus() {
  return { type: incBonus };
}

setTimeout(() => {
  // store.dispatch(handleAmount());
  // store.dispatch(handleBonus());
  store.dispatch(handleAmountByValue(600));
}, 2000);
