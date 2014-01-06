'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
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
        files: {
          'dist/d3-star-plot.min.js': ['src/d3-starPlot.js']
        }
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

