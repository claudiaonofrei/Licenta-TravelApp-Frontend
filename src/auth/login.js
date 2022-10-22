import React, { useState } from "react";
import { FormWrapper, WelcomeLogo, AuthForm, ServerError } from "./style";
import { TextInput, Button } from "../components";
import { useAuthDispatch, useAuthState } from "./auth-context";
import { login } from "./auth-actions";

const Login = ({ history }) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const dispatch = useAuthDispatch();
  const { error } = useAuthState();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      validate();
      if (!isFormValid()) {
        return;
      }
      await login({ dispatch, formValues });
      history.push("/");
    } catch (error) {
      console.error("errr", error);
    }
  };

  const onFieldValueChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    let intermediateFormValues = formValues;
    intermediateFormValues[fieldName] = fieldValue;
    setFormValues({ ...intermediateFormValues });
  };

  const isFormValid = () => {
    return !formErrors.email && !formErrors.password;
  };

  const validate = () => {
    let intermediateFormErrors = formErrors;

    if (!formValues.password) {
      intermediateFormErrors.password = "Required field!";
    } else {
      if (formValues.password.length < 6) {
        intermediateFormErrors.password = "Password is too short!";
      } else {
        intermediateFormErrors.password = "";
      }
    }

    if (!formValues.email) {
      intermediateFormErrors.email = "Required field!";
    } else {
      intermediateFormErrors.email = "";
    }

    setFormErrors({ ...intermediateFormErrors });
  };

  return (
    <FormWrapper>
      <WelcomeLogo>Travel express</WelcomeLogo>
      <AuthForm onSubmit={onSubmit}>
        <TextInput
          name={"email"}
          placeholder={"Email address"}
          onChange={onFieldValueChange}
          value={formValues.email}
          error={formErrors.email}
        />
        <TextInput
          type={"password"}
          name={"password"}
          placeholder={"Your password"}
          onChange={onFieldValueChange}
          value={formValues.password}
          error={formErrors.password}
        />
        <ServerError>{error}</ServerError>

        <Button
          type={"submit"}
          customStyle={{
            marginLeft: "auto",
          }}
        >
          Login
        </Button>
      </AuthForm>
    </FormWrapper>
  );
};

export default Login;
