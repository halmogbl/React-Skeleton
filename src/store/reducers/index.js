import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer
});
