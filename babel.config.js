module.exports = function(api) {
  api.cache(true);

  const presets = "babel-preset-expo";

  const plugins = [
    [
      "module-resolver",
      {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx",
          ".android.js",
          ".android.tsx",
          ".ios.js",
          ".ios.tsx"
        ],
        root: ["./src"],
        // prettier-ignore
        alias: {
          "assets": "./src/assets",
          "components": "./src/components",
          "config": "./src/config",
          "containers": "./src/containers",
          "i18n": "./src/i18n",
          "redux": "./src/redux",
          "screens": "./src/screens",
          "services": "./src/services",
          "styles": "./src/styles",
          "types": "./src/types",
          "utils": "./src/utils"
        }
      }
    ]
  ];

  return {
    presets,
    plugins
  };
};
