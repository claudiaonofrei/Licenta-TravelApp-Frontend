import React from "react";
import { Switch, Route } from "react-router-dom";
import { AuthWrapper, AuthImage } from "./style.js";
import WelcomePage from "./welcome";
import Login from "./login";
import Signup from "./signup";

const AuthRouter = () => {
  return (
    <AuthWrapper>
      <AuthImage />
      <Switch>
        <Route path={"/auth/login"} component={Login} />
        <Route path={"/auth/signup"} component={Signup} />
        <Route path={"/auth"} component={WelcomePage} />
      </Switch>
    </AuthWrapper>
  );
};

export default AuthRouter;
