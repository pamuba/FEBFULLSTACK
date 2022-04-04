module.exports = function(grunt){
    //configuration in grunt
    grunt.initConfig({
        concat:{
            js:{
                src:['src/js/*.js'],
                dest:'build/script.js'
            } 
        }
    });
    //load the plugins
    grunt.loadNpmTasks('grunt-contrib-concat')
    //Register the tasks
    grunt.registerTask('concat-js', ['concat:js'])

}