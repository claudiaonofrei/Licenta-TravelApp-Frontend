import styled from "styled-components";
import { colors, fontSizes } from "../../shared";

export const Wrapper = styled.div`
  width: 20%;
  height: 100%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: ${colors.primary};
  display: flex;
  flex-direction: column;
`;
export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 20px 15px 20px 20px;
  color: ${colors.white};

  :first-of-type {
    margin-top: 20px;
  }
  :hover {
    background-color: ${colors.white};
    color: ${colors.primary}!important;
    svg {
      color: ${colors.primary}!important;
    }
  }

  ${({ last }) =>
    last &&
    `
  margin-top:auto;
  margin-bottom:20px;
  justify-content:flex-end;
  padding-right:15px;
`}

  ${({ isActive }) =>
    isActive &&
    `
    background-color: ${colors.white};
    color: ${colors.primary}!important;
    svg {
      color: ${colors.primary}!important;
    }
`}
`;

export const MenuIcon = styled.div``;

export const MenuName = styled.h1`
  font-size: ${fontSizes.large};
  font-weight: bold;
  margin-left: 10px;
`;
