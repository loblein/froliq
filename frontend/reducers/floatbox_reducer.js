import { POPULATE_FLOATBOX, CLEAR_FLOATBOX, DISPLAY_FLOATBOX } from '../actions/floatbox_actions';
import { merge } from 'lodash';

const initialState = Object.freeze({
  data: {},
  display: false
});

const FloatboxReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case POPULATE_FLOATBOX:
      const data = action.data;
      return merge({}, state, {data: data});
    case CLEAR_FLOATBOX:
      return merge({}, initialState);
    case DISPLAY_FLOATBOX:
      return merge({}, state, {display: true});
    default:
      return state;
  };
};

export default FloatboxReducer;
