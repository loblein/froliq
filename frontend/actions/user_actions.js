import * as APIUtil from '../util/user_api_util';

export const UPDATE_USER = 'UPDATE_USER';

import { receiveCurrentUser, receiveErrors } from './session_actions';

export const updateUser = user => dispatch => {
  return APIUtil.update(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON)))
};
