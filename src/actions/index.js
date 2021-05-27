export const removeExerciseFromWorkout = (workout_id, exercise_id) => {
  return {
    type: "REMOVE_EXERCISE_FROM_WORKOUT",
    payload: { workout_id, exercise_id },
  };
};

export const addWorkout = (workout_id, workoutData) => {
  return {
    type: "ADD_WORKOUT",
    payload: { workout_id, workoutData },
  };
};

export const setOverlayState = (newState, currentWorkout) => {
  return {
    type: "SET_OVERLAY_STATE",
    payload: { newState, currentWorkout },
  };
};
