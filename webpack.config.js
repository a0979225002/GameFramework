module.exports = {
  entry: './assets/script/Framework/Audio/AudioManager.ts',
  plugins: [],
  extensions: ['.ts', '.js'],
  module: {
	rules: [
	  {
		test: /\.ts$/,
		loader: 'ts-loader'
	  }
	]
  }
};
