import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const update = user => {
  debugger
  return $.ajax({
    method: 'PATCH',
    url: `api/users/:user_id`,
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

export const updateEmployerDetails = details => {

  return $.ajax({
    method: 'PATCH',
    url: 'api/users/:user_id/employer_detail',
    data: details
  })
}
