import { fromJS } from 'immutable';
import { actionTypes } from './';

const defaultState = fromJS({
  detailsTitle: 'detailsTitle',
  detailsContent: '<p>Details</p>',
});

const setDetails = (state, actions) => {
  return state.merge({
    detailsTitle: fromJS(actions.detailsTitle),
    detailsContent: fromJS(actions.detailsContent),
  });
};

export default (state = defaultState, actions) => {
  switch (actions.type) {
    case actionTypes.SET_DETAILS:
      return setDetails(state, actions);

    default:
      return state;
  }
};
