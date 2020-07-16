module.exports = {
  catalogs: [
    {
      path: "src/locales/{locale}/messages",
      include: [
        "src/"
      ],
      exclude: [
        "**/node_modules/**"
      ]
    }
  ],
  extractBabelOptions: {
    presets: [
      "babel-preset-gatsby"
    ]
  },
  format: "po",
  locales: ["en", "es"],
  orderBy: "origin",
  sourceLocale: "en"
};