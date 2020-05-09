import { fromJS } from 'immutable';
import { actionTypes } from './';

const defaultState = fromJS({
  isLogin: false,
});

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.SET_IS_LOGIN:
      return state.set('isLogin', fromJS(actions.value));
    default:
      return state;
  }
};
