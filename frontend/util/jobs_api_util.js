import { receiveJobs, receiveErrors } from '../actions/job_actions';

export const fetchJobs = (data) => {
  debugger;
  return $.ajax({
    method: 'GET',
    url: '/api/jobs',
    data
  });
};
