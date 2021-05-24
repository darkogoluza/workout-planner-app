import exerciesReducer from "./exercisesReducer";
import workoutReducer from "./workoutReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({ exerciesReducer, workoutReducer });

export default allReducers;
