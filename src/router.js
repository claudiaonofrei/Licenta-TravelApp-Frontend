import React, { useEffect } from "react";
import { Switch } from "react-router-dom";
import { AuthRouter } from "./auth";
import { useAuthState, useAuthDispatch } from "./auth/auth-context";
import AppRouter from "./AppRouter";
import { checkAuthentication } from "./auth/auth-actions";

const MainRouter = () => {
  const { authenticated } = useAuthState();
  const dispatch = useAuthDispatch();

  useEffect(() => {
    checkAuthentication({ dispatch });
  }, []);

  return <Switch>{authenticated ? <AppRouter /> : <AuthRouter />}</Switch>;
};

export default MainRouter;
