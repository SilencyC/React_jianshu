import { actionTypes } from "./index";
import { fromJS } from "immutable";

const defaultState = fromJS({
  focused: false,
  list: [],
});

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set("focused", true);
    case actionTypes.SEARCH_BLUR:
      return state.set("focused", false);
    case actionTypes.SET_HOT_SEARCH_LIST:
      return state.setIn(["list"], actions.data);
    default:
      return state;
  }
};
