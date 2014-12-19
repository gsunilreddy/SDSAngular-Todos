// Generated on 2014-11-19 using generator-angular 0.10.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    var pkg = require('./package.json');

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Time how long tasks take. Can help when optimizing build times
    require('time-grunt')(grunt);

    // Configurable paths for the application
    var appConfig = {
        app: require('./bower.json').appPath || 'app',
        dist: 'dist'
    };

    grunt.registerTask('watch:serve', function () {

        delete grunt.config.data.watch.jsTest;
        grunt.task.run(['watch']);
    });

    grunt.registerTask('readlist', function() {
        grunt.config.data.readlist = require('./.tmp/list.json');
    });

    // Define the configuration for all the tasks
    grunt.initConfig({

        // Project settings
        yeoman: appConfig,
        readlist: {},

        auto_install: {
            local: {}
        },

        // Watches files for changes and runs tasks based on the changed files
        watch: {
            bower: {
                files: ['bower.json'],
                tasks: ['wiredep']
            },
            js: {
                files: ['<%= yeoman.app %>/**/*.js'],
                tasks: ['jshint', 'jshint'],
                options: {
                    livereload: '<%= connect.options.livereload %>'
                }
            },
            jsTest: {
                files: ['<%= yeoman.app %>/**/*.js'],
                tasks: ['jshint', 'readlist', 'karma']
            },
            styles: {
                files: ['<%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['newer:copy:styles', 'autoprefixer']
            },
            less: {
                files: ['<%= yeoman.app %>/**/*.less'],
                tasks: ['less']
            },
            gruntfile: {
                files: ['Gruntfile.js']
            },
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= yeoman.app %>/**/*.html',
                    '.tmp/**/*.css',
                    '<%= yeoman.app %>/images/**/*'
                ]
            }
        },

        // The actual grunt server settings
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost',
                livereload: 35729
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    port: 9001,
                    middleware: function (connect) {
                        return [
                            connect.static('.tmp'),
                            connect().use(
                                '/bower_components',
                                connect.static('./bower_components')
                            ),
                            connect.static(appConfig.app)
                        ];
                    }
                }
            },
            dist: {
                options: {
                    open: true,
                    base: '<%= yeoman.dist %>'
                }
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= yeoman.app %>/**/*.js',
                    '!<%= yeoman.app %>/vendor/**/*.js'
                ]
            }
        },

        // compiles less
        less: {
            production: {
                options: {
                },
                files: {
                    '.tmp/app.css': '<%= yeoman.app %>/app.less'
                }
            }
        },

        // Empties folders to start fresh
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        '<%= yeoman.dist %>/{,*/}*',
                        '!<%= yeoman.dist %>/.git{,*/}*'
                    ]
                }]
            },
            server: '.tmp'
        },

        // Add vendor prefixed styles
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/',
                    src: '{,*/}*.css',
                    dest: '.tmp/'
                }]
            }
        },

        ngtemplates: {
            main: {
                options: {
                    module: pkg.name,
                    htmlmin:'<%= htmlmin.dist.options %>'
                },
                cwd: 'app',
                src: ['**/*.html','!index.html','!_SpecRunner.html', '!vendor/**'],
                dest: '.tmp/templates.js'
            }
        },
        concat: {
            main: {
                src: ['.tmp/concat/scripts/main.js', '.tmp/templates.js'],
                dest: '.tmp/concat/scripts/main.js'
            }
        },
        // Automatically inject Bower components into the app
        wiredep: {
            app: {
                src: ['<%= yeoman.app %>/index.html'],
                ignorePath:  /\.\.\//
            }
        },

        // Renames files for browser caching purposes
        filerev: {
            dist: {
                src: [
                    '<%= yeoman.dist %>/scripts/{,*/}*.js',
                    '<%= yeoman.dist %>/{,*/}*.css'
                    //'<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    //'<%= yeoman.dist %>/styles/fonts/*'
                ]
            }
        },

        // Reads HTML for usemin blocks to enable smart builds that automatically
        // concat, minify and revision files. Creates configurations in memory so
        // additional tasks can operate on them
        useminPrepare: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: '<%= yeoman.dist %>',
                flow: {
                    html: {
                        steps: {
                            js: ['concat', 'uglifyjs'],
                            css: ['cssmin']
                        },
                        post: {}
                    }
                }
            }
        },

        // Performs rewrites based on filerev and the useminPrepare configuration
        usemin: {
            html: ['<%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/images']
            }
        },

        useminlist: {
            html: '<%= yeoman.app %>/index.html',
            options: {
                dest: './.tmp/list.json',
                type: 'js',
                log: false
            }
        },

        // The following *-min tasks will produce minified files in the dist folder
        // By default, your `index.html`'s <!-- Usemin block --> will take care of
        // minification. These next options are pre-configured if you do not wish
        // to use the Usemin blocks.
        // cssmin: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/styles/main.css': [
        //         '.tmp/styles/{,*/}*.css'
        //       ]
        //     }
        //   }
        // },
        // uglify: {
        //   dist: {
        //     files: {
        //       '<%= yeoman.dist %>/scripts/scripts.js': [
        //         '<%= yeoman.dist %>/scripts/scripts.js'
        //       ]
        //     }
        //   }
        // },
        // concat: {
        //   dist: {}
        // },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    collapseBooleanAttributes: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= yeoman.dist %>',
                    src: ['*.html', 'views/{,*/}*.html'],
                    dest: '<%= yeoman.dist %>'
                }]
            }
        },

        // ng-annotate tries to make the code safe for minification automatically
        // by using the Angular long form for dependency injection.
        ngAnnotate: {
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/concat/scripts',
                    src: ['*.js', '!oldieshim.js'],
                    dest: '.tmp/concat/scripts'
                }]
            }
        },

        // Replace Google CDN references
        cdnify: {
            dist: {
                html: ['<%= yeoman.dist %>/*.html']
            }
        },

        // Copies remaining files to places other tasks can use
        copy: {
            dev: {
                dest: '<%= yeoman.app %>/service/constants/constants.js',
                src:  '<%= yeoman.app %>/service/constants/constants_dev.js'
            },
            build: {
                dest: '<%= yeoman.app %>/service/constants/constants.js',
                src:  '<%= yeoman.app %>/service/constants/constants_build.js'
            },
            uat: {
                dest: '<%= yeoman.app %>/service/constants/constants.js',
                src:  '<%= yeoman.app %>/service/constants/constants_uat.js'
            },
            prod: {
                dest: '<%= yeoman.app %>/service/constants/constants.js',
                src:  '<%= yeoman.app %>/service/constants/constants_prod.js'
            },
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%= yeoman.app %>',
                    dest: '<%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        '*.html',
                        'images/**/*'
                    ]
                }, {
                    expand: true,
                    cwd: '.tmp',
                    dest: '<%= yeoman.dist %>',
                    src: ['*.css']
                },{
                    expand: true,
                    cwd: '.tmp/images',
                    dest: '<%= yeoman.dist %>/images',
                    src: ['generated/*']
                }, {
                    expand: true,
                    cwd: 'bower_components/bootstrap/dist',
                    src: 'fonts/*',
                    dest: '<%= yeoman.dist %>'
                }, {
                    expand: true,
                    src: 'bower_components/font-awesome/fonts/*',
                    dest: '<%= yeoman.dist %>'
                },{
                    expand: true,
                    cwd: '<%= yeoman.app %>',
                    src: 'vendor/**/*',
                    dest: '<%= yeoman.dist %>'
                }]
            },
            styles: {
                expand: true,
                cwd: '<%= yeoman.app %>',
                dest: '.tmp/',
                src: '{,*/}*.css'
            }

        },

        // Run some tasks in parallel to speed up the build process
        //concurrent: {
        //    server: [
        //        'copy:styles'
        //    ],
        //    test: [
        //        'copy:styles'
        //    ],
        //    dist: [
        //        'copy:styles'
        //    ]
        //},
        //
        // Test settings
        karma: {
            options: {
                frameworks: ['jasmine'],
                files: [  //this files data is also updated in the watch handler, if updated change there too
                    '<%= readlist.vendor %>',
                    '<%= readlist.main %>',
                    '.tmp/templates.js',
                    'bower_components/angular-mocks/angular-mocks.js',
                    '<%= yeoman.app %>/**/*-spec.js'
                ],

                logLevel:'ERROR',
                reporters:['mocha'],
                autoWatch: false, //watching is handled by grunt-contrib-watch
                singleRun: true
            },
            all_tests: {
                browsers: ['PhantomJS']//,'Chrome','Firefox']
            }
        }
    });


    grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'jshint',
            'auto_install',
            'clean:server',
            'wiredep',
            'less',
            //'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'watch:serve'
        ]);
    });

    grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
        grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
        grunt.task.run(['serve:' + target]);
    });

    grunt.registerTask('test', [
        'jshint',
        'clean:server',
        'useminlist',
        'readlist',
        'ngtemplates',
        //'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma'
    ]);

    grunt.registerTask('testserve', [
        'jshint',
        'clean:server',
        'useminlist',
        'readlist',
        'ngtemplates',
        //'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma',
        'watch:jsTest'
    ]);

    grunt.registerTask('build', [
        'jshint',
        'clean:dist',
        'wiredep',
        'less',
        'useminPrepare',
        //'concurrent:dist',
        'autoprefixer',
        'ngtemplates',
        'concat:generated',
        'concat:main',
        'ngAnnotate',
        'copy:dist',
        'cdnify',
        'cssmin',
        'uglify',
        'filerev',
        'usemin',
        'htmlmin'
    ]);

    grunt.registerTask('default', [
        'newer:jshint',
        'test',
        'build'
    ]);
};
