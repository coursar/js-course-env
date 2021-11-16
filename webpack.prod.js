const webpackMerge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = webpackMerge.merge(common, {
	mode: 'production',
	// TODO: more customization
});
