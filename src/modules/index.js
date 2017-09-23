import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import locations from "./locations";
import categories from "./categories";

export default combineReducers({
  routing: routerReducer,
  locations,
  categories
});
