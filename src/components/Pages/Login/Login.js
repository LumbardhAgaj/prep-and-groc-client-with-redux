import React from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import LoginPageHeader from './LoginPageHeader';
import LoginPageBody from './LoginPageBody';
import { isUserAuthenticated } from 'selectors';

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const isAuthenticated = useSelector(isUserAuthenticated);

  if (isAuthenticated) {
    return (
      <Redirect
        to={location.state ? location.state.from : history.goBack() || '/'}
      />
    );
  }

  return (
    <>
      <LoginPageHeader />
      <LoginPageBody />
    </>
  );
};

export default Login;
