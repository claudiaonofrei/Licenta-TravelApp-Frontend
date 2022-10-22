import React, { createContext, useContext, useReducer } from "react";
import {
  GET_COUNTRIES,
  GET_COUNTRIES_SUCCESSFUL,
  GET_COUNTRIES_FAILED,
  SIGNUP_USER,
  SIGNUP_USER_SUCCESSFUL,
  SIGNUP_USER_FAILED,
  LOGIN,
  LOGIN_SUCCESSFUL,
  LOGIN_FAILED,
  CHECK_AUTHENTICATION,
  CHECK_AUTHENTICATION_SUCCESS,
  CHECK_AUTHENTICATION_FAIL,
  LOGOUT,
} from "./auth-actions";

const AuthStateContext = createContext(undefined);
const AuthDispatchContext = createContext(undefined);

const initialState = {
  countries: [],
  loading: false,
  error: null,
  authToken: "",
  refreshToken: "",
  authenticated: false,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case GET_COUNTRIES: {
      return {
        ...state,
        countries: [],
        loading: true,
      };
    }
    case GET_COUNTRIES_SUCCESSFUL: {
      return {
        ...state,
        countries: action.payload,
        loading: false,
      };
    }
    case GET_COUNTRIES_FAILED: {
      return {
        ...state,
        countries: [],
        loading: false,
      };
    }
    case SIGNUP_USER: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case SIGNUP_USER_SUCCESSFUL: {
      return {
        ...state,
        loading: false,
      };
    }
    case SIGNUP_USER_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case LOGIN: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case LOGIN_SUCCESSFUL: {
      localStorage.setItem("authToken", action.payload.authToken);
      localStorage.setItem("expiresIn", action.payload.expiresIn);
      return {
        ...state,
        loading: false,
        authToken: action.payload.authToken,
        refreshToken: action.payload.refreshToken,
        authenticated: true,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.payload,
        authenticated: false,
      };
    }
    case CHECK_AUTHENTICATION: {
      return {
        ...state,
      };
    }
    case CHECK_AUTHENTICATION_SUCCESS: {
      return {
        ...state,
        authenticated: true,
      };
    }
    case CHECK_AUTHENTICATION_FAIL: {
      return {
        ...state,
        authenticated: false,
      };
    }
    case LOGOUT: {
      localStorage.removeItem("authToken");
      localStorage.removeItem("expiresIn");
      return {
        ...state,
        authenticated: false,
      };
    }
    default: {
      return state;
    }
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

const useAuthState = () => {
  const context = useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState must be used within an AuthProvider");
  }
  return context;
};

const useAuthDispatch = () => {
  const context = useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuthState, useAuthDispatch };
