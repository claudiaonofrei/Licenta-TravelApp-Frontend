import styled from "styled-components";
import { colors, fontSizes } from "../../shared";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const InputText = styled.input`
  height: 40px;
  width: 100%;
  border: 0;
  border-bottom: 1px solid ${colors.grey};
  padding: 2px 3px;
  outline: none;
  font-family: "Sen";
  ::placeholder {
    color: ${colors.grey};
  }
  :focus {
    border-bottom: 1px solid ${colors.secondary};
    ::placeholder {
      color: ${colors.secondary};
    }
  }
  :not(:placeholder-shown) {
    border-bottom: 1px solid ${colors.secondary};
  }
  ${({ error }) =>
    error &&
    `
    border-bottom: 1px solid ${colors.red};
    ::placeholder {
      color: ${colors.red};
    }
  `}
`;

export const SelectInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const OptionsContainer = styled.div`
  width: 100%;
  height: auto;
  max-height: 300px;
  background-color: ${colors.white};
  border-radius: 10px;
  overflow: auto;
  position: absolute;
  top: 45px;
  box-shadow: 0px 5px 15px 4px #d8d8d8;
`;

export const Option = styled.div`
  width: 100%;
  height: 40px;
  padding: 0 15px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${colors.white};
  cursor: pointer;
  :hover {
    border-bottom: 1px solid ${colors.secondary};
    span {
      color: ${colors.secondary};
    }
  }
  ${({ selected }) =>
    selected &&
    `
    border-bottom: 1px solid ${colors.secondary};
    span {
      color: ${colors.secondary};
      font-weight:bold;
    }
  `}
`;

export const OptionName = styled.span`
  font-size: ${fontSizes.small};
  color: ${colors.grey};
`;

export const OptionImage = styled.img`
  width: 30px;
  height: 20px;
  margin-right: 10px;
`;

export const FieldError = styled.h4`
  font-size: ${fontSizes.small};
  color: ${colors.red};
  margin-top: 4px;
`;
