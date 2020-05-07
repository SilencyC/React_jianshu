import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  cardList: [],
});

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.HANDLE_HOME_LIST:
      return state.set("cardList", actions.result.cardList)
    default:
      break;
  }
  return state;
};
