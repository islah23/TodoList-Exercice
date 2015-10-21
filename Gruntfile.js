'use strict';

module.exports = function (grunt) {

  // Define the configuration for all the tasks
  grunt.initConfig({

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost'
      },
      dist: {
        options: {
          open: true,
          base: 'app'
        }
      }
    },

   // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    return grunt.task.run(['connect:dist:keepalive']);

  });

  grunt.registerTask('test', [
    'karma'
  ]);

};
