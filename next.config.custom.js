// eslint-disable-next-line @typescript-eslint/no-var-requires
const withSass = require('@zeit/next-sass');

const Fiber = require('fibers');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[local]',
    camelCase: 'only',
    importLoaders: 1,
    exportOnlyLocals: true,
  },
  sassLoaderOptions: {
    implementation: require('sass'),
    sassOptions: {
      fiber: Fiber,
      importLoaders: 1,
    },
  },
});
