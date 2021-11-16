// CJS -> require + module.exports
const path = require('path');

// Config Webpack'а
module.exports = {
	target: 'web',	
	// entry: src/index.js
	output: {
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		],
	},
};