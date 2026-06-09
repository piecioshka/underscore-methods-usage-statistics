#!/usr/bin/env node

var args = process.argv.slice(2);

if (args.indexOf('-h') !== -1 || args.indexOf('--help') !== -1) {
    console.log([
        'Usage: underscore-methods-usage-statistics [directory]',
        '',
        '  Display statistics of Underscore.js methods used in a codebase.',
        '',
        'Arguments:',
        '  directory    Directory to scan recursively (default: current directory).',
        '',
        'Options:',
        '  -h, --help   Show this help and exit.',
        '',
        'Example:',
        '  underscore-methods-usage-statistics ./src'
    ].join('\n'));
    process.exit(0);
}

require('../src/analyzer').setup();
