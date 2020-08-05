import * as Actions from "./actions";
import initialState from "../store/initialState";

const UsersReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case Actions.SIGN_IN:
      return {
        ...state,
        ...action.payload,
      };
      break;

    default:
      return state;
      break;
  }
};

export default UsersReducer;
