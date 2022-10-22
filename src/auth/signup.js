import React, { useEffect, useState } from "react";
import { FormWrapper, WelcomeLogo, AuthForm, ServerError } from "./style";
import { TextInput, Button, SelectInput } from "../components";
import { useAuthDispatch, useAuthState } from "./auth-context";
import { getCountriesList, singUpUser } from "./auth-actions";

const SignUp = ({ history }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    age: "",
    countryOfBirth: "",
    password: "",
    repeatPassword: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const dispatch = useAuthDispatch();
  const { countries, error } = useAuthState();

  useEffect(() => {
    getCountriesList({ dispatch });
  }, []);

  const countryOptions = countries.map((country) => {
    return {
      name: country.name.common,
      id: country.fifa,
      image: country.flags.svg,
    };
  });

  const onSubmit = (e) => {
    e.preventDefault();
    validate();
    if (
      !formErrors ||
      (!formErrors.firstName &&
        !formErrors.lastName &&
        !formErrors.age &&
        !formErrors.password &&
        !formErrors.repeatPassword &&
        !formErrors.email &&
        !formErrors.countryOfBirth)
    ) {
      singUpUser({
        dispatch,
        formValues,
        callback: () => {
          history.push("/auth/login");
        },
      });
    }
  };

  const validate = () => {
    let intermediateFormErrors = formErrors;

    if (!formValues.firstName) {
      intermediateFormErrors.firstName = "Required field!";
    } else {
      intermediateFormErrors.firstName = "";
    }

    if (!formValues.lastName) {
      intermediateFormErrors.lastName = "Required field!";
    } else {
      intermediateFormErrors.lastName = "";
    }

    if (!formValues.age) {
      intermediateFormErrors.age = "Required field!";
    } else {
      intermediateFormErrors.age = "";
    }

    if (!formValues.password) {
      intermediateFormErrors.password = "Required field!";
    } else {
      if (formValues.password.length < 6) {
        intermediateFormErrors.password = "Password is too short!";
      } else {
        intermediateFormErrors.password = "";
      }
    }

    if (!formValues.repeatPassword) {
      intermediateFormErrors.repeatPassword = "Required field!";
    } else {
      if (formValues.password !== formValues.repeatPassword) {
        intermediateFormErrors.repeatPassword = "Incorrect password";
      } else {
        intermediateFormErrors.repeatPassword = "";
      }
    }

    if (!formValues.email) {
      intermediateFormErrors.email = "Required field!";
    } else {
      intermediateFormErrors.email = "";
    }

    if (!formValues.countryOfBirth) {
      intermediateFormErrors.countryOfBirth = "Required field!";
    } else {
      intermediateFormErrors.countryOfBirth = "";
    }

    setFormErrors({ ...intermediateFormErrors });
  };

  const onFieldValueChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    let intermediateFormValues = formValues;
    intermediateFormValues[fieldName] = fieldValue;
    setFormValues({ ...intermediateFormValues });
  };
  console.log("!!!!!!errrrrrr", error);
  return (
    <FormWrapper>
      <WelcomeLogo>Travel express</WelcomeLogo>
      <AuthForm onSubmit={onSubmit}>
        <TextInput
          name={"firstName"}
          placeholder={"First Name"}
          onChange={onFieldValueChange}
          value={formValues.firstName}
          error={formErrors.firstName}
        />
        <TextInput
          name={"lastName"}
          placeholder={"Last Name"}
          onChange={onFieldValueChange}
          value={formValues.lastName}
          error={formErrors.lastName}
        />
        <TextInput
          type={"number"}
          name={"age"}
          placeholder={"Age"}
          onChange={onFieldValueChange}
          value={formValues.age}
          error={formErrors.age}
        />
        <SelectInput
          name={"countryOfBirth"}
          placeholder={"placeholder"}
          options={countryOptions}
          onChange={(value) => {
            setFormValues({
              ...formValues,
              countryOfBirth: value,
            });
          }}
          value={formValues.countryOfBirth}
          error={formErrors.countryOfBirth}
        />

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
        <TextInput
          type={"password"}
          name={"repeatPassword"}
          placeholder={"Repeat password"}
          onChange={onFieldValueChange}
          value={formValues.repeatPassword}
          error={formErrors.repeatPassword}
        />
        <ServerError>{error}</ServerError>
        <Button
          type={"submit"}
          customStyle={{
            marginLeft: "auto",
          }}
        >
          Sign up
        </Button>
      </AuthForm>
    </FormWrapper>
  );
};

export default SignUp;
