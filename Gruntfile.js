module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-mocha-istanbul');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-release');

  var src  = ['lib/**/*.js', 'index.js', 'bin/*'];
  var test = ['test/**/*.js'];

  grunt.initConfig({
    clean : {
      doc : 'doc',
      unit : 'coverage/unit'
    },
    eslint: {
      options: {
        config: '.eslintrc'
      },
      target: src
    },
    mocha_istanbul: {
      unit: {
        src: 'test/unit',
        options: {
          coverage: true,
          mask: '**/*.spec.js',
          root: './lib',
          reportFormats: ['lcov'],
          reporter : 'spec',
          coverageFolder : 'coverage/unit'
        }
      }
    },
    mochaTest: {
      options: {
        reporter: 'spec'
      },
      unit : {
        src: ['test/unit/**/*.spec.js']
      },
      integration : {
        src: ['test/integration/**/*.spec.js']
      }
    },
    jsdoc : {
      dist : {
        src: ['lib/**/*.js'],
        options: {
          destination: 'doc'
        }
      }
    },
    watch : {
      src : {
        files : src,
        tasks : ['test:fast']
      }
    },
    browserify: {
      files: {
        'build/chrome-mock-browser.js': ['./index.js']
      },
      options: {
        browserifyOptions: {
          standalone: 'chromeMock'
        }
      }
    }
  });

  grunt.registerTask('default', ['test', 'build']);
  grunt.registerTask('build', ['clean:doc','jsdoc', 'browserify']);
  grunt.registerTask('test', ['eslint', 'clean:unit', 'mocha_istanbul']);
  grunt.registerTask('test:integration', ['mochaTest']);
  grunt.registerTask('test:unit', ['mochaTest']);
};
