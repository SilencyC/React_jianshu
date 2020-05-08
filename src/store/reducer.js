import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailsReducer } from '../pages/details/store'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  details: detailsReducer
});

export default reducer;
