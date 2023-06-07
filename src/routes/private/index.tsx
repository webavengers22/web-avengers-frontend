import { Navigate, Outlet } from 'react-router-dom';
import { RoutePath } from '../../constants';
import { IPrivateRoute } from './types';

const PrivateRoute = ({ auth }: IPrivateRoute) => {
  const isAuthenticated = sessionStorage.getItem('token');

  if (auth) {
    return !isAuthenticated ? <Navigate to={RoutePath.login} /> : <Outlet />;
  } else {
    return !isAuthenticated ? <Outlet /> : <Navigate to={RoutePath.home} />;
  }
};

export default PrivateRoute;
