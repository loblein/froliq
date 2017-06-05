import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const update = user => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.user.id}`,
    data: user
  });
};
