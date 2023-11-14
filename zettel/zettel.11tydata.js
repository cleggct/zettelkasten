module.exports = {
    tags: "posts",
    layout: "layouts/zettel.njk",
    eleventyComputed: {
        title: data => data.page.filePathStem.split('/').pop()
    }
}
