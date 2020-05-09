import axios from 'axios';
import { actionTypes } from './';

export const setIsLogin = (value) => {
  return {
    type: actionTypes.SET_IS_LOGIN,
    value,
  };
};

export const handleLogin = (loginData) => {
  return (dispatch) => {
    axios
      .get(
        'api/login.json?user=' +
          loginData.user +
          '&password=' +
          loginData.password
      )
      .then((res) => {
        const data = res.data.data;
        if (data === 1) {
          dispatch(setIsLogin(true));
        }
      });
  };
};
