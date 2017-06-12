import { RECEIVE_FILTER } from '../actions/filter_actions';
import { merge } from 'lodash';

const initialState = {
  location: ''
};

const FilterReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_FILTER:
      const filter = action.filter;
      return merge({}, state, {location: filter});
    default:
      return state;
  };
};

export default FilterReducer;
