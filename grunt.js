/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    watch: {
      files: ['_site/**/!(google*).html'],
      tasks: 'htmllint'
    },
    htmllint: {
        files: '_site/**/!(google*).html'
    }
  });

  grunt.loadNpmTasks('grunt-html');
  grunt.registerTask('default', 'htmllint');

};
