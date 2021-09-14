import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, withRouter } from 'react-router';

const mSTP = state => ({
    loggedIn: Boolean(state.session.id)
})

const Auth = ({ loggedIn, path, component: Component}) => {
    return (
        <Route 
        path={path}
        render={props => (
            loggedIn ? <Redirect to="/channels/@me" /> : <Component {...props} />
        )} />
    )
}

const Protected = ({ loggedIn, path, component: Component }) => {
    return (
        <Route 
        path={path}
        render={props => (
            loggedIn ? <Component {...props} /> : <Redirect to="/" />
        )}
        />
    )
}

export const AuthRoute = withRouter(connect(mSTP)(Auth))
export const ProtectedRoute = withRouter(connect(mSTP)(Protected))
 