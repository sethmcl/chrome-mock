module.exports = function (grunt){
  require('load-grunt-tasks')(grunt);
  grunt.initConfig(require('require-dir')('./grunt/tasks'));

  grunt.registerTask('default', ['test', 'build']);
  grunt.registerTask('lint', ['eslint']);
  grunt.registerTask('build', ['clean:doc','jsdoc', 'browserify']);
  grunt.registerTask('test', ['eslint', 'clean:unit', 'mocha_istanbul']);
  grunt.registerTask('test:integration', ['mochaTest']);
  grunt.registerTask('test:unit', ['mochaTest']);
};
