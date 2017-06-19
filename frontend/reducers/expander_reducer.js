import { RECEIVE_SHOW, RECEIVE_COMPONENT } from '../actions/expander_actions';
import { merge } from 'lodash';

const initialState = Object.freeze({
  show: false,
  component: 'travel'
});

const ExpanderReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_SHOW:
      const show = action.show;
      return merge({}, state, {show: show});
    case RECEIVE_COMPONENT:
      const component = action.component;
      return merge({}, state, {component: component});
    default:
      return state;
  };
};

export default ExpanderReducer;
