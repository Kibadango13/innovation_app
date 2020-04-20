import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import {
  useSelector as useSelectorRR,
  useDispatch as useDispatchRR
} from "react-redux";

import reducers from "./reducers";
import { AppState, AppActions, ThunkDispatch } from "./store.types";
import env from "../../env";

// Allow redux dev tools to work for this app
let composeEnhancers: any = compose;
if (env.ENV === "development") {
  // Allow redux dev tools to work for this app
  composeEnhancers = composeWithDevTools({ trace: true });
}

const middlewares = [thunk as ThunkMiddleware<AppState, AppActions>];

// combine reducers into a single one
const reducer = combineReducers({
  ...reducers
});

// Create the general redux system + apply middleware if needed
const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

const useSelector = <T>(selector: (state: AppState) => T) =>
  useSelectorRR<AppState, T>(selector);

const useDispatch = () => useDispatchRR<ThunkDispatch>();

export default store;
export { reducer, useSelector, useDispatch };
