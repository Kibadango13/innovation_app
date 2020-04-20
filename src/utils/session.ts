import { AsyncStorage } from "react-native";
import moment from "moment";

import CONSTANTS from "config/constants";
import env from "../../env";

// Returns the authToken if it is found on AsyncStorage and it is not expired
export const handleSessionExpiration = async (): Promise<string | null> => {
  const authTokenKey = env.AUTH_TOKEN_KEY;
  const authToken = await AsyncStorage.getItem(authTokenKey);
  const authTokenExpiracyKey = env.AUTH_EXPIRACY_TOKEN_KEY;
  const authTokenExpiracy = await AsyncStorage.getItem(authTokenExpiracyKey);

  if (!authTokenExpiracy) {
    await cleanAsyncStorageAuth();
    return null;
  }

  const expired = moment().isAfter(moment(authTokenExpiracy), "seconds");

  if (expired) {
    await cleanAsyncStorageAuth();
    return null;
  }
  return authToken;
};

// Refresh expiration time on local storage
export const refreshAsyncStorageAuth = async (
  authToken: string,
  save: boolean
) => {
  const authTokenKey = env.AUTH_TOKEN_KEY;
  const oldToken = await AsyncStorage.getItem(authTokenKey);
  if (!oldToken && !save) {
    await cleanAsyncStorageAuth();
    return;
  }
  // Set the auth token in AsyncStorage
  await AsyncStorage.setItem(authTokenKey, authToken);
  // Set the auth token expiration date in AsyncStorage
  const authTokenExpiracyKey = env.AUTH_EXPIRACY_TOKEN_KEY;
  const defaultExpiration = CONSTANTS.AUTH_TOKEN_DEFAULT_EXPIRATION;
  const expiration = new Date(
    new Date().setSeconds(new Date().getSeconds() + defaultExpiration)
  ).toISOString();
  await AsyncStorage.setItem(authTokenExpiracyKey, expiration);
};

// Remove auth related variables from local storage
export const cleanAsyncStorageAuth = async () => {
  const authTokenKey = env.AUTH_TOKEN_KEY;
  const authTokenExpiracyKey = env.AUTH_EXPIRACY_TOKEN_KEY;
  await AsyncStorage.removeItem(authTokenKey);
  await AsyncStorage.removeItem(authTokenExpiracyKey);
};
