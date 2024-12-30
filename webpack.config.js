import path from 'path'
import process from 'process'
import Dotenv from 'dotenv-webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: './src/index.tsx',
  devtool: 'source-map',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              ['@babel/preset-react', { runtime: 'automatic' }],
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '@': path.resolve(process.cwd(), 'src'),
      '@features': path.resolve(process.cwd(), 'src/features'),
      '@pages': path.resolve(process.cwd(), 'src/pages'),
      '@store': path.resolve(process.cwd(), 'src/store'),
      '@shared': path.resolve(process.cwd(), 'src/shared'),
      '@components': path.resolve(process.cwd(), 'src/shared/components'),
      '@hooks': path.resolve(process.cwd(), 'src/shared/hooks'),
      '@mocks': path.resolve(process.cwd(), 'src/shared/mocks'),
      '@services': path.resolve(process.cwd(), 'src/shared/services'),
      '@utils': path.resolve(process.cwd(), 'src/shared/utils'),
    },
  },
  plugins: [
    new Dotenv(),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(process.cwd(), 'dist'),
    },
    compress: true,
    port: 9000,
    historyApiFallback: {
      index: '/index.html',
    },
  },
}