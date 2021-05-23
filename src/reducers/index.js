import exerciesReducer from "./exercisesReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({ exerciesReducer });

export default allReducers;
