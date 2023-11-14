const eleventyBacklinks = require("eleventy-plugin-backlinks");
const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventyBacklinks, {
		folder: '/zettel' // The folder with your notes
    });
    eleventyConfig.addFilter("parseLinks", function(content) {
        const wikilinkRegExp = /\[\[([^[\]]*)\]\]/g;

        return content.replace(wikilinkRegExp, '<a href="/zettel/$1/">[[$1]]</a>');
    });
    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
    eleventyConfig.setUseGitIgnore(false);
    eleventyConfig.ignores.add('README.md');
};
