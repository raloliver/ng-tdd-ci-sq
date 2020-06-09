
module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine', '@angular-devkit/build-angular'],
        plugins: [
            require('karma-jasmine'),
            require('karma-chrome-launcher'),
            require('karma-jasmine-html-reporter'),
            require('karma-coverage-istanbul-reporter'),
            require('karma-mocha-reporter'),
            require('karma-jasmine-diff-reporter'),
            require('@angular-devkit/build-angular/plugins/karma'),
        ],
        client: {
            clearContext: false
        },
        coverageIstanbulReporter: {
            dir: require('path').join(__dirname, './coverage/ng8'),
            reports: ['html', 'lcovonly', 'text-summary'],
            fixWebpackSourcePaths: true
        },
        jasmineDiffReporter: {
            color: {
                expectedBg: 'bgRed',
                expectedWhitespaceBg: 'bgRed',
                expectedFg: 'white',

                actualBg: 'bgGreen',
                actualWhitespaceBg: 'bgGreen',
                actualFg: 'white',

                warningBg: 'bgYellow',
                warningWhitespaceBg: 'bgYellow',
                warningFg: 'white',

                defaultBg: '',
                defaultFg: ''
            },
            legacy: true
        },
        mochaReporter: {
            output: 'minimal'
        },
        reporters: ['jasmine-diff', 'mocha'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        restartOnFileChange: true
    });
};
