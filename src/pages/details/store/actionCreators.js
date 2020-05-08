import axios from 'axios';
import { actionTypes } from './';

const setDetails = (result) => {
  return {
    type: actionTypes.SET_DETAILS,
    detailsTitle: result.title,
    detailsContent: result.content,
  };
};

export const getDetails = (id) => {
  return (dispatch) => {
    // console.log(id);
    axios.get('/api/details.json?id=' + id).then((res) => {
      const result = res.data.data;
      dispatch(setDetails(result));
    });
  };
};
