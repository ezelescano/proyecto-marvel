import { Route, Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth0();

  return (
    <Route
      {...rest}
      element={isAuthenticated ? <Component /> : <Navigate to="/" replace />}
    />
  );
};

export default PrivateRoute;

