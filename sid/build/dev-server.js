require('./check-versions')();

const config = require('../config');
if (!process.env.NODE_ENV) {
    process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV);
}

const opn = require('opn');
const chalk = require('chalk');
const path = require('path');
const express = require('express');
const webpack = require('webpack');
const proxyMiddleware = require('http-proxy-middleware');
const webpackConfig = require('./webpack.dev.conf');

// default port where dev server listens for incoming traffic
const port = process.env.PORT || config.dev.port;
// automatically open browser, if not set will be false
const autoOpenBrowser = !!config.dev.autoOpenBrowser;
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
const proxyTable = config.dev.proxyTable;

const app = express();
const compiler = webpack(webpackConfig);

const devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: true
});

const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: () => {}
});
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    });
});

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
    let options = proxyTable[context];
    if (typeof options === 'string') {
        options = { target: options };
    }
    app.use(proxyMiddleware(options.filter || context, options));
});

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')());

// serve webpack bundle output
app.use(devMiddleware);

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);

// serve pure static assets
const staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory);
app.use(staticPath, express.static('./static'));

const uri = 'http://localhost:' + port;
const ip = 'http://' + require('internal-ip').v4() + ':' + port;

devMiddleware.waitUntilValid(function () {
    console.log(chalk.cyan('- Local: ' + uri + '\n'));
    console.log(chalk.cyan('- On your Network: ' + ip + '\n'));
});

module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err);
        return;
    }

    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
        opn(uri)
    };
});
