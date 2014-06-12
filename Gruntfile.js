module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            release: ['dist/*', '.tmp/']
        },

        csslint: {
            strict: {
                options: {
                    import: false,
                    'box-sizing': false,
                    'unique-headings': false
                },
                src: ['css/*.css']
            }
        },

        jshint: {
            all: ['bower.json', 'Gruntfile.js', 'js/*.js', 'package.json']
        },

        // TODO Not setup yet.
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: ['js/*.js'],
                tasks: ['uglify', 'concat']
            },
            css: {
                files: ['*.css'],
                tasks: ['cssmin']
            }
        },

        copy: {
            html: {
                src: ['browserconfig.xml',
                      'favicon.ico',
                      'humans.txt',
                      'index.html',
                      'mideyelogin/*.htm'],
                dest: 'dist/'
            }
        },


        useminPrepare: {
            html: ['index.html', 'mideyelogin/*.htm'],
            options: {
                root: '.',
                dest: 'dist/'
            }
        },

        uglify: {
            options: {
                preserveComments: false,
                sourceMap: true,
                sourceMapIncludeSources: true
            }
        },

        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: '*.{png,jpg,jpeg,gif,svg}',
                    dest: 'dist/images/'
                }, {
                    expand: true,
                    cwd: 'images/favicons/',
                    src: '*.{png,jpg,jpeg,gif,svg}',
                    dest: 'dist/images/favicons/'
                }]
            }
        },

        filerev: {
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 10
            },
            favicons: {
                src: 'dist/images/favicons/*.{jpg,gif,png,svg}',
            },
            images: {
                src: 'dist/images/*.{jpg,gif,png,svg}',
            },
            js: {
                src: 'dist/js/*.js'
            },
            css: {
                src: 'dist/css/*.css'
            }
        },

        usemin: {
            html: ['dist/index.html', 'dist/mideyelogin/*.htm'],
            css: 'dist/css/*.css',
            options: {
                assetsDirs: ['dist/', 'dist/css/']
            }
        }
    });

    // 2. Här säger vi åt Grunt att ladda de uppgifter vi tänker köra
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-usemin');

    // 3. Här talar vi om för grunt vilka uppgifter som skall köras och i vilken ordning
    grunt.registerTask('default', [
        'clean',
        'jshint',
        'copy:html',
        'useminPrepare',
        'concat',
        'cssmin',
        'uglify',
        'imagemin',
        'filerev',
        'usemin'
    ]);
};
