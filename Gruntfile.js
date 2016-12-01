module.exports = function(grunt) {
    /*
    * This is the initial project configuration showing default values.
    * Feel free to clean it up. Only required values are name and title.
    * Probably few source code file definitions are needed as well.
    */
    grunt.initConfig({
        cog: {
            options: {
                name: 'eatzcalc',
                title: 'EatzCalc',
                options: {
                },
                external: ['neat-dump', 'angular2'],
                index: {
                    app: 'app/index.html',
                },
                src: {
                    code: '**/*.ts',
                },
            }
        },
    });

    // Load all CoG tasks.
    grunt.loadTasks('node_modules/chronicles_of_grunt/tasks/');

    // Default task.
    grunt.registerTask('default', ['usage']);
};
