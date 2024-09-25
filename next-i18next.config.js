const path = require("path");

/**  @type { import("next-i18next").UserConfig} */
const UserConfig = {
  returnNull: false,
  i18n: {
    defaultLocale: "en",
    locales: ["fa", "en"],
  },
  localePath: path.resolve("./src/locales"),
  interpolation: {
    prefix: "{",
    suffix: "}",
  },
  localeStructure: "{lng}/{ns}",
  debug: false,
  reloadOnPrerender: process.env.NODE_ENV === "development",
};

module.exports = UserConfig;
