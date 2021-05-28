import workouts from "../data/workouts.json";
import cloneDeep from "lodash.clonedeep";

const workoutReducer = (state = workouts, action) => {
  switch (action.type) {
    case "REMOVE_EXERCISE_FROM_WORKOUT": {
      const newState = cloneDeep(state);
      return newState.map((workout) => {
        if (workout.id === action.payload.workout_id) {
          const newWorkout = cloneDeep(workout);
          newWorkout.exercises = newWorkout.exercises.filter((exercise) => {
            return exercise.exercise_id !== action.payload.exercise_id;
          });
          workout = newWorkout;
        }
        return workout;
      });
    }
    case "ADD_WORKOUT": {
      const newState = cloneDeep(state);
      return newState.map((workout) => {
        if (workout.id === action.payload.workout_id) {
          const newWorkout = cloneDeep(workout);
          const newWorkoutData = { ...action.payload.workoutData };
          newWorkoutData.id =
            newWorkout.exercises[newWorkout.exercises.length - 1].id + 1;
          console.log(newWorkoutData);
          newWorkout.exercises.push(newWorkoutData);
          workout = newWorkout;
        }
        return workout;
      });
    }

    default:
      return state;
  }
};

export default workoutReducer;
