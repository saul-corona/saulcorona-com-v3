const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginTOC = require("eleventy-plugin-toc");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const sass = require("sass");
const path = require("path");
const fs = require("fs");

module.exports = async function (eleventyConfig) {
  const { EleventyHtmlBasePlugin } = await import("@11ty/eleventy");

  let options = markdownIt({
    html: true,
    breaks: true,
    linkify: true,
  });

  let markdownLib = markdownIt(options).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.linkInsideHeader({
      symbol: "",
      placement: "before",
    }),
    slugify: function (str) {
      return encodeURIComponent(
        String(str).trim().toLowerCase().replace(/\s+/g, "-")
      );
    },
  });

  eleventyConfig.setLibrary("md", markdownLib);

  eleventyConfig.addPlugin(syntaxHighlight);

  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

  // Process SCSS files
  eleventyConfig.addTemplateFormats("scss");

  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function (inputContent, inputPath) {
      // Skip files that start with an underscore (_) as they are partials
      let parsed = path.parse(inputPath);
      if (parsed.name.startsWith("_")) {
        return;
      }

      // Main SCSS file
      if (parsed.base === "main.scss") {
        let result = sass.compile(inputPath, {
          style: "compressed",
          loadPaths: [path.dirname(inputPath)],
        });

        return async () => {
          return result.css;
        };
      }
    },
  });

  // Still pass through other asset files
  eleventyConfig.addPassthroughCopy("src/assets/fonts");
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("src/assets/js");

  eleventyConfig.addPlugin(pluginTOC, {
    tags: ["h1", "h2", "h3", "h4", "h5", "h6"],
    wrapper: "aside",
    wrapperClass: "toc",
    ul: true,
  });

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // output image formats
    formats: ["webp", "jpeg"],

    // output image widths
    widths: ["auto"],

    // optional, attributes assigned on <img> nodes override these values
    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
      pictureAttributes: {},
    },
  });

  eleventyConfig.addTransform(
    "openLinksInNewTab",
    function (content, outputPath) {
      if (outputPath && outputPath.endsWith(".html")) {
        return content.replace(
          /<a (.*?)href="(http[s]?:\/\/.*?)"(.*?)>/g,
          '<a $1href="$2" target="_blank" rel="noopener noreferrer"$3>'
        );
      }
      return content;
    }
  );

  eleventyConfig.addCollection("post", function (collectionApi) {
    return collectionApi.getFilteredByGlob("./src/blog/*.md").sort((a, b) => {
      return b.date - a.date;
    });
  });

  // Add this collection for unique tags
  eleventyConfig.addCollection("tagList", function (collectionApi) {
    let tagSet = new Set();
    // Ensure you are using the correct collection name if it's not 'post'
    collectionApi.getFilteredByTag("post").forEach(item => {
      (item.data.tags || []).forEach(tag => tagSet.add(tag));
    });
    // Return a sorted array of tags, excluding 'post'
    return [...tagSet]
      .filter(tag => tag !== "post")
      .sort((a, b) => a.localeCompare(b));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    passthroughFileCopy: true,
  };
};
