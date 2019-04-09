import { AUTH_SET_TOKEN } from "../actions/actionTypes";

const intialState = {
  authenticated: false,
  token: null
};

const reducer = (state = intialState, action) => {
  if (action.type === AUTH_SET_TOKEN) {
    return {
      ...state,
      authenticated: true,
      token: action.token
    };
  } else {
    return state;
  }
};

export default reducer;
