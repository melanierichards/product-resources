module.exports = function(eleventyConfig) {

  // Don't try to build asset files, just transparently copy them through
  eleventyConfig.addPassthroughCopy('src/assets');

  // Customize input directory
  return {
    dir: {
      input: 'src'
    }
  }

};