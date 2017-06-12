import * as APIUtil from '../util/roles_api_util';

import { receiveCurrentUser, receiveErrors } from './session_actions';

export const setRoles = roles => dispatch => {
  return APIUtil.setRoles(roles)
    .then(user => dispatch(receiveCurrentUser(user)),
    error => dispatch(receiveErrors(error.responseJSON)))
};
