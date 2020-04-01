import Constants from "expo-constants";

const PLATFORM = "app";

const ENV = {
  development: {
    ENV: "development",
    API_URL: "http://localhost:5000",
    BUGSNAG_API_KEY: "",
    PLATFORM
  },
  staging: {
    ENV: "staging",
    API_URL: "",
    BUGSNAG_API_KEY: "",
    PLATFORM
  },
  production: {
    ENV: "production",
    API_URL: "",
    BUGSNAG_API_KEY: "",
    PLATFORM
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
