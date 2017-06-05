export const update = user => {
  return $.ajax({
    method: 'PATCH',
    url: `api/users/${user.user.id}`,
    data: user
  });
};
