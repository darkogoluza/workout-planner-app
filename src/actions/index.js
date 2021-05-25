export const changeCurrentWorkout = (index) => {
  return {
    type: "CHANGE_CURRENT_WORKOUT",
    payload: { index },
  };
};
