import * as APIUtil from '../util/jobs_api_util';

export const RECEIVE_JOBS = 'RECEIVE_JOBS';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const fetchJobs = filters => dispatch => {

  return APIUtil.fetchJobs(filters)
    .then(jobs => dispatch(receiveJobs(jobs)));
};

export const receiveJobs = jobs => {

  return {
    type: RECEIVE_JOBS,
    jobs
  }
}

export const receiveErrors = errors => {

  return {
    type: RECEIVE_ERRORS,
    errors
  }
}
