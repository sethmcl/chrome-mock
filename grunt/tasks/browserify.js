module.exports = {
  browser: {
    src: ['./index.js'],
    dest: './browser.js',
    options: {
      bundleOptions: {
        standalone: 'chrome'
      }
    }
  }
};
