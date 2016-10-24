var path = require('path');

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	//config make package.json dev simple
	devServer: {
		// publicPath: "/static/",
		stats: {
			colors: true
		},
		port: 8080,
		contentBase: 'build',
		inline: true
	},
	//extension 不用在require或是import的时候加文件后缀
	resolve: {
		extensions: ["", ".js", ".jsx", ".css", ".json"],
	},
	devtool: 'cheap-module-source-map',
	module: {
		loaders: [{
			test: /\.js$/,
			loader: 'babel-loader'
		}, {
			test: /\.css/,
			loader: 'style!css'
		}, {
			test: /\.less/,
			loader: 'style!css!less'
		}]
	}
};