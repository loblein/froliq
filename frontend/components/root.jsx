import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import SessionForm from './session_form/session_form';
import UserProfileContainer from './user_profile/user_profile_container';

const Root = ({ store }) => (
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path='/' component={ App } />
      <Route path='/login' component={ SessionFormContainer } />
      <Route path='/signup' component={ SessionFormContainer } />
      <Route path='/users/:userId' component={ UserProfileContainer } />
    </Router>
  </Provider>
);

export default Root;
