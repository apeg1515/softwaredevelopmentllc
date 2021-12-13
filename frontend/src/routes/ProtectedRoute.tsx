import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export type ProtectedRouteProps = {
  isAuthenticated: boolean;
  authenticationPath: string;
} & RouteProps;

export const ProtectedRoute : React.FC<ProtectedRouteProps> = ({ isAuthenticated, authenticationPath, ...routeProps }) => {
    if(isAuthenticated)
        return <Route {...routeProps} />;
    else
        return <Redirect to="/" />;
};
