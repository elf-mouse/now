const balm = require('balm');
const path = require('path');

// Documentation - http://balmjs.com/docs/v2/config/
// 中文文档 - https://balmjs.com/docs/v2/zh/config/
balm.config = {
  roots: {
    source: 'app'
  },
  styles: {
    extname: 'css' // Default use PostCSS
  },
  scripts: {
    entry: './app/scripts/index.js',
    loaders: [
      {
        test: /zepto\.js/,
        loader: 'exports-loader?window.Zepto!script-loader'
      }
    ],
    alias: {
      '@': path.resolve(__dirname, 'app/scripts'),
      zeptoSrc: 'zepto/src'
    }
  },
  assets: {
    cache: true
  }
  // More Config
};

balm.go(mix => {
  if (mix.env.isProd) {
    mix.remove('dist/rev-manifest.json');
    mix.zip();
  }
});
