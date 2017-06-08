import * as APIUtil from '../util/user_api_util';

import { receiveCurrentUser, receiveErrors } from './session_actions';

export const updateUser = user => dispatch => {
  return APIUtil.update(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON)))
};

export const updateBio = bio => dispatch => {
  return APIUtil.updateBio(bio)
    .then(user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON)))
};
