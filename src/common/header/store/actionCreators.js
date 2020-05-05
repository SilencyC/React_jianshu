import { actionTypes } from "./index";
import { fromJS } from "immutable";
import axios from "axios";

export const handleFocus = () => {
  return {
    type: actionTypes.SEARCH_FOCUS,
  };
};

export const handleBlur = () => {
  return {
    type: actionTypes.SEARCH_BLUR,
  };
};

//1、把异步获取数据的逻辑都拆分到actionCreators里面，如果想拆分到actionCreators里面，要求actionCreators 放回的不能是一个普通的js对象了，而是一个函数，如果想actionCreators放回的结果是一个函数必须使用redux-thunk中间件；
export const getHotSearchList = () => {
  return (dispatch) => {
    axios
      .get("/api/hotSearchList.json")
      .then((res) => {
        const data = res.data;
        dispatch(setHotSearchList(data.data));
      })
      .catch(() => {
        console.log("error");
      });
  };
};

const setHotSearchList = (data) => {
  return {
    type: actionTypes.SET_HOT_SEARCH_LIST,
    //2、在获取到数据后，更新store里面的数据时，要注意现在store里面的数据时imutable数据类型，因此在actionCreators里面传递action之前将数据转成imutable数据类型；
    data: fromJS(data),
  };
};
