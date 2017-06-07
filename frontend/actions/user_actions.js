import * as APIUtil from '../util/user_api_util';

// export const UPDATE_USER = 'UPDATE_USER';

import { receiveCurrentUser, receiveErrors } from './session_actions';

export const updateUser = user => dispatch => {
  return APIUtil.update(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON)))
};

export const RECEIVE_BIO = 'RECEIVE_BIO';
export const RECEIVE_BIO_ERRORS = 'RECEIVE_BIO_ERRORS';

export const updateBio = bio => dispatch => {
  return APIUtil.updateBio(bio)
    .then(bio => dispatch(receiveBio(bio)),
    error => dispatch(receiveBioErrors(error.responseJSON)))
};

export const receiveBio = bio => {
  return {
    type: RECEIVE_BIO,
    bio
  };
};

export const receiveBioErrors = errors => {
  return {
    type: RECEIVE_BIO_ERRORS,
    errors
  };
};
