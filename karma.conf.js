// Karma configuration
// Generated on Wed Jul 18 2018 10:12:56 GMT+0300 (EEST)
const puppeteer = require('puppeteer');
process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'karma-typescript'],

        // list of files / patterns to load in the browser
        files: [
            './src/**/*.ts',
            './tests/**/*.spec.ts',
        ],

        // list of files / patterns to exclude
        exclude: [
            "node_modules"
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            "src/**/*.ts": ["karma-typescript"],
            "tests/**/*.spec.ts": ["karma-typescript"],
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'karma-typescript'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['ChromeHeadless'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        customLaunchers: {
            ChromeHeadlessNoSandbox: {
                base: 'ChromeHeadless',
                flags: ['--no-sandbox']
            }
        },

        plugins: [
            'karma-jasmine',
            'karma-typescript',
            'karma-chrome-launcher',
        ],

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        karmaTypescriptConfig: {
            include: ['./src/**/*.ts', './tests/**/*.spec.ts'],
            tsconfig: './tsconfig.json',

            reports: {
                'html': 'coverage',
                'lcovonly': {
                    directory: './coverage',
                    filename: '../lcov.dat',
                },
            },
            coverageOptions: {
                threshold: {
                    global: {
                        statements: 60,
                        branches: 60,
                        functions: 60,
                        lines: 60,
                        excludes: [],
                    },
                    file: {
                        statements: 60,
                        branches: 60,
                        functions: 60,
                        lines: 60,
                        excludes: [],
                        overrides: {},
                    },
                },
            },
        },
    });
};
