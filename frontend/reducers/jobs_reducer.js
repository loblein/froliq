import { RECEIVE_JOBS, RECEIVE_ERRORS } from '../actions/job_actions';
import { merge } from 'lodash';

const JobsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_JOBS:
      const jobs = action.jobs;
      return _.merge({}, {jobs});
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return _.merge({}, {errors});
    default:
      return state;
  };

};

export default JobsReducer;
