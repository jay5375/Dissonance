import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import { Route } from "react-router";
import LoginFormContainer from "./login/login_form_container";
import SignupFormContainer from "./login/signup_form_container";
import { AuthRoute } from "../util/route_util";
import { Switch } from "react-router";

const App = () => (
  <div>
    <Route exact path="/" component={GreetingContainer} /> 
    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);

export default App;