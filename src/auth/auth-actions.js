import { API_URL } from "../shared";

export const GET_COUNTRIES = "get_countries";
export const GET_COUNTRIES_SUCCESSFUL = "get_countries_successful";
export const GET_COUNTRIES_FAILED = "get_countries_failed";

export const getCountriesList = ({ dispatch }) => {
  dispatch({ type: GET_COUNTRIES });

  fetch(`https://restcountries.com/v3.1/all`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        dispatch({
          type: GET_COUNTRIES_FAILED,
          payload: "FAILED",
        });
        throw new Error("Get countries failed");
      }
      return response.json();
    })
    .then((data) => {
      dispatch({
        type: GET_COUNTRIES_SUCCESSFUL,
        payload: data,
      });
    });
};

export const SIGNUP_USER = "signup_user";
export const SIGNUP_USER_SUCCESSFUL = "signup_user_successful";
export const SIGNUP_USER_FAILED = "signup_user_failed";

export const singUpUser = ({ dispatch, formValues, callback }) => {
  dispatch({ type: SIGNUP_USER });

  fetch(`${API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...formValues }),
  })
    .then(async (response) => {
      if (!response.ok) {
        const res = await response.json();
        console.log("text", res);
        dispatch({
          type: SIGNUP_USER_FAILED,
          payload: res.message,
        });
        throw new Error("Request failed");
      }
      return response.json();
    })
    .then((data) => {
      dispatch({
        type: SIGNUP_USER_SUCCESSFUL,
        payload: data,
      });
      callback();
    });
};

export const LOGIN = "login";
export const LOGIN_SUCCESSFUL = "login_successful";
export const LOGIN_FAILED = "login_failed";

export const login = async ({ dispatch, formValues }) => {
  dispatch({ type: LOGIN });
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...formValues }),
  });

  const res = await response.json();

  if (!response.ok) {
    dispatch({
      type: LOGIN_FAILED,
      payload: res.message,
    });
    throw new Error("Request failed");
  }
  dispatch({
    type: LOGIN_SUCCESSFUL,
    payload: res,
  });
};

export const CHECK_AUTHENTICATION = "check_authentication";
export const CHECK_AUTHENTICATION_SUCCESS = "check_authentication_success";
export const CHECK_AUTHENTICATION_FAIL = "check_authentication_fail";

export const checkAuthentication = async ({ dispatch }) => {
  dispatch({ type: CHECK_AUTHENTICATION });
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    dispatch({ type: CHECK_AUTHENTICATION_FAIL });
    return;
  }

  dispatch({ type: CHECK_AUTHENTICATION_SUCCESS });
};

export const LOGOUT = "logout";
export const logout = async ({ dispatch }) => {
  dispatch({ type: LOGOUT });
};
