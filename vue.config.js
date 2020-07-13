const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  devServer: {
    // host: '192.168.43.152',
    host: 'localhost',
    port: '1024',
    open: true,
    proxy: {
      '/api': {
        // target: 'http://apikindergartending.babybus.com',//正式环境地址
        target: ' http://test.dingtalk.babybus.com',//内测环境地址 
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('./src'));
    return config;
  },
  publicPath: '/',
  assetsDir: 'static'
}
