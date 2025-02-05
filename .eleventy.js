module.exports = function (eleventyConfig) {
  // Copiar la carpeta de assets directamente al directorio de salida
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    // Directorios de entrada, salida, includes y datos
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    // Configurar el motor de plantillas a Nunjucks (puede ajustarse según se requiera)
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true
  };
};
