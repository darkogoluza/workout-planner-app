import exerciesReducer from "./exercisesReducer";
import workoutsReducer from "./workoutReducer";
import workoutsPlanReducer from "./workoutPlanReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  exerciesReducer,
  workoutsReducer,
  workoutsPlanReducer,
});

export default allReducers;
