const path = require('path')
module.exports = {
  devServer: {
    disableHostCheck: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@views': path.resolve(__dirname, 'src/views'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@plugins': path.resolve(__dirname, 'src/plugins'),
        '@mixins': path.resolve(__dirname, 'src/mixins')
      }
    }
  }
}
