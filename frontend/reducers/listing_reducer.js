import { RECEIVE_LISTING, RECEIVE_LISTING_ERRORS } from '../actions/job_actions';
import { merge } from 'lodash';

const _initialState = Object.freeze({
  listing: {},
  errors: []
});

const ListingReducer = (state = _initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LISTING:
      return merge({}, _initialState, action.listing);
    case RECEIVE_LISTING_ERRORS:
      return merge({}, state, action.errors);
    default:
      return state;
  };
};

export default ListingReducer;
