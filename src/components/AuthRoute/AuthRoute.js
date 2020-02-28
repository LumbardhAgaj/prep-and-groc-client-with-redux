import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isUserAuthenticated } from 'selectors';

const AuthRoute = props => {
  const isAuthenticated = useSelector(isUserAuthenticated);
  const location = useLocation();
  return (
    <>
      {isAuthenticated ? (
        <Route {...props} />
      ) : (
        <Redirect to={{ pathname: '/login', state: { from: location } }} />
      )}
    </>
  );
};

export default AuthRoute;
