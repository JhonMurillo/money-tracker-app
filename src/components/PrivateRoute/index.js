import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuth, loginPath = '/login', ...rest }) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isAuth ?
                <Component {...props} />
                : <Redirect to={loginPath} />
        )} />
    );
};

export default PrivateRoute;