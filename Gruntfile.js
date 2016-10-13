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
                paths: {
                    libs: 'public/assets/js/',
                },
                external: ['ember', 'neat-dump'],
                index: {
                    app: 'app/index.html',
                    test: 'tests/index.html',
                },
                src: {
                    config: 'config/*.js',
                    code: 'app/**/*.js',
                    otherjs: 'mirage/**/*.js',
                    other: 'app/**/*',
                },
                media: {
                    other: ['public/crossdomain.xml', 'public/robots.txt']
                },
                test: {
                    unit: {
                        tests: 'tests/unit/**/*.js',
                        helpers: ['tests/test-helper.js', 'tests/helpers/**/*.js'],
                    },
                },
            }
        },
    });

    // Load all CoG tasks.
    grunt.loadTasks('node_modules/chronicles_of_grunt/tasks/');

    // Default task.
    grunt.registerTask('default', ['usage']);
};
