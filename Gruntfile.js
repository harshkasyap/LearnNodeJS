module.exports = function (grunt) {
  grunt.initConfig({
    nodemon: {
      dev: {
        script: 'testServer.js'
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.registerTask('default', ['nodemon'])
};