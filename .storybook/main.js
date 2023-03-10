const path = require("path");

module.exports = {
  stories: [
    "../src/stories/*.stories.mdx",
    "../src/stories/*.stories.@(ts|tsx)",
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config) => {
    config.resolve.modules = [path.resolve(__dirname, ".."), "node_modules", "styles"];

    config.resolve.alias["@public"] = path.resolve(__dirname, "../public/");
    config.resolve.alias["@src"] = path.resolve(__dirname, "../src/");
    config.resolve.alias["@utils"] = path.resolve(__dirname, "../src/utils/");
    config.resolve.alias["@components"] = path.resolve(__dirname, "../src/components");
    config.resolve.alias["@pages"] = path.resolve(__dirname, "../src/pages");
    config.resolve.alias["@hooks"] = path.resolve(__dirname, "../src/hooks");
    config.resolve.alias["@stores"] = path.resolve(__dirname, "../src/stores");
    config.resolve.alias["@styles"] = path.resolve(__dirname, "../src/styles");
    config.resolve.alias["@constants"] = path.resolve(__dirname, "../src/constants");
    config.resolve.alias["@api"] = path.resolve(__dirname, "../src/api");
    config.resolve.alias["@emotion/styled"] = path.resolve("node_modules/@emotion/styled");

    //next svg
    const fileLoaderRule = config.module.rules.find((rule) => rule.test && rule.test.test(".svg"));
    fileLoaderRule.exclude = /\.svg$/;

    config.module.rules.push({
      test: /\.svg$/,
      enforce: "pre",
      loader: require.resolve("@svgr/webpack"),
    });
    return config;
  },
};
