const postcss = require("postcss");
const postcssOptions = require('../postcss.config')

module.exports = {
  stories: [],
  addons: [
    'storybook-css-modules-preset',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: postcss,
          postcssOptions,
        },
      },
    },
  ],
  // uncomment the property below if you want to apply some webpack config globally
  // webpackFinal: async (config, { configType }) => {
  //   // Make whatever fine-grained changes you need that should apply to all storybook configs

  //   // Return the altered config
  //   return config;
  // },
};
