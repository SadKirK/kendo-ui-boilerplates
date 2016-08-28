var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: ['./src/app.js'],
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'appBundle.js'
	},
	module: {
		loaders: [
			{ test: /\.png$/, loader: "url-loader?limit=100000" },
			{ test: /\.jpg$/, loader: "file-loader" },
			{ test: /\.jpeg$/, loader: "file-loader" },
			{ test: /\.gif$/, loader: "file-loader" },
			{ test: /\.txt$/, loader: "raw-loader" },
			{ test: /\.json$/, loader: "json-loader" },
			{ test: /.(woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' },
			{ test: /\.css$/,loader: ExtractTextPlugin.extract("style-loader", "css-loader")
		}, {
			loader: 'babel-loader',
			exclude: /node_modules/,
			test: /\.js$/,
			query: {
				presets: ['es2015', 'react', 'stage-0'],
			},
		}]
	},
	plugins: [
		new ExtractTextPlugin("style.css", {
			allChunks: true
		})
	]
};
