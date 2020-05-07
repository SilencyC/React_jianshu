import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  cardList: [],
  contentList: [],
});

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.HANDLE_HOME_LIST:
      return state.merge({
        cardList: fromJS(actions.result.cardList),
        contentList: fromJS(actions.result.contentList),
      });
    default:
      break;
  }
  return state;
};
