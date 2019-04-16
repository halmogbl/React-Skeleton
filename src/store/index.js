import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducerFile from "./reducers";
import * as actionCreators from "./actions";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducerFile,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(actionCreators.checkForExpiredToken());
export default store;
