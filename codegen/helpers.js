module.exports = {
  /**
   * @param {string} json
   * @returns {string}
   */
   cleanJSON: function (json) {
     return json
       .split('\n')
       .map(function (line) {
         return line.replace(/;$/, '');
       })
       .join('');
   },

  /**
   * @param {string} str
   * @returns {string} capitalized string
   */
   capitalize: function (str) {
     return str.replace(/./, function (m) { return m.toUpperCase(); });
   }
};

