import * as APIUtil from '../util/jobs_api_util';

export const RECEIVE_JOBS = 'RECEIVE_JOBS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_LISTING_ERRORS = 'RECEIVE_LISTING_ERRORS';

export const fetchJobs = filters => dispatch => {

  return APIUtil.fetchJobs(filters)
    .then(jobs => dispatch(receiveJobs(jobs)));
};


export const createListing = listing => dispatch => {

  return APIUtil.createListing(listing)
    .then(listing => dispatch(receiveListing(listing)),
      error => dispatch(receiveListingErrors(error.responseJSON)))
};

// export const setRoleSelector = roleSelector => dispatch => {
//
//   return APIUtil.setRoles(roleSelector)
//     .then(listing => dispatch(receiveListing(listing)))
//
// };

// Worker-facing //

export const receiveJobs = jobs => {

  return {
    type: RECEIVE_JOBS,
    jobs
  }
}

// Employer-facing //

export const receiveListing = listing => {

  return {
    type: RECEIVE_LISTING,
    listing
  }
}

export const receiveListingErrors = errors => {

  return {
    type: RECEIVE_LISTING_ERRORS,
    errors
  }
}
