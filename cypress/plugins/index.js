import { startDevServer } from '@cypress/webpack-dev-server';
import webpackConfig from '../../webpack.config';

module.exports = (on, config) => {
  on('dev-server:start', (options) =>
    startDevServer({ options, webpackConfig })
  );
  return config;
};