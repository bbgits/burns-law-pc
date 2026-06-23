// ~/next.config.js

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const { withContentlayer } = require('next-contentlayer');

module.exports = (phase) => {
    const isDevServer = phase === PHASE_DEVELOPMENT_SERVER;

    return withContentlayer({
        output: 'export',
        distDir: isDevServer ? '.next-dev' : '.next',
        compiler: {
            removeConsole: true,
        },
        images: {
            unoptimized: true,
        },
    });
};