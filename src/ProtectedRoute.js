import React from 'react';
import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import { isLoggedInState } from './state';

const ProtectedRoute = ({ element }) => {
  const isLoggedInStateValue = useRecoilValue(isLoggedInState);

  if (!isLoggedInStateValue) {
    return <Navigate to="/log-in" />;
  }

  return element;
};

export default ProtectedRoute;
