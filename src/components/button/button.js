import React from "react";
import { Wrapper } from "./style.js";

const Button = ({ customStyle, children, onClick, secondary, type }) => {
  return (
    <Wrapper
      onClick={onClick}
      secondary={secondary}
      style={customStyle}
      type={type}
    >
      {children}
    </Wrapper>
  );
};

export default Button;
