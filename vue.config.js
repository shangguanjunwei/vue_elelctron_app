const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  // lintOnSave: false,
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: "src/electron/background.js", // electron 入口文件地址，默认为 src/background.js
      preload: "src/electron/preload.js", // electron 预加载文件路径 ，这里配置完后 electron 入口文件中也必须配置一次
      builderOptions: {}, // 打包配置
      // outputDir: "sgjw-electron-app", // 打包输出文件夹名称，默认为 dist_electron
      removeElectronJunk: false,  // 清除终端中的垃圾输出
    }
  }
})
