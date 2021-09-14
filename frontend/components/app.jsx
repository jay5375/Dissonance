import React from "react";
import { Route } from "react-router";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch } from "react-router";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./login/login_form_container";
import SignupFormContainer from "./login/signup_form_container";
import UserServersContainer from "./server/user_servers_container";

const App = () => (
  <div>
    <Route exact path="/" component={GreetingContainer} /> 
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <ProtectedRoute path="/servers/:serverId" component={UserServersContainer} />
    <ProtectedRoute path="/channels/@me" component={UserServersContainer} />
  </div>
);

export default App;