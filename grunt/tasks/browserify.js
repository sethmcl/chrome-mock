module.exports = {
  browser: {
    src: ['./index.js'],
    dest: 'build/chrome-mock-browser.js',
    options: {
      bundleOptions: {
        standalone: 'chrome'
      }
    }
  }
};
