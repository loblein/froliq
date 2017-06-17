import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import App from './app';
import SessionFormContainer from './session_form/session_form_container';
import SessionForm from './session_form/session_form';
import UserProfileContainer from './user_profile/user_profile_container';
import SignUpContainer from './sign_up/sign_up_container';

const Root = ({ store }) => {

  const _redirectIfNotLoggedIn = (nextState, replace) => {
    if (store.getState().session.currentUser === null) {
      replace('/');
    };
  };

  return(
    <Provider store={ store }>
      <Router history={ hashHistory }>
        <Route path='/' component={ App } />
        <Route path='/login' component={ SessionFormContainer } />
        <Route path='/signup' component={ SignUpContainer } />
        <Route path='/users/:userId' component={ UserProfileContainer } onEnter={ _redirectIfNotLoggedIn }/>
      </Router>
    </Provider>
  );
};

export default Root;
