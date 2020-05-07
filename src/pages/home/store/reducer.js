import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  cardList: [],
  contentList: [],
  recommendList: []
});

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.HANDLE_HOME_LIST:
      return state.merge({
        cardList: fromJS(actions.cardList),
        contentList: fromJS(actions.contentList),
        recommendList: fromJS(actions.recommendList)
      });
    default:
      break;
  }
  return state;
};
