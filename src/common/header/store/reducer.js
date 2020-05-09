import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: [],
  mouseIn: false,
  page: 1,
  totalPage: 1,
  isShowHeader: true,
});

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.merge({
        focused: true,
        page: 1,
      });
    // return state.set("focused", true);
    case actionTypes.SEARCH_BLUR:
      return state.set('focused', false);
    case actionTypes.SET_HOT_SEARCH_LIST:
      return state.merge({
        list: actions.data,
        totalPage: actions.totalPage,
      });
    // return state
    //   .setIn(["list"], actions.data)
    //   .setIn(["totalPage"], actions.totalPage);
    case actionTypes.MOUSE_ENTER:
      return state.set('mouseIn', true);
    case actionTypes.MOUSE_LEAVE:
      return state.set('mouseIn', false);
    case actionTypes.SWITCH_NEXT:
      return state.set('page', actions.page);
    case actionTypes.SET_IS_SHOW_HEADER:
      return state.set('isShowHeader', actions.isShowHeader);
    default:
      return state;
  }
};
