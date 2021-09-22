import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, isAuth, mainPath = '/dashboard', restricted, ...rest }) => {
    return (
        // restricted = false meaning public route
        // restricted = true meaning restricted route
        <Route {...rest} render={props => (
            isAuth && restricted ?
                <Redirect to={mainPath} />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;