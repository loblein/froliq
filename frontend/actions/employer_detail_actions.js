import * as APIUtil from '../util/user_api_util';

import { receiveCurrentUser, receiveErrors } from './session_actions';

export const updateEmployerDetails = details => dispatch => {

  return APIUtil.updateEmployerDetails(details)
    .then(user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)))
};
