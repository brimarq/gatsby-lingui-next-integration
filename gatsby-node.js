const { locales } = require("./lingui.config");
const defaultLang = "en";

exports.onCreatePage = ({ page, actions }) => {
  const { createPage } = actions;

  // Leave the dev 404 page alone.
  if (page.path.match(/dev-404-page/)) {
    return;
  }

  // Add locale to page context and create new pages for 
  // non-default languages with language-specific paths.
  for (const lang of locales) {
    createPage({
      ...page,
      path: lang === defaultLang ? page.path : `/${lang}${page.path}`,
      context: {
        ...page.context,
        locale: lang,
      },
    })
  }

}
