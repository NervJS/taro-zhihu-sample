const config = {
  projectName: 'taro_zhihu',
  date: '2018-6-12',
  designWidth: 750,
  sourceRoot: 'src',
  outputRoot: 'dist',
  babel: {
    sourceMap: true,
    presets: [
      'env'
    ],
    plugins: [
      'transform-class-properties',
      'transform-decorators-legacy',
      'transform-object-rest-spread',
      ['transform-runtime', {
        'helpers': false,
        'polyfill': false,
        'regenerator': true,
        'moduleName': 'babel-runtime'
      }]
    ]
  },
  defineConstants: {
  },
  weapp: {

  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
