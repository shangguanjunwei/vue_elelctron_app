# 自己动手构建vue+electron项目
```

1. vue create my-project
2. npm install electron -D // 安装最新版本的electron
3. vue add electron-builder

```
因为如果直接执行第三行，会导致 electron 安装的不是最新版本，所以需要在执行前先在项目中安装好 electron 。

### 手动构建项目可能会遇到的问题
- vue3中的 templete 中会报错 “无法使用 JSX，除非提供了 “–jsx“ ” ，这时候，我们需要在 jsconfig.json 中加入以下配置：
```

// jsconfig.json

{
  "compilerOptions": {
    ...     // outher options
    "jsx": "preserve"
  }
}

```

# 项目参考文档

[Vue : https://v3.cn.vuejs.org/](https://v3.cn.vuejs.org/)

[electron : https://www.electronjs.org](https://www.electronjs.org/)

[Vue CLI Plugin Electron Builder : https://nklayman.github.io/vue-cli-plugin-electron-builder/](https://nklayman.github.io/vue-cli-plugin-electron-builder/)