import React, { Component } from 'react';
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
            loggedIn ? <Redirect to="/" /> : <Component {...props} />
        )} />
    )
}

export const AuthRoute = withRouter(connect(mSTP)(Auth))
 