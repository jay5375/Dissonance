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
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Switch>
      <ProtectedRoute exact path="/servers/explore" component={UserServersContainer} />
      <ProtectedRoute exact path="/servers/:serverId" component={UserServersContainer} />
      <ProtectedRoute exact path="/servers/:serverId/:channelId" component={UserServersContainer} />
      <ProtectedRoute exact path="/channels/@me/:dmChannelId" component={UserServersContainer} />
      <ProtectedRoute exact path="/channels/@me" component={UserServersContainer} />
    </Switch>
  </div>
);

export default App;