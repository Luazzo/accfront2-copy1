const miniCss = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
  outputDir: 'dist',
  css: {
    loaderOptions: {
      scss: {
        includePaths: [path.resolve(__dirname, 'node_modules')]
      }
    }
  },

  chainWebpack: config => {
   /* config.resolve.alias
        .set('@', path.resolve(__dirname, 'src'));*/

    const scssRule = config.module.rule('scss');

    scssRule.uses.clear();

    scssRule
        .test(/\.s[ac]ss$/)
        .use('miniCss')
        .loader('miniCss')
        .end()
        .use('css-loader')
        .loader('css-loader')
        .end()
        .use('postcss-loader')
        .loader('postcss-loader')
        .end()
        .use('sass-loader')
        .loader('sass-loader')
        .end();


    config
        .entry('main')
          .clear();
    config
        .entry('dash')
          .clear();


    config
        // Interact with entry points
        .entry('main')
        .add('src/assets/sass/now-ui-kit.scss')
        .end()
        .entry('dash')
        .add('src/assets/sass/dashboard/material-dashboard.scss')
        .end();


    config
        .plugin('miniCss')
        .use(miniCss, [{
          filename: "[name].css",
          chunkFilename: "[name].css"}]);


  },
  configureWebpack: config => {
    config.resolve = {
      alias: {
        "@": path.resolve(__dirname, './src')
      }
    };
    config.optimization = {
      splitChunks: {
          cacheGroups: {
            default: false,
            common: false,
            styles: {
              name: 'app',
              test: /\.(s?css|vue)$/, // chunks plugin has to be aware of all kind of files able to output css in order to put them together
              chunks: 'initial',
              minChunks: 1,
              enforce: true
            }
          }
        }
    };
  },

  pwa: {
    name: 'ACConseils',
    themeColor: '#f96332',
    msTileColor: '#2ca8ff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#f96332',
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'service-worker.js',
    },
  },
  lintOnSave: false,
};
