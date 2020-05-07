import { actionTypes } from './index';
import { fromJS } from 'immutable';

const defaultState = fromJS({
  cardList: [],
  contentList: [],
  recommendList: [],
  page: 1,
  showScroll: false,
});

const handleHomeList = (state, actions) => {
  return state.merge({
    cardList: fromJS(actions.cardList),
    contentList: fromJS(actions.contentList),
    recommendList: fromJS(actions.recommendList),
  });
};

const setMoreContentList = (state, actions) => {
  return state.merge({
    contentList: state.get('contentList').concat(fromJS(actions.contentList)),
    page: fromJS(actions.page),
  });
};

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.HANDLE_HOME_LIST:
      return handleHomeList(state, actions);
    case actionTypes.SET_MORE_CONTENT_LIST:
      return setMoreContentList(state, actions);
    case actionTypes.CHANGE_SCROLL_TOP_SHOW:
      return state.set('showScroll', fromJS(actions.showScroll));
    default:
      return state;
  }
};
