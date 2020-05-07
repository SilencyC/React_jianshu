import { actionTypes } from './index';
import axios from 'axios';

const handleHomeList = (result) => {
  return {
    type: actionTypes.HANDLE_HOME_LIST,
    cardList: result.cardList,
    contentList: result.contentList,
    recommendList: result.recommendList,
  };
};

const setMoreContentList = (result, page) => {
  return {
    type: actionTypes.SET_MORE_CONTENT_LIST,
    contentList: result.contentList,
    page,
  };
};

export const getHomeList = () => {
  return (dispatch) => {
    axios.get('api/homeList.json').then((res) => {
      const data = res.data.data;
      dispatch(handleHomeList(data));
    });
  };
};

export const getMoreListData = (page) => {
  return (dispatch) => {
    axios.get('api/moreContentList.json?page=' + page).then((res) => {
      const data = res.data.data;
      dispatch(setMoreContentList(data, page + 1));
    });
  };
};

export const changeScrollTopShow = (showScroll) => {
  return {
    type: actionTypes.CHANGE_SCROLL_TOP_SHOW,
    showScroll,
  };
};
