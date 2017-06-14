

export const setCategories = (categories) => {

  return $.ajax({
    method: 'POST',
    url: '/api/jobs/:job_id/category_selector',
    data: categories
  })
}
