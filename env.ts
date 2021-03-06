import Constants from "expo-constants";

const PLATFORM = "app";

const ENV = {
  development: {
    ENV: "development",
    API_URL: "http://localhost:5000",
    BUGSNAG_API_KEY: "",
    PLATFORM,
    AUTH_TOKEN_KEY: "CHANGE_WITH_RANDOM_KEY",
    AUTH_EXPIRACY_TOKEN_KEY: "CHANGE_WITH_RANDOM_EXP_KEY"
  },
  staging: {
    ENV: "staging",
    API_URL: "",
    BUGSNAG_API_KEY: "",
    PLATFORM,
    AUTH_TOKEN_KEY: "CHANGE_WITH_RANDOM_KEY",
    AUTH_EXPIRACY_TOKEN_KEY: "CHANGE_WITH_RANDOM_EXP_KEY"
  },
  production: {
    ENV: "production",
    API_URL: "",
    BUGSNAG_API_KEY: "",
    PLATFORM,
    AUTH_TOKEN_KEY: "CHANGE_WITH_RANDOM_KEY",
    AUTH_EXPIRACY_TOKEN_KEY: "CHANGE_WITH_RANDOM_EXP_KEY"
  }
};

type Environment = typeof ENV["development"];

const getEnvVars = (env = ""): Environment => {
  if (env.indexOf("development") !== -1) return ENV.development;
  if (env.indexOf("staging") !== -1) return ENV.staging;
  if (env.indexOf("production") !== -1) return ENV.production;
  return ENV.development;
};

export default getEnvVars(Constants.manifest?.releaseChannel);
