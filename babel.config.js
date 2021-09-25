module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // when this plugin is added, use expo r -c
    plugins: [
      [
        "module:react-native-dotenv",
        {
          moduleName: "@env",
          path: ".env",
        },
      ],
    ],
  };
};
