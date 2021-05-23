import exercises from "../data/exercises.json";

const exerciesReducer = (state = exercises, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

export default exerciesReducer;
