const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('src'))
    config.module
      // 规则
      .rule('svg')
      // 忽略
      .exclude.add(resolve('src/svg'))
      // 结束
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      // 解析的文件
      .include.add(resolve('src/svg'))
      // 结束
      .end()
      // 新增了一个解析的loader
      .use('svg-sprite-loader')
      // 具体的loader
      .loader('svg-sprite-loader')
      // loader 的配置
      .options({
        symbolId: 'icon-[name]'
      })
      // 结束
      .end()
  }
}
