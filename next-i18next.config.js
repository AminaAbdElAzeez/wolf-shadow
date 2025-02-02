module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar"],
    defaultNS: "common",
  },
  localePath: typeof window === "undefined" 
    ? require("path").resolve("./public/locales") 
    : "/locales",
};
