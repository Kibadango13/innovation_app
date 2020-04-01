import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";

import { AppActions, AppState } from "redux/store.types";
import { buildUser } from "util/testUtils/builders/user.builder";
import { genBiasBoolean } from "util/testUtils/builders/common.builder";
import { User } from "types/user.types";
import { handleSessionExpiration, refreshLocalStorageAuth } from "util/session";

export const LOG_IN = "LOG_IN";
export const LOG_OUT = "LOG_OUT";

// Fetches the authToken and sets the user as logged in or logs hims out
export const logIn = (
  email: string,
  password: string,
  rememberme: boolean
) => async (dispatch: ThunkDispatch<any, any, AppActions>) => {
  try {
    const authToken = await new Promise<string>((resolve, reject) => {
      if (genBiasBoolean(1)) {
        resolve("FAKE_TOKEN");
      } else {
        reject(null);
      }
    });

    if (authToken) {
      dispatch(setLoggedIn(authToken, rememberme));
    } else {
      throw new Error("Failed to signin");
    }
  } catch (e) {
    console.error("Sign In falló, inténtelo nuevamente");
  }
};

// Checks whether the user is already loggedIn in the server and sets it as logged in locally
export const isLoggedIn = () => async (
  dispatch: ThunkDispatch<any, any, AppActions>,
  getState: () => AppState
) => {
  try {
    const auth = getState().Auth;
    // Check if auth token is stored in local storage
    let authToken = handleSessionExpiration();
    // if authToken in localStorage or redux, check if also signed in in the server
    if (authToken || auth.loggedIn) {
      authToken = await new Promise<string>((resolve, reject) => {
        if (genBiasBoolean(1)) {
          resolve("FAKE_TOKEN");
        } else {
          console.error("Sesión expiró");
          reject(null);
        }
      });
    }

    if (authToken) {
      dispatch(setLoggedIn(authToken));
    } else {
      throw new Error("Failed to signin");
    }
  } catch (e) {
    dispatch(logOut());
  }
};

// Fetches user data and sets the app as logged in
export const setLoggedIn = (authToken: string, save = false) => async (
  dispatch: ThunkDispatch<any, any, AppActions>
) => {
  try {
    // Set the auth token in localStorage
    refreshLocalStorageAuth(authToken, save);
    // Fetch user from the server
    const user = await new Promise<User>((resolve, reject) => {
      if (genBiasBoolean(1)) {
        resolve(buildUser());
      } else {
        console.error("Falló la búsqueda del usuario");
        reject(null);
      }
    });

    if (user) {
      dispatch({ type: LOG_IN, payload: { authToken, user } });
    } else {
      throw new Error("Failed to fetch user data");
    }
  } catch (e) {
    dispatch(logOut());
  }
};

// Logs the user out
export const logOut = () => (dispatch: Dispatch<AppActions>) => {
  const authTokenKey = process.env.REACT_APP_AUTH_TOKEN_KEY as string;
  localStorage.removeItem(authTokenKey);
  const authTokenExpiracyKey = process.env
    .REACT_APP_AUTH_EXPIRACY_TOKEN_KEY as string;
  localStorage.removeItem(authTokenExpiracyKey);
  dispatch({ type: LOG_OUT, payload: null });
};
