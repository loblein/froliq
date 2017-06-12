import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const update = user => {

  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.user.id}`,
    data: user
  });
};

export const updateBio = bio => {

  return $.ajax({
    method: 'PATCH',
    url: 'api/users/:user_id/biography',
    data: bio
  });
};
