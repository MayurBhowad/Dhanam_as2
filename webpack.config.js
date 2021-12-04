const path = require('path');
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'production',
    target: 'node',
    output: {
        path: path.resolve(__dirname, 'prod'),
        filename: 'server.bundle.js'
    },

    plugins: [
        new Dotenv(),
        // new webpack.EnvironmentPlugin(['NODE_ENV', 'MONGO_DB_URL', 'AUTH_EMAIL', 'AUTH_EMAIL_PASS']),
        // new webpack.DefinePlugin({
        //     "process.env": JSON.stringify(process.env)
        // })

    ]
};