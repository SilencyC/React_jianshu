import { actionTypes } from './index';
import axios from 'axios';

const handleCardList = (result) => {
  return {
    type: actionTypes.HANDLE_HOME_LIST,
    cardList: result.cardList,
    contentList: result.contentList,
    recommendList: result.recommendList
  };
};

export const getHomeList = () => {
  return (dispatch) => {
    axios.get('api/homeList.json').then((res) => {
      const data = res.data.data;
      dispatch(handleCardList(data));
    });
  };
};
