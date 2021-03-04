const withOptimizedImages = require("next-optimized-images");

module.exports = withOptimizedImages({
  future: {
    webpack5: true,
  },
  optimizeImagesInDev: false,
  responsive: {
    adapter: require("responsive-loader/sharp"),
  },
});
