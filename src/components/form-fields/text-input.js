import React from "react";
import { InputText, InputWrapper, FieldError } from "./styles";

const TextInput = ({ type, name, placeholder, value, onChange, error }) => {
  return (
    <InputWrapper>
      <InputText
        type={type || "text"}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        error={!!error}
      />
      {!!error && <FieldError>{error}</FieldError>}
    </InputWrapper>
  );
};

export default TextInput;
