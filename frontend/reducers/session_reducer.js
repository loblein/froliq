import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullUser = Object.freeze({
  user: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return state;
    case RECEIVE_ERRORS:
      return state;
    default:
      return state;
  }
};

export default SessionReducer;
