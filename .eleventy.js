module.exports = function(eleventyConfig) {

  // Don't try to build pages from these files
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('README.md');
  eleventyConfig.addPassthroughCopy('src/robots.txt');

  // Customize input directory
  return {
    dir: {
      input: 'src'
    }
  }

};