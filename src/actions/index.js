export const removeExerciseFromWorkout = (workout_id, id) => {
  return {
    type: "REMOVE_EXERCISE_FROM_WORKOUT",
    payload: { workout_id, id },
  };
};
