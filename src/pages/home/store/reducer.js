import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  cardList: [],
  contentList: [],
  recommendList: [],
  page: 1,
});

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.HANDLE_HOME_LIST:
      return state.merge({
        cardList: fromJS(actions.cardList),
        contentList: fromJS(actions.contentList),
        recommendList: fromJS(actions.recommendList),
      });
    case actionTypes.SET_MORE_CONTENT_LIST:
      return state.merge({
        contentList: state
          .get('contentList')
          .concat(fromJS(actions.contentList)),
        page: fromJS(actions.page),
      });
    // return state.set(
    //   'contentList',
    //   state.get('contentList').concat(fromJS(actions.contentList))
    // );
    default:
      break;
  }
  return state;
};
