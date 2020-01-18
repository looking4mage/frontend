import path from 'path';
import webpack from 'webpack';

const NODE_ENV =
  process.env.NODE_ENV === 'production' ? 'production' : 'development';

const config: webpack.Configuration = {
  devtool: 'source-map',

  entry: {
    main: ['./src/index.tsx'],
  },

  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },

  mode: NODE_ENV,

  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [path.resolve(__dirname, '../node_modules')],
              },
              sourceMap: true,
            },
          },
        ],
      },
      {
        enforce: 'pre',
        loader: 'source-map-loader',
        test: /\.js$/,
      },
    ],
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
};

export default config;
