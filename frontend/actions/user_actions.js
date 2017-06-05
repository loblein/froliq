import * as APIUtil from '../util/user_api_util';

export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

import { receiveCurrentUser, receiveErrors } from './session_actions';

export const updateUserInfo = user => dispatch => {
  return APIUtil.update(user)
    .then(user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON)))
};
