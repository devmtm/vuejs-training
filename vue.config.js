const webpack = require("webpack");

module.exports = {
  runtimeCompiler: true,
  outputDir: 'public',
  publicPath: 'public',
  lintOnSave: false,
  chainWebpack: config => {
    config.optimization.delete('splitChunks')
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
      })
    ]
  },
  pages: {
    site: {
      entry: 'resources/js/site/app.js',
      template: 'resources/views/site/index.html',
      filename: 'index.html'
    },
    admin: {
      entry: 'resources/js/admin/app.js',
      template: 'resources/views/admin/index.html',
      filename: 'admin.html',
    },
    seller: {
      entry: 'resources/js/seller/app.js',
      template: 'resources/views/seller/index.html',
      filename: 'seller.html'
    },
    customer: {
      entry: 'resources/js/customer/app.js',
      template: 'resources/views/customer/index.html',
      filename: 'customer.html'
    }
  }
}
