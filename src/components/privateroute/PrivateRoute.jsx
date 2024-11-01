import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  console.log("Vérification de isAuthenticated dans PrivateRoute:", isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  return children;
};

export default PrivateRoute;
