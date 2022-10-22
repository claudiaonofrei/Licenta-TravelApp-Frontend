import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import { Menu } from "./components";

const AppRouter = () => {
  return (
    <div style={{ flex: 1, display: "flex" }}>
      <Menu />
      <div style={{ flex: 1 }}>
        <Switch>
          <Route
            render={() => (
              <div style={{ fontSize: 100, color: "black" }}>
                <Link to={"/"}>Home</Link>
              </div>
            )}
            path={"/"}
            exact={true}
          />
          <Route
            render={() => (
              <div style={{ fontSize: 100, color: "black" }}>
                <Link to={"/profile"}>Profile</Link>
              </div>
            )}
            path={"/profile"}
            exact={true}
          />
          <Route
            render={() => (
              <div style={{ fontSize: 100, color: "black" }}>
                <Link to={"/settings"}>Settings</Link>
              </div>
            )}
            path={"/settings"}
            exact={true}
          />
        </Switch>
      </div>
    </div>
  );
};

export default AppRouter;
