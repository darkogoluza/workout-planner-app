import exerciesReducer from "./exercisesReducer";
import workoutsReducer from "./workoutReducer";
import workoutsPlanReducer from "./workoutPlanReducer";
import overlayReducer from "./overlayReducer";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  exerciesReducer,
  workoutsReducer,
  workoutsPlanReducer,
  overlayReducer,
});

export default allReducers;
