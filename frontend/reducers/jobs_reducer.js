import { RECEIVE_JOBS, RECEIVE_ERRORS } from '../actions/job_actions';
import { merge } from 'lodash';

const JobsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_JOBS:
      return merge({}, state, action.jobs);
    default:
      return state;
  };

};

export default JobsReducer;
