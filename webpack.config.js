import WebExtPlugin from 'web-ext-plugin';
import * as path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

export default {
    // No need for uglification etc.
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            { test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    entry: {
        'content': path.resolve(path.dirname(__filename), './src/content/index.ts'),
    },
    plugins: [
        new WebExtPlugin ({
            browserConsole: true,
            startUrl: ['https://www.esoui.com/downloads/info7-LibAddonMenu.html'],
            sourceDir: path.resolve(path.dirname(__filename), './'),
        }),
    ],
    output: {
        path: path.resolve(path.dirname(__filename), 'build'),
        filename: '[name].js',
    },
};
