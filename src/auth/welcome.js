import React from "react";
import { WelcomeWrapper, WelcomeLogo, WelcomeButtonsWrapper } from "./style.js";
import { Button } from "../components";

const WelcomePage = ({ history }) => {
  return (
    <WelcomeWrapper>
      <WelcomeLogo>TRAVEL EXPRESS</WelcomeLogo>
      <WelcomeButtonsWrapper>
        <Button
          customStyle={{ marginRight: 10 }}
          onClick={() => history.push("/auth/signup")}
        >
          Sign Up
        </Button>
        <Button secondary onClick={() => history.push("/auth/login")}>
          Login
        </Button>
      </WelcomeButtonsWrapper>
    </WelcomeWrapper>
  );
};

export default WelcomePage;
