const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/app.js',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '../public')
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: 'styles.css'
		}),
	],
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.s?css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							minimize: true,
							sourceMap: true
						}
					},
					{
						loader: 'sass-loader',
						options: {
							minimize: true,
							sourceMap: true
						}
					}
				]
			},
		]
	}
};