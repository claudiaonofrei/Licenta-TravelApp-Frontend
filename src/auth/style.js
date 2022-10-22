import styled from "styled-components";
import authWallpaper from "../assets/auth-wallpaper.jpg";
import { colors, fontSizes } from "../shared";

export const AuthWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`;

export const AuthImage = styled.div`
  background-image: url(${authWallpaper});
  width: 70vw;
  background-size: cover;
  background-position: bottom;
`;

export const WelcomeWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
`;

export const WelcomeLogo = styled.h1`
  font-size: 40px;
  font-weight: bold;
  color: purple;
`;

export const WelcomeButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;

export const FormWrapper = styled.div`
  align-self: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  align-items: center;
  flex: 1;
`;

export const AuthForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 0 20px;
`;

export const ServerError = styled.h1`
  color: ${colors.red};
  font-size: ${fontSizes.medium};
  margin-bottom: 10px;
`;
