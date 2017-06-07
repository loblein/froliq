import * as APIUtil from '../util/roles_api_util';

export const RECEIVE_ROLES = 'RECEIVE_ROLES';
export const RECEIVE_ROLE_ERRORS = 'RECEIVE_ROLE_ERRORS';

export const setRoles = roles => dispatch => {
  return APIUtil.setRoles(roles)
    .then(roles => dispatch(receiveRoles(roles)),
    errors => dispatch(receiveRoleErrors(errors)))
};

export const receiveRoles = roles => {
  return {
    type: RECEIVE_ROLES,
    roles
  };
};

export const receiveRoleErrors = errors => {
  return {
    type: RECEIVE_ROLE_ERRORS,
    errors
  };
};
