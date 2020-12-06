import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

function PrivateRoute({ component: Component, path, handler }) {
  const _renderComponent = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken[handler]) {
        return <Route component={Component} path={path} />;
      }
    }
    return <Redirect to="/sign-in" />
  }

  return _renderComponent();
}

export default PrivateRoute;