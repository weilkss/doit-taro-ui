# Header 头部导航

基于 `taro` 的一个简单易用的头部导航组件

## 引入

```js
import { Header } from 'doit-taro-ui'
```

# 代码演示

小程序使用前请配置 `navigationStyle` 为 `custom` 自定义导航栏，可以全局配置,在 `src` 的 `app.config.js` 中

```js
export default {
  pages: ['pages/index/index', 'pages/home/index'],
  window: {
    navigationStyle: 'custom'
  }
}
```

也可以在某个页面配置，比如 `index.config.js`

```js
export default {
  navigationBarTitleText: '首页',
  navigationStyle: 'custom'
}
```

## 基础用法

```js
<Header>这是主页哎</Header>
```

可以通过 `backgroundColor` 配置背景色和 `color` 配置字体颜色,都支持 `rgba`、`hex`、`hsla` 类型

```js
<Header backgroundColor='#000' color='#fff'>
  首页
</Header>
```

还可以自定义返回的图标和回到主页的图标

```js
// 你本地的图标
import backIcon from 'image/back_icon.png'
import homeIcon from 'image/home_icon.png'
;<Header backIcon={backIcon} homeIcon={homeIcon}>
  首页
</Header>
```

**注意：**小程序中，由于需要判断是 `tabbar` 页面，没有返回主页的图标，所以 `tabbar` 页面必须传参 `hasTabbar`

```js
<Header hasTabbar>首页</Header>
```

# 属性

| 参数 | 说明 | 类型 | 默认值 | 
|------|------|------|------|
| color | 标题颜色  | `string` | `#333` | 
| backgroundColor | 背景颜色  | `string` | `#fff` | 
| backIcon | 返回的icon图标地址  | `string base64` | `null` | 
| homeIcon | 主页的icon图标地址  | `string base64` | `null` | 
| hasTabbar | 是否是tab页面，如果是tabbar页面请传参hasTabbar  | `boolean` | `false` | 
| children | 默认标题文案  | `string` | `''` | 