# 自己动手搭建vue+electron项目
```javascript
1. vue create my-project

2. npm install electron -D // 安装最新版本的electron

3. vue add electron-builder
```
因为如果直接执行第三行，会导致 electron 安装的不是最新版本，所以需要在执行前先在项目中安装好 electron 。

### 手动构建项目可能会遇到的问题
- vue3中的 templete 中会报错 “无法使用 JSX，除非提供了 “–jsx“ ” ，这时候，我们需要在 jsconfig.json 中加入以下配置：
```json

// jsconfig.json

{
  "compilerOptions": {
    ...     // outher options
    "jsx": "preserve"
  }
}

```
### 运行
```
npm run electron:serve
```

# 项目build与发布

1. 安装 electron-updater
```javascript
yarn add electron-updater
```
或者
```javascript
npm install electron-updater
```
2. vue.config.js 中加入配置 publish: \['github'\]：
```javascript
module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: ['github']
      }
    }
  }
}
```
3. background.js 中添加以下配置：

```javascript
...
+  import { autoUpdater } from "electron-updater"
...

if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
    if (!process.env.IS_TEST) win.webContents.openDevTools()
  } else {
    createProtocol('app')
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
+   autoUpdater.checkForUpdatesAndNotify()
  }
...
```
4. 获取 github 的 token （如果已经有了可以使用原来的）:
- Linux/MacOS:
```
export GH_TOKEN=TOKEN-GOES-HERE
```
- Windows:
```
set GH_TOKEN=TOKEN-GOES-HERE
```

5. 打包

用 Yarn:
```
yarn electron:build -p always
```
或者 NPM:
```
npm run electron:build -- -p always
```
6. 到 github 上发布应用
7. 安装您的应用程序，然后运行它。您还不会收到更新通知，因为这是最新版本。您必须通过增加 中的version字段来发布新版本package.json，然后重复前面的 4、5、6 步骤。现在，您的旧应用程序应该会给您一个更新通知


# 项目参考文档

[Vue : https://v3.cn.vuejs.org/](https://v3.cn.vuejs.org/)

[electron : https://www.electronjs.org](https://www.electronjs.org/)

[Vue CLI Plugin Electron Builder : https://nklayman.github.io/vue-cli-plugin-electron-builder/](https://nklayman.github.io/vue-cli-plugin-electron-builder/)