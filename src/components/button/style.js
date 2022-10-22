import styled from "styled-components";
import { colors } from "../../shared";

export const Wrapper = styled.button`
  width: auto;
  border-radius: 10px;
  padding: 15px 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.white};
  font-weight: bold;
  font-size: 18px;
  background-color: ${colors.primary};
  border: 2px solid ${colors.primary};
  cursor: pointer;
  :hover {
    background-color: ${colors.transparent};
    color: ${colors.primary};
  }

  ${({ secondary }) =>
    secondary &&
    `
    background-color: ${colors.secondary};
    border: 2px solid ${colors.secondary};
    :hover {
      background-color: ${colors.transparent};
      color: ${colors.secondary};
    }
  `}
`;
