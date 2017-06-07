import { receiveRoles, receiveRoleErrors } from '../actions/role_actions';

export const setRoles = (roles) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/:user_id/role_selector`,
    data: roles
  });
};
