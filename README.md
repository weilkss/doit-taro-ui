# <center>Doit-Taro-UI 基于 Taro 的 React 版本组件库</center>

![](https://img.shields.io/github/repo-size/weilkss/doit-taro-ui)
![](https://img.shields.io/github/license/weilkss/doit-taro-ui)
![](https://img.shields.io/github/issues/weilkss/doit-taro-ui)

一款基于 `Taro` 框架开发的多端组件库

> 与传统的组件库不一样，`doit` 主要是针对业务功能和场景制定组件库，在平时开发中遇到的一些业务功能需要组件化进行整合，目前还在持续收集和开发中～

## 特点

- 基于`Taro`开发的`React`版本的`UI`组件
- 样式支持`less`
- 一套组件可以在 `微信小程序`，`支付宝小程序`，`百度小程序`，`H5` 多端适配运行（`ReactNative`端暂不支持）
- 提供友好的`API`，可灵活的使用组件

## 配置需要额外编译的源码模块

由于引用 `node_modules` 的模块，默认不会编译，所以需要额外给 `H5` 配置 `esnextModules，在` `taro` 项目的 `config/index.js` 中新增如下配置项：

```js
h5: {
  esnextModules: ['doit-taro-ui']
}
```

## 使用

```js
import { Skeleton } from 'doit-taro-ui'
```

## 按需引入

使用插件 `babel-plugin-import` 进行按需引入，在你的项目组安装依赖：

```shell
npm i babel-plugin-import -D
# or
yarn add babel-plugin-import -D
```

`.babelrc`配置

```js
{
  plugins: [
    [
      'import',
      {
        libraryName: 'doit-taro-ui',
        libraryDirectory: '',
        style: name => `${name}/index.less`,
        customName: name => `doit-taro-ui/lib/components/${name}`
      },
      'doit-taro-ui'
    ]
  ]
}
```

```js
import { Skeleton } from 'doit-taro-ui'

      ↓ ↓ ↓ ↓ ↓ ↓

var _skeleton = require('doit-taro-ui/dist/components/skeleton');
require('doit-taro-ui/dist/components/skeleton/index.less');

```

## 组件

- [骨架屏 Skeleton](./docs/skeleton.md)
- [头部导航 Header](./docs/header.md)

## 贡献

如果你在使用`Doit-Taro-UI`时遇到问题，或者有好的建议，欢迎给我们提`Issue`或 `Pull Request`。在开始之前，请阅读[贡献指南](./.github/CONTRIBUTING.md)

## License

MIT
