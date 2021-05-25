import workouts from "../data/workouts.json";
import cloneDeep from "lodash.clonedeep";

const workoutReducer = (state = { workouts, currentWorkout: 0 }, action) => {
  switch (action.type) {
    case "CHANGE_CURRENT_WORKOUT":
      const newState = cloneDeep(state);
      newState.currentWorkout = action.payload.index;
      return newState;
    default:
      return state;
  }
};

export default workoutReducer;
