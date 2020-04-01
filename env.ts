import Constants from "expo-constants";

const PLATFORM = "app";

const ENV = {
  development: {
    ENV: "development",
    API_URL: "http://localhost:5000",
    PLATFORM,
    AUTH_TOKEN_KEY: "CHANGE_AUTH_TOKEN_WITH_RANDOM_STRING",
    AUTH_EXPIRACY_TOKEN_KEY: "CHANGE_AUTH_EXPIRACY_WITH_RANDOM_STRING"
  },
  staging: {
    ENV: "staging",
    API_URL: "",
    PLATFORM,
    AUTH_TOKEN_KEY: "CHANGE_AUTH_TOKEN_WITH_RANDOM_STRING",
    AUTH_EXPIRACY_TOKEN_KEY: "CHANGE_AUTH_EXPIRACY_WITH_RANDOM_STRING"
  },
  production: {
    ENV: "production",
    API_URL: "",
    PLATFORM,
    AUTH_TOKEN_KEY: "CHANGE_AUTH_TOKEN_WITH_RANDOM_STRING",
    AUTH_EXPIRACY_TOKEN_KEY: "CHANGE_AUTH_EXPIRACY_WITH_RANDOM_STRING"
  }
};

type Environment = typeof ENV["development"];

const getEnvVars = (env = ""): Environment => {
  if (env.indexOf("development") !== -1) return ENV.development;
  if (env.indexOf("staging") !== -1) return ENV.staging;
  if (env.indexOf("production") !== -1) return ENV.production;
  return ENV.development;
};

export default getEnvVars(Constants.manifest.releaseChannel);
