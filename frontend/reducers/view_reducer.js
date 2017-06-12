import { RENDER_VIEW } from '../actions/view_actions';
import { merge } from 'lodash';

const initialState = {
  currentWindow: 'opportunities'
}

const ViewReducer = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RENDER_VIEW:
      return Object.assign({}, state, {currentWindow: action.view});
    default:
      return state;
  };
};

export default ViewReducer;
