module.exports = {
  plugins: {
    // autoprefixer: {
    //   browsers: ['Android >= 4.0', 'iOS >= 7']
    // },
    'postcss-pxtorem': {
      rootValue: 50, // 对标钉钉小程序
      propList: ['*']
    }
  }
}
