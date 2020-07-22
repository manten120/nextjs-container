// docker環境でもNext.jsの開発モードのホットリロードを有効にする
module.exports = {
  webpackDevMiddleware: config => {
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300,
    }
    return config
  },
}


