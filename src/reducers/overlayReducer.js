const overlayReducer = (
  state = { currentWorkout: 0, isOpen: false },
  actions
) => {
  switch (actions.type) {
    case "SET_OVERLAY_STATE":
      let newState = { ...state };
      newState.isOpen = actions.payload.newState;
      newState.currentWorkout = actions.payload.currentWorkout;
      return newState;
    default:
      return state;
  }
};

export default overlayReducer;
