import React from "react";
import { useHistory } from "react-router-dom";

import { Wrapper, MenuItem, MenuName } from "./style";
import { WelcomeLogo } from "../../auth/style";
import { Icon } from "../icon";
import { useAuthDispatch } from "../../auth/auth-context";
import { logout } from "../../auth/auth-actions";

export const Menu = () => {
  const history = useHistory();
  const dispatch = useAuthDispatch();

  const navigateTo = (route) => {
    history.push(route);
  };

  return (
    <Wrapper>
      <WelcomeLogo>Travel express</WelcomeLogo>
      <MenuItem
        isActive={history.location.pathname === "/"}
        onClick={() => navigateTo("/")}
      >
        <Icon iconPrefix={"fas"} name={"fa-clock-rotate-left"} />
        <MenuName>History</MenuName>
      </MenuItem>
      <MenuItem
        isActive={history.location.pathname === "/profile"}
        onClick={() => navigateTo("/profile")}
      >
        <Icon iconPrefix={"fas"} name={"fa-user"} />
        <MenuName>Profile</MenuName>
      </MenuItem>
      <MenuItem
        isActive={history.location.pathname === "/settings"}
        onClick={() => navigateTo("/settings")}
      >
        <Icon iconPrefix={"fas"} name={"fa-cog"} />
        <MenuName>Settings</MenuName>
      </MenuItem>
      <MenuItem
        last
        onClick={() => {
          logout({ dispatch });
          history.push("/auth");
        }}
      >
        <Icon iconPrefix={"fas"} name={"fa-sign-out"} />
        <MenuName>Logout</MenuName>
      </MenuItem>
    </Wrapper>
  );
};
