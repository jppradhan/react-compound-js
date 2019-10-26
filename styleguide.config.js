const path = require("path");

module.exports = {
  propsParser: require("react-docgen-typescript").parse,
  webpackConfig: require("./config/webpack.config.dev"),
  require: [path.join(__dirname, "./src/app.css")],
  title: "React compound",
  theme: {
    fontSize: {
      base: 14,
      text: 14,
      small: 12,
      h1: 36,
      h2: 28,
      h3: 22,
      h4: 18,
      h5: 16,
      h6: 14
    },
    color: {
      link: "#00ADEF",
      linkHover: "#0586b7"
    }
  },
  styleguideDir: "docs",
  ignore: ["**/styles.tsx"]
};
