import { receiveJobs, receiveErrors } from '../actions/job_actions';
import { receiveListing, receiveListingErrors } from '../actions/job_actions';

export const fetchJobs = (data) => {

  return $.ajax({
    method: 'GET',
    url: '/api/jobs',
    data
  });
};

export const createListing = (job) => {

  return $.ajax({
    method: 'POST',
    url: '/api/jobs',
    data: job
  });
};
