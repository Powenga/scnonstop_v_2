import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import UserContext from '../../context/user-context';

export default function ProtectedRoute({ children }) {
  const user = useContext(UserContext);

  return (
    <Route
      render={() => (
        user.id ? (
          children
        ) : (
          <Redirect to="/login" />
        )
      )}
    />
  );
}

ProtectedRoute.propTypes = {
  children: PropTypes.element.isRequired,
};
