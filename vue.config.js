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
  },
  devServer: {
    proxy: {
      '^/api': {
        port: 3000,
        target: 'http://localhost:3000', // 这是本地用node写的一个服务，用webpack-dev-server起的服务默认端口是8080
        changeOrigin: true // 加了这个属性，那后端收到的请求头中的host是目标地址 target
      }
    }
  }
}
