```js
{
  currentUser: {
    id: 1,
    email: 'example@gmail.com'
  },
  forms: {
    signUp: {errors: []},
    logIn: {errors: []},
    userSettings: {errors: ['must choose at least one role']}
  },
  jobFilter: {
    location: 'Portland, ME',
    distance: 25,
    roles: ['dishwasher, yardwork, misc.']
  }
  jobList: {
    1: {
      title: 'Dishwasher',
      imgUrl: 'http://www.example.com/img/1',
      startDate: '06/07/17',
      endDate: '06/14/17',
      description: "We're looking for a dishwasher to fill in for 1 week at our Italian restaurant in the Old Port, Portland, ME.",
      rate: 10.00,
      roles: ['dishwasher']
      location: '17 Portland Rd, Portland, ME',
      business_id: 244,
      errors: [],
      status: 'open'
    }
  }
  reviews: {
    1: {
      title: 'Great worker',
      body: 'Arrived on schedule. Worked great alongside our staff. Quick learner.'
      rating: 5
    }
  }
}
