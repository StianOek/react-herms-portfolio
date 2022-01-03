const toggleReducer = (state = false, action) => {
  switch (action.type) {
    case "TOGGLED":
      return !state;
    default:
      return state;
  }
};

export default toggleReducer;
