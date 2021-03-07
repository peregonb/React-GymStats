const { override, addWebpackPlugin, addLessLoader } = require("customize-cra");
const AntDesignThemePlugin = require("antd-theme-webpack-plugin");
const { getLessVars } = require("antd-theme-generator");
const path = require("path");
const fs = require("fs");

const themeVariables = getLessVars(
  path.join(__dirname, "./src/assets/styles/variables.less")
);
const darkVars = getLessVars("./node_modules/antd/lib/style/themes/dark.less");
const lightVars = getLessVars(
  "./node_modules/antd/lib/style/themes/compact.less"
);

fs.writeFileSync("./src/components/global/themes/dark.json", JSON.stringify(darkVars));
fs.writeFileSync("./src/components/global/themes/light.json", JSON.stringify(lightVars));
fs.writeFileSync("./src/components/global/themes/theme.json", JSON.stringify(themeVariables));

const options = {
  stylesDir: path.join(__dirname, "./src/assets/styles"),
  varFile: path.join(__dirname, "./src/assets/styles/variables.less"),
  themeVariables: Array.from(
    new Set([
      ...Object.keys(darkVars),
      ...Object.keys(lightVars),
      ...Object.keys(themeVariables),
    ])
  ),
  generateOnce: false,
};

module.exports = override(
  addWebpackPlugin(new AntDesignThemePlugin(options)),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
    },
  })
);
