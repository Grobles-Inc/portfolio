// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Grobles";
export const SITE_DESCRIPTION = (() => {
  const currentLocale = "es";
  if (currentLocale === "es") {
    return "Startup líder en desarrollo de software";
  } else {
    return "Startup leader in software development";
  }
})();

