import { SET_LANGUAGE, TOGGLED } from "../actions/types";

const initialState = {
  menuOpen: false,
  language: "no",
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LANGUAGE:
      return { ...state, language: payload.language };

    case TOGGLED:
      return { ...state, menuOpen: payload };

    default:
      return state;
  }
};

export default reducer;
