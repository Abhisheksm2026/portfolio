module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.ignoreWarnings = [
        /Failed to parse source map/,
        /@mediapipe\/tasks-vision/,
      ];
      return webpackConfig;
    },
  },
};