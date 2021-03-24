const CracoLessPlugin = require('craco-less');
const path = require("path");

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {'@primary-color': '#1cab9c'},
                        javascriptEnabled: true,
                    },
                },
            },
        }
    ],
    webpack: {
        alias: {
            '@redux': path.resolve(__dirname, "src/redux/")
        }
    }
};