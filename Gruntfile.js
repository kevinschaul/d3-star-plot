'use strict';

module.exports = function(grunt) {
  var pkg = grunt.file.readJSON('package.json');
  var distFile = 'dist/d3-star-plot-' + pkg.version + '.min.js';
  var files = {};
  files[distFile] = ['src/d3-starPlot.js'];

  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8000,
          base: './',
          keepalive: true
        },
      }
    },
    uglify: {
      dist: {
        files: files
      }
    },
    mochaTest: {
      test: {
        src: ['test/**/*.js']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('default', ['connect']);
  grunt.registerTask('test', ['mochaTest']);
};

